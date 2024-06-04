import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { User } from '../../interface/interface'
import { auth, db } from '../firebase/firebase.config'
import { setDoc, doc, collection, query, where, getDoc, getDocs } from 'firebase/firestore'
import { fetchCompany } from './createCompanyAccount'

// create account
export async function registerUser(user: User): Promise<boolean>{
    try{
        const emailExist = await checkEmail(user.email)

        
        if(emailExist){
            throw new Error('Email already in use.')
        }

        const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password as string)
        
        await createUserInDB({
            uid:userCredential.user.uid, 
            email:user.email, 
            firstName:user.firstName, 
            lastName:user.lastName, 
            birthDate:user.birthDate, 
        })

        return true

    } catch (error){
        console.error(error)
        throw new Error('Error already in use.')
    }
}

// create user in DB
export async function createUserInDB(user: User){
    try{
        await setDoc(doc(db, 'users', user.uid), {
            uid: user.uid,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            birthDate: user.birthDate
        })


    } catch(error){
        console.error(error)
        throw new Error
    }
}

// verify is email is already in use
export async function checkEmail(email: string): Promise<boolean>{
    try{
        const userRef = collection(db, 'users');
        const q = query(userRef, where('email', '==', email))
    
        const querySnapshot = await getDocs(q)

        return !querySnapshot.empty

    } catch (error){
        console.error(error)
        throw new Error('Error checking email')
    }

}

// get user
export async function fetchUser(uid: string): Promise<User | null> {
    try{
        const docRef = doc(db, 'users', uid)
        const docSnap = await getDoc(docRef)

        if(docSnap.exists()){
            const userData = docSnap.data()
            const { uid, email, firstName, lastName, birthDate } = userData

            const user: User = {
                uid,
                email,
                firstName,
                lastName,
                birthDate
            };

            localStorage.setItem('loggedUser', JSON.stringify(uid))

            return user
        } else {
            return null
        }

    } catch(error){
        console.error(error)
        throw new Error('Error fetching user');
    }
}


// login user
export async function loginUser(user: User){
    try{
        const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password as string)
        let loggedInUser = await fetchUser(userCredential.user.uid)
        console.log(loggedInUser)

        if (!loggedInUser) {
            loggedInUser = await fetchCompany(userCredential.user.uid)
            console.log(loggedInUser)
        }


        if (!loggedInUser) {
            throw new Error('No user found with this email in both collections. Please check your email and try again.');
        }

        return loggedInUser
        
    }catch(error: any){
        if (error.code === 'auth/wrong-password') {
            throw new Error('Invalid email or password. Please try again.'); 
        } else if (error.code === 'auth/user-not-found') {
            throw new Error('No user found with this email. Please check your email and try again.'); 
        }else if(error.code === 'auth/invalid-credential'){
            throw new Error('Invalid email address or password. Please try again later.'); 
        } else {
            console.error(error)
            throw new Error('An error occurred during login. Please try again later.'); 
        }
    }
}


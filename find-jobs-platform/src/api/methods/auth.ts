import { createUserWithEmailAndPassword } from 'firebase/auth'
import { User } from '../../interface/interface'
import { auth, db } from '../firebase/firebase.config'
import { setDoc, doc, collection, query, where, getDoc, getDocs } from 'firebase/firestore'

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
        throw new Error('Email already in use')
    }

}

// get user
export async function fetchUser(uid: string): Promise<User> {
    try{
        const docRef = doc(db, 'users', uid)
        const docSnap = await getDoc(docRef)

        if(docSnap.exists()){
            const userData = docSnap.data()
            const { uid, email } = userData

            const user: User = {
                uid,
                email
            };

            localStorage.setItem('loggedUser', JSON.stringify(uid))

            return user
        } else {
            throw new Error('User doesn\'t exist');
        }

    } catch(error){
        console.error(error)
        throw new Error('Error fetching user');
    }
}
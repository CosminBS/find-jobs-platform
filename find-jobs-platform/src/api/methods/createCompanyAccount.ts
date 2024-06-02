import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { Company } from "../../interface/interface";
import { auth, db } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


// register company
export async function registerCompany(company: Company): Promise<boolean> {
    try{

        const emailExist = await checkCompanyEmail(company.email)

        if(emailExist){
            throw new Error('Email already in use.')
        }

        const companyCredential = await createUserWithEmailAndPassword(auth, company.email, company.password as string)

        await createCompanyInDB({
            uid: companyCredential.user.uid,
            companyName: company.companyName,
            VAT: company.VAT,
            tradeRegistration: company.tradeRegistration,
            socialAddress: company.socialAddress,
            city: company.city,
            email: company.email,
            password: company.password
        })

        return true

    } catch(error){
        console.error(error);
        throw new Error('Error during registration.')
    }
}

// fetchCompany

export async function fetchCompany(uid: string): Promise<Company> {
    try{
        const docRef = doc(db, 'companies', uid)
        const docSnap = await getDoc(docRef)

        if(docSnap.exists()){
            const userData = docSnap.data()
            const { uid, email } = userData

            const company: Company = {
                uid,
                email
            };

            localStorage.setItem('loggedUser', JSON.stringify(uid))

            return company
        } else {
            throw new Error('Company doesn\'t exist');
        }

    } catch(error){
        console.error(error)
        throw new Error('Error fetching user');
    }
}

// loginCompany
export async function loginCompanyUser(user: Company){
    try{
        const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password as string)
        const loggedInUser = await fetchCompany(userCredential.user.uid)
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


// create company in Db
export async function createCompanyInDB(company: Company){

    try{
        await setDoc(doc(db, 'companies', company.uid), {
            uid: company.uid,
            companyName: company.companyName,
            VAT: company.VAT,
            tradeRegistration: company.tradeRegistration,
            socialAddress: company.socialAddress,
            city: company.city,
            email: company.email,
        })

    } catch(error){
        console.error(error)
        throw new Error('Error creating db')
    }
}


// is exist company email
export async function checkCompanyEmail(email: string): Promise<boolean>{
    try{    

        const companyRef = collection(db, 'companies')
        const q = query(companyRef, where('email', '==', email))

        const querySnapshot = await getDocs(q)

        return !querySnapshot.empty
        
    } catch(error){
        console.error(error)
        throw new Error('Error checking email')
    }
}
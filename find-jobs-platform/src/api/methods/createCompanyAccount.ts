import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { Company } from "../../interface/interface";
import { auth, db } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";


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

// get company
export async function fetchCompany(uid: string): Promise<Company | null> {
    try {
        const docRef = doc(db, 'companies', uid)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            const companyData = docSnap.data()
            const { uid, email, companyName, VAT, tradeRegistration, socialAddress, city, country,  } = companyData

            const company: Company = {
                uid,
                email,
                companyName, 
                VAT, 
                tradeRegistration, 
                socialAddress, 
                city, 
                country
            }

            localStorage.setItem('loggedUser', JSON.stringify(uid))

            return company
        } else {
            return null
        }
    } catch (error) {
        console.error(error)
        throw new Error('Error fetching company')
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
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { User } from "../interface/interface";
import { fetchUser } from "../api/methods/auth";

interface UserDataContext {
    userDetails: User,
    setUserDetails: Dispatch<SetStateAction<User>>
    loading: boolean
    setLoading: Dispatch<SetStateAction<boolean>>
}

interface UserDataProvider {
    children: ReactNode
}

export const userDataContext = createContext<UserDataContext | undefined>(undefined) 

export const useUserDetails = (): UserDataContext => {
    const context = useContext(userDataContext)
    if(!context){
        throw new Error("useUserDetail must be used within a Provider");
    }

    return context
}

export const UserDataProvider = ({children}: UserDataProvider) => {
    const [userDetails, setUserDetails] = useState({} as User);
    const [loading, setLoading] = useState(false)

    const getUser = async() => {
        const loggedUser = JSON.parse(localStorage.getItem('loggedUser') as string) || ""

        if(loggedUser.length){
            const userData = await fetchUser(loggedUser)
            if(userData){
                setUserDetails(userData)
            }else {
                console.log('User not found')
            }
        }
    }

    useEffect(() => {
        getUser()
    },[])

    return (
        <userDataContext.Provider value={{userDetails, setUserDetails, loading, setLoading}}>
            {children}
        </userDataContext.Provider>
    )

}

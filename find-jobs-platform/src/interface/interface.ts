export interface User {
    uid: string
    firstName?: string
    lastName?: string
    email: string
    password?: string
    birthDate?: string
}

export interface Company{
    uid: string
    companyName?: string
    VAT?: number
    tradeRegistration?: string
    socialAddress?: string
    city?: string
    email: string
    password?: string
}
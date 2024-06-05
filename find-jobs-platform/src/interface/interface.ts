export interface User {
    uid: string
    firstName?: string
    lastName?: string
    email: string
    password?: string
    birthDate?: string
    role?: 'user'
}

export interface Company{
    uid: string
    companyName?: string
    VAT?: number
    tradeRegistration?: string
    socialAddress?: string
    city?: string
    country?: string
    email: string
    password?: string
    role?: 'company'
}
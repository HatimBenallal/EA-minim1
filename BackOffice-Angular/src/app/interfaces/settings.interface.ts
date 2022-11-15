import { User } from "./user.interface"


export interface Settings{
    navigate(arg0: string[]): unknown
    _id: string,
    user:User,
    darkMode: boolean,
    lenguage: string,
    letterSize: number
}
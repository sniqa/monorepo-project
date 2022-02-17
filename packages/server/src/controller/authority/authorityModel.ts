import { Document } from 'mongodb'
import MongoDb from '../../mongodb'

const USER_AUTHORITY_CONLLECTION = 'auths'



export interface Authority {
	isManager: boolean
}

// 用户权限
export interface UserAuth extends Authority {
	account: string
}

type UserAuthDocument = UserAuth & Document

export const UserModel = MongoDb.collection<UserAuthDocument>(USER_AUTHORITY_CONLLECTION)

import { Document } from 'mongodb'
import MongoDb from '../../mongodb'

const USERS_COLLECTION_NAME = 'users'

enum Gender {
	FEMALE = 'female',
	MALE = 'male',
}

export interface UserAccount {
	account: string
}
export interface UserAdditionalInfo {
	avatar?: string
	gender?: Gender
	nikeName?: string
}
export type UserInfo = UserAccount &
	UserAdditionalInfo & {
		password: string
	}

export type UserDocument = UserInfo & Document

export const UserModel = MongoDb.collection<UserDocument>(USERS_COLLECTION_NAME)

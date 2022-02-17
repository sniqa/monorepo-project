import jwt from 'jsonwebtoken'
import { UserAccount } from './userModel'

const secret: jwt.Secret = '1291767241'

export const createToken = (data: UserAccount) => {
	const res = jwt.sign(data, secret)

	return res
}

export const verifyToken = (token: string) => {
	return jwt.verify(token, secret) as UserAccount
}

export const decodeToken = (token: string) => {
	return jwt.decode(token)
}

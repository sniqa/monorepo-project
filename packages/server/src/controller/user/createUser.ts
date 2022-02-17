import { hasKeys } from '@monorepo/share'
import { MISSING_PARAMS, USER_REPEAT } from '../../error'
import { falseRes, trueRes } from '..'
import { UserInfo, UserModel } from './userModel'

// create new user

export const createUser = async (data: UserInfo) => {
	if (!hasKeys(data, 'account', 'password')) {
		return falseRes(MISSING_PARAMS)
	}

	const { account } = data

	const hasUser = await UserModel.findOne({ account })

	if (hasUser) {
		return falseRes(USER_REPEAT)
	}

	const newUser = await UserModel.insertOne(data)

	return trueRes(newUser)
}

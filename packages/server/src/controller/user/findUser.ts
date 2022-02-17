import { trueRes } from './../index'
import { hasKeys } from '@monorepo/share'
import { MISSING_PARAMS, UNKOWN_ERROR } from '../../error'
import { falseRes } from '..'
import { UserAccount, UserModel } from './userModel'

// find user from query
export const findUsers = async (query: UserAccount) => {
	if (!hasKeys(query, 'account')) {
		return falseRes(MISSING_PARAMS)
	}

	const users = await UserModel.find(query, {}).project({ password: 0 }).toArray()

	return users ? trueRes(users) : falseRes(UNKOWN_ERROR)
}

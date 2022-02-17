import { hasKeys } from '@monorepo/share'
import { MISSING_PARAMS, USER_LOGIN_PARAMS_ERROR, USER_NOT_EXIST } from '../../error'
import { falseRes, trueRes } from '..'
import { createToken } from './token'
import { UserInfo, UserModel } from './userModel'

export const login = async (data: UserInfo) => {
	if (!hasKeys(data, 'account', 'password')) {
		return falseRes(MISSING_PARAMS)
	}

	const { account, password } = data

	const hasUser = await UserModel.findOne({ account })

	if (!hasUser) {
		return falseRes(USER_NOT_EXIST)
	}

	if (password !== hasUser.password) {
		return falseRes(USER_LOGIN_PARAMS_ERROR)
	}

	const token = createToken({ account })

	const { password: dropThisAttr, ...res } = hasUser

	return trueRes({ token, ...res })
}

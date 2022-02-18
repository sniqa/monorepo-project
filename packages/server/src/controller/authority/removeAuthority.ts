import { MISSING_PARAMS } from 'src/error'
import { hasKeys } from './../../../../share/src/main'
import { falseRes } from './../index'
import { Authority } from './authorityModel'

interface MergeAuthorityRes {
	token: string
	newAuthList: Authority
}

export const removeAuthority = async (data: MergeAuthorityRes) => {
	if (!hasKeys(data, 'token', 'newAuthList')) {
		return falseRes(MISSING_PARAMS)
	}
}

const fetchRes = {
	$authority: {
		token: '',
		$mergeAuthority: {},
	},
}

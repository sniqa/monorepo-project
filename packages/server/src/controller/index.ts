import { ErrorRes } from '../error'

interface TrueRes<T> {
	success: true
	data: T
}
export const trueRes = <T>(data: T): TrueRes<T> => {
	return {
		success: true,
		data,
	}
}

interface FlaseRes extends ErrorRes {
	success: false
}
export const falseRes = (errorTip: ErrorRes): FlaseRes => {
	return {
		success: false,
		...errorTip,
	}
}

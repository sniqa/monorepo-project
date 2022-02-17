export const shareTest = () => console.log('this is share')

export const isObject = (data: any) => typeof data === 'object'

export const isArray = (data: any) => Array.isArray(data)

export const hasKeys = (data: any, ...keys: string[]) => {
	return isObject(data) && keys.every((key) => Reflect.has(data, key))
}

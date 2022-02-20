// export const ROOT = '/'

// export const HOME = 'home'
// export const ROOT_HOME = ROOT + HOME

// export const CATEGORY = 'category'
// export const ROOT_CATEGORY = ROOT + CATEGORY

// export const PERSON = 'person'
// export const ROOT_PERSON = ROOT + PERSON

// export const SETTINGS = 'settings'
// export const ROOT_SETTINGS = ROOT + SETTINGS

export enum RouterPath {
	ROOT = '/',
	EMPTY = '',

	HOME = 'home',
	ROOT_HOME = '/home',

	CATEGORY = 'category',
	ROOT_CATEGORY = '/category',

	PERSON = 'person',
	ROOT_PERSON = '/person',

	SETTINGS = 'settings',
	ROOT_SETTINGS = '/settings',

	LOGIN = 'login',
	ROOT_LOGIN = '/login',

	MANAGE = 'manage',
	ROOT_MANAGE = '/manage',
	USER_MANAGE = 'user',
	ROOT_USER_MANAGE = '/manage/user',
	AUTH_MANAGE = 'auth',
	ROOT_AUTH_MANAGE = '/manage/auth'

}

export const routerPathMap = {
	[RouterPath.ROOT || RouterPath.EMPTY]: RouterPath.ROOT,
	[RouterPath.HOME]: RouterPath.ROOT_HOME,
	[RouterPath.CATEGORY]: RouterPath.ROOT_CATEGORY,
	[RouterPath.PERSON]: RouterPath.ROOT_PERSON,
	[RouterPath.SETTINGS]: RouterPath.ROOT_SETTINGS,
	[RouterPath.MANAGE]: RouterPath.ROOT_MANAGE
}

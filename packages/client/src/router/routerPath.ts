// export const PATH_ROOT = '/'

// export const PATH_HOME = 'home'
// export const PATH_ROOT_HOME = PATH_ROOT + PATH_HOME

// export const PATH_CATEGORY = 'category'
// export const PATH_ROOT_CATEGORY = PATH_ROOT + PATH_CATEGORY

// export const PATH_PERSON = 'person'
// export const PATH_ROOT_PERSON = PATH_ROOT + PATH_PERSON

// export const PATH_SETTINGS = 'settings'
// export const PATH_ROOT_SETTINGS = PATH_ROOT + PATH_SETTINGS

export enum RouterPath {
	PATH_ROOT = '/',
	PATH_EMPTY = '',

	PATH_HOME = 'home',
	PATH_ROOT_HOME = '/home',

	PATH_CATEGORY = 'category',
	PATH_ROOT_CATEGORY = '/category',

	PATH_PERSON = 'person',
	PATH_ROOT_PERSON = '/person',

	PATH_SETTINGS = 'settings',
	PATH_ROOT_SETTINGS = '/settings',

	PATH_LOGIN = 'login',
	PAHT_ROOT_LOGIN = '/login',

	
}

export const routerPathMap = {
	[RouterPath.PATH_ROOT || RouterPath.PATH_EMPTY]: RouterPath.PATH_ROOT,
	[RouterPath.PATH_HOME]: RouterPath.PATH_ROOT_HOME,
	[RouterPath.PATH_CATEGORY]: RouterPath.PATH_ROOT_CATEGORY,
	[RouterPath.PATH_PERSON]: RouterPath.PATH_ROOT_PERSON,
	[RouterPath.PATH_SETTINGS]: RouterPath.PATH_ROOT_SETTINGS,
}

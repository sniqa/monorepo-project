import Router from 'koa-router'
import { ParameterizedContext } from 'koa'
import { IRouterParamContext } from 'koa-router'
import { dispatch, regeister } from './jsonRouter'
import { isObject } from '@monorepo/share'

import { falseRes } from './controller'
import { REQUIRED_JSON, UNKOWN_ERROR } from './error'

import * as user from './controller/user'

regeister({
	test: () => 'hello',
	...user,
})

const router = new Router()

// router.get('/gateway', (ctx) => gateway(ctx))
router.post('/gateway', async (ctx) => (ctx.response.body = await gateway(ctx).catch((err) => console.log(err))))

router.get('/test', (ctx) => (ctx.response.body = 'Hello, this is blog service'))

export const gateway = async (ctx: ParameterizedContext<any, IRouterParamContext<any, {}>, any>) => {
	const { body } = ctx.request

	if (isObject(body)) {
		return await dispatch(body).catch((err) => {
			console.log(err)
			return falseRes(UNKOWN_ERROR)
		})
	} else {
		return falseRes(REQUIRED_JSON)
	}
}

export default router

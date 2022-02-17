const controllerMap = new Map()

export const regeister = <T extends object>(controllers: T) => {
	Object.entries(controllers).forEach(([key, val]) => [controllerMap.set(key, val)])
}

export const dispatch = async (target: object) => {
	const res = Object.entries(target)

	await Promise.all(
		res.map(async ([ctlName, value]) => {
			if (!controllerMap.has(ctlName)) {
				return Reflect.set(target, ctlName, 'The controller not exist')
			}

			const ctl = controllerMap.get(ctlName)

			return Reflect.set(target, ctlName, await ctl(value))
		})
	)

	return target
}

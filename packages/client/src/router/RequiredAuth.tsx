import { Navigate, useLocation } from 'react-router-dom'
import { useAppSelector } from '../store'

interface RequiredAuthPorps {
	target: JSX.Element
	redirect: string
}

export default function RequiredAuth({ target, redirect }: RequiredAuthPorps) {
	const { isLogin } = useAppSelector((state) => state.user)

	let location = useLocation()

	if (!isLogin) {
		return <Navigate to={redirect} state={{ from: location }} replace />
	}

	return target
}

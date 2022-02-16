import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

interface RequiredAuthPorps {
	target: JSX.Element
	redirect: string
}

export default function RequiredAuth({ target, redirect }: RequiredAuthPorps) {
	const navigate = useCallback(useNavigate(), [])

	//   if () {
	//   navigate(redirect)
	// }

	return target
}

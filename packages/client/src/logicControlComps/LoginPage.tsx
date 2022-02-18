import { useCallback } from 'react'
import { Login } from '../module/user'
import { useNavigate } from 'react-router-dom'
import { RouterPath } from '../router'

export default function LoginPage() {
	const navigate = useCallback(useNavigate(), [])
	const onSubmit = useCallback(() => {
		navigate(RouterPath.PATH_ROOT_HOME)
	}, [])
	// const onSubmit = () => {}

	return <Login onSubmit={onSubmit} />
}

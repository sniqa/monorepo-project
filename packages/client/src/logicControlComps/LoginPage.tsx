import { useCallback } from 'react'
import { Login } from '../module/user'

export default function LoginPage() {
	const onSubmit = useCallback(() => {}, [])

	return <Login onSubmit={onSubmit}></Login>
}

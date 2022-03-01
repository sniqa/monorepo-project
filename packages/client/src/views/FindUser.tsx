import { TextField } from '@mui/material'
import { useEffect, useState } from 'react'

interface AddNewUserProps {
	onCancle?: () => void
	onFind?: (userInfo: object) => void
}

const FindUser = (props: AddNewUserProps) => {
	const { onCancle = () => {}, onFind = () => {} } = props

	const [userInfo, setUserInfo] = useState({
		account: '',
		nickname: '',
		name: '',
		gender: '',
	})

	useEffect(() => {
		onFind(userInfo)
	}, [userInfo])

	const inputOnChange = async (field: string, val: string) => {
		await setUserInfo({ ...userInfo, [field]: val })
	}

	return (
		<div className="bg-light-50 w-full flex flex-col p-4 border">
			<div className="h-4/5">
				<TextField
					fullWidth
					label="账号"
					size="small"
					sx={{ m: '0.4rem', width: '30%' }}
					onChange={(e) => inputOnChange('account', e.target.value)}
				/>
				<TextField
					fullWidth
					label="名称"
					size="small"
					sx={{ m: '0.4rem', width: '30%' }}
					onChange={(e) => inputOnChange('name', e.target.value)}
				/>
				<TextField
					fullWidth
					label="昵称"
					size="small"
					sx={{ m: '0.4rem', width: '30%' }}
					onChange={(e) => inputOnChange('nickname', e.target.value)}
				/>
				<TextField
					fullWidth
					label="性别"
					size="small"
					sx={{ m: '0.4rem', width: '30%' }}
					onChange={(e) => inputOnChange('gender', e.target.value)}
				/>
			</div>
		</div>
	)
}

export default FindUser

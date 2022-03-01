import { Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'

interface AddNewUserProps {
	onCancle?: () => void
	onAdd?: (userInfo: object) => void
}

const AddNewUser = (props: AddNewUserProps) => {
	const { onCancle = () => {}, onAdd = () => {} } = props

	const [userInfo, setUserInfo] = useState({
		account: '',
		nickname: '',
		name: '',
		gender: '',
	})

	const inputOnChange = (field: string, val: string) => {
		setUserInfo({ ...userInfo, [field]: val })
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

			<div className="flex justify-end m-4">
				<Button variant="contained" disableElevation onClick={() => onAdd(userInfo)}>{`确定`}</Button>
			</div>
		</div>
	)
}

export default AddNewUser

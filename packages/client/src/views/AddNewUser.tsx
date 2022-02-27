import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

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
		<div className="bg-light-50 w-24rem flex flex-col p-4">
			<Typography>{`添加新用户`}</Typography>

			<div className="h-4/5">
				<TextField
					fullWidth
					label="账号"
					size="small"
					sx={{ my: '0.5rem' }}
					onChange={(e) => inputOnChange('account', e.target.value)}
				/>
				<TextField
					fullWidth
					label="名称"
					size="small"
					sx={{ my: '0.5rem' }}
					onChange={(e) => inputOnChange('name', e.target.value)}
				/>
				<TextField
					fullWidth
					label="昵称"
					size="small"
					sx={{ my: '0.5rem' }}
					onChange={(e) => inputOnChange('nickname', e.target.value)}
				/>
				<TextField
					fullWidth
					label="性别"
					size="small"
					sx={{ my: '0.5rem' }}
					onChange={(e) => inputOnChange('gender', e.target.value)}
				/>
			</div>

			<div className="flex justify-end m-4">
				<Button variant="outlined" sx={{ mr: '1rem' }} onClick={onCancle}>{`取消`}</Button>
				<Button variant="contained" disableElevation onClick={() => onAdd(userInfo)}>{`确定`}</Button>
			</div>
		</div>
	)
}

export default AddNewUser

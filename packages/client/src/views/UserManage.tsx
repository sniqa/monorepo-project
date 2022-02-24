import { Button } from '@mui/material'
import { CreateTable } from '../module/table'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Fragment } from 'react'

const columes = [
	{ field: 'account', headerName: '账号' },
	{ field: 'name', headerName: '名称' },
	{ field: 'nickname', headerName: '昵称' },
	{ field: 'gender', headerName: '性别' },
	{
		headerName: '操作',
		editeAndDelete: true,
	},
]

const rows = [
	{ _id: 1, name: 'zwl', nickname: 'zlw', gender: 'male', account: 'zwl' },
	{ _id: 2, account: 'zwl', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 3, account: 'zwl', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 4, account: 'zwl', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 5, account: 'zwl', name: 'zwl', nickname: 'zlw', gender: 'male' },
]

export const UserManage = () => {
	return (
		<div className={`flex flex-col flex-grow border rounded-xl m-4 `}>
			<div className="h-3rem flex justify-center items-center">
				<Button>{`显示/隐藏字段`}</Button>
				<Button>{``}</Button>
				<Button>{``}</Button>
			</div>

			<CreateTable columes={columes} rows={rows} />
		</div>
	)
}

export default UserManage

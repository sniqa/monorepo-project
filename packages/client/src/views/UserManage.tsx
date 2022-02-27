import { Button, Modal } from '@mui/material'
import { useState } from 'react'
import { CreateTable } from '../module/table'
import { TableBodyRow } from '../module/table/CreateTableBody'
import AddNewUser from './AddNewUser'

const columes = [
	{ field: 'account', headerName: '账号' },
	{ field: 'name', headerName: '名称' },
	{ field: 'nickname', headerName: '昵称' },
	{ field: 'gender', headerName: '性别' },
	{
		headerName: '操作',
		editeAndDelete: true,
		notHidden: true,
	},
]

const testRows = [
	{ _id: 1, name: 'zwl1', nickname: 'zlw1', gender: 'male', account: 'zwl1' },
	{ _id: 2, account: 'zwl', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 3, account: 'zwl', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 4, account: 'zwl', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 5, account: 'zwl', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 6, account: 'zwl', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 7, account: 'zwl', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 8, account: 'zwl', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 9, account: 'zwl', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 10, account: 'zwl', name: 'zwl', nickname: 'zlw', gender: 'male' },

	{ _id: 11, account: 'zwl', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 12, account: 'zwl', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 13, account: 'zwl', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 14, account: 'zwl', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 15, account: 'zwl15', name: 'zwl15', nickname: 'zlw15', gender: 'male15' },
]

export const UserManage = () => {
	const [fieldsSwitch, setFiledsSwitch] = useState(false)

	const [rows, setRows] = useState(testRows)

	const showOrHidden = () => {
		setFiledsSwitch(!fieldsSwitch)
	}

	const onSave = (row: TableBodyRow) => {
		console.log(row)
	}

	const onDelete = (row: TableBodyRow) => {
		console.log(row)
	}

	const [openModal, setOpenMadal] = useState(false)

	// const addData = useCallback((val: object) => {
	// 	setOpenMadal(false)
	// 	const user = Object.assign({ _id: 44, ...val })
	// 	setRows((old) => {
	// 		const newusers = [user, ...old]
	// 		console.log(newusers)

	// 		return newusers
	// 	})
	// }, [])

	const addData = (val: object) => {
		setOpenMadal(false)
		const user = Object.assign({ _id: 44, ...val })
		setRows((old) => {
			console.log([user, ...old] === old)

			return [user, ...old]
		})
	}

	return (
		<div className={`flex flex-col flex-grow border rounded-xl m-4 `}>
			<div className="h-3rem flex justify-end items-center">
				<Button onClick={showOrHidden}>{`显示/隐藏字段`}</Button>
				<Button onClick={() => setOpenMadal(true)}>{`添加`}</Button>
			</div>

			<Modal
				open={openModal}
				onClose={() => setOpenMadal(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				className="flex justify-center items-center h-full"
			>
				<div className="">
					<AddNewUser onAdd={addData} onCancle={() => setOpenMadal(false)}></AddNewUser>
				</div>
			</Modal>

			<CreateTable columes={columes} rows={rows} fieldsSwitch={fieldsSwitch} onSave={onSave} onDelete={onDelete} />
		</div>
	)
}

export default UserManage

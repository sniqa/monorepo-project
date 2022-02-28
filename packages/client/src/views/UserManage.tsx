import { Button, InputBase, Modal, TextField, Typography } from '@mui/material'
import { useCallback, useState } from 'react'
import CircleIcon from '@mui/icons-material/Circle'
import { CreateTable, HideFields, TableHeaderCol } from '../module/table'
import { TableBodyRow } from '../module/table/CreateTableBody'
import AddNewUser from './AddNewUser'

const columes: Array<TableHeaderCol> = [
	{
		headerName: '状态',
		callback: (row: any) => <CircleIcon sx={{ fontSize: '1rem', color: 'green' }} className="shadow-xl" />,
	},
	{
		field: 'account',
		headerName: '账号',
		callback: (row: any) => <Typography>{`${Reflect.get(row, 'account') || ''}`}</Typography>,
		editCallback: (row: any) => (
			<TextField size="small" label="账号" variant="outlined" defaultValue={`${Reflect.get(row, 'account') || ''}`} />
		),
	},
	{
		field: 'name',
		headerName: '名称',
		callback: (row: any) => <Typography>{`${Reflect.get(row, 'name')}`}</Typography>,
	},
	{
		field: 'nickname',
		headerName: '昵称',
		callback: (row: any) => <Typography>{`${Reflect.get(row, 'nickname')}`}</Typography>,
	},
	{
		field: 'gender',
		headerName: '性别',
		callback: (row: any) => <Typography>{`${Reflect.get(row, 'gender')}`}</Typography>,
	},
	{
		headerName: '操作',
		editeAndDelete: true,
		notHidden: true,
		callback: () => <div />,
	},
]

const testRows = [
	{ _id: 1, name: 'zwl1', nickname: 'zlw1', account: 'zwl1' },
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

	const [cols, setCols] = useState(columes)

	const showOrHidden = () => {
		setFiledsSwitch(!fieldsSwitch)
	}

	const onSave = (row: TableBodyRow) => {
		console.log(row)
	}

	const onDelete = (row: TableBodyRow) => {
		setRows(rows.filter((curRow) => curRow !== row))
	}

	const [openModal, setOpenMadal] = useState(false)

	const addData = useCallback((val: object) => {
		setOpenMadal(false)
		setRows((old) => [{ _id: 22, ...val }, ...old])
	}, [])

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

			<Modal
				open={fieldsSwitch}
				onClose={() => setFiledsSwitch(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				className="flex justify-center items-center h-full"
			>
				<div className="">
					<HideFields
						columes={cols}
						onConfirm={() => setFiledsSwitch(false)}
						onChange={(columes) => setCols([...columes])}
					/>
				</div>
			</Modal>

			<CreateTable columes={cols} rows={rows} onSave={onSave} onDelete={onDelete} />
		</div>
	)
}

export default UserManage

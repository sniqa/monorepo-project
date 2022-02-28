import CircleIcon from '@mui/icons-material/Circle'
import { Button, Modal, TextField, Typography } from '@mui/material'
import { useCallback, useState } from 'react'
import CustomSelect, { StyledOption } from '../comps/CustomSelect'
import { CreateTable, HideFields, TableHeaderCol } from '../module/table'
import { TableBodyRow } from '../module/table/CreateTableBody'
import AddNewUser from './AddNewUser'
import FindUser from './FindUser'

const testRows = [
	{ _id: 1, name: 'zwl1', nickname: 'zlw1', account: 'zwl1' },
	{ _id: 2, account: 'zwl', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 4, account: 'zwl', name: 'zwl', nickname: 'zlw', gender: 'male' },
]

export const UserManage = () => {
	const [fieldsSwitch, setFiledsSwitch] = useState(false)

	const [rows, setRows] = useState(testRows)

	const tableCellOnChange = useCallback((row, val: string, key: string) => {
		rows.splice(
			rows.findIndex((curRow) => row === curRow),
			1,
			{ ...row, [key]: val }
		)
		setRows([...rows])
	}, [])

	const [cols, setCols] = useState<TableHeaderCol[]>([
		{
			headerName: '状态',
			callback: (row: any) => <CircleIcon sx={{ fontSize: '1rem', color: 'green' }} className="shadow-xl" />,
		},
		{
			field: 'account',
			headerName: '账号',
			callback: (row: any) => <Typography>{Reflect.get(row, 'account') || ''}</Typography>,
			editCallback: (row: any) => (
				<TextField
					size="small"
					label="账号"
					variant="outlined"
					defaultValue={`${Reflect.get(row, 'account') || ''}`}
					onChange={(e) => tableCellOnChange(row, e.target.value, 'account')}
				/>
			),
		},
		{
			field: 'name',
			headerName: '名称',
			callback: (row: any) => <Typography>{Reflect.get(row, 'name') || ''}</Typography>,
			editCallback: (row: any) => (
				<TextField
					size="small"
					label="名称"
					variant="outlined"
					defaultValue={`${Reflect.get(row, 'account') || ''}`}
					onChange={(e) => tableCellOnChange(row, e.target.value, 'name')}
				/>
			),
		},
		{
			field: 'nickname',
			headerName: '昵称',
			callback: (row: any) => <Typography>{Reflect.get(row, 'nickname') || ''}</Typography>,
			editCallback: (row: any) => (
				<TextField
					size="small"
					label="昵称"
					variant="outlined"
					defaultValue={`${Reflect.get(row, 'account') || ''}`}
					onChange={(e) => tableCellOnChange(row, e.target.value, 'nickname')}
				/>
			),
		},
		{
			field: 'gender',
			headerName: '性别',
			callback: (row: any) => <Typography>{Reflect.get(row, 'gender') || ''}</Typography>,
			editCallback: (row: any) => (
				<CustomSelect defaultValue={`male`} onChange={(e) => tableCellOnChange(row, e || '', 'gender')}>
					<StyledOption value={`male`}>{`male`}</StyledOption>
					<StyledOption value={'female'}>{'female'}</StyledOption>
				</CustomSelect>
			),
		},
		{
			headerName: '操作',
			callback: () => <div></div>,
			editAndDelete: true,
			notHidden: true,
		},
	])

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

	const [openFindModal, setOpenFindModal] = useState(false)

	const addData = useCallback((val: object) => {
		setOpenMadal(false)
		setRows((old) => [{ _id: 22, ...val }, ...old] as any)
	}, [])

	const onFind = useCallback((val: object) => {
		setOpenFindModal(false)
		setCols
	}, [])

	return (
		<div className={`flex flex-col flex-grow border rounded-xl m-4 `}>
			<div className="h-3rem flex justify-end items-center">
				<Button onClick={showOrHidden}>{`显示/隐藏字段`}</Button>
				<Button onClick={() => setOpenFindModal(true)}>{`查找用户`}</Button>
				<Button onClick={() => setOpenMadal(true)}>{`添加用户`}</Button>
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
				open={openFindModal}
				onClose={() => setOpenFindModal(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				className="flex justify-center items-center h-full"
			>
				<div className="">
					<FindUser onFind={onFind} onCancle={() => setOpenMadal(false)}></FindUser>
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

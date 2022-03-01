import CircleIcon from '@mui/icons-material/Circle'
import { Button, Modal, TextField, Typography } from '@mui/material'
import { useCallback, useEffect, useMemo, useState } from 'react'
import CustomSelect, { StyledOption } from '../comps/CustomSelect'
import { CreateTable, HideFields, TableHeaderCol } from '../module/table'
import { TableBodyRow } from '../module/table/CreateTableBody'
import AddNewUser from './AddNewUser'
import FindUser from './FindUser'
import TableCellChange from './TableCellChange'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'

const testRows = [
	{ _id: 1, name: 'zwl1', nickname: 'zlw1', account: 'zwl1' },
	{ _id: 2, account: 'zwl2', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 14, account: 'zwl3', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 24, account: 'zwl3', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 34, account: 'zwl3', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 44, account: 'zwl3', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 54, account: 'zwl3', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 64, account: 'zwl3', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 74, account: 'zwl3', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 84, account: 'zwl3', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 94, account: 'zwl3', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 114, account: 'zwl3', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 224, account: 'zwl3', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 334, account: 'zwl3', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 4454, account: 'zwl3', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 554, account: 'zwl3', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 664, account: 'zwl3', name: 'zwl', nickname: 'zlw', gender: 'male' },
]

// const Table = () => {
// 	const [fieldsSwitch, setFiledsSwitch] = useState(false)

// 	const [rows, setRows] = useState(testRows)

// 	const tableCellOnChange = (row, val: string, key: string) => {
// 		console.log(rows)
// 		rows.splice(
// 			rows.findIndex((curRow) => row === curRow),
// 			1,
// 			{ ...row, [key]: val }
// 		)
// 		setRows([...rows])
// 	}

// 	const [cols, setCols] = useState<TableHeaderCol[]>([
// 		{
// 			headerName: '状态',
// 			callback: (row: any) => <CircleIcon sx={{ fontSize: '1rem', color: 'green' }} className="shadow-xl" />,
// 		},
// 		{
// 			field: 'account',
// 			headerName: '账号',
// 			callback: (row: any) => <Typography>{Reflect.get(row, 'account') || ''}</Typography>,
// 			editCallback: (row: any) => (
// 				<TableCellChange
// 					rowKey={`account`}
// 					label="账号"
// 					row={row}
// 					onChange={(curRow) => tableCellOnChange(curRow, 's', 'account')}
// 				/>
// 			),
// 		},
// 		{
// 			field: 'name',
// 			headerName: '名称',
// 			callback: (row: any) => <Typography>{Reflect.get(row, 'name') || ''}</Typography>,
// 			editCallback: (row: any) => <TableCellChange rowKey={`name`} label="名称" row={row} />,
// 		},
// 		{
// 			field: 'nickname',
// 			headerName: '昵称',
// 			callback: (row: any) => <Typography>{Reflect.get(row, 'nickname') || ''}</Typography>,
// 			editCallback: (row: any) => <TableCellChange rowKey={`nickname`} label="昵称" row={row} />,
// 		},
// 		{
// 			field: 'gender',
// 			headerName: '性别',
// 			callback: (row: any) => <Typography>{Reflect.get(row, 'gender') || ''}</Typography>,
// 			editCallback: (row: any) => (
// 				<CustomSelect defaultValue={`male`} onChange={(e) => tableCellOnChange(row, e || '', 'gender')}>
// 					<StyledOption value={`male`}>{`male`}</StyledOption>
// 					<StyledOption value={'female'}>{'female'}</StyledOption>
// 				</CustomSelect>
// 			),
// 		},
// 		{
// 			headerName: '操作',
// 			callback: () => <div></div>,
// 			editAndDelete: true,
// 			notHidden: true,
// 		},
// 	])

// 	const showOrHidden = () => {
// 		console.log(rows)

// 		setFiledsSwitch(!fieldsSwitch)
// 	}

// 	const onSave = (row: TableBodyRow) => {
// 		console.log(row)
// 	}

// 	const onDelete = (row: TableBodyRow) => {
// 		const newRows = rows.splice(
// 			rows.findIndex((currow) => currow === row),
// 			1
// 		)
// 		console.log(newRows)
// 		console.log(rows)

// 		setRows((old) => {
// 			console.log(old)
// 			return [...old]
// 		})
// 	}

// 	const [openModal, setOpenMadal] = useState(false)

// 	const [openFindModal, setOpenFindModal] = useState(false)

// 	const addData = useCallback((val: object) => {
// 		setOpenMadal(false)
// 		rows.unshift({ _id: 22, ...val } as any)
// 		setRows([...rows] as any)
// 	}, [])

// 	const onFind = useCallback(
// 		(val: object) => {
// 			setOpenFindModal(false)
// 			const keyAndVal = Object.entries(val).filter(([key, val]) => val != '')

// 			const newRows = rows.filter((row) => {
// 				return keyAndVal.every(([key, val]) => Reflect.get(row, key) === val)
// 			})
// 			console.log(newRows)

// 			setRows([...newRows])
// 		},
// 		[rows]
// 	)

// 	return (
// 		<div className={`flex flex-col flex-grow border rounded-xl m-4 `}>
// 			<div className="h-3rem flex justify-end items-center">
// 				<Button onClick={showOrHidden}>{`显示/隐藏字段`}</Button>
// 				<Button onClick={() => setOpenFindModal(true)}>{`查找用户`}</Button>
// 				<Button onClick={() => setOpenMadal(true)}>{`添加用户`}</Button>
// 			</div>

// 			<Modal
// 				open={openModal}
// 				onClose={() => setOpenMadal(false)}
// 				aria-labelledby="modal-modal-title"
// 				aria-describedby="modal-modal-description"
// 				className="flex justify-center items-center h-full"
// 			>
// 				<div className="">
// 					<AddNewUser onAdd={addData} onCancle={() => setOpenMadal(false)}></AddNewUser>
// 				</div>
// 			</Modal>

// 			<Modal
// 				open={openFindModal}
// 				onClose={() => setOpenFindModal(false)}
// 				aria-labelledby="modal-modal-title"
// 				aria-describedby="modal-modal-description"
// 				className="flex justify-center items-center h-full"
// 			>
// 				<div className="">
// 					<FindUser onFind={onFind} onCancle={() => setOpenFindModal(false)}></FindUser>
// 				</div>
// 			</Modal>

// 			<Modal
// 				open={fieldsSwitch}
// 				onClose={() => setFiledsSwitch(false)}
// 				aria-labelledby="modal-modal-title"
// 				aria-describedby="modal-modal-description"
// 				className="flex justify-center items-center h-full"
// 			>
// 				<div className="">
// 					<HideFields
// 						columes={cols}
// 						onConfirm={() => setFiledsSwitch(false)}
// 						onChange={(columes) => setCols([...columes])}
// 					/>
// 				</div>
// 			</Modal>

// 			<CreateTable columes={cols} rows={rows} onSave={onSave} onDelete={onDelete} />
// 		</div>
// 	)
// }

export default function UserManage() {
	const [expanded, setExpanded] = useState<string | false>(false)

	const handleChange = (panel: string) => {
		expanded === panel ? setExpanded(false) : setExpanded(panel)
	}

	const [fieldsSwitch, setFiledsSwitch] = useState(false)

	const [rows, setRows] = useState(testRows)

	const tableCellOnChange = (row, val: string, key: string) => {
		console.log(rows)
		rows.splice(
			rows.findIndex((curRow) => row === curRow),
			1,
			{ ...row, [key]: val }
		)
		setRows([...rows])
	}

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
				<TableCellChange
					rowKey={`account`}
					label="账号"
					row={row}
					onChange={(curRow) => tableCellOnChange(curRow, 's', 'account')}
				/>
			),
		},
		{
			field: 'name',
			headerName: '名称',
			callback: (row: any) => <Typography>{Reflect.get(row, 'name') || ''}</Typography>,
			editCallback: (row: any) => <TableCellChange rowKey={`name`} label="名称" row={row} />,
		},
		{
			field: 'nickname',
			headerName: '昵称',
			callback: (row: any) => <Typography>{Reflect.get(row, 'nickname') || ''}</Typography>,
			editCallback: (row: any) => <TableCellChange rowKey={`nickname`} label="昵称" row={row} />,
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
		console.log(rows)

		setFiledsSwitch(!fieldsSwitch)
	}

	const onSave = (row: TableBodyRow) => {
		console.log(row)
	}

	const onDelete = (row: TableBodyRow) => {
		const newRows = rows.splice(
			rows.findIndex((currow) => currow === row),
			1
		)
		console.log(newRows)
		console.log(rows)

		setRows((old) => {
			console.log(old)
			return [...old]
		})
	}

	const [openModal, setOpenMadal] = useState(false)

	const [openFindModal, setOpenFindModal] = useState(false)

	const addData = useCallback((val: object) => {
		setOpenMadal(false)
		rows.unshift({ _id: 22, ...val } as any)
		setRows([...rows] as any)
	}, [])

	const onFind = useCallback(
		(val: object) => {
			setOpenFindModal(false)
			const keyAndVal = Object.entries(val).filter(([key, val]) => val != '')

			const newRows = rows.filter((row) => {
				return keyAndVal.every(([key, val]) => Reflect.get(row, key) === val)
			})
			console.log(newRows)

			setRows([...newRows])
		},
		[rows]
	)

	return (
		<div className={`w-full`}>
			<Accordion expanded={['field', 'find', 'add'].some((val) => val === expanded)} elevation={0}>
				<AccordionSummary aria-controls="panel1bh-content">
					<Button
						onClick={() => handleChange('field')}
						variant={`${expanded === 'field' ? 'contained' : 'text'}`}
						disableElevation
					>{`显示/隐藏字段`}</Button>
					<Button
						onClick={() => handleChange('find')}
						variant={`${expanded === 'find' ? 'contained' : 'text'}`}
						disableElevation
					>{`查找用户`}</Button>
					<Button
						onClick={() => handleChange('add')}
						variant={`${expanded === 'add' ? 'contained' : 'text'}`}
						disableElevation
					>{`新增`}</Button>
				</AccordionSummary>
				<AccordionDetails>
					{expanded === 'field' && (
						<HideFields
							columes={cols}
							onConfirm={() => setFiledsSwitch(false)}
							onChange={(columes) => setCols([...columes])}
						/>
					)}
					{expanded === 'find' && <FindUser onFind={onFind} onCancle={() => setOpenFindModal(false)}></FindUser>}
					{expanded === 'add' && <AddNewUser onAdd={addData} onCancle={() => setOpenMadal(false)}></AddNewUser>}
				</AccordionDetails>
			</Accordion>

			<CreateTable columes={cols} rows={rows} onSave={onSave} onDelete={onDelete} />
		</div>
	)
}

// export default UserManage

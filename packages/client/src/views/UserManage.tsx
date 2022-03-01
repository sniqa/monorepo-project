import CircleIcon from '@mui/icons-material/Circle'
import { Button, Typography } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import { useReducer, useState } from 'react'
import CustomSelect, { StyledOption } from '../comps/CustomSelect'
import { CreateTable, HideFields, TableBodyRow, TableHeaderCol } from '../module/table'
import AddNewUser from './AddNewUser'
import FindUser from './FindUser'
import TableCellChange from './TableCellChange'

const testRows = [
	{ _id: 1, name: 'zwl1', nickname: 'zlw1', account: 'zwl1' },
	{ _id: 2, account: 'zwl2', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 14, account: 'zwl3', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 24, account: 'zwl4', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 34, account: 'zwl5', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 414, account: 'zwl6', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 54, account: 'zwl7', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 64, account: 'zwl8', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 74, account: 'zwl9', name: 'zwl', nickname: 'zlw', gender: 'male' },
	{ _id: 84, account: 'zwl0', name: 'zwl', nickname: 'zlw', gender: 'male' },
]

interface ActionType {
	type: string
	payload: TableBodyRow
}
interface RowsState {
	rows: TableBodyRow[]
}

let temp: TableBodyRow[] = []

const rowsReducer = (state: TableBodyRow[], action: ActionType) => {
	switch (action.type) {
		case 'addToHead':
			return (temp = [action.payload, ...state])
		case 'addToTail':
			return (temp = [...state, action.payload])
		case 'delete':
			return (temp = state.filter((row) => row !== action.payload))
		case 'modify':
			return state
		case 'filter':
			const condition = Object.entries(action.payload).filter(([key, val]) => val != '')

			return condition.length === 0
				? temp
				: ((state = temp), state.filter((row) => condition.every(([key, val]) => Reflect.get(row, key) === val)))
		default:
			return state
	}
}

interface ShowFields {
	header: string
	isHidden: boolean
}

const showFields: Array<ShowFields> = [
	{ header: '状态', isHidden: true },
	{ header: '账号', isHidden: true },
	{ header: '名称', isHidden: true },
	{ header: '昵称', isHidden: true },
	{ header: '性别', isHidden: true },
	{ header: '操作', isHidden: true },
]

export default function UserManage() {
	const [expanded, setExpanded] = useState<string | false>(false)

	const handleChange = (panel: string) => {
		expanded === panel ? setExpanded(false) : setExpanded(panel)
	}

	const [fieldsSwitch, setFiledsSwitch] = useState(showFields)

	const [rows, dispatch] = useReducer(rowsReducer, testRows, () => (temp = testRows))

	const [cols, setCols] = useState<TableHeaderCol[]>([
		{
			header: '状态',
			callback: (row: any) => <CircleIcon sx={{ fontSize: '1rem', color: 'green' }} className="shadow-xl" />,
		},
		{
			field: 'account',
			header: '账号',
			callback: (row: any) => <Typography>{Reflect.get(row, 'account') || ''}</Typography>,
			editCallback: (row: any) => (
				<TableCellChange rowKey={`account`} label="账号" row={row} onChange={(curRow) => {}} />
			),
		},
		{
			field: 'name',
			header: '名称',
			callback: (row: any) => <Typography>{Reflect.get(row, 'name') || ''}</Typography>,
			editCallback: (row: any) => <TableCellChange rowKey={`name`} label="名称" row={row} />,
		},
		{
			field: 'nickname',
			header: '昵称',
			callback: (row: any) => <Typography>{Reflect.get(row, 'nickname') || ''}</Typography>,
			editCallback: (row: any) => <TableCellChange rowKey={`nickname`} label="昵称" row={row} />,
		},
		{
			field: 'gender',
			header: '性别',
			callback: (row: any) => <Typography>{Reflect.get(row, 'gender') || ''}</Typography>,
			editCallback: (row: any) => (
				<CustomSelect defaultValue={`male`} onChange={(e) => {}}>
					<StyledOption value={`male`}>{`male`}</StyledOption>
					<StyledOption value={'female'}>{'female'}</StyledOption>
				</CustomSelect>
			),
		},
		{
			header: '操作',
			callback: () => <div></div>,
			editAndDelete: true,
			notHidden: true,
		},
	])

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
						<HideFields showFields={fieldsSwitch} onChange={(fields) => setFiledsSwitch([...fields])} />
					)}
					{expanded === 'find' && (
						<FindUser onFind={(row) => dispatch({ type: 'filter', payload: { _id: '', ...row } })}></FindUser>
					)}
					{expanded === 'add' && (
						<AddNewUser onAdd={(row) => dispatch({ type: 'addToHead', payload: { _id: 44, ...row } })}></AddNewUser>
					)}
				</AccordionDetails>
			</Accordion>

			<CreateTable
				columes={cols}
				rows={rows}
				showFields={fieldsSwitch}
				onDelete={(row) => dispatch({ type: 'delete', payload: row })}
				onSave={(row) => dispatch({ type: 'addToHead', payload: row })}
			/>
		</div>
	)
}

// export default UserManage

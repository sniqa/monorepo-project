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
			console.log(action.payload)

			return (temp = state.map((row) => (row._id === action.payload._id ? action.payload : row)))
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
	{ header: '??????', isHidden: true },
	{ header: '??????', isHidden: true },
	{ header: '??????', isHidden: true },
	{ header: '??????', isHidden: true },
	{ header: '??????', isHidden: true },
	{ header: '??????', isHidden: true },
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
			header: '??????',
			callback: (row: any) => <CircleIcon sx={{ fontSize: '1rem', color: 'green' }} className="shadow-xl" />,
		},
		{
			field: 'account',
			header: '??????',
			callback: (row: any) => <Typography>{Reflect.get(row, 'account') || ''}</Typography>,
			editCallback: (row: any) => (
				<TableCellChange
					rowKey={`account`}
					label="??????"
					row={row}
					onChange={(val) => dispatch({ type: 'modify', payload: { ...row, account: val || '' } })}
				/>
			),
		},
		{
			field: 'name',
			header: '??????',
			callback: (row: any) => <Typography>{Reflect.get(row, 'name') || ''}</Typography>,
			editCallback: (row: any) => (
				<TableCellChange
					rowKey={`name`}
					label="??????"
					row={row}
					onChange={(val) => dispatch({ type: 'modify', payload: { ...row, name: val || '' } })}
				/>
			),
		},
		{
			field: 'nickname',
			header: '??????',
			callback: (row: any) => <Typography>{Reflect.get(row, 'nickname') || ''}</Typography>,
			editCallback: (row: any) => (
				<TableCellChange
					rowKey={`nickname`}
					label="??????"
					row={row}
					onChange={(val) => dispatch({ type: 'modify', payload: { ...row, nickname: val || '' } })}
				/>
			),
		},
		{
			field: 'gender',
			header: '??????',
			callback: (row: any) => <Typography>{Reflect.get(row, 'gender') || ''}</Typography>,
			editCallback: (row: any) => (
				<CustomSelect
					defaultValue={`male`}
					onChange={(val) => dispatch({ type: 'modify', payload: { ...row, gender: val || '' } })}
				>
					<StyledOption value={`male`}>{`male`}</StyledOption>
					<StyledOption value={'female'}>{'female'}</StyledOption>
				</CustomSelect>
			),
		},
		{
			header: '??????',
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
					>{`??????/????????????`}</Button>
					<Button
						onClick={() => handleChange('find')}
						variant={`${expanded === 'find' ? 'contained' : 'text'}`}
						disableElevation
					>{`????????????`}</Button>
					<Button
						onClick={() => handleChange('add')}
						variant={`${expanded === 'add' ? 'contained' : 'text'}`}
						disableElevation
					>{`??????`}</Button>
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
				onSave={(row) => dispatch({ type: 'modify', payload: row })}
			/>
		</div>
	)
}

// export default UserManage

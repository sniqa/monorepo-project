import { TextField } from '@mui/material'
import { useState } from 'react'
import { TableBodyRow } from '../module/table/CreateTableBody'

interface TableCellChangeProps {
	row: TableBodyRow
	label: string
	rowKey: string
	onChange?: (row: TableBodyRow) => void
}

const TableCellChange = (props: TableCellChangeProps) => {
	const { row, label, rowKey = '', onChange = () => {} } = props

	const [curRow, setCurRow] = useState(row)

	const tableCellOnChange = (val: string) => {
		setCurRow({ ...curRow, [rowKey]: val })
		onChange(curRow)
	}

	return (
		<TextField
			size="small"
			label={label}
			variant="outlined"
			defaultValue={`${Reflect.get(curRow, rowKey) || ''}`}
			onChange={(e) => tableCellOnChange(e.target.value)}
		/>
	)
}

export default TableCellChange

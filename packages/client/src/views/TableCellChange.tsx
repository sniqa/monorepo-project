import { TextField } from '@mui/material'
import { TableBodyRow } from '../module/table/CreateTableBody'

interface TableCellChangeProps {
	row: TableBodyRow
	label: string
	rowKey: string
	onChange?: (val: string) => void
}

const TableCellChange = (props: TableCellChangeProps) => {
	const { row, label, rowKey = '', onChange = () => {} } = props

	return (
		<TextField
			size="small"
			label={label}
			variant="outlined"
			defaultValue={`${Reflect.get(row, rowKey) || ''}`}
			onChange={(e) => onChange(e.target.value)}
		/>
	)
}

export default TableCellChange

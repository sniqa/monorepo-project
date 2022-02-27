import { TableBody } from '@mui/material'
import { useMemo } from 'react'
import { TableHeaderCol } from './CreateTableHeader'
import CreateTableRow from './CreateTableRow'

export interface TableBodyRow {
	_id: number
}

interface CreateTableBodyProps {
	rows: Array<TableBodyRow>
	columes: Array<TableHeaderCol>
	onSave?: (row: TableBodyRow) => void
	onDelete?: (row: TableBodyRow) => void
}

const CreateTableBody = (props: CreateTableBodyProps) => {
	const { rows, columes, onSave = () => {}, onDelete = () => {} } = useMemo(() => props, [])

	return (
		<TableBody>
			{rows.map((row, rowIdx) => (
				<CreateTableRow key={row._id} columes={columes} row={row} onSave={onSave} onDelete={onDelete} />
			))}
		</TableBody>
	)
}

export default CreateTableBody

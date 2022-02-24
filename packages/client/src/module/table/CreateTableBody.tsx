import { TableBody, TableRow, TableCell } from '@mui/material'

import { Fragment, useMemo } from 'react'
import { TableHeaderCol } from './CreateTableHeader'
import CreateTableRow from './CreateTableRow'

export interface TableBodyRow {
	_id: number
}

interface CreateTableBodyProps {
	rows: Array<TableBodyRow>
	columes: Array<TableHeaderCol>
}

const CreateTableBody = (props: CreateTableBodyProps) => {
	const { rows, columes } = useMemo(() => props, [])

	const onSave = (row: TableBodyRow) => {
		console.log(row)
	}
	return (
		<TableBody>
			{rows.map((row, rowIdx) => (
				<CreateTableRow key={row._id} columes={columes} row={row} onSave={onSave} />
			))}
		</TableBody>
	)
}

export default CreateTableBody

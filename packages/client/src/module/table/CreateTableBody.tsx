import { Fragment } from 'react'
import { TableHeaderCol } from './CreateTableHeader'
import CreateTableRowTest from './CreateTableRowTest'
import { ShowFields } from './HideFields'

export interface TableBodyRow {
	_id: number | string
}

interface CreateTableBodyProps {
	rows: Array<TableBodyRow>
	columes: Array<TableHeaderCol>
	showFields: Array<ShowFields>
	onSave?: (row: TableBodyRow) => void
	onDelete?: (row: TableBodyRow) => void
}

const CreateTableBody = (props: CreateTableBodyProps) => {
	const { rows, columes, showFields, onSave = () => {}, onDelete = () => {} } = props

	return (
		<Fragment>
			{rows.map((row, rowIdx) => (
				<CreateTableRowTest
					key={row._id}
					showFields={showFields}
					columes={columes}
					row={row}
					onSave={onSave}
					onDelete={onDelete}
				/>
			))}
		</Fragment>
	)
}

export default CreateTableBody

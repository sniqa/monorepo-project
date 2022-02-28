import { Table, TableContainer } from '@mui/material'
import CreateTableBody, { TableBodyRow } from './CreateTableBody'
import CreateTableHeader, { TableHeaderCol } from './CreateTableHeader'

interface CreateTableProps {
	columes: Array<TableHeaderCol>
	rows: Array<TableBodyRow>
	onSave?: (row: TableBodyRow) => void
	onDelete?: (row: TableBodyRow) => void
}

export const CreateTable = (props: CreateTableProps) => {
	const { columes, rows, onSave = () => {}, onDelete = () => {} } = props

	return (
		<div className="relative  h-45rem overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
			<TableContainer>
				<Table className={`relative `}>
					<CreateTableHeader columes={columes} />

					<CreateTableBody columes={columes} rows={rows} onSave={onSave} onDelete={onDelete} />
				</Table>
			</TableContainer>
		</div>
	)
}

export default CreateTable

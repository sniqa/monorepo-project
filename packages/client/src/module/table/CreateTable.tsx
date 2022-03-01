import { Table, TableContainer, TableHead, TableBody } from '@mui/material'
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
		<TableContainer
			sx={{ maxHeight: 700 }}
			className={`scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200`}
		>
			<Table
				className={`relative scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 `}
				aria-label="sticky table"
				stickyHeader
			>
				<TableHead>
					<CreateTableHeader columes={columes} />
				</TableHead>

				<TableBody>
					<CreateTableBody columes={columes} rows={rows} onSave={onSave} onDelete={onDelete} />
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default CreateTable

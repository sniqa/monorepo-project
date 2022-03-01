import { Table, TableBody, TableContainer, TableHead } from '@mui/material'
import CreateTableBody, { TableBodyRow } from './CreateTableBody'
import CreateTableHeader, { TableHeaderCol } from './CreateTableHeader'
import { ShowFields } from './HideFields'

interface CreateTableProps {
	columes: Array<TableHeaderCol>
	rows: Array<TableBodyRow>
	showFields?: Array<ShowFields>
	onSave?: (row: TableBodyRow) => void
	onDelete?: (row: TableBodyRow) => void
}

export const CreateTable = (props: CreateTableProps) => {
	const { columes, rows, showFields = [], onSave = () => {}, onDelete = () => {} } = props

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
					<CreateTableHeader columes={columes} showFields={showFields} />
				</TableHead>

				<TableBody>
					<CreateTableBody columes={columes} rows={rows} showFields={showFields} onSave={onSave} onDelete={onDelete} />
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default CreateTable

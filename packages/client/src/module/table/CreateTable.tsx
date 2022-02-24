import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import CreateTableHeader, { TableHeaderCol } from './CreateTableHeader'
import CreateTableBody, { TableBodyRow } from './CreateTableBody'
import HideFields from './HideFields'

interface CreateTableProps {
	columes: Array<TableHeaderCol>
	rows: Array<TableBodyRow>
}

export const CreateTable = (props: CreateTableProps) => {
	const { columes, rows } = props

	return (
		<div className="relative">
			<HideFields></HideFields>

			<TableContainer>
				<Table>
					<CreateTableHeader columes={columes} />

					<CreateTableBody columes={columes} rows={rows} />
				</Table>
			</TableContainer>
		</div>
	)
}

export default CreateTable

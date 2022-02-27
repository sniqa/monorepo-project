import { Table, TableContainer } from '@mui/material'
import { useState } from 'react'
import CreateTableBody, { TableBodyRow } from './CreateTableBody'
import CreateTableHeader, { TableHeaderCol } from './CreateTableHeader'
import HideFields from './HideFields'

interface CreateTableProps {
	columes: Array<TableHeaderCol>
	rows: Array<TableBodyRow>
	fieldsSwitch?: boolean
	onSave?: (row: TableBodyRow) => void
	onDelete?: (row: TableBodyRow) => void
}

export const CreateTable = (props: CreateTableProps) => {
	const { columes, rows, fieldsSwitch = false, onSave = () => {}, onDelete = () => {} } = props

	const [cols, setCols] = useState(columes)

	const fieldsSwitchOnChange = (curCols: Array<TableHeaderCol>) => {
		setCols([...curCols])
	}

	return (
		<div className="relative  h-45rem overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
			{fieldsSwitch && <HideFields columes={cols} onChange={fieldsSwitchOnChange}></HideFields>}

			<TableContainer>
				<Table className={`relative `}>
					<CreateTableHeader columes={cols} />

					<CreateTableBody columes={cols} rows={rows} onSave={onSave} onDelete={onDelete} />
				</Table>
			</TableContainer>
		</div>
	)
}

export default CreateTable

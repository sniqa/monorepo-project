import { TableRow, TableCell, Typography, InputBase } from '@mui/material'
import { useMemo, useState, Fragment } from 'react'

import { TableHeaderCol } from './CreateTableHeader'
import { TableBodyRow } from './CreateTableBody'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'

interface TableRow {
	columes: Array<TableHeaderCol>
	row: TableBodyRow
	onEdit?: (row: TableBodyRow) => void
	onDelete?: (row: TableBodyRow) => void
	onSave?: (row: TableBodyRow) => void
}

const CreateTableRow = (props: TableRow) => {
	const { row, columes, onEdit = () => {}, onDelete = () => {}, onSave = () => {} } = useMemo(() => props, [])

	const [isEditeState, setIsEditeState] = useState(false)

	const editIconOnClick = () => {
		setIsEditeState(!isEditeState)
		onEdit(row)
	}

	const saveIconOnClick = () => {
		setIsEditeState(false)
		onSave(row)
	}

	const deleteIconOnClick = () => {
		onDelete(row)
	}

	return (
		<TableRow>
			{columes.map((colume, index) => (
				<TableCell key={index} align={`center`} className={`w-10rem border border-box`}>
					{(() => {
						if (!colume.headerName) {
							return ''
						}

						if (colume.editeAndDelete) {
							return (
								<div className={`flex justify-center items-center`}>
									<EditIcon className={`cursor-pointer text-gray-500`} onClick={editIconOnClick} />
									{isEditeState && (
										<SaveIcon className={`mx-2 text-gray-500 cursor-pointer`} onClick={saveIconOnClick} />
									)}
									<DeleteIcon className={`cursor-pointer text-gray-500`} onClick={deleteIconOnClick} />
								</div>
							)
						}

						if (colume.field) {
							const value = Reflect.get(row, colume.field)
							return isEditeState ? (
								<InputBase defaultValue={value} className={`border rounded px-2`}></InputBase>
							) : (
								<Typography>{value}</Typography>
							)
						}

						return <Typography>{''}</Typography>
					})()}
				</TableCell>
			))}
		</TableRow>
	)
}

export default CreateTableRow

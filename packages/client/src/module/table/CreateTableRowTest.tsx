import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'
import { TableCell, TableRow } from '@mui/material'
import { useState } from 'react'
import { TableBodyRow } from './CreateTableBody'
import { TableHeaderCol } from './CreateTableHeader'
import { ShowFields } from './HideFields'

interface TableRow {
	columes: Array<TableHeaderCol>
	row: TableBodyRow
	showFields: Array<ShowFields>
	onEdit?: (row: TableBodyRow) => void
	onDelete?: (row: TableBodyRow) => void
	onSave?: (row: TableBodyRow) => void
}
const CreateTableRowTest = (props: TableRow) => {
	const { row, columes, showFields, onEdit = () => {}, onDelete = () => {}, onSave = () => {} } = props

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
			{columes.map(
				(colume, index) =>
					showFields &&
					showFields.find((field) => field.header === colume.header)?.isHidden && (
						<TableCell key={index} align={`center`} className={`w-10rem border-box`}>
							{(() => {
								if (colume.editAndDelete) {
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

								return isEditeState
									? colume.editCallback
										? colume.editCallback(row)
										: colume.callback(row)
									: colume.callback(row)
							})()}
						</TableCell>
					)
			)}
		</TableRow>
	)
}

export default CreateTableRowTest

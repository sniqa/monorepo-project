import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'
import { InputBase, TableCell, TableRow, Typography } from '@mui/material'
import { useMemo, useState } from 'react'
import { TableBodyRow } from './CreateTableBody'
import { TableHeaderCol } from './CreateTableHeader'

interface TableRow {
	columes: Array<TableHeaderCol>
	row: TableBodyRow
	onEdit?: (row: TableBodyRow) => void
	onDelete?: (row: TableBodyRow) => void
	onSave?: (row: TableBodyRow) => void
}

const CreateTableRow = (props: TableRow) => {
	const { row, columes, onEdit = () => {}, onDelete = () => {}, onSave = () => {} } = useMemo(() => props, [props])

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

	const onChange = (row: TableBodyRow, field: string, val: string) => {
		Reflect.set(row, field, val)
	}

	return (
		<TableRow>
			{columes.map(
				(colume, index) =>
					(colume.isHidden === undefined ? true : colume.isHidden) && (
						<TableCell key={index} align={`center`} className={`w-10rem border border-box`}>
							{(() => {
								if (!colume.headerName) {
									return ''
								}

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

								if (colume.field) {
									const value = Reflect.get(row, colume.field)
									return isEditeState ? (
										<InputBase
											defaultValue={value}
											className={`border rounded px-2`}
											onChange={(e) => onChange(row, colume.field || '', e.target.value)}
										></InputBase>
									) : (
										<Typography>{value}</Typography>
									)
								}

								return <Typography>{''}</Typography>
							})()}
						</TableCell>
					)
			)}
		</TableRow>
	)
}

export default CreateTableRow

import { TableCell, TableRow, Typography } from '@mui/material'
import { TableBodyRow } from './CreateTableBody'
import { ShowFields } from './HideFields'

export interface TableHeaderCol {
	field?: string
	header: string
	callback: (row?: TableBodyRow) => JSX.Element
	editAndDelete?: boolean
	notHidden?: boolean
	editCallback?: (row?: TableBodyRow) => JSX.Element
}

interface CreateTableHeaderProps {
	columes: Array<TableHeaderCol>
	showFields: Array<ShowFields>
}

const CreateTableHeader = ({ columes, showFields }: CreateTableHeaderProps) => {
	return (
		<TableRow>
			{columes.map(
				(colume, index) =>
					showFields &&
					showFields.find((field) => field.header === colume.header)?.isHidden && (
						<TableCell key={colume.header + index} align={`center`} className={`border-box`}>
							{<Typography className={`text-dark-900 text-bold`}> {colume['header']}</Typography>}
						</TableCell>
					)
			)}
		</TableRow>
	)
}

export default CreateTableHeader

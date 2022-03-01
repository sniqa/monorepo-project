import { TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { TableBodyRow } from './CreateTableBody'

export interface TableHeaderCol {
	field?: string
	headerName: string
	callback: (row?: TableBodyRow) => JSX.Element
	editAndDelete?: boolean
	isHidden?: boolean
	notHidden?: boolean
	editCallback?: (row?: TableBodyRow) => JSX.Element
}

interface CreateTableHeaderProps {
	columes: Array<TableHeaderCol>
}

const CreateTableHeader = ({ columes }: CreateTableHeaderProps) => {
	return (
		<TableRow>
			{columes.map(
				(colume, index) =>
					(colume.isHidden === undefined ? true : colume.isHidden) &&
					colume.headerName && (
						<TableCell key={colume.headerName + index} align={`center`} className={`border-box`}>
							{<Typography className={`text-dark-900 text-bold`}> {colume['headerName']}</Typography>}
						</TableCell>
					)
			)}
		</TableRow>
	)
}

export default CreateTableHeader

import { TableCell, TableHead, TableRow, Typography } from '@mui/material'

export interface TableHeaderCol {
	field?: string
	headerName?: string
	type?: 'string' | 'selector' | 'calendar' | 'ipAddrFormat'
	editeAndDelete?: boolean
	isHidden?: boolean
	notHidden?: boolean
}

interface CreateTableHeaderProps {
	columes: Array<TableHeaderCol>
}

const CreateTableHeader = ({ columes }: CreateTableHeaderProps) => {
	return (
		<TableHead>
			<TableRow>
				{columes.map(
					(colume, index) =>
						(colume.isHidden === undefined ? true : colume.isHidden) &&
						colume.headerName && (
							<TableCell key={colume.headerName + index} align={`center`} className={`border border-box`}>
								{<Typography className={`text-dark-900 text-bold`}> {colume['headerName']}</Typography>}
							</TableCell>
						)
				)}
			</TableRow>
		</TableHead>
	)
}

export default CreateTableHeader

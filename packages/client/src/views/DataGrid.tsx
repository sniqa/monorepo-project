import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer } from '@mui/material'
import { useMemo, useState } from 'react'

interface DataGridProps {
	columes: Array<DataGridCol>
	rows: Array<object>
}
interface DataGridCol {
	field: string
	headerName?: string
}

export const DataGrid = (props: DataGridProps) => {
	console.log(props)

	const { columes, rows } = useMemo(() => props, [])

	const [tableHeaderRow, setTableHeaderRow] = useState([])

	return (
		<div className={`flex  border  w-full`}>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							{columes.map((colume, index) => (
								<TableCell key={colume.field}>{colume['headerName']}</TableCell>
							))}
						</TableRow>
					</TableHead>

					<TableBody>
						{
							rows.map((row, index) => (
								<TableRow key={row._id}>
									{columes.map((colume, index) => (
										<TableCell key={colume.field}>{Reflect.get(row, Reflect.get(colume, 'field'))}</TableCell>
									))}
								</TableRow>
							))

							// setTableHeaderRow(tableHeaderRowTemp as any)
						}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	)
}

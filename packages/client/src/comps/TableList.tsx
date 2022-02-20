import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useState } from 'react'
import TableFieldSwitch from './TableFieldSwitch'

interface ListProps {
	showFields: object
	tableHeader: object
	tableData: Array<any>
}

export default function BasicTable(props: ListProps) {
	const { showFields, tableData, tableHeader } = props

	const [isShow, setIsShow] = useState(showFields)

	return (
		<div className="flex flex-col w-full">
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							{Object.entries(tableHeader).map(
								([key, tableHeaderLabel]) =>
									Reflect.get(isShow, key) && <TableCell key={key}>{tableHeaderLabel}</TableCell>
							)}
						</TableRow>
					</TableHead>

					<TableBody>
						{tableData.map((row) => (
							<TableRow key={row._id}>
								{Object.entries(row).map(
									([key, val]) => Reflect.get(isShow, key) && <TableCell key={key}>{val}</TableCell>
								)}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			<TableFieldSwitch
				onChange={(key, state) => {
					setIsShow({ ...Object.assign(isShow, { [key]: state }) })
				}}
				showFieldMap={isShow}
			/>
		</div>
	)
}

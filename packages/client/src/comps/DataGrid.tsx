import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useMemo } from 'react'

interface DataGridProps {
	columns: object
	rows: object
	showFields: object
}

export default function DataGrid(props: DataGridProps) {
	const { columns, rows, showFields } = useMemo(() => props, [props])

	return (
		<div className={`flex flex-col w-70rem border`}>
			<div className="">
				<TableContainer component={Paper} elevation={0}>
					<Table>
						<TableHead>
							<TableRow>
								{Object.entries(columns).map(
									([key, tableHeaderLabel]) =>
										Reflect.get(showFields, key) && <TableCell key={key}>{tableHeaderLabel}</TableCell>
								)}
							</TableRow>
						</TableHead>

						<TableBody></TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	)
}

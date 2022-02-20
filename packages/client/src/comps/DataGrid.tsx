import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useMemo } from 'react'

interface DataGridProps {
	tableHeader: object
	showFields: object
}

export default function DataGrid(props: DataGridProps) {
	const { tableHeader, showFields } = useMemo(() => props, [props])

	return (
		<div className={`flex flex-col w-70rem border`}>
			<div className="">
				<TableContainer component={Paper} elevation={0}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								{Object.entries(tableHeader).map(
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

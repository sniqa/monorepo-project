import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Fragment, useState } from 'react'
import TableFieldSwitch from './TableFieldSwitch'
import ConditionSearchBox from './ConditionSearchBox'
import { Button } from '@mui/material'

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
	return { name, calories, fat, carbs, protein }
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
]

interface TableHeader {
	_id: string
	account: string
	ip_v4: string
	netType: string
	desc: string
}

interface ListProps {
	showFields: object
	tableHeader: object
	tableData: Array<TableHeader>
}

const showFieldsTest = {
	_id: false,
	account: true,
	ip_v4: true,
	netType: true,
	desc: true,
}

const tableDataTest = [
	{
		_id: '1',
		account: 'zwl',
		ip_v4: '127.0.0.1',
		netType: '网络1',
		desc: 'on desk',
	},
	{
		_id: '2',
		account: 'zwl',
		ip_v4: '127.0.0.1',
		netType: '网络1',
		desc: 'on desk',
	},
	{
		_id: '3',
		account: 'zwl',
		ip_v4: '127.0.0.1',
		netType: '网络1',
		desc: 'on desk',
	},
	{
		_id: '4',
		account: 'zwl',
		ip_v4: '127.0.0.1',
		netType: '网络1',
		desc: 'on desk',
	},
]

const tableHeaderTest = {
	_id: 'ID',
	account: '名称',
	ip_v4: 'ip地址',
	netType: '网络类型',
	desc: '设备描述',
}

export default function BasicTable(props: ListProps) {
	const { showFields = showFieldsTest, tableData = tableDataTest, tableHeader = tableHeaderTest } = props

	const [isShow, setIsShow] = useState(showFields)

	return (
		<div className="flex flex-col w-full">
			<div className="flex justify-between mx-4">
				<ConditionSearchBox />

				<Button>{`显示/隐藏字段`}</Button>
			</div>

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

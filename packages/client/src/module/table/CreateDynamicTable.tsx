import { Button, TableCell, TableHead, TableRow, TextField } from '@mui/material'
import { useState } from 'react'

export default function CreateDynamicTable() {
	const createBtnClick = () => {}
	const createFieldBtnClick = () => {}

	const [tableFields, setTableFields] = useState<Array<string>>([''])

	let temp = {}

	const enter = () => {
		temp = { ...tableFields }
		console.log(temp)
	}

	const del = (val: string, index: number) => {
		console.log(val, 'index:' + index)

		console.log(tableFields.filter((val, idx) => index !== idx))

		console.log(setTableFields(tableFields.filter((val, idx) => index !== idx)))
	}

	return (
		<div className="flex m-4">
			<div className="">
				<Button onClick={createBtnClick}>{`创建表格`}</Button>
			</div>

			<div className="">
				<TextField label="表格名称" />
			</div>

			<div className="flex flex-col">
				{tableFields.map((field, index) => (
					<div className="" key={field + index}>
						<TextField defaultValue={field} />
						{tableFields.length - 1 === index ? (
							<Button onClick={() => setTableFields([...tableFields, index.toString()])}>{`+`}</Button>
						) : (
							<Button onClick={() => del(field, index)}>{`-`}</Button>
						)}
					</div>
				))}
			</div>

			<Button onClick={enter}>{`确定`}</Button>
		</div>
	)
}

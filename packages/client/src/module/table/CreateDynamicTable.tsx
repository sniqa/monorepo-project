import { Button } from '@mui/material'
import { useCallback, useState } from 'react'
import Alertbar from '../../comps/Alertbar'
import CustomInput from '../../comps/CustomInput'

export default function CreateDynamicTable() {
	const createTableName = useCallback(() => {}, [])

	const [msg, setMsg] = useState('')

	const createTableField = useCallback(() => {
		const index = tableFields.length

		setMsg('alert' + index)

		if (tableFields[index - 1] === '') {
			return
		}

		setTableFields([...tableFields, ` `])
		console.log(tableFields)
	}, [])

	const [tableFields, setTableFields] = useState<Array<string>>([])

	const setField = useCallback((index: number, val: string) => {
		if (tableFields.some((field) => field === val)) {
		}

		setTableFields(Object.assign(tableFields, { [index]: val }))
	}, [])

	return (
		<div className="flex flex-col m-4 border w-50rem p-1rem">
			<Alertbar message={msg} />

			<CustomInput require label="表格名称" onChange={createTableName} />

			{tableFields.map((field, index) => (
				<CustomInput
					key={field}
					require
					defaultValue={field}
					label="字段名称"
					onBlur={(e) => setField(index, e.target.value.trim())}
				/>
			))}

			<Button variant={`contained`} onClick={createTableField} disableElevation>{`添加字段`}</Button>
		</div>
	)
}

import { Switch, Typography } from '@mui/material'
import { useCallback } from 'react'

const showFieldsTest = {
	_id: false,
	account: true,
	ip_v4: true,
	netType: true,
	desc: true,
}

const tableHeaderTest = {
	_id: 'ID',
	account: '名称',
	ip_v4: 'ip地址',
	netType: '网络类型',
	desc: '设备描述',
}

interface TableFieldSwitchProps {
	tableHeaderMap?: object
	showFieldMap?: object
	onChange?: (key: string, val: boolean) => void
}

export default function TableFieldSwitch(props: TableFieldSwitchProps) {
	const { tableHeaderMap = tableHeaderTest, showFieldMap = showFieldsTest, onChange = () => {} } = props

	const switchOnChange = useCallback((key: string, curState: boolean) => {
		onChange(key, curState)
	}, [])

	return (
		<div>
			{Object.entries(tableHeaderMap).map(
				([key, val]) =>
					key !== '_id' && (
						<div className="flex justify-between items-center border my-2 rounded pl-4" key={key}>
							<Typography>{val}</Typography>
							<Switch
								checked={Reflect.get(showFieldMap, key)}
								// defaultChecked={Reflect.get(showFieldMap, key)}
								onChange={(e) => switchOnChange(key, e.target.checked)}
							/>
						</div>
					)
			)}
		</div>
	)
}

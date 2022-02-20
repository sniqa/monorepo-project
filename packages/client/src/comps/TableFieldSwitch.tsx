import { Switch, Typography } from '@mui/material'
import { useCallback } from 'react'

interface TableFieldSwitchProps {
	tableHeaderMap: object
	showFieldMap: object
	onChange?: (key: string, val: boolean) => void
}

export default function TableFieldSwitch(props: TableFieldSwitchProps) {
	const { tableHeaderMap, showFieldMap, onChange = () => {} } = props

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

import { Switch, Typography } from '@mui/material'
import { useCallback } from 'react'

interface TableFieldSwitchProps {
	fieldName: string
	isHiddend: boolean
	onChange?: (val: boolean) => void
}

export default function TableFieldSwitch(props: TableFieldSwitchProps) {
	const { fieldName, isHiddend, onChange = () => {} } = props

	const switchOnChange = useCallback((curState: boolean) => {
		onChange(curState)
	}, [])

	return (
		<div className="flex justify-between items-center border m-2 rounded pl-4 w-12rem">
			<Typography>{fieldName}</Typography>
			<Switch checked={isHiddend} onChange={(e) => switchOnChange(e.target.checked)} />
		</div>
	)
}

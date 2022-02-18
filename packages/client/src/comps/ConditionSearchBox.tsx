import { Button, TextField } from '@mui/material'

const QUERY_BUTTON_LABEL = '查询'

export default function ConditionSearchBox() {
	return (
		<div className="flex justify-between items-center border my-2 rounded px-2">
			<TextField variant="standard" label="Standard" sx={{ mr: '1rem' }} />
			<TextField variant="standard" label="Standard" sx={{ mr: '1rem' }} />
			<TextField variant="standard" label="Standard" sx={{ mr: '1rem' }} />
			<Button variant={'contained'} disableElevation>
				{QUERY_BUTTON_LABEL}
			</Button>
		</div>
	)
}

import { Slide } from '@mui/material'
import Snackbar from '@mui/material/Snackbar'
import * as React from 'react'

export interface SnackbarMessage {
	message: string
	key: number
}

export interface State {
	open: boolean
	snackPack: readonly SnackbarMessage[]
	messageInfo?: SnackbarMessage
}

interface ConsecutiveSnackbarsProps {
	message?: string
}

export default function ConsecutiveSnackbars({ message = '' }: ConsecutiveSnackbarsProps) {
	const [open, setOpen] = React.useState(false)

	React.useEffect(() => {
		message && setOpen(true)
		return () => setOpen(false)
	}, [message])

	const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return
		}
		setOpen(false)
	}

	return (
		<div>
			<Snackbar
				key={message}
				open={open}
				autoHideDuration={2000}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				onClose={handleClose}
				// TransitionProps={{ onExited: handleExited }}
				TransitionComponent={Slide}
				sx={{ padding: 0, display: 'flex' }}
				message={message ? message : undefined}
			/>
		</div>
	)
}

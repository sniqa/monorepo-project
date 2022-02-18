import { CircularProgress } from '@mui/material'

export default function Loading() {
	return (
		<div className="flex justify-center items-cneter w-full h-full">
			<CircularProgress />
		</div>
	)
}

import { InputBase, InputBaseProps, Typography } from '@mui/material'

interface CustomInputProps extends InputBaseProps {
	require?: boolean
	label: string
}

export default function CustomInput(props: CustomInputProps) {
	const { require, label, ...inputProp } = props

	return (
		<label className="flex items-center my-2">
			{require && <span className="text-red-400 mr-2">{`*`}</span>}
			<Typography sx={{ mr: '8px' }}>{label}</Typography>
			<InputBase {...inputProp} className="border rounded" />
		</label>
	)
}

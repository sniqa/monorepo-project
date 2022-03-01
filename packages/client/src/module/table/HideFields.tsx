import { Paper } from '@mui/material'
import TableFieldSwitch from './TableFieldSwitch'

export interface ShowFields {
	header: string
	isHidden: boolean
}

interface HideFieldsProps {
	showFields: Array<ShowFields>
	onChange?: (curState: Array<ShowFields>) => void
}

const HideFields = ({ showFields, onChange = () => {} }: HideFieldsProps) => {
	const fieldSwitchOnClick = (curCol: ShowFields, state: boolean) => {
		Reflect.set(curCol, 'isHidden', state)
		onChange(showFields)
	}

	return (
		<Paper className=" bg-light-50 p-4 flex flex-wrap w-full border" elevation={0}>
			{showFields.map((colume, index) => (
				<TableFieldSwitch
					key={colume.header + index}
					isHiddend={colume.isHidden}
					fieldName={colume.header}
					onChange={(state) => fieldSwitchOnClick(colume, state)}
				/>
			))}
		</Paper>
	)
}

export default HideFields

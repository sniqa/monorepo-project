import { Paper, Button } from '@mui/material'
import { TableHeaderCol } from './CreateTableHeader'
import TableFieldSwitch from './TableFieldSwitch'

interface HideFieldsProps {
	columes: Array<TableHeaderCol>
	onChange?: (curState: Array<TableHeaderCol>) => void
	onConfirm?: () => void
}

const HideFields = ({ columes, onChange = () => {}, onConfirm = () => {} }: HideFieldsProps) => {
	const fieldSwitchOnClick = (curCol: TableHeaderCol, state: boolean) => {
		Reflect.set(curCol, 'isHidden', state)
		onChange(columes)
	}

	return (
		<Paper className=" bg-light-50 p-4 flex flex-wrap w-full border" elevation={0}>
			{columes.map(
				(colume, index) =>
					!colume.notHidden &&
					colume.headerName && (
						<TableFieldSwitch
							key={colume.headerName + index}
							isHiddend={colume.isHidden === undefined ? true : colume.isHidden}
							fieldName={colume.headerName}
							onChange={(state) => fieldSwitchOnClick(colume, state)}
						/>
					)
			)}
		</Paper>
	)
}

export default HideFields

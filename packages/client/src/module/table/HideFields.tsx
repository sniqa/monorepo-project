import { TableHeaderCol } from './CreateTableHeader'
import TableFieldSwitch from './TableFieldSwitch'

interface HideFieldsProps {
	columes: Array<TableHeaderCol>
	onChange?: (curState: Array<TableHeaderCol>) => void
}

const HideFields = ({ columes, onChange = () => {} }: HideFieldsProps) => {
	const fieldSwitchOnClick = (curCol: TableHeaderCol, state: boolean) => {
		Reflect.set(curCol, 'isHidden', state)
		onChange(columes)
	}

	return (
		<div className={`absolute w-full h-full bg-light-50 z-9 border shadow-md flex  bg-dark-300 bg-opacity-50`}>
			<div className=" bg-light-50 m-2">
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
			</div>
		</div>
	)
}

export default HideFields

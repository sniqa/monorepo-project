// import DataGrid from '../comps/DataGrid'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { DataGrid, GridActionsCellItem, GridColumns, GridEnrichedColDef, GridToolbar, zhCN } from '@mui/x-data-grid'
import { Fragment, useCallback, useEffect } from 'react'
import { useAppDispatch } from '../store'
import { setBreadcrumbsInfo } from '../store/breadcrumbs'

const rows = [
	{ id: 1, account: 'zwl', nickname: 'king', gender: 'male', avatar: '' },
	{ id: 2, account: 'zwl', nickname: 'king', gender: 'male', avatar: '' },
	{ id: 3, account: 'zwl', nickname: 'king', gender: 'male', avatar: '' },
	{ id: 4, account: 'zwl', nickname: 'king', gender: 'male', avatar: '' },
]

const columnBase = {
	editable: true,
	headerAlign: 'center',
	align: 'center',
} as Partial<GridEnrichedColDef>

const onClick = (e) => {
	console.log(e)
}

const columns: GridColumns = [
	{ field: 'account', headerName: '账号', ...columnBase },
	{ field: 'nickname', headerName: '昵称', ...columnBase },
	{ field: 'gender', headerName: '性别', ...columnBase },
	{ field: 'avatar', headerName: '头像', ...columnBase },
	{
		field: 'actions',
		// headerName: '操作',
		filterable: false,
		editable: false,
		width: 100,
		// align: 'center',
		// headerAlign: 'center',
		// getActions: () => [
		// 	<EditIcon />,
		// 	<DeleteIcon />,
		// 	<GridActionsCellItem icon={<EditIcon />} label="Edit" />,
		// 	<GridActionsCellItem icon={<DeleteIcon />} label="Delete" />,
		// ],
		renderCell: () => (
			<Fragment>
				<GridActionsCellItem icon={<EditIcon />} label="Edit" onClick={onClick} />
				<GridActionsCellItem icon={<DeleteIcon />} label="Delete" />
			</Fragment>
		),
		// renderHeader: () => <Typography>{`修改2`}</Typography>,
	},
]

export default function UserManage() {
	const dispatch = useCallback(useAppDispatch(), [])
	useEffect(() => {
		dispatch(setBreadcrumbsInfo([{ title: '系统管理' }, { title: '用户管理' }]))
	}, [])

	return (
		<div className="flex flex-col pt-4 items-center w-full">
			<div className="flex flex-grow h-42rem w-70rem">
				<DataGrid
					sx={{ height: '100%' }}
					localeText={{
						...zhCN.components.MuiDataGrid.defaultProps.localeText,
						toolbarExportPrint: '打印当前页',
						toolbarColumns: '显示/隐藏字段',
						toolbarFilters: '查找',
					}}
					columns={columns}
					rows={rows}
					components={{
						Toolbar: GridToolbar,
					}}
				/>
			</div>
		</div>
	)
}

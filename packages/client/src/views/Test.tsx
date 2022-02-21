// import DataGrid from '../comps/DataGrid'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Button } from '@mui/material'
import {
	DataGrid,
	GridActionsCellItem,
	GridApiRef,
	GridColumns,
	GridEnrichedColDef,
	GridEventListener,
	GridEvents,
	GridRowParams,
	GridToolbar,
	MuiEvent,
	useGridApiRef,
	zhCN,
} from '@mui/x-data-grid'
import { Fragment, useCallback, useEffect, useState } from 'react'
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
	console.log(e.target)
}

const columns: GridColumns = [
	{ field: 'account', headerName: '账号', ...columnBase },
	{ field: 'name', headerName: '名称', ...columnBase },
	{ field: 'nickname', headerName: '昵称', ...columnBase },
	{ field: 'gender', headerName: '性别', ...columnBase },
	{ field: 'avatar', headerName: '头像', ...columnBase },
	{
		field: 'actions',
		headerName: '操作',
		filterable: false,
		editable: false,
		align: 'center',
		headerAlign: 'center',
		width: 100,
		// align: 'center',
		// headerAlign: 'center',
		getActions: () => [
			<EditIcon />,
			<DeleteIcon />,
			<GridActionsCellItem icon={<EditIcon />} label="Edit" />,
			<GridActionsCellItem icon={<DeleteIcon />} label="Delete" />,
		],
		renderCell: () => (
			<Fragment>
				<GridActionsCellItem icon={<EditIcon />} label="Edit" onClick={onClick} />
				<GridActionsCellItem icon={<DeleteIcon />} label="Delete" />
			</Fragment>
		),
		// renderHeader: () => <Typography>{`修改2`}</Typography>,
	},
]

interface EditToolbarProps {
	apiRef: GridApiRef
}

export default function UserManage() {
	const dispatch = useCallback(useAppDispatch(), [])
	useEffect(() => {
		dispatch(setBreadcrumbsInfo([{ title: '系统管理' }, { title: '用户管理' }]))
	}, [])

	const apiRef = useGridApiRef()

	const handleEditClick = (id) => (event) => {
		event.stopPropagation()
		apiRef.current.setRowMode(id, 'edit')
	}

	const handleSaveClick = (id) => async (event) => {
		event.stopPropagation()
		// Wait for the validation to run
		const isValid = await apiRef.current.commitRowChange(id)
		if (isValid) {
			apiRef.current.setRowMode(id, 'view')
			const row = apiRef.current.getRow(id)
			apiRef.current.updateRows([{ ...row, isNew: false }])
		}
	}

	const handleDeleteClick = (id) => (event) => {
		event.stopPropagation()
		apiRef.current.updateRows([{ id, _action: 'delete' }])
	}

	const handleCancelClick = (id) => (event) => {
		event.stopPropagation()
		apiRef.current.setRowMode(id, 'view')

		const row = apiRef.current.getRow(id)
		if (row!.isNew) {
			apiRef.current.updateRows([{ id, _action: 'delete' }])
		}
	}

	const handleRowEditStart = (params: GridRowParams, event: MuiEvent<React.SyntheticEvent>) => {
		event.defaultMuiPrevented = true
	}

	const handleRowEditStop: GridEventListener<GridEvents.rowEditStop> = (params, event) => {
		event.defaultMuiPrevented = true
	}

	const handleCellFocusOut: GridEventListener<GridEvents.cellFocusOut> = (params, event) => {
		event.defaultMuiPrevented = true
	}

	return (
		<div className="flex flex-col pt-4 items-center w-full">
			<div className="flex justify-end items-end w-full">
				{/* <Button onClick={addNewData}>{`新增数据`}</Button> */}
				<Button></Button>
			</div>

			<div className="flex flex-grow h-38rem w-70rem">
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
					editMode="row"
					apiRef={apiRef}
					onRowEditStart={handleRowEditStart}
					onRowEditStop={handleRowEditStop}
					onCellFocusOut={handleCellFocusOut}
					components={{
						Toolbar: GridToolbar,
					}}
					componentsProps={{
						toolbar: { apiRef },
					}}
				/>
			</div>
		</div>
	)
}

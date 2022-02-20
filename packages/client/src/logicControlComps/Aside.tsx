import AccountTreeSharpIcon from '@mui/icons-material/AccountTreeSharp'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import BuildCircleSharpIcon from '@mui/icons-material/BuildCircleSharp'
import CategoryIcon from '@mui/icons-material/Category'
import HomeIcon from '@mui/icons-material/Home'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import NetworkLockedSharpIcon from '@mui/icons-material/NetworkLockedSharp'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import AsideMenu, { IconMenu } from '../comps/AsideMenu'
import UserProfile from '../comps/UserProfile'
import { RouterPath } from '../router'

const topMenuList: Array<IconMenu> = [
	{ icon: <HomeIcon />, text: '主页', to: RouterPath.ROOT_HOME },
	{ icon: <CategoryIcon />, text: '分类', to: RouterPath.ROOT_CATEGORY },
	{ icon: <PersonIcon />, text: '个人', to: RouterPath.ROOT_PERSON },
	{
		icon: <AdminPanelSettingsIcon />,
		text: '系统管理',
		children: [
			{ icon: <ManageAccountsIcon />, text: '用户管理', to: RouterPath.ROOT_USER_MANAGE },
			{ icon: <AccountTreeSharpIcon />, text: '权限管理', to: RouterPath.ROOT_AUTH_MANAGE },
			{ icon: <BuildCircleSharpIcon />, text: 'IT管理' },
			{ icon: <NetworkLockedSharpIcon />, text: '网络管理' },
		],
	},
]

const bottomMenuList = [{ icon: <SettingsIcon />, text: 'Settings' }]

export default function Aside() {
	const navigate = useCallback(useNavigate(), [])

	const AsideMenuOnClick = useCallback((path: string, title: string) => {
		console.log(path)

		if (path === '') return
		navigate(path)
	}, [])

	const userProfileClick = useCallback(() => navigate(RouterPath.ROOT_PERSON), [])

	return (
		<div className="w-18rem border-r border-gray-200 h-full flex flex-col">
			<UserProfile avatar={''} nickname={'hello'} desc={'world'} onClick={userProfileClick} />

			<div className="flex flex-col justify-between flex-grow">
				<AsideMenu list={topMenuList} selectColor={'green'} onClick={AsideMenuOnClick} />
				<AsideMenu list={bottomMenuList} selectColor={'green'} onClick={AsideMenuOnClick} />
			</div>
		</div>
	)
}

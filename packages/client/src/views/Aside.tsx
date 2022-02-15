import HomeIcon from '@mui/icons-material/Home'
import CategoryIcon from '@mui/icons-material/Category'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import { useNavigate } from 'react-router-dom'

import UserProfile from '../comps/UserProfile'
import AsideMenu from '../comps/AsideMenu'
import { useCallback, useState } from 'react'

import { routerPathMap } from '../router'

const list = [
	{ icon: <HomeIcon />, text: 'Home' },
	{ icon: <CategoryIcon />, text: 'Category' },
	{ icon: <PersonIcon />, text: 'Person' },
	{ icon: <SettingsIcon />, text: 'Settings' },
]

export default function Aside() {
	const navigate = useCallback(useNavigate(), [])

	const onClick = useCallback((val: string, index: number) => {
		const path = Reflect.get(routerPathMap, val.toLowerCase())
		navigate(path)
	}, [])

	return (
		<div className="w-18rem border-r border-gray-200 h-full flex flex-col">
			<UserProfile avatar={''} nickname={'hello'} desc={'world'} />

			<AsideMenu list={list} selectColor={'green'} onClick={onClick} />
		</div>
	)
}

import { MenuList, MenuItem, ListItemIcon, ListItemText } from '@mui/material'
import { useCallback, useState } from 'react'

interface IconMenu {
	icon: JSX.Element
	text: string
}

interface AsideMenuProps {
	list: Array<IconMenu>
	onClick?: (val: string, index: number) => void
	selectColor?: string
}

export default function AsideMenu({ list, onClick = () => {}, selectColor = '' }: AsideMenuProps) {
	const [curSelectText, setCurSelectText] = useState('')

	const menuItemClick = useCallback((val: string, index: number) => {
		setCurSelectText(val)
		onClick(val, index)
	}, [])

	return (
		<MenuList sx={{ padding: 0 }} className={`hover:text-3rem`}>
			{list.map((iconMenu, index) => (
				<MenuItem
					key={iconMenu.text}
					sx={{
						height: '3.5rem',
						borderBottom: index !== list.length - 1 ? '1px solid #E5E7EB' : '',
						color: curSelectText === iconMenu.text ? selectColor : '',
						paddingLeft: curSelectText === iconMenu.text ? '2.5rem' : '1rem',
						transition: 'padding-left 0.6s',
					}}
					onClick={() => menuItemClick(iconMenu.text, index)}
				>
					<ListItemIcon sx={{ color: curSelectText === iconMenu.text ? selectColor : '' }}>
						{iconMenu.icon}
					</ListItemIcon>

					<ListItemText>{iconMenu.text}</ListItemText>
				</MenuItem>
			))}
		</MenuList>
	)
}

function Menu() {}

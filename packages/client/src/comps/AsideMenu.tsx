import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary, ListItemIcon, ListItemText } from '@mui/material'
import { useCallback, useState } from 'react'

export interface IconMenu {
	icon: JSX.Element
	text: string
	children?: Array<IconMenu>
	to?: string
}

interface AsideMenuProps {
	list: Array<IconMenu>
	onClick?: (val: string, title: string) => void
	selectColor?: string
}

export default function AsideMenu({ list, onClick = () => {}, selectColor = '' }: AsideMenuProps) {
	const [curSelectText, setCurSelectText] = useState('')

	const menuItemClick = useCallback((val: string, txt: string) => {
		setCurSelectText(val)
		onClick(val, txt)
	}, [])

	return (
		// <MenuList sx={{ padding: 0 }} className={`inline-flex flex-col`}>
		<div className="">
			{list.map((iconMenu, index) => {
				const isSelect = curSelectText === iconMenu.text
				return (
					<Accordion
						sx={{
							width: '100%',
							color: isSelect ? selectColor : '',
						}}
						elevation={0}
						disableGutters
						key={iconMenu.text}
						onClick={() => {
							!iconMenu.children && menuItemClick(iconMenu.to || '', iconMenu.text)
						}}
					>
						<AccordionSummary
							expandIcon={iconMenu.children && <ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<ListItemIcon sx={{ color: isSelect ? selectColor : '' }}>{iconMenu.icon}</ListItemIcon>

							<ListItemText>{iconMenu.text}</ListItemText>
						</AccordionSummary>

						{iconMenu.children && (
							<AccordionDetails>
								<AsideMenu list={iconMenu.children} selectColor={selectColor} onClick={onClick} />
							</AccordionDetails>
						)}
					</Accordion>
				)
			})}
		</div>
	)
}

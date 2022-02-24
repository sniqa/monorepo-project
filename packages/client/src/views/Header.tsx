// import { Breadcrumbs, Link, Typography } from '@mui/material'
// import React, { useMemo } from 'react'
// import { useAppSelector } from '../store'

export default function Header() {
	// const { info } = useAppSelector((state) => state.breadcrumbsInfo)
	// const len = useMemo(() => info.length - 1, [info])

	return (
		<div className="border-b border-gray-200 h-4rem flex items-center mx-4">
			{/* // 	<Breadcrumbs aria-label="breadcrumb">
		// 		{info.map((info, index) =>
		// 			index !== len ? (
		// 				<Link underline="hover" color="inherit" key={info.title}>
		// 					{info.title}
		// 				</Link>
		// 			) : (
		// 				<Typography color="text.primary" key={info.title}>
		// 					{info.title}
		// 				</Typography>
		// 			)
		// 		)}
		// 	</Breadcrumbs> */}
		</div>
	)
}

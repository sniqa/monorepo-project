interface NavigationPageProps {
	left?: JSX.Element | string
	right?: JSX.Element | string
	className?: string
	onClick?: () => void
}

export default function NavigationPage({ left, right, className = '', onClick = () => {} }: NavigationPageProps) {
	return (
		<div
			className={`flex items-center border rounded-md px-4 py-2 justify-between ${className}`.trim()}
			onClick={onClick}
		>
			{left && <div>{left}</div>}
			{right && <div>{right}</div>}
		</div>
	)
}

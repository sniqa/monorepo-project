import { Fragment } from 'react'

interface MainLayoutProps {
	aside?: JSX.Element
	header?: JSX.Element
	main?: JSX.Element
}

export function MainLayout({ aside, header, main }: MainLayoutProps) {
	return (
		<Fragment>
			<aside id="app-main-layout-left-aside rounded-2xl">{aside}</aside>

			<div id="app-main-layout-body" className="flex-grow flex flex-col">
				{header && <header id="app-main-layout-header">{header}</header>}
				{main && (
					<main id="app-main-layout-main" className={`flex flex-grow  overflow-hidden`}>
						{main}
					</main>
				)}
			</div>
		</Fragment>
	)
}

export function MainContainer({ children }: { children: JSX.Element }) {
	return (
		<div id="app-main-layout" className={`flex rounded-2xl w-90rem h-56rem border border-gray-200 bg-light-50`}>
			{children}
		</div>
	)
}

function MainLayoutAside({ children }: { children: JSX.Element }) {
	return <aside id="app-main-layout-left-aside rounded-2xl">{children}</aside>
}

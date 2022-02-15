interface MainLayoutProps {
	aside: JSX.Element
	header: JSX.Element
	main: JSX.Element
}

export default function MainLayout({ aside, header, main }: MainLayoutProps) {
	return (
		<div id="app-main-layout" className={`flex rounded-2xl w-80rem h-56rem border border-gray-200 bg-light-50`}>
			<aside id="app-main-layout-left-aside rounded-2xl">{aside}</aside>
			<div id="app-main-layout-body" className="flex-grow flex flex-col">
				<header id="app-main-layout-header">{header}</header>
				<main id="app-main-layout-main" className={`flex`}>
					{main}
				</main>
			</div>
		</div>
	)
}

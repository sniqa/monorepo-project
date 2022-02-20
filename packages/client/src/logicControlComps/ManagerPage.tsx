import NavigationPage from '../comps/NavigationPage'

export default function ManagerPage() {
	return (
		<div className="flex flex-col items-center w-full my-2rem">
			<NavigationPage left={`用户管理`} right={`>`} className={`w-35rem bg-light-blue-200 mb-4`}></NavigationPage>
			<NavigationPage left={`权限管理`} right={`>`} className={`w-35rem bg-light-blue-200 mb-4`}></NavigationPage>
			<NavigationPage left={`IT管理`} right={`>`} className={`w-35rem bg-light-blue-200 mb-4`}></NavigationPage>
			<NavigationPage left={`网络管理`} right={`>`} className={`w-35rem bg-light-blue-200 mb-4`}></NavigationPage>
		</div>
	)
}

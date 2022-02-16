import { lazy, Suspense } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import LoginPage from './logicControlComps/LoginPage'
import { RouterPath } from './router'
import Aside from './views/Aside'
import Header from './views/Header'
import Home from './views/Home'
import Loading from './views/Loading'

const Category = lazy(() => import('./views/Category'))
const Person = lazy(() => import('./views/Person'))
const Settings = lazy(() => import('./views/Settings'))

export default function App() {
	return (
		<Suspense fallback={<Loading />}>
			<BrowserRouter>
				<Routes>
					<Route
						path={RouterPath.PATH_ROOT}
						element={<MainLayout aside={<Aside />} main={<Outlet />} header={<Header />} />}
					>
						<Route path={RouterPath.PATH_LOGIN} element={<LoginPage />}></Route>
						<Route index element={<Home />} />
						<Route path={RouterPath.PATH_CATEGORY} element={<Category />} />
						<Route path={RouterPath.PATH_PERSON} element={<Person />} />
						<Route path={RouterPath.PATH_SETTINGS} element={<Settings />} />

						<Route path={RouterPath.PATH_ROOT_HOME} element={<Home />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Suspense>
	)
}

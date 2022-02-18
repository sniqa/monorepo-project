import { lazy, Suspense } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { MainContainer, MainLayout } from './layouts/MainLayout'
import LoginPage from './logicControlComps/LoginPage'
import { RouterPath } from './router'
import RequiredAuth from './router/RequiredAuth'
import Aside from './logicControlComps/Aside'
import Header from './views/Header'
import Home from './views/Home'
import Loading from './views/Loading'

import List from './comps/List'

import { CreateDynamicTable } from './module/table'

const Category = lazy(() => import('./views/Category'))
const Person = lazy(() => import('./views/Person'))
const Settings = lazy(() => import('./views/Settings'))

export default function App() {
	return (
		<MainContainer>
			<Suspense fallback={<Loading />}>
				<BrowserRouter>
					<Routes>
						<Route
							path={RouterPath.PATH_ROOT}
							element={
								<RequiredAuth
									target={<MainLayout aside={<Aside />} header={<Header />} main={<Outlet />} />}
									redirect={RouterPath.PATH_ROOT_LOGIN}
								/>
							}
						>
							<Route index element={<Home />} />
							<Route path={RouterPath.PATH_CATEGORY} element={<Category />} />
							<Route path={RouterPath.PATH_PERSON} element={<Person />} />
							<Route path={RouterPath.PATH_SETTINGS} element={<Settings />} />
							{/* <Route path={'list'} element={<List />} /> */}
							<Route path={RouterPath.PATH_ROOT_HOME} element={<Home />} />
						</Route>

						<Route path={RouterPath.PATH_ROOT_LOGIN} element={<LoginPage />}></Route>
						<Route path={'/table'} element={<CreateDynamicTable />}></Route>
					</Routes>
				</BrowserRouter>
			</Suspense>
		</MainContainer>
	)
}

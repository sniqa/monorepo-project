import { lazy, Suspense } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { MainContainer, MainLayout } from './layouts/MainLayout'
import Aside from './logicControlComps/Aside'
import LoginPage from './logicControlComps/LoginPage'
import { RouterPath } from './router'
import RequiredAuth from './router/RequiredAuth'
import Header from './views/Header'
import Home from './views/Home'
import Loading from './views/Loading'

const Category = lazy(() => import('./views/Category'))
const Person = lazy(() => import('./views/Person'))
const Settings = lazy(() => import('./views/Settings'))
const Manager = lazy(() => import('./logicControlComps/ManagerPage'))

const UserManage = lazy(() => import('./views/UserManage'))
const AuthManage = lazy(() => import('./views/AuthManage'))

export default function App() {
	return (
		<MainContainer>
			<Suspense fallback={<Loading />}>
				<BrowserRouter>
					<Routes>
						<Route
							path={RouterPath.ROOT}
							element={
								<RequiredAuth
									target={<MainLayout aside={<Aside />} header={<Header />} main={<Outlet />} />}
									redirect={RouterPath.ROOT_LOGIN}
								/>
							}
						>
							<Route index element={<Home />} />
							<Route path={RouterPath.CATEGORY} element={<Category />} />
							<Route path={RouterPath.PERSON} element={<Person />} />
							<Route path={RouterPath.SETTINGS} element={<Settings />} />
							<Route path={RouterPath.MANAGE} element={<Outlet />}>
								<Route path={RouterPath.USER_MANAGE} element={<UserManage />} />
								<Route path={RouterPath.AUTH_MANAGE} element={<AuthManage />} />
							</Route>
							{/* <Route path={'list'} element={<List />} /> */}
							<Route path={RouterPath.ROOT_HOME} element={<Home />} />
						</Route>

						<Route path={RouterPath.ROOT_LOGIN} element={<LoginPage />}></Route>
					</Routes>
				</BrowserRouter>
			</Suspense>
		</MainContainer>
	)
}

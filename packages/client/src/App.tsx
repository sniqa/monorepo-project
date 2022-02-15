import { lazy, Suspense } from 'react'
import Card from '@mui/material/Card'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'

import Loading from './views/Loading'
import MainLayout from './layouts/MainLayout'
import Home from './views/Home'
import Header from './views/Header'
import Aside from './views/Aside'

import { RouterPath } from './router'

const Category = lazy(() => import('./views/Category'))
const Person = lazy(() => import('./views/Person'))
const Settings = lazy(() => import('./views/Settings'))

export default function App() {
	return (
		<Suspense fallback={<Loading />}>
			<BrowserRouter>
				<Routes>
					<Route path={`/`} element={<MainLayout aside={<Aside />} main={<Outlet />} header={<Header />} />}>
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

import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Layout from './components/layout/layout'
import MainPage from './pages/mainPage/mainPage'

function App() {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<MainPage />} />
			</Routes>
		</Layout>
	)
}

export default App

import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Table from "../components/Table"

const Main = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path="abm/add/" element={<Home />} />
      <Route path="/abm/edit/:transactionID" element={<Home />} />
			<Route path="/abm/delete/:transactionID" element={<Home />} />
		</Routes>
		
	)
}

export default Main
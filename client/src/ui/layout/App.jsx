import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

import AuthProvider from '../../api/AuthProvider'
import Header from './Header'
import Main from './Main'

function App() {
  return(
		<BrowserRouter>
			<AuthProvider>
				<Header />
				<Main />
				<Toaster />
			</AuthProvider>
		</BrowserRouter>
	) 
}

export default App

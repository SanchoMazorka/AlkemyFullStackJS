import { BrowserRouter } from 'react-router-dom'
import AuthProvider from '../../api/AuthProvider'
import Header from './Header'
import Main from './Main'

function App() {
  return(
		<BrowserRouter>
			<AuthProvider>
				<Header />
				<Main />
			</AuthProvider>
		</BrowserRouter>
	) 
}

export default App

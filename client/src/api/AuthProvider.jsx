import { createContext, useState, useEffect } from 'react'

import { app } from '../config/FirebaseConfig'
import { getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export const contextFromAuth = createContext()

const AuthProvider = ({children}) => {
	
	const {Provider} = contextFromAuth
	const [auth, setAuth] = useState(false)
	const [token, setToken] = useState('')

	useEffect(() => {
		const auth = getAuth()
		onAuthStateChanged(auth, (userCred) => {
			if (userCred) {
				setAuth(true);
				console.log('TEST')
				//window.localStorage.setItem('auth', 'true');
				userCred.getIdToken().then((token) => {
					setToken(token);
				});
			}
		});
	}, []);

	const register = (email, password) => {
		const auth = getAuth()
		createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			
			//setUserID(userCredential.user.auth.currentUser.uid)
		})
		.catch((error) => {
			const errorCode = error.code
			const errorMessage = error.message
			// ..
		})
		
	}
	
	const login = (email, password) => {
		const auth = getAuth()
		signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			//console.log(userCredential.getIdToken())
			console.log(userCredential.user.auth.currentUser)
			// ...
		})
		.catch((error) => {
			console.log(error);
		});
	
	}

	const logout = () => {
		const auth = getAuth()
		signOut(auth)
		.then(() => {
			// Signed in
			setAuth(false)
			setToken('')
		})
	}

	const status = (id) => {
		/*if (id==undefined) 
			return userID
		
		setUserID(id)*/
	}

	const initialContext = { 
		register,
		login,
		logout,
		auth
	}

	return (
		<Provider value={initialContext}>{children}</Provider>
	)
}

export default AuthProvider
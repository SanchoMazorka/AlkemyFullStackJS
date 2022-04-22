import { useState, useContext } from 'react'
import { contextFromAuth } from '../../api/AuthProvider'

const User = () => {

	const [newUser, setNewUser] = useState(false)
	const { register, login, logout } = useContext(contextFromAuth)

	const manageForm = (e, n) => {
		e.preventDefault()
		if (n==1){
			login(e.target.parentNode[0].value, e.target.parentNode[1].value)
		}
		else{
			register(e.target.parentNode[1].value, e.target.parentNode[2].value)
		}
	}

	return (
		<>
			<div>
				<button onClick={()=>setNewUser(true)} disabled={newUser}>REGISTRAR</button>
				<button onClick={()=>setNewUser(false)} disabled={!newUser}>LOGUEAR</button>
			</div>
			{ newUser ?
				<form className='formAdd'>
					<div>
						<span>NOMBRE</span>
						<input type='text' />
					</div>
					<div>
						<span>MAIL</span>
						<input type='text' />
					</div>
					<div>
						<span>PASS</span>
						<input type='password' />
					</div>
					<input type='button' name='register' onClick={(e) => manageForm(e, 2)} value='CREA UNA CUENTA' />
				</form>
			:
				<form className='formAdd'>
					<div>
						<span>MAIL</span>
						<input type='text' />
					</div>
					<div>
						<span>PASS</span>
						<input type='password' />
					</div>
					<input type='button' name='login' onClick={(e) => manageForm(e, 1)} value='INGRESAR CON TU CUENTA' />
				</form>
			}
			<input type='button' name='register' onClick={logout} value='DESLOGUEAR' />
		</>
	)
}

export default User
import { useState, useContext } from "react"
import { contextFromAuth } from '../../api/AuthProvider'

const Balance = () => {
	const { auth, userData } = useContext(contextFromAuth)

	return (
		<div className='balance'>
			<span className="balance-name">BALANCE</span>
			<div className='balance-amount'>
				<span>$</span>
				<span>{userData!=undefined?userData.balance:'CARGANDO...'}</span>
			</div>
		</div>
	)
}

export default Balance
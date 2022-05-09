import { useContext } from 'react'
import { contextFromAuth } from '../../api/AuthProvider'

const Table = () => {
	const { auth, userData, userTransactions } = useContext(contextFromAuth)

	const transformDate = (ms) => {
		const date = new Date(ms*1000)
		return `${date.getHours().toString().padStart(2, 0)}:${date.getMinutes().toString().padStart(2, 0)} ${date.getDay().toString().padStart(2, 0)}/${date.getMonth().toString().padStart(2, 0)}/${date.getUTCFullYear().toString().padStart(2, 0)}`
	}

	return (
	<>
		{userData!=undefined && userData.qt>0 ?
			<table className='table'>
				<thead>
					<tr>
						<th>OPERACIÓN</th>
						<th>MONTO</th>
						<th>CATEGORÍA</th>
						<th>FECHA</th>
					</tr>
				</thead>
				<tbody>
					{userTransactions.map(data =>  
						<tr key={data.id} style={{color: data.credit?'green':'red'}}>
							<td>{data.credit?'CRÉDITO':'DÉBITO'}</td>
							<td>${data.amount}</td>
							<td>{data.cat.toUpperCase()}</td>
							<td>{ transformDate(data.date.seconds) }</td>
						</tr>
					)}
				</tbody>
			</table>
			:
			<h2>NO HAY TRANSACCIONES PARA MOSTRAR.</h2>
		}
	</>)
}

export default Table
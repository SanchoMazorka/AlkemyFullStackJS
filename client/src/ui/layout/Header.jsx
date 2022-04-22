import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import TopMenu from "../pages/TopMenu"
import { contextFromAuth } from '../../api/AuthProvider'

const Header = () => {
	const [test, setTest] = useState(false)
	const { auth } = useContext(contextFromAuth)
  return (
    <header>
			<button onClick={()=>setTest(!test)} value='PROBAR'/>
      <nav>
        <img src='./../../../img/corn.png'/>

        <ul className='abm-menu'>
          <li>
						<span className='material-icons-outlined'>home</span>
						<span className='icon-text'>HOME</span>
					</li>
          <li>
						<span className='material-icons-outlined'>add_circle_outline</span>
						<span className='icon-text'>AGREGAR</span>
					</li>
          <li>
						<span className='material-icons-outlined'>edit</span>
						<span className='icon-text'>EDITAR</span>
					</li>
          <li>
						<span className='material-icons-outlined'>delete</span>
						<span className='icon-text'>ELIMINAR</span>
					</li>
        </ul>

				<div className="user">
          <span className="username"><Link to='/user'>{auth ? 'Leonardo':'LOGIN'}</Link></span>
          <span className='material-icons-outlined'>arrow_drop_down</span>
        </div>
      </nav>
			{test && <TopMenu setTest={setTest}/>}
    </header>
  )
}

export default Header

const Header = () => {
  return (
    <header>
      <nav>
        <img src='./../../../img/corn.png' width={36} height={36} />
				<div className="user">
          <span>Leonardo</span>
          <span class='material-icons-outlined'>arrow_drop_down</span>
        </div>
        <ul className='abm-menu'>
          <il><span class='material-icons-outlined'>home</span></il>
          <il><span class='material-icons-outlined'>add_circle_outline</span></il>
          <il><span class='material-icons-outlined'>edit</span></il>
          <il><span class='material-icons-outlined'>delete</span></il>
        </ul>
      </nav>
    </header>
  )
}

export default Header

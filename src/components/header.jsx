

function Header() {
  return (

    <header>

      <div className="header-content">

        <img
          src="https://avatars.githubusercontent.com/u/124629952?s=400&v=4"
          alt="Díaz Valdez, Ignacio"
          className="profile-img"
        />

        <nav>
          <ul className="navbar">

            <li><a href="/home">HOME</a></li>
            <li><a href="/SobreMi">Sobre Mi</a></li>
            <li><a href="/SoftSkills">SoftSkills</a></li>
            <li><a href="/Estudios">Estudios</a></li>
            
          </ul>
        </nav>
        
      </div>

    </header>
  );

}

export default Header;
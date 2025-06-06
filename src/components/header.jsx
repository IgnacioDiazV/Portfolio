import styles from '../App.css';

function Header({ setSection }) {
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
            <li><button className="nav-btn" onClick={() => setSection("home")}>HOME</button></li>
            <li><button className="nav-btn" onClick={() => setSection("softskills")}>SoftSkills</button></li>
            <li><button className="nav-btn" onClick={() => setSection("estudios")}>Estudios</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
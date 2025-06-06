import Estudios from "./estudios";
import SoftSkills from "./softskills";

function Main() {
  return (
    <main>

      <div>

        <h1>Hola, Soy Diaz Valdez Ignacio.</h1>

        <h2>Programador jr</h2>

        <div className="main-buttons">

          <button className="main-btn">SoftSkills</button>
          <button className="main-btn">Estudios</button>

        </div>

        <div className="social-icons">

          <a href="https://github.com/IgnacioDiazV" target="_blank" rel="noopener noreferrer">

          <i className="fab fa-github"></i>
          
          </a>

        </div>
        
      </div>

    </main>
  );
}

export default Main;
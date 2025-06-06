import Estudios from "./estudios";
import SoftSkills from "./softskills";

function Main({ section, setSection }) {
  return (
    <main>
      {section === "home" && (
        <div>
          <h1>Hola, Soy Diaz Valdez Ignacio.</h1>
          <h2>Programador jr</h2>
          <div className="main-buttons">
            <button className="main-btn" onClick={() => setSection("softskills")}>
              SoftSkills
            </button>
            <button className="main-btn" onClick={() => setSection("estudios")}>
              Estudios
            </button>
          </div>
          <div className="social-icons">
            <a href="https://github.com/IgnacioDiazV" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      )}

      {section === "softskills" && (
        <div>
          <SoftSkills />
          <button className="main-btn" onClick={() => setSection("home")}>Volver</button>
        </div>
      )}

      {section === "estudios" && (
        <div>
          <Estudios />
          <button className="main-btn" onClick={() => setSection("home")}>Volver</button>
        </div>
      )}
    </main>
  );
}

export default Main;
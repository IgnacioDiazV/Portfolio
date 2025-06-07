function SoftSkills() {
  return (
    <div className="softskills-grid">
      <div className="softskills-left">
        <h2 className="section-title">Soft Skills</h2>
        <ul className="skills-list">
          <li>Trabajo en equipo</li>
          <li>Comunicación efectiva</li>
          <li>Resolución de problemas</li>
          <li>Adaptabilidad</li>
          <li>Responsabilidad</li>
          <li>Gestión del tiempo</li>
          <li>Aprendizaje autónomo</li>
        </ul>

        <h2 className="section-title">Experiencia Laboral</h2>
        <ul className="exp-list">
          <li>
            <strong>Limpieza y Mantenimiento de Computadoras</strong> - Autónomo
            <br />
            <span className="exp-date">2024 - Actualidad</span>
            <br />
            <span className="exp-desc">
              Soporte a usuarios, mantenimiento de equipos y resolución de incidencias.
            </span>
          </li>
        </ul>
      </div>

      <div className="softskills-right">
        <h2 className="section-title">Proyectos Realizados</h2>
        <ul className="projects-list">
          <li>
            <strong>Práctica Profesionalizante PPP</strong> (Domótica en hoteles):
            <br />
            Proyecto final para recibirme como Técnico Electrónico.
            <br />
            Desarrollo de un sistema de domótica para hoteles, incluyendo control de luces, temperatura y seguridad.
          </li>
          <li>
            <strong>Proyecto final de Programación 1</strong> (C#):
            <br />
            Desarrollo de un sistema de venta de entradas para un concierto, incluyendo gestión de asientos y pagos.
          </li>
          <li>
            <strong>Proyecto final de Programación 2</strong> (JS, HTML y CSS):
            <br />
            Desarrollo de un sistema de cálculos estadísticos, con login, registro de usuarios y cálculo de estadísticas.
          </li>
          <li>
            <strong>Proyectos Subidos</strong> (React)
            <br />
            Algunos de mis proyectos subidos a GitHub y Netlify:
            <br />
            <a
              href="https://frolicking-tiramisu-ecc98a.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ffd600" }}
            >
              Proyecto final de Programación 2 
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default SoftSkills;
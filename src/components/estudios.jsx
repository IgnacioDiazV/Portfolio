function Estudios() {
  return (
    <div className="estudios-grid">
      <div className="estudios-left">
        <h2 className="section-title">Estudios</h2>
        <ul>
          <li>
            <strong>Escuela Técnica N°2 Obispo Colombres</strong>
            <br />
            Especialidad: Técnico Electrónico
            <br />
            2014 - 2021
          </li>
          <li>
            <strong>Universidad Tecnológica Nacional (UTN)</strong>
            <br />
            Ingeniería en Sistemas de Información
            <br />
            2022 - Actualidad
          </li>
        </ul>

        <h2 className="section-title">Idiomas</h2>
        <ul className="idiomas-list">
          <li>
            <strong>Español</strong> (Nativo)
            <div className="progress-bar">
              <div className="progress" style={{ width: "100%" }}></div>
            </div>
          </li>
          <li>
            <strong>Inglés</strong> (Básico)
            <div className="progress-bar">
              <div className="progress" style={{ width: "35%" }}></div>
            </div>
          </li>
        </ul>
      </div>

      <div className="estudios-right">
        <h2 className="section-title">Certificados</h2>
        <ul>
          <li>Titulo Secundario - Técnico Electrónico - 2021</li>
        </ul>
      </div>
    </div>
  );
}
export default Estudios;
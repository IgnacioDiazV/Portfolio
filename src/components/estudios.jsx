function Estudios() {
  return (
    <div>
      <h2>Estudios</h2>
      <ul>
        <li>
          <strong>Escuela Técnica N°2 Obispo Colombres</strong>
          <br />
          Título: Técnico Electrónico
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

      <h2>Idiomas</h2>
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

      <h2>Certificados</h2>
      <ul>
        <li>Certificado de Curso de Programación Básica - 2023</li>
        <li>Certificado de Inglés Técnico - 2022</li>
        {/* Agrega más certificados si tienes */}
      </ul>
    </div>
  );
}
export default Estudios;
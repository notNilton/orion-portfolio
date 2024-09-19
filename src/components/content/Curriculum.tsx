import React from "react";
import "../../styles/content/Curriculum.scss"; // Importando os estilos customizados
import sampleResume from "../../assets/resume_notnilton.pdf"; // Importando o arquivo PDF do currículo

const Curriculum: React.FC = () => {
  return (
    <div className="curriculum">
      <div className="pdf-viewer">
        <embed
          src={sampleResume}
          type="application/pdf"
          width="100%"
          height="100%" // Definindo a altura do PDF
        />
      </div>
    </div>
  );
};

export default Curriculum;

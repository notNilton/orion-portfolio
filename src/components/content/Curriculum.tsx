import React from "react";
import "../../styles/content/Curriculum.scss"; // Importando os estilos customizados

const Curriculum: React.FC = () => {
  return (
    <div className="curriculum">
      <div className="resume-content">
        <section className="education">
          <h2>Educação</h2>
          <ul>
            <li>
              <strong>Bacharelado em Engenharia de Computação</strong> -
              Universidade Federal de Mato Grosso (2020 - 2025)
            </li>
          </ul>
        </section>

        <section className="work-experience">
          <h2>Experiência Profissional</h2>
          <ul>
            <li>
              <strong>Desenvolvedor Junior Full Stack</strong> - PGE-MT (Maio
              2024 - Atual)
              <p>
                Implementei automações com Google Apps Script e AppSheet,
                otimizando fluxos internos. Desenvolvi sistemas de gerenciamento
                de processos jurídicos e controle de escalas para procuradores
                usando TypeScript e React no front-end, PostgreSQL como banco de
                dados, e deploy na Firebase com autenticação via Google
                Authentication.
              </p>
              <ul>
                <li>
                  Integração do ChatGPT para resumos automáticos de processos e
                  pré-avaliação de litispendência.
                </li>
                <li>
                  Tecnologias: TypeScript, React, PostgreSQL, Firebase, Node.js,
                  Google Apps Script, AppSheet, ChatGPT API.
                </li>
              </ul>
            </li>
            <li>
              <strong>Estágio Desenvolvimento Back-end</strong> - SEMA-MT (Maio
              2021 - Maio 2022)
              <p>
                Desenvolvi uma ferramenta de campo utilizando C# e .NET para
                coletar e gerenciar dados em ambientes remotos. Implementei a
                sincronização de dados tanto online quanto offline, garantindo a
                consistência dos dados.
              </p>
              <ul>
                <li>
                  Integração com sistemas internos e externos por meio de APIs
                  robustas.
                </li>
                <li>Tecnologias: C#, .NET, SQL Server, APIs RESTful.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="projects">
          <h2>Projetos Pessoais</h2>
          <ul>
            <li>
              <strong>RADARE</strong> - Reconciliation and Data Analysis in a
              Responsive Environment
              <p>
                Aplicativo web em React para reconciliação de dados industriais,
                capaz de reconciliar grandes volumes de dados em tempo real ou
                batches, ajustando variáveis para valores corretos.
              </p>
              <ul>
                <li>
                  Tecnologias: Python (Flask), TypeScript (React), PostgreSQL
                  (TimescaleDB).
                </li>
              </ul>
            </li>
            <li>
              <strong>AAICAP</strong> - Artificial Intelligence Correction and
              Augmentation Pipeline
              <p>
                Projeto para correção de imagens pixel-art geradas por
                Inteligência Artificial, utilizando técnicas avançadas de
                processamento de imagens para corrigir e otimizar a qualidade.
              </p>
              <ul>
                <li>Tecnologias: Python, Flask, OpenCV, PIL.</li>
              </ul>
            </li>
          </ul>
          <h2>Projetos Profissionais</h2>
          <ul>
            <li>
              <strong>RADARE</strong> - Reconciliation and Data Analysis in a
              Responsive Environment
              <p>
                Aplicativo web em React para reconciliação de dados industriais,
                capaz de reconciliar grandes volumes de dados em tempo real ou
                batches, ajustando variáveis para valores corretos.
              </p>
              <ul>
                <li>
                  Tecnologias: Python (Flask), TypeScript (React), PostgreSQL
                  (TimescaleDB).
                </li>
              </ul>
            </li>
            <li>
              <strong>AAICAP</strong> - Artificial Intelligence Correction and
              Augmentation Pipeline
              <p>
                Projeto para correção de imagens pixel-art geradas por
                Inteligência Artificial, utilizando técnicas avançadas de
                processamento de imagens para corrigir e otimizar a qualidade.
              </p>
              <ul>
                <li>Tecnologias: Python, Flask, OpenCV, PIL.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="skills">
          <h2>Habilidades Técnicas e Interesses</h2>
          <ul>
            <li>
              Idiomas: Português (nativo), Inglês (fluente), Espanhol (mediano),
              Francês (iniciante), Alemão (iniciante)
            </li>
            <li>Linguagens: C/C++, Python, TypeScript</li>

            <li>Frameworks: ReactJS, Flask, Express.js, FastAPI</li>
            <li>Bancos de Dados: Firebase, PostgreSQL, TimescaleDB</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Curriculum;

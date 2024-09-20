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
              <strong>Bacharelado em Ciência da Computação</strong> -
              Universidade Federal de São Paulo (2015 - 2019)
              <p>
                Principais disciplinas: Algoritmos, Estrutura de Dados, Sistemas
                Operacionais, Inteligência Artificial.
              </p>
            </li>
            <li>
              <strong>Curso de Desenvolvimento Web Full Stack</strong> - Udemy
              (2020)
              <p>
                Curso focado em desenvolvimento de aplicações web usando React,
                Node.js, MongoDB e Express.
              </p>
            </li>
          </ul>
        </section>

        <section className="work-experience">
          <h2>Experiência de Trabalho</h2>
          <ul>
            <li>
              <strong>Desenvolvedor Full Stack</strong> - Tech Innovators (2020
              - Atual)
              <p>
                Desenvolvimento e manutenção de plataformas web utilizando
                React, Node.js e PostgreSQL. Liderança de equipe em projetos de
                inovação digital.
              </p>
              <ul>
                <li>Implementação de APIs RESTful e GraphQL.</li>
                <li>
                  Integração de sistemas de pagamento e automação de processos.
                </li>
                <li>
                  Colaboração em projetos ágeis utilizando metodologias Scrum e
                  Kanban.
                </li>
              </ul>
            </li>
            <li>
              <strong>Estagiário em Desenvolvimento de Software</strong> -
              SoftSolutions (2019 - 2020)
              <p>
                Suporte no desenvolvimento de aplicativos web, focado em
                otimização de front-end e testes automatizados.
              </p>
              <ul>
                <li>
                  Desenvolvimento de interfaces interativas com HTML, CSS e
                  JavaScript.
                </li>
                <li>Testes unitários e de integração com Jest e Mocha.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="projects">
          <h2>Projetos</h2>
          <ul>
            <li>
              <strong>Plataforma de Gestão de Tarefas</strong> - Projeto Pessoal
              (2021)
              <p>
                Desenvolvimento de uma aplicação web para gestão de tarefas
                pessoais e profissionais, com autenticação de usuário,
                integração com calendário e gráficos de produtividade.
              </p>
              <ul>
                <li>
                  Front-end em React e Redux para gerenciamento de estados.
                </li>
                <li>
                  Back-end em Node.js e MongoDB para armazenamento de dados.
                </li>
              </ul>
            </li>
            <li>
              <strong>API de Previsão do Tempo</strong> - Projeto Open Source
              (2022)
              <p>
                API RESTful que fornece dados meteorológicos em tempo real,
                integrando com a OpenWeatherMap API.
              </p>
              <ul>
                <li>Desenvolvimento em Node.js com Express.</li>
                <li>
                  Integração com APIs de terceiros para obter dados
                  meteorológicos.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="courses">
          <h2>Cursos e Certificações</h2>
          <ul>
            <li>
              <strong>Certificação em Arquitetura de Software</strong> - Alura
              (2022)
              <p>
                Curso avançado em padrões de arquitetura e design de software.
              </p>
            </li>
            <li>
              <strong>Certificação AWS Cloud Practitioner</strong> - Amazon Web
              Services (2021)
              <p>Introdução aos conceitos e serviços principais da AWS.</p>
            </li>
          </ul>
        </section>

        <section className="skills">
          <h2>Habilidades</h2>
          <ul>
            <li>JavaScript, TypeScript, Python</li>
            <li>React, Redux, Node.js, Express</li>
            <li>Banco de Dados: MongoDB, PostgreSQL</li>
            <li>Metodologias Ágeis: Scrum, Kanban</li>
            <li>Versionamento: Git, GitHub, GitLab</li>
            <li>Cloud: AWS, Docker</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Curriculum;

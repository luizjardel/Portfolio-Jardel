import React, { useState } from 'react';
import Galaxy from './Galaxy';
import './Galaxy.css';

import minhaFoto from './assets/foto1.jpeg';

import printSuplementos from './assets/site.png';
import printProjeto2 from './assets/gerador de css.jpeg';
import printProjeto3 from './assets/Calculadora.png';
import printProjeto4 from './assets/Sistema de Agendamento.png';
import printProjeto5 from './assets/Almoxarifado.jpeg';
import printProjeto6 from './assets/I.A.jpeg';

import certifClaude101 from './assets/Claude 101.png';
import certifAction from './assets/Claude Code in Action.png';
import certifCode101 from './assets/Claude Code 101.png';
import certificado from './assets/Imersao Dev com Google Gemini.png';
import certifingles from './assets/Curso de English .jpeg';

export default function App() {
  const [imagemZoom, setImagemZoom] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };


  const meusCertificados = [
    {
      id: 1,
      titulo: 'Claude 101',
      instituicao: 'Anthropic',
      cargaHoraria: '1 h',
      ano: '2026',
      imagem: certifClaude101
    },

    {
      id: 2,
      titulo: 'Claude Code In Action',
      instituicao: 'Anthropic',
      cargaHoraria: '3 h',
      ano: '2026',
      imagem: certifAction
    },

    {
      id: 3,
      titulo: 'Claude Code 101',
      instituicao: 'Anthropic',
      cargaHoraria: '3 h',
      ano: '2026',
      imagem: certifCode101
    },

    {
      id: 4,
      titulo: 'Imersão Dev Com Google Gemini 10ª Edição',
      instituicao: 'Alura em parceria com Google Gemini',
      cargaHoraria: '3 h',
      ano: '2025',
      imagem: certificado
    },

    {
      id: 5,
      titulo: 'Curso de Inglês Nível Básico',
      instituicao: 'ITEP - Instituto de Tecnologia e Educação Profissional',
      cargaHoraria: '100 h',
      ano: '2025',
      imagem: certifingles
    }
  ];



  const outrosProjetos = [
    {
      id: 1,
      tipo: 'HACKATHON',
      titulo: 'Almoxarifado Compartilhado',
      imagem: printProjeto5,
      descricao:
        'Projeto desenvolvido durante um Hackathon em equipe, com foco na construção de uma solução para gerenciamento de almoxarifado. Atuei como desenvolvedor Back-end, contribuindo diretamente na implementação do CRUD de produtos e nos módulos relacionados a pedidos e transferências de itens.',
      tecnologias: [
        'Java',
        'Spring Boot',
        'PostgreSQL',
        'Docker',
        'Flyway',
        'REST API'
      ]
    },


    {
      id: 3,
      tipo: 'PROJETO',
      titulo: 'ChatBot de Texto com I.A',
      imagem: printProjeto6,
      descricao:
        'I.A Feita Para de Texto feito com o Spring AI,Java e Spring Boot. A aplicação permite que os usuários interajam com um chatbot de texto, enviando mensagens e recebendo respostas geradas por inteligência artificial. O projeto explora conceitos de processamento de linguagem natural, integração com APIs externas e desenvolvimento de back-end robusto.',
      tecnologias: [
        'Java',
        'Spring Boot',
        'REST API',
        'Banco de Dados'
      ]
    },

    {
      id: 4,
      tipo: 'PROJETO',
      titulo: 'Sistema de Agendamento de Horários',
      descricao:
        'Sistema desenvolvido com Java e Spring Boot para gerenciamento de agendamentos. A aplicação trabalha com cadastro de usuários, criação e gerenciamento de eventos e persistência das informações em banco de dados.',
      imagem: printProjeto4,
      tecnologias: [
        'Java',
        'Spring Boot',
        'SQL'
      ]
    },

    {
      id: 5,
      tipo: 'PROJETO',
      titulo: 'Gerador de CSS com IA',
      descricao:
        'Aplicação web desenvolvida para gerar código CSS personalizado a partir das solicitações do usuário. O projeto explora a integração com inteligência artificial para transformar instruções em estilos CSS.',
      imagem: printProjeto2,
      tecnologias: [
        'HTML',
        'CSS',
        'JavaScript',
        'IA'
      ]
    },

    {
      id: 6,
      tipo: 'PROJETO',
      titulo: 'Calculadora Simples em Java',
      descricao:
        'Aplicação desenvolvida em Java utilizando Swing e AWT para realizar operações matemáticas básicas. O projeto trabalha conceitos de Programação Orientada a Objetos, interface gráfica e processamento das entradas do usuário.',
      imagem: printProjeto3,
      tecnologias: [
        'Java',
        'Swing',
        'AWT',
        'POO'
      ]
    }
  ];

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
        backgroundColor: '#000',
        overflowX: 'hidden',
        overflowY: 'auto',
        fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif'
      }}
    >

   

      <div
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1
        }}
      >
        <Galaxy
          density={0.8}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.05}
          autoCenterRepulsion={0}
          starSpeed={0.3}
          speed={1}
        />
      </div>

      

      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          minHeight: '60px',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          padding: '8px 10px',
          boxSizing: 'border-box',
          zIndex: 100
        }}
      >
        <button
          onClick={() => scrollToSection('inicio')}
          className="nav-link"
          style={navLinkStyle}
        >
          Início
        </button>

        <button
          onClick={() => scrollToSection('sobre')}
          className="nav-link"
          style={navLinkStyle}
        >
          Sobre
        </button>

        <button
          onClick={() => scrollToSection('certificados')}
          className="nav-link"
          style={navLinkStyle}
        >
          Certificados
        </button>

        <button
          onClick={() => scrollToSection('destaque')}
          className="nav-link"
          style={navLinkStyle}
        >
          Destaque
        </button>

        <button
          onClick={() => scrollToSection('galeria')}
          className="nav-link"
          style={navLinkStyle}
        >
          Projetos
        </button>

        <button
          onClick={() => scrollToSection('contato')}
          className="nav-link"
          style={navLinkStyle}
        >
          Redes
        </button>
      </nav>

      

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#fff',
          paddingTop: '90px',
          boxSizing: 'border-box',
          pointerEvents: 'none'
        }}
      >

    

        <section
          id="inicio"
          style={{
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 20px',
            pointerEvents: 'auto'
          }}
        >
          <div
            className="avatar-container"
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              border: '2px solid rgba(255, 255, 255, 0.8)',
              boxShadow: '0 0 25px rgba(255, 255, 255, 0.2)',
              marginBottom: '20px',
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#111',
              cursor: 'pointer'
            }}
          >
            <img
              src={minhaFoto}
              alt="Luiz Jardel"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML =
                  '<span style="font-size: 2rem; color: #666;">&lt; / &gt;</span>';
              }}
            />
          </div>

          <h1
            style={{
              fontSize: 'calc(1.8rem + 1vw)',
              fontWeight: '700',
              margin: '0 0 8px 0',
              textShadow: '0 0 15px rgba(255,255,255,0.3)'
            }}
          >
            Luiz Jardel
          </h1>

          <p
            style={{
              fontSize: '1.1rem',
              color: '#ffffff',
              margin: '0'
            }}
          >
            Desenvolvedor Back-end | Java & Spring Boot
          </p>
        </section>

    

        <section
          id="sobre"
          style={{
            minHeight: '65vh',
            width: '100%',
            maxWidth: '680px',
            padding: '20px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            pointerEvents: 'auto'
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(15, 15, 15, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '25px',
              boxSizing: 'border-box',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 15px 35px rgba(0,0,0,0.6)'
            }}
          >
            <h2
              style={{
                fontSize: '1.4rem',
                fontWeight: '600',
                margin: '0 0 15px 0',
                color: '#fff'
              }}
            >
              👨🏾‍💻 Sobre Mim
            </h2>

            <p
              style={{
                fontSize: '0.9rem',
                color: '#ccc',
                lineHeight: '1.6',
                margin: '0 0 25px 0'
              }}
            >
              Sou estudante de Análise e Desenvolvimento de Sistemas e
              desenvolvedor Back-end com foco no ecossistema Java.

              <br />
              <br />

              Venho desenvolvendo projetos práticos utilizando Java e Spring
              Boot, trabalhando com APIs REST, bancos de dados, organização
              em camadas e boas práticas de desenvolvimento de software.

              <br />
              <br />

              Atualmente estou aprofundando meus conhecimentos em Java,
              Spring Boot, PostgreSQL, Docker e arquitetura de aplicações.
              Também possuo conhecimentos em tecnologias de Front-end, como
              HTML, CSS, JavaScript, e aprendendo React e TypeScript para complementar minhas habilidades de desenvolvimento web.

              <br />
              <br />

              Além dos projetos pessoais e acadêmicos, venho buscando
              experiência prática por meio de projetos colaborativos,
              desenvolvimento em equipe e participação em Hackathons.

              <br />
              <br />

              Meu objetivo é evoluir continuamente como desenvolvedor,
              construir soluções reais e me preparar para atuar
              profissionalmente no mercado de tecnologia.
            </p>


            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px'
              }}
            >
              <div>
                <h4 style={sectionTitleStyle}>
                  Foco Principal — Back-end
                </h4>

                <div style={techContainerStyle}>
                  <span style={techTagStyle}>Java</span>
                  <span style={techTagStyle}>Spring Boot</span>
                  <span style={techTagStyle}>PostgreSQL</span>
                  <span style={techTagStyle}>SQL</span>
                  <span style={techTagStyle}>Docker</span>
                </div>
              </div>

              <div>
                <h4 style={sectionTitleStyle}>
                  Conhecimentos — Front-end
                </h4>

                <div style={techContainerStyle}>
                  <span style={techTagStyle}>HTML</span>
                  <span style={techTagStyle}>CSS</span>
                  <span style={techTagStyle}>JavaScript</span>
                  <span style={techTagStyle}>React</span>
                  <span style={techTagStyle}>TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      

        <section
          id="certificados"
          style={{
            minHeight: '50vh',
            width: '100%',
            maxWidth: '680px',
            padding: '40px 20px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            pointerEvents: 'auto'
          }}
        >
          <h2
            style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '20px',
              color: '#fff'
            }}
          >
            📜 Certificações & Cursos
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            {meusCertificados.map((cert) => (
              <div
                key={cert.id}
                onClick={() =>
                  cert.imagem && setImagemZoom(cert.imagem)
                }
                style={{
                  backgroundColor: 'rgba(15, 15, 15, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '15px',
                  cursor: cert.imagem ? 'zoom-in' : 'default',
                  transition: 'transform 0.2s, border-color 0.2s',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      margin: '0 0 4px 0',
                      color: '#fff'
                    }}
                  >
                    {cert.titulo}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: '#aaa',
                      margin: 0
                    }}
                  >
                    {cert.instituicao} •{' '}
                    <span style={{ color: '#888' }}>
                      {cert.cargaHoraria}
                    </span>
                  </p>
                </div>

                <div
                  style={{
                    textAlign: 'right',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '6px'
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: '#666',
                      fontWeight: '500'
                    }}
                  >
                    {cert.ano}
                  </span>

                  {cert.imagem && (
                    <span
                      style={{
                        fontSize: '0.65rem',
                        color: '#00ffaa',
                        backgroundColor:
                          'rgba(0,255,170,0.08)',
                        padding: '2px 6px',
                        borderRadius: '4px'
                      }}
                    >
                      Ver documento
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        

        <section
          id="destaque"
          style={{
            minHeight: '70vh',
            width: '100%',
            maxWidth: '680px',
            padding: '20px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <div
            className="card-destaque"
            style={{
              backgroundColor: 'rgba(20, 20, 20, 0.85)',
              border: '2px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '16px',
              padding: '25px',
              boxSizing: 'border-box',
              backdropFilter: 'blur(10px)',
              pointerEvents: 'auto',
              boxShadow: '0 20px 45px rgba(0,0,0,0.7)'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '15px'
              }}
            >
              <h2
                style={{
                  fontSize: '1.3rem',
                  margin: 0,
                  fontWeight: '700',
                  color: '#fff'
                }}
              >
                ⭐ PROJETO EM DESTAQUE
              </h2>

              <span
                style={{
                  fontSize: '0.7rem',
                  color: '#fff',
                  backgroundColor: '#333',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  fontWeight: '600'
                }}
              >
                Principal
              </span>
            </div>

            <div
              onClick={() =>
                setImagemZoom(printSuplementos)
              }
              style={{
                width: '100%',
                height: '220px',
                borderRadius: '8px',
                overflow: 'hidden',
                cursor: 'zoom-in',
                marginBottom: '15px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <img
                src={printSuplementos}
                alt="Loja de suplementos"
                className="img-hover-zoom"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            <h3
              style={{
                fontSize: '1.15rem',
                margin: '0 0 10px 0',
                color: '#fff',
                fontWeight: '600'
              }}
            >
              Loja de Suplementos — Projeto para Cliente Real
            </h3>

            <p
              style={{
                fontSize: '0.88rem',
                color: '#ccc',
                lineHeight: '1.5',
                margin: '0 0 20px 0'
              }}
            >
              Aplicação web desenvolvida para uma loja de suplementos
              utilizando HTML, CSS e JavaScript. Este foi meu primeiro
              projeto desenvolvido para um cliente real, permitindo aplicar
              na prática conhecimentos adquiridos durante meus estudos.
            </p>

            <div style={techContainerStyle}>
              <span style={techTagStyle}>HTML</span>
              <span style={techTagStyle}>CSS</span>
              <span style={techTagStyle}>JavaScript</span>
            </div>
          </div>
        </section>


        <section
          id="galeria"
          style={{
            minHeight: '65vh',
            width: '100%',
            maxWidth: '1000px',
            padding: '40px 20px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <h2
            style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '25px',
              textAlign: 'center'
            }}
          >
            🚀 Projetos Desenvolvidos
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              width: '100%',
              pointerEvents: 'auto'
            }}
          >
            {outrosProjetos.map((proj) => (
              <div
                key={proj.id}
                className="card-projeto"
                style={{
                  backgroundColor: 'rgba(15, 15, 15, 0.8)',
                  border:
                    proj.tipo === 'HACKATHON'
                      ? '1px solid rgba(0,255,170,0.25)'
                      : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow:
                    '0 10px 20px rgba(0,0,0,0.4)',
                  backdropFilter: 'blur(8px)'
                }}
              >

              

                {proj.imagem ? (
                  <div
                    onClick={() =>
                      setImagemZoom(proj.imagem)
                    }
                    style={{
                      width: '100%',
                      height: '160px',
                      overflow: 'hidden',
                      cursor: 'zoom-in',
                      backgroundColor: '#111'
                    }}
                  >
                    <img
                      src={proj.imagem}
                      alt={proj.titulo}
                      className="img-hover-zoom"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '160px',
                      background:
                        'linear-gradient(135deg, rgba(20,20,20,1), rgba(40,40,40,1))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderBottom:
                        '1px solid rgba(255,255,255,0.06)'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '2.5rem',
                        opacity: 0.5
                      }}
                    >
                      {proj.tipo === 'HACKATHON'
                        ? '🏆'
                        : '💻'}
                    </span>
                  </div>
                )}

                

                <div style={{ padding: '17px' }}>

                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '0.62rem',
                      fontWeight: '700',
                      letterSpacing: '0.8px',
                      color:
                        proj.tipo === 'HACKATHON'
                          ? '#00ffaa'
                          : '#888',
                      marginBottom: '7px'
                    }}
                  >
                    {proj.tipo}
                  </span>

                  <h3
                    style={{
                      fontSize: '1rem',
                      margin: '0 0 9px 0',
                      fontWeight: '600',
                      color: '#fff'
                    }}
                  >
                    {proj.titulo}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: '#aaa',
                      lineHeight: '1.5',
                      margin: '0 0 13px 0'
                    }}
                  >
                    {proj.descricao}
                  </p>

                  

                  <div style={techContainerStyle}>
                    {proj.tecnologias.map(
                      (tech, index) => (
                        <span
                          key={index}
                          style={techTagStyle}
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

     

        <section
          id="contato"
          style={{
            minHeight: '55vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: '0 20px',
            boxSizing: 'border-box',
            pointerEvents: 'auto',
            textAlign: 'center'
          }}
        >
          <h3
            style={{
              fontSize: '1rem',
              color: '#ffffff',
              margin: '0 0 20px 0',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}
          >
            Sociais
          </h3>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '10px',
              width: '100%',
              maxWidth: '500px'
            }}
          >
            <a
              href="https://www.linkedin.com/in/luiz-jardel/?skipRedirect=true"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              style={socialLinkStyle}
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/luizjardel"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              style={socialLinkStyle}
            >
              GitHub
            </a>

            <a
              href="https://www.instagram.com/dev.jardel/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              style={socialLinkStyle}
            >
              Instagram
            </a>

            <a
              href="mailto:luizjardel13@gmail.com"
              className="social-link"
              style={socialLinkStyle}
            >
              E-mail
            </a>

            <a
              href="https://www.youtube.com/@devjardel"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              style={socialLinkStyle}
            >
              YouTube
            </a>
          </div>
        </section>
      </div>

  

      {imagemZoom && (
        <div
          onClick={() => setImagemZoom(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            cursor: 'zoom-out',
            backdropFilter: 'blur(6px)',
            padding: '10px',
            boxSizing: 'border-box'
          }}
        >
          <button
            onClick={() => setImagemZoom(null)}
            style={{
              position: 'absolute',
              top: '15px',
              right: '20px',
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: '2.5rem',
              cursor: 'pointer'
            }}
          >
            &times;
          </button>

          <img
            src={imagemZoom}
            alt="Zoom"
            style={{
              maxWidth: '100%',
              maxHeight: '80%',
              borderRadius: '6px',
              objectFit: 'contain'
            }}
          />
        </div>
      )}
    </div>
  );
}



const navLinkStyle = {
  background: 'none',
  border: 'none',
  color: '#aaa',
  fontSize: '0.82rem',
  fontWeight: '600',
  cursor: 'pointer',
  padding: '6px 8px',
  borderRadius: '4px'
};

const sectionTitleStyle = {
  fontSize: '0.75rem',
  color: '#888',
  margin: '0 0 8px 0',
  textTransform: 'uppercase',
  letterSpacing: '0.5px'
};

const techContainerStyle = {
  display: 'flex',
  gap: '6px',
  flexWrap: 'wrap'
};

const techTagStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.04)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  padding: '4px 8px',
  borderRadius: '4px',
  fontSize: '0.78rem',
  color: '#bbb'
};

const socialLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '0.85rem',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '8px 14px',
  borderRadius: '6px',
  fontWeight: '500',
  display: 'inline-block',
  flexGrow: 1,
  textAlign: 'center'
};
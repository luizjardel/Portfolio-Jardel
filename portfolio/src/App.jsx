import React, { useState, useEffect, useRef } from 'react';


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
import LightRays from "./assets/components/LightRays";

/**
 * Hook simples de "scroll reveal": observa um elemento e, quando ele entra
 * na viewport, adiciona a classe "is-visible" (dispara a transição do CSS).
 * Cada seção só revela uma vez, então a animação não fica repetindo ao
 * subir e descer a página.
 */
function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function App() {
  const [imagemZoom, setImagemZoom] = useState(null);
  const [heroVisible, setHeroVisible] = useState(false);

  const sobreRef = useReveal();
  const certificadosRef = useReveal();
  const destaqueRef = useReveal();
  const galeriaRef = useReveal();
  const contatoRef = useReveal();

  useEffect(() => {
    // Dispara o fade-in escalonado do herói assim que o componente monta.
    const timer = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

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

      {/* Estilos de animação: mantidos num único bloco para ficar fácil
          de ajustar depois. Respeita prefers-reduced-motion no final. */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(35px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes floatAvatar {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 25px rgba(255, 255, 255, 0.2); }
          50% { box-shadow: 0 0 38px rgba(255, 255, 255, 0.4); }
        }

        @keyframes navAppear {
          from { opacity: 0; transform: translateY(-20px); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        @keyframes cardAppear {
          from { opacity: 0; transform: translateY(22px) scale(0.985); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes shine {
          0% { left: -100%; }
          100% { left: 150%; }
        }

        .hero-item {
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 1s ease, transform 1s cubic-bezier(.16,1,.3,1);
        }

        .hero-item.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-section {
          opacity: 0;
          transform: translateY(35px);
          transition: opacity 1s ease, transform 1s cubic-bezier(.16,1,.3,1);
        }

        .reveal-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .avatar-container {
          animation: floatAvatar 5s ease-in-out infinite, glowPulse 4s ease-in-out infinite;
          transition: transform 0.4s cubic-bezier(.22,1,.36,1);
        }

        .avatar-container:hover {
          transform: scale(1.06) rotate(1deg);
        }

        .main-navbar {
          animation: navAppear 0.8s cubic-bezier(.22,1,.36,1);
        }

        .nav-link {
          position: relative;
          overflow: hidden;
          transition: color 0.4s ease, transform 0.45s cubic-bezier(.16,1,.3,1), background-color 0.4s ease;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: -100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
          transition: left 0.8s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 8px;
          right: 8px;
          bottom: 2px;
          height: 2px;
          background: #fff;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.3s cubic-bezier(.22,1,.36,1);
        }

        .nav-link:hover {
          color: #fff !important;
          transform: translateY(-1px) scale(1.015);
          background-color: rgba(255,255,255,0.04);
        }

        .nav-link:hover::before {
          left: 100%;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }

        .nav-link:active {
          transform: scale(0.94);
        }

        .card-projeto {
          position: relative;
          overflow: hidden;
          animation: cardAppear 0.9s cubic-bezier(.16,1,.3,1) both;
          transition: transform 0.55s cubic-bezier(.16,1,.3,1), box-shadow 0.4s ease, border-color 0.4s ease;
        }

        .card-projeto::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent);
          transform: skewX(-20deg);
          pointer-events: none;
          z-index: 2;
        }

        .card-projeto:hover::before {
          animation: shine 0.8s ease;
        }

        .card-projeto:hover {
          transform: translateY(-5px) scale(1.012);
          box-shadow: 0 25px 50px rgba(0,0,0,0.65), 0 0 25px rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.25) !important;
        }

        .card-projeto:active {
          transform: translateY(-4px) scale(0.99);
        }

        .card-destaque {
          transition: transform 0.6s cubic-bezier(.16,1,.3,1), box-shadow 0.45s ease, border-color 0.45s ease;
        }

        .card-destaque:hover {
          transform: translateY(-4px) scale(1.008);
          box-shadow: 0 30px 70px rgba(0,0,0,0.85), 0 0 35px rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.3) !important;
        }

        .cert-item {
          transition: transform 0.45s cubic-bezier(.16,1,.3,1), border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
        }

        .cert-item:hover {
          transform: translateX(4px) scale(1.008);
          border-color: rgba(255,255,255,0.22) !important;
          background-color: rgba(30,30,30,0.95) !important;
          box-shadow: 0 10px 25px rgba(0,0,0,0.45);
        }

        .img-hover-zoom {
          transition: transform 0.9s cubic-bezier(.16,1,.3,1), filter 0.5s ease;
        }

        .img-hover-zoom:hover {
          transform: scale(1.04);
          filter: brightness(1.08) contrast(1.05);
        }

        .tech-tag {
          transition: transform 0.25s ease, background-color 0.25s ease, border-color 0.25s ease;
        }

        .tech-tag:hover {
          transform: translateY(-2px);
          background-color: rgba(255,255,255,0.09) !important;
          border-color: rgba(255,255,255,0.2) !important;
        }

        .social-link {
          display: inline-block;
          transition: transform 0.45s cubic-bezier(.16,1,.3,1), background-color 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .social-link:hover {
          transform: translateY(-3px) scale(1.02);
          background-color: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.25) !important;
          box-shadow: 0 10px 25px rgba(0,0,0,0.5);
        }

        .social-link:active {
          transform: scale(0.95);
        }

        .zoom-overlay-img {
          animation: fadeIn 0.3s ease;
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation: none !important;
            transition: none !important;
          }

          .hero-item, .reveal-section {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

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
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>



      <nav
        className="main-navbar"
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
          zIndex: 100,
          animation: 'fadeIn 0.6s ease'
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
            className={`avatar-container hero-item${heroVisible ? ' is-visible' : ''}`}
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              border: '2px solid rgba(255, 255, 255, 0.8)',
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
            className={`hero-item${heroVisible ? ' is-visible' : ''}`}
            style={{
              fontSize: 'calc(1.8rem + 1vw)',
              fontWeight: '700',
              margin: '0 0 8px 0',
              textShadow: '0 0 15px rgba(255,255,255,0.3)',
              transitionDelay: '0.12s'
            }}
          >
            Luiz Jardel
          </h1>

          <p
            className={`hero-item${heroVisible ? ' is-visible' : ''}`}
            style={{
              fontSize: '1.1rem',
              color: '#ffffff',
              margin: '0',
              transitionDelay: '0.24s'
            }}
          >
            Desenvolvedor Back-end | Java & Spring Boot
          </p>
        </section>



        <section
          id="sobre"
          ref={sobreRef}
          className="reveal-section"
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
                  <span className="tech-tag" style={techTagStyle}>Java</span>
                  <span className="tech-tag" style={techTagStyle}>Spring Boot</span>
                  <span className="tech-tag" style={techTagStyle}>PostgreSQL</span>
                  <span className="tech-tag" style={techTagStyle}>SQL</span>
                  <span className="tech-tag" style={techTagStyle}>Docker</span>
                </div>
              </div>

              <div>
                <h4 style={sectionTitleStyle}>
                  Conhecimentos — Front-end
                </h4>

                <div style={techContainerStyle}>
                  <span className="tech-tag" style={techTagStyle}>HTML</span>
                  <span className="tech-tag" style={techTagStyle}>CSS</span>
                  <span className="tech-tag" style={techTagStyle}>JavaScript</span>
                  <span className="tech-tag" style={techTagStyle}>React</span>
                  <span className="tech-tag" style={techTagStyle}>TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section
          id="certificados"
          ref={certificadosRef}
          className="reveal-section"
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
                className="cert-item"
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
          ref={destaqueRef}
          className="reveal-section"
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
              <span className="tech-tag" style={techTagStyle}>HTML</span>
              <span className="tech-tag" style={techTagStyle}>CSS</span>
              <span className="tech-tag" style={techTagStyle}>JavaScript</span>
            </div>
          </div>
        </section>


        <section
          id="galeria"
          ref={galeriaRef}
          className="reveal-section"
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
          ref={contatoRef}
          className="reveal-section"
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
            boxSizing: 'border-box',
            animation: 'fadeIn 0.2s ease'
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
              cursor: 'pointer',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.15) rotate(90deg)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1) rotate(0deg)')}
          >
            &times;
          </button>

          <img
            src={imagemZoom}
            alt="Zoom"
            className="zoom-overlay-img"
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
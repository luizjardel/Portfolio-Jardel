import { useState, useEffect } from 'react';
import {
  SiSpringboot, SiPostgresql, SiMysql, SiDocker, SiGit, SiMongodb,
  SiJavascript, SiReact, SiTypescript, SiPython, SiAngular,
  SiTelegram, SiKotlin, SiUbuntu, SiNestjs
} from 'react-icons/si';
import {
  FaJava, FaLinux, FaAws, FaHtml5, FaCss3Alt,
  FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaEnvelope
} from 'react-icons/fa';

import minhaFoto from './assets/foto1.jpeg';

import printSuplementos from './assets/site.png';
import printProjeto2 from './assets/gerador de css.jpeg';
import printProjeto4 from './assets/Sistema de Agendamento.png';
import printProjeto5 from './assets/Almoxarifado.jpeg';
import printProjeto6 from './assets/I.A.jpeg';
import printProjeto7 from './assets/Bot Vagas.png';
import printProjeto8 from './assets/Agente IA.png';

import certifSantander from './assets/Bootcamp Santander.jpeg';
import certifEndian from './assets/Endian Firewall certificado.jpg';
import certifItau from './assets/Itau Bootcamp.png';
import certifClaude101 from './assets/Claude 101.png';
import certifAction from './assets/Claude Code in Action.png';
import certifCode101 from './assets/Claude Code 101.png';
import certificado from './assets/Imersao Dev com Google Gemini.png';
import certifingles from './assets/Curso de English .jpeg';

const SECOES = [
  ['inicio', 'Início'],
  ['sobre', 'Sobre'],
  ['projetos', 'Projetos'],
  ['certificados', 'Certificados'],
  ['contato', 'Contato']
];

const SOCIAIS = [
  ['GitHub', 'https://github.com/luizjardel'],
  ['LinkedIn', 'https://www.linkedin.com/in/luiz-jardel/?skipRedirect=true'],
  ['Instagram', 'https://www.instagram.com/dev.jardel/'],
  ['YouTube', 'https://www.youtube.com/@devjardel'],
  ['E-mail', 'mailto:luizjardel13@gmail.com']
];

const ICONES_SOCIAIS = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
  'E-mail': FaEnvelope
};

const STACK = [
  ['Back-end', ['Java', 'Spring Boot', 'Spring AI', 'Python']],
  ['Front-end', ['JavaScript', 'React', 'React Native', 'TypeScript', 'Angular']],
  ['Bancos de dados', ['PostgreSQL', 'MySQL', 'MongoDB']],
  ['Infraestrutura', ['Docker', 'Git', 'Ubuntu']],
  ['Inteligência artificial', ['CrewAI', 'Ollama', 'Llama 3.2', 'Claude Code']],
  ['Em aprendizado', ['Kotlin', 'Express', 'NestJS', 'Linux', 'AWS']]
];

// Tecnologias sem ícone aparecem só com o nome.
const ICONES = {
  Java: FaJava, 'Spring Boot': SiSpringboot, 'Spring AI': SiSpringboot,
  Python: SiPython, JavaScript: SiJavascript, React: SiReact,
  'React Native': SiReact, TypeScript: SiTypescript, Angular: SiAngular,
  PostgreSQL: SiPostgresql, MySQL: SiMysql, MongoDB: SiMongodb,
  Docker: SiDocker, Git: SiGit, Ubuntu: SiUbuntu, NestJS: SiNestjs,
  Kotlin: SiKotlin, Linux: FaLinux, AWS: FaAws, HTML: FaHtml5,
  CSS: FaCss3Alt, 'Telegram Bot API': SiTelegram
};

const FRASES = [
  'APIs REST',
  'sistemas com banco de dados',
  'automações com Python',
  'agentes de I.A locais'
];

function Tec({ nome }) {
  const Icone = ICONES[nome];
  return (
    <span className="tec">
      {Icone && <Icone size={16} aria-hidden="true" />}
      {nome}
    </span>
  );
}

function LinkSocial({ nome, url, className = 'link' }) {
  const Icone = ICONES_SOCIAIS[nome];
  return (
    <a
      className={`${className} social-item`}
      href={url}
      target={url.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
    >
      {Icone && <Icone size={17} aria-hidden="true" />}
      <span>{nome}</span>
    </a>
  );
}

const PROJETOS = [
  {
    id: 1,
    titulo: 'Loja de suplementos',
    nota: 'Projeto para cliente real',
    imagem: printSuplementos,
    descricao:
      'Aplicação web para uma loja de suplementos. Foi meu primeiro projeto para um cliente real e me permitiu aplicar na prática o que eu estudava.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    links: [['Código', 'https://github.com/luizjardel/TITANS-LIFE']]
  },
  {
    id: 2,
    titulo: 'Almoxarifado compartilhado',
    nota: 'Hackathon em equipe',
    imagem: printProjeto5,
    descricao:
      'Sistema de gerenciamento de almoxarifado entre empresas. Atuei no back-end, implementando o CRUD de produtos e os módulos de pedidos e transferências de itens.',
    tecnologias: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Flyway', 'REST API'],
    links: [['Código', 'https://github.com/AlissonGCosta/Almoxarifado-Compartilhado']]
  },
  {
    id: 3,
    titulo: 'Agente de I.A para auditoria de código',
    imagem: printProjeto8,
    descricao:
      'Agente autônomo local para auditoria de código estático, refatoração com Clean Code e SOLID e identificação de vulnerabilidades. Roda o Llama 3.2 na própria máquina, sem APIs pagas e sem expor o código-fonte.',
    tecnologias: ['Python', 'CrewAI', 'Ollama', 'Llama 3.2'],
    links: [['Código', 'https://github.com/luizjardel/local-ai-code-reviewer']]
  },
  {
    id: 4,
    titulo: 'Bot de vagas no Telegram',
    imagem: printProjeto7,
    descricao:
      'Bot em Python que envia vagas de tecnologia automaticamente pelo Telegram, com automação e integração com a API do Telegram.',
    tecnologias: ['Python', 'Telegram Bot API'],
    links: [['Código', 'https://github.com/luizjardel/vacancy-monitor']]
  },
  {
    id: 5,
    titulo: 'Chatbot de texto com I.A',
    imagem: printProjeto6,
    descricao:
      'Chatbot para testes de integração com Spring AI e Ollama. Explora o consumo de modelos de linguagem em uma aplicação Java.',
    tecnologias: ['Java', 'Spring Boot', 'Spring AI', 'Ollama'],
    links: [['Código', 'https://github.com/luizjardel/dio-spring-boot-learning-track']]
  },
  {
    id: 6,
    titulo: 'Sistema de agendamento de horários',
    imagem: printProjeto4,
    descricao:
      'Sistema para gerenciar agendamentos, com cadastro de usuários, criação e gerenciamento de eventos e persistência em banco de dados.',
    tecnologias: ['Java', 'Spring Boot', 'SQL'],
    links: []
  },
  {
    id: 7,
    titulo: 'Gerador de CSS com I.A',
    imagem: printProjeto2,
    descricao:
      'Aplicação web que gera código CSS a partir de instruções do usuário, usando uma API de inteligência artificial.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    links: [['Ver site', 'https://gerador-de-css.onrender.com']]
  }
];

const CERTIFICADOS = [
  ['Santander 2026 – AI Java Back-end', 'Santander e DIO', '49 h', '2026', certifSantander],
  ['Itaú – Java com Inteligência Artificial', 'Itaú e DIO', '45 h', '2026', certifItau],
  ['Endian Firewall Community – Administração profissional', 'Udemy', '14,5 h', '2026', certifEndian],
  ['Claude Code in Action', 'Anthropic', '3 h', '2026', certifAction],
  ['Claude Code 101', 'Anthropic', '3 h', '2026', certifCode101],
  ['Claude 101', 'Anthropic', '1 h', '2026', certifClaude101],
  ['Imersão Dev com Google Gemini, 10ª edição', 'Alura e Google Gemini', '3 h', '2025', certificado],
  ['Curso de inglês, nível básico', 'ITEP – Instituto de Tecnologia e Educação Profissional', '100 h', '2025', certifingles]
];

export default function App() {
  const [zoom, setZoom] = useState(null);
  const [ativa, setAtiva] = useState('inicio');
  const [fi, setFi] = useState(0);
  const [tema, setTema] = useState(() => {
    try {
      return localStorage.getItem('tema') || 'escuro';
    } catch {
      return 'escuro';
    }
  });

  // Aplica o tema na página inteira e lembra a escolha.
  useEffect(() => {
    document.documentElement.dataset.tema = tema;
    try {
      localStorage.setItem('tema', tema);
    } catch {
      /* sem armazenamento: o tema vale só nesta visita */
    }
  }, [tema]);

  // Marca no menu a seção que está no meio da tela.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setAtiva(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    SECOES.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Imagem ampliada: trava a rolagem e fecha com Esc.
  useEffect(() => {
    if (!zoom) return;
    const fechar = (e) => e.key === 'Escape' && setZoom(null);
    document.documentElement.style.overflow = 'hidden';
    window.addEventListener('keydown', fechar);
    return () => {
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', fechar);
    };
  }, [zoom]);

  // Troca a frase da abertura (fica parada para quem prefere menos movimento).
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setFi((i) => (i + 1) % FRASES.length), 2800);
    return () => clearInterval(t);
  }, []);

  // Títulos das seções aparecem uma vez, quando entram na tela.
  useEffect(() => {
    const alvos = document.querySelectorAll('.sec h2, .chamada');
    alvos.forEach((el) => el.classList.add('anim-texto'));
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('on');
            io.unobserve(e.target);
          }
        }),
      { rootMargin: '0px 0px -10% 0px' }
    );
    alvos.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="app">
      <style>{CSS}</style>

      <nav className="pill" aria-label="Seções">
        {SECOES.map(([id, nome]) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={ativa === id ? 'true' : undefined}
          >
            {nome}
          </a>
        ))}
        <span className="sep" aria-hidden="true" />
        <button
          type="button"
          className="tema"
          onClick={() => setTema(tema === 'escuro' ? 'claro' : 'escuro')}
          aria-label={tema === 'escuro' ? 'Mudar para tema branco' : 'Mudar para tema preto'}
          title={tema === 'escuro' ? 'Tema branco' : 'Tema preto'}
        >
          {tema === 'escuro' ? (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          )}
        </button>
      </nav>

      <main>
        <section id="inicio" className="hero">
          <div className="wrap hero-grid">
            <div>
              <p className="rise status" style={{ '--i': 0 }}>
                Fortaleza, Ceará. Disponível para estágio e vagas júnior.
              </p>
              <h1 aria-label="Luiz Jardel">
                {'Luiz Jardel'.split('').map((c, i) => (
                  <span key={i} className="letra" style={{ '--l': i }} aria-hidden="true">
                    {c === ' ' ? '\u00A0' : c}
                  </span>
                ))}
              </h1>
              <p className="rise lead" style={{ '--i': 2 }}>
                Desenvolvedor back-end com foco em Java e Spring Boot.
              </p>
              <p className="rise lead lead2" style={{ '--i': 2 }}>
                Construo <span key={fi} className="troca">{FRASES[fi]}</span>.
              </p>
              <div className="rise acoes" style={{ '--i': 3 }}>
                <a className="botao" href="#projetos">
                  Ver projetos
                </a>
                {SOCIAIS.filter(([n]) => ['GitHub', 'LinkedIn', 'E-mail'].includes(n)).map(
                  ([nome, url]) => (
                    <a
                      key={nome}
                      className="link"
                      href={url}
                      target={url.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                    >
                      {nome}
                    </a>
                  )
                )}
              </div>
            </div>
            <div className="rise foto" style={{ '--i': 2 }}>
              <img
                src={minhaFoto}
                alt="Luiz Jardel"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </div>
          </div>
        </section>

        <section id="sobre" className="sec">
          <div className="wrap grade">
            <h2>Sobre</h2>
            <div className="duas">
              <div className="texto">
                <p>
                  Desenvolvedor back-end com foco em Java e Spring Boot, em busca
                  da primeira oportunidade na área.
                </p>
                <p>
                  Minha experiência inclui APIs REST, sistemas com persistência em
                  banco de dados, automações com Python e agentes de I.A rodando
                  localmente. Participei de um Hackathon em equipe como
                  desenvolvedor back-end, implementando o CRUD de produtos e os
                  módulos de pedidos e transferências de um sistema de
                  almoxarifado.
                </p>
                <p>
                  Estudo Análise e Desenvolvimento de Sistemas na Estácio
                  (2025–2027) e invisto em projetos práticos e boas práticas de
                  desenvolvimento, como Git, Clean Code e SOLID.
                </p>
              </div>
              <dl className="stack">
                {STACK.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v.map((n) => <Tec key={n} nome={n} />)}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="projetos" className="sec">
          <div className="wrap">
            <h2 className="topo">Projetos</h2>
          </div>
          <div className="lista-proj">
            {PROJETOS.map((p) => (
              <article key={p.id} className="proj-faixa">
                <div className="wrap proj">
                  <div>
                    <h3>
                      {p.titulo}
                      {p.nota && <span>{p.nota}</span>}
                    </h3>
                    <p className="descricao">{p.descricao}</p>
                    <ul className="tags" aria-label="Tecnologias utilizadas">
                      {p.tecnologias.map((t) => (
                        <li key={t}><Tec nome={t} /></li>
                      ))}
                    </ul>
                    {p.links.length > 0 && (
                      <p className="links">
                        {p.links.map(([nome, url]) => (
                          <a key={nome} className="link" href={url} target="_blank" rel="noreferrer">
                            {nome}
                          </a>
                        ))}
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    className="thumb"
                    onClick={() => setZoom(p.imagem)}
                    aria-label={`Ampliar imagem de ${p.titulo}`}
                  >
                    <img src={p.imagem} alt="" loading="lazy" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="certificados" className="sec">
          <div className="wrap grade">
            <h2>Certificados</h2>
            <ul className="certs">
              {CERTIFICADOS.map(([titulo, inst, horas, ano, img]) => (
                <li key={titulo}>
                  <button type="button" onClick={() => setZoom(img)}>
                    <span className="c-info">
                      <strong>{titulo}</strong>
                      <small>
                        {inst}, {horas}
                      </small>
                    </span>
                    <span className="c-ano">{ano}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contato" className="sec fim">
          <div className="wrap grade contato-grade">
            <h2>Contato</h2>
            <div className="duas contato-duas">
              <p className="chamada">Vamos conversar sobre a sua vaga ou projeto.</p>
              <ul className="redes">
                {SOCIAIS.map(([nome, url]) => (
                  <li key={nome}>
                    <LinkSocial nome={nome} url={url} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      {zoom && (
        <div className="overlay" onClick={() => setZoom(null)} role="dialog" aria-modal="true">
          <button type="button" className="fechar" onClick={() => setZoom(null)} aria-label="Fechar imagem">
            Fechar
          </button>
          <img src={zoom} alt="" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500&family=Instrument+Serif&display=swap');

:root {
  --fundo: #000000;
  --texto: #ececec;
  --suave: #9b9b9b;
  --linha: rgba(255, 255, 255, 0.13);
  --vidro: rgba(0, 0, 0, 0.7);
  --ativo: rgba(255, 255, 255, 0.1);
  --brilho: rgba(255, 255, 255, 0.16);
  --brilho-forte: rgba(255, 255, 255, 0.28);
  --sombra: 0 0 28px var(--brilho);
  --sombra-hover: 0 0 46px var(--brilho-forte);
  --reflexo: rgba(255, 255, 255, 0.16);
  --painel: #111111;
  --overlay: rgba(0, 0, 0, 0.95);
  --serif: 'Instrument Serif', Georgia, 'Times New Roman', serif;
  --sans: 'Instrument Sans', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  color-scheme: dark;
}

:root[data-tema='claro'] {
  --fundo: #ffffff;
  --texto: #0a0a0a;
  --suave: #5c5c5c;
  --linha: rgba(0, 0, 0, 0.14);
  --vidro: rgba(255, 255, 255, 0.78);
  --ativo: rgba(0, 0, 0, 0.07);
  --brilho: rgba(0, 0, 0, 0.28);
  --brilho-forte: rgba(0, 0, 0, 0.46);
  --sombra: 0 0 30px var(--brilho);
  --sombra-hover: 0 0 50px var(--brilho-forte);
  --reflexo: rgba(0, 0, 0, 0.14);
  --painel: #f0f0f0;
  --overlay: rgba(255, 255, 255, 0.96);
  color-scheme: light;
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
  scrollbar-color: var(--suave) var(--fundo);
  scrollbar-width: thin;
}

body { margin: 0; background: var(--fundo); }

.app {
  min-height: 100vh;
  background: var(--fundo);
  color: var(--texto);
  font-family: var(--sans);
  font-size: 1.0625rem;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

.app *, .app *::before, .app *::after { box-sizing: border-box; }
.app h1, .app h2, .app h3, .app p, .app dl, .app dd, .app ul { margin: 0; padding: 0; }
.app ul { list-style: none; }
.app a { color: inherit; text-decoration: none; }
.app button { font: inherit; color: inherit; background: none; border: 0; padding: 0; cursor: pointer; text-align: left; }

.app :focus-visible { outline: 2px solid var(--texto); outline-offset: 3px; border-radius: 2px; }

/* Ocupa toda a largura disponível com respiro proporcional do celular ao desktop */
.wrap {
  width: 100%;
  max-width: none;
  margin: 0 auto;
  padding: 0 clamp(20px, 4.5vw, 72px);
}

/* Menu flutuante */
.pill {
  position: fixed; top: 16px; left: 50%; transform: translateX(-50%);
  z-index: 50; display: flex; align-items: center; gap: 2px; padding: 5px;
  max-width: calc(100vw - 16px); overflow-x: auto; scrollbar-width: none;
  background: var(--vidro);
  backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
  border: 1px solid var(--linha); border-radius: 999px;
}
.pill::-webkit-scrollbar { display: none; }
.pill a {
  display: inline-flex; align-items: center;
  padding: 7px 15px; border-radius: 999px; font-size: 0.9375rem; line-height: 1.2;
  color: var(--suave); white-space: nowrap; transition: color 0.2s, background-color 0.2s;
}
.pill a:hover { color: var(--texto); }
.pill a[aria-current='true'] { color: var(--texto); background: var(--ativo); }

/* Abertura: o único movimento automático da página */
@keyframes rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
.rise { animation: rise 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both; animation-delay: calc(var(--i) * 90ms); }

.hero { position: relative; min-height: 100svh; display: flex; align-items: center; padding: 112px 0 72px; }
.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  gap: clamp(32px, 5vw, 80px);
  align-items: center;
}
.foto {
  justify-self: end;
  width: 100%;
  max-width: clamp(280px, 28vw, 440px);
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid var(--linha);
  box-shadow: 0 0 56px var(--brilho);
  background: var(--fundo);
}
.foto img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 56% 58%;
  transform: scale(1.25);
  transform-origin: 56% 58%;
}
.hero::before { content: ''; position: absolute; top: 14%; left: 50%; width: min(760px, 90vw); height: 340px; transform: translateX(-50%); background: radial-gradient(closest-side, var(--brilho), transparent); opacity: 0.55; filter: blur(24px); pointer-events: none; }
.hero-grid { position: relative; }
@keyframes letra { from { opacity: 0; transform: translateY(0.45em); filter: blur(6px); } to { opacity: 1; transform: none; filter: none; } }
.letra { display: inline-block; animation: letra 0.85s cubic-bezier(0.2, 0.7, 0.2, 1) both; animation-delay: calc(var(--l) * 55ms + 180ms); }
@keyframes troca { from { opacity: 0; transform: translateY(0.4em); filter: blur(4px); } to { opacity: 1; transform: none; filter: none; } }
.troca { display: inline-block; animation: troca 0.6s cubic-bezier(0.2, 0.7, 0.2, 1) both; }
.lead2 { margin-top: 2px; }
.anim-texto { opacity: 0; transform: translateY(14px); transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.2, 0.7, 0.2, 1); }
.anim-texto.on { opacity: 1; transform: none; }
.status { color: var(--suave); font-size: 1rem; margin-bottom: 14px; }
.hero h1 {
  text-shadow: 0 0 32px var(--brilho);
  font-family: var(--serif); font-weight: 400;
  font-size: clamp(3.3rem, 8.8vw, 7.2rem); line-height: 0.96; letter-spacing: -0.02em;
  margin-bottom: 24px;
}
.lead { max-width: 40rem; font-size: clamp(1.0625rem, 1.35vw, 1.25rem); color: var(--texto); }
.acoes { display: flex; flex-wrap: wrap; align-items: center; gap: 12px 28px; margin-top: 32px; }
.botao {
  background: var(--texto); color: var(--fundo) !important; font-weight: 500; font-size: 1rem;
  padding: 12px 24px; border-radius: 999px; transition: opacity 0.2s, box-shadow 0.25s;
}
.botao:hover { opacity: 0.92; box-shadow: 0 0 28px var(--brilho); }

.link { color: var(--texto); font-size: 1rem; background: linear-gradient(currentColor, currentColor) 0 100% / 0 1px no-repeat; transition: background-size 0.25s; padding-bottom: 2px; }
.link:hover { background-size: 100% 1px; }

/* Seções */
.sec { width: 100%; padding: clamp(68px, 8vw, 104px) 0; border-top: 1px solid var(--linha); background: var(--fundo); }
.grade {
  display: grid;
  grid-template-columns: clamp(160px, 16vw, 230px) minmax(0, 1fr);
  gap: clamp(24px, 4vw, 56px);
}
.sec h2 { font-family: var(--serif); font-weight: 400; font-size: clamp(1.9rem, 2.7vw, 2.4rem); line-height: 1.1; }
.sec p { max-width: 46rem; }
.sec .texto p { font-size: 1.0625rem; }
.sec .texto p + p { margin-top: 1.1em; }
.duas {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(32px, 5vw, 64px);
  align-items: start;
}

.stack { border-top: 1px solid var(--linha); }
.stack div { display: grid; grid-template-columns: 155px minmax(0, 1fr); gap: 20px; padding: 15px 0; border-bottom: 1px solid var(--linha); }
.stack dt { color: var(--suave); font-size: 1rem; }
.stack dd { display: flex; flex-wrap: wrap; gap: 8px 20px; }
.tec { display: inline-flex; align-items: center; gap: 8px; font-size: 1rem; }
.tec svg { flex-shrink: 0; opacity: 0.88; }

/* Projetos — faixa, linha horizontal e aura/animação na print */
.topo { margin-bottom: clamp(36px, 5vw, 56px); }
.lista-proj { width: 100%; }
.proj-faixa { width: 100%; background: var(--fundo); border-top: 1px solid var(--linha); }
.proj-faixa:first-child { border-top: 0; }
.proj {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.12fr);
  gap: clamp(28px, 5vw, 64px);
  align-items: center;
  padding-top: 52px;
  padding-bottom: 52px;
}
.proj-faixa:first-child .proj { padding-top: 0; }
.proj-faixa:last-child .proj { padding-bottom: 0; }
.proj h3 { font-size: clamp(1.4rem, 1.7vw, 1.6rem); font-weight: 500; line-height: 1.3; margin-bottom: 4px; }
.proj h3 span { display: block; color: var(--suave); font-weight: 400; font-size: 1rem; margin-top: 4px; }
.proj p { color: var(--suave); }
.proj .descricao { margin-top: 18px; font-size: 1.0625rem; line-height: 1.7; }
.tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 24px; }
.tags li { font-size: 0.875rem; line-height: 1; padding: 9px 14px; border: 1px solid var(--linha); border-radius: 999px; color: var(--texto); }
.proj .links { margin-top: 24px; display: flex; gap: 20px; }
.proj .links .link { font-size: 1rem; }

@keyframes brilhoSuave {
  0%, 100% { box-shadow: var(--sombra); }
  50% { box-shadow: var(--sombra-hover); }
}

.thumb {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid var(--linha);
  background: var(--painel);
  cursor: zoom-in;
  box-shadow: var(--sombra);
  animation: brilhoSuave 4.5s ease-in-out infinite;
  transition: transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1), border-color 0.3s ease, box-shadow 0.35s ease;
}
.thumb::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    115deg,
    transparent 20%,
    var(--reflexo) 50%,
    transparent 80%
  );
  transform: translateX(-130%) skewX(-18deg);
  transition: transform 0.75s cubic-bezier(0.2, 0.7, 0.2, 1), opacity 0.3s ease;
  opacity: 0;
  pointer-events: none;
}
.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.55s cubic-bezier(0.2, 0.7, 0.2, 1), filter 0.35s ease;
}
.thumb:hover,
.thumb:focus-visible {
  transform: translateY(-3px);
  border-color: var(--texto);
  box-shadow: var(--sombra-hover);
}
.thumb:hover::after,
.thumb:focus-visible::after {
  opacity: 1;
  transform: translateX(130%) skewX(-18deg);
}
.thumb:hover img,
.thumb:focus-visible img {
  transform: scale(1.035);
  filter: brightness(1.04);
}

/* Certificados */
.certs { width: 100%; }
.certs li { border-top: 1px solid var(--linha); }
.certs li:first-child { border-top: 0; }
.certs button {
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: baseline;
  gap: 20px;
  padding: 18px 0;
  cursor: zoom-in;
}
.c-info strong { display: block; font-size: 1.0625rem; font-weight: 500; transition: color 0.2s; }
.c-info small { color: var(--suave); font-size: 0.9375rem; }
.c-ano { color: var(--suave); font-size: 0.9375rem; flex-shrink: 0; }
.certs button:hover strong { text-decoration: underline; text-underline-offset: 4px; }

@media (min-width: 900px) {
  .certs {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 clamp(32px, 4vw, 64px);
  }
  .certs li:nth-child(2) {
    border-top: 0;
  }
}

/* Contato */
.fim { padding-bottom: 84px; }
.contato-grade, .contato-duas { align-items: start; }
.chamada { font-family: var(--serif); font-size: clamp(2.1rem, 3.8vw, 3rem); line-height: 1.15; max-width: 22ch !important; }
.redes { border-top: 1px solid var(--linha); width: 100%; }
.redes li { padding: 16px 0; border-bottom: 1px solid var(--linha); font-size: 1.125rem; }
.social-item { display: inline-flex; align-items: center; gap: 10px; }
.social-item svg { flex-shrink: 0; opacity: 0.9; }

/* Botão de tema, alinhado ao centro da NavBar */
.pill > * { flex-shrink: 0; }
.pill .sep { width: 1px; height: 18px; background: var(--linha); align-self: center; margin: 0 6px 0 4px; }
.pill .tema {
  width: 32px; height: 32px;
  display: inline-flex; align-items: center; justify-content: center;
  align-self: center; text-align: center; line-height: 1;
  border-radius: 50%; color: var(--suave);
  transition: color 0.2s, background-color 0.2s;
}
.pill .tema svg { display: block; }
.pill .tema:hover { color: var(--texto); background: var(--ativo); }

/* Imagem ampliada */
@keyframes aparecer { from { opacity: 0; } to { opacity: 1; } }
.overlay { position: fixed; inset: 0; z-index: 100; background: var(--overlay); display: flex; align-items: center; justify-content: center; padding: 56px 16px 16px; cursor: zoom-out; animation: aparecer 0.2s ease; }
.overlay img { max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px; cursor: default; }
.fechar { position: absolute; top: 16px; right: 20px; color: var(--texto); font-size: 0.9375rem; padding: 6px 12px; border: 1px solid var(--linha); border-radius: 999px; }
.fechar:hover { background: var(--ativo); }

@media (max-width: 860px) {
  .grade { grid-template-columns: 1fr; gap: 28px; }
  .duas { grid-template-columns: 1fr; gap: 40px; }
  .hero { padding: 96px 0 64px; min-height: auto; }
  .hero-grid { grid-template-columns: 1fr; gap: 32px; }
  .foto { order: -1; justify-self: center; max-width: 240px; }
  .stack div { grid-template-columns: 1fr; gap: 4px; }
  .proj { grid-template-columns: 1fr; gap: 24px; padding-top: 40px; padding-bottom: 40px; }
  .thumb { order: -1; aspect-ratio: 16 / 9; }
  .pill a { padding: 6px 10px; font-size: 0.875rem; }
  .lead2 { min-height: 3.4em; }
}

@media (max-width: 520px) {
  .wrap { padding: 0 18px; }
  .pill { padding: 4px; }
  .pill a { padding: 6px 8px; font-size: 0.8125rem; }
  .pill a:first-child { display: none; }
  .pill .sep { margin: 0 3px; }
  .hero h1 { font-size: clamp(2.9rem, 13.5vw, 3.8rem); }
  .acoes { gap: 12px 20px; }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .rise, .overlay, .letra, .troca, .thumb { animation: none; }
  .thumb::after { display: none; }
  .anim-texto { opacity: 1; transform: none; }
  .app * { transition: none !important; }
}
`;
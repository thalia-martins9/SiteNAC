

const SITE = {
  instagram: {
    url: "https://www.instagram.com/nucleodeartecultura/",
    usuario: "@nucleodeartecultura",
  },
  youtube: {
    url: "", // cole aqui o link do canal para o botão virar link
    nome: "Canal da Cultura - IFSULDEMINAS",
  },
  // Cole o e-mail do NAC para ativar o formulário de contato.
  // Enquanto estiver vazio, o formulário não aparece.
  email: "",
};

const EVENTOS = [
  {
    id: "jardim-de-tracos",
    titulo: "Jardim de Traços",
    tipo: "Festival de Artes Visuais",
    data: "2026-04-30",
    horario: "", // ex.: "14h às 17h30"
    local: "", // ex.: "Auditório Central"
    status: "",
    cor: "pink",
    descricao: "Festival de Artes Visuais do NAC.",
    inscricao: null, // ex.: { url: "https://...", rotulo: "Fazer inscrição" }
    fotos: [], // ex.: [{ img: "https://...", alt: "Descrição da foto" }]
  },
  {
    id: "as-quatro-estacoes",
    titulo: "As Quatro Estações",
    tipo: "Festival de Música",
    data: null,
    dataTexto: "A definir",
    horario: "",
    local: "",
    status: "Adiado",
    cor: "green",
    descricao: "Festival de Música do NAC, adiado por motivos de logística. A nova data será divulgada em breve pelos canais oficiais.",
    inscricao: null,
    fotos: [],
  },
  {
    id: "mova-2026",
    titulo: "MOVA",
    tipo: "Festival de Dança",
    data: "2026-10-21",
    horario: "",
    local: "",
    status: "Confirmado",
    cor: "blue",
    descricao: "Festival de Dança do NAC, com o tema “Todo espaço é palco”.",
    inscricao: null,
    fotos: [],
  },
];

const NOTICIAS = [
  {
    destaque: true,
    rotulo: "Festival MOVA 2026",
    titulo: "Todo espaço é palco",
    texto: "Nosso Festival de Dança acontece normalmente! A dança continua ocupando seu espaço.",
    evento: "mova-2026", // liga ao evento da agenda (opcional)
    img: "https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=600&q=80",
    alt: "Público em um festival cultural",
  },
  {
    rotulo: "Aviso importante",
    titulo: "Festival Musical As Quatro Estações",
    texto: "Adiado por motivos de logística. Nova data será divulgada em breve pelos canais oficiais.",
    evento: "as-quatro-estacoes",
  },
];

const PROJETOS = [
  {
    titulo: "Canto Coral IFSULDEMINAS",
    categoria: "Música",
    cor: "pink",
    objetivo: "Desenvolver percepção vocal e integrar a comunidade acadêmica em festivais regionais.",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    alt: "Canto Coral IFSULDEMINAS",
  },
  {
    titulo: "Grupo Teatral “Expressão Livre”",
    categoria: "Artes Cênicas",
    cor: "blue",
    objetivo: "Trabalhar desinibição, expressão corporal e montagem de peças dramáticas.",
    img: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=800&q=80",
    alt: "Grupo Teatral Expressão Livre",
  },
];

const GALERIA_FOTOS = [
  {
    titulo: "Exposição Entre Barros e Brasis",
    emoji: "🖼️",
    img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80",
    alt: "Quadros expostos em uma galeria",
  },
  {
    titulo: "Encontro de Corais",
    emoji: "🎵",
    img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=600&q=80",
    alt: "Apresentação musical em um palco",
  },
  {
    titulo: "Oficinas de Desenho e Pintura",
    emoji: "🎨",
    img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80",
    alt: "Materiais de desenho e pintura sobre uma bancada",
  },
];

// Vídeos: use youtubeId (parte final do link do YouTube) OU src (arquivo .mp4).
// Para arquivos .mp4, informe "legendas" (arquivo .vtt) — as legendas são obrigatórias.
const GALERIA_VIDEOS = [
  // {
  //   titulo: "Encontro de Corais 2026",
  //   youtubeId: "AbCdEfGhIjK",
  // },
  // {
  //   titulo: "Apresentação do grupo teatral",
  //   src: "/video/teatro.mp4",
  //   poster: "/img/teatro.jpg",
  //   legendas: "/video/teatro.vtt",
  // },
];

const GALERIA_TRABALHOS = [
  // {
  //   titulo: "Nome do trabalho",
  //   autor: "Nome do estudante",
  //   descricao: "Uma frase sobre o trabalho.",
  //   img: "/img/trabalho.jpg",
  //   alt: "Descrição da imagem para leitores de tela",
  // },
];

const MEMORIA = [
  {
    ano: "Ano 2025",
    cor: "pink",
    titulo: "Criação e fundação do NAC",
    texto: "Instituição oficial via portaria e criação dos primeiros editais de extensão artística.",
  },
  {
    ano: "Ano 2026",
    cor: "lime",
    titulo: "Lançamento de bolsas para o projeto",
    texto: "Alguns dos nossos alunos conseguiram bolsas",
  },
];

/* ===================== PARTE 2 — CÓDIGO ===================== */

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;

  /* ---------- Utilidades ---------- */

  const MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
  const MESES_LONGOS = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  const TITULOS = {
    home: "Início",
    sobre: "Sobre o NAC",
    agenda: "Agenda",
    projetos: "Projetos e Ações",
    galeria: "Galeria",
    divulgacao: "Notícias",
    memoria: "Memória",
    contatos: "Contato",
  };

  const esc = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const safeUrl = (url) => (/^(https?:|mailto:|#|\/)/i.test(url || "") ? url : "");

  const externalLink = (url, classes, inner) =>
    `<a href="${esc(safeUrl(url))}" target="_blank" rel="noopener noreferrer" class="${classes}">${inner}<span class="visually-hidden"> (abre em nova aba)</span></a>`;

  // Imagens leves: gera versões de 400px e 800px quando a imagem é do Unsplash.
  const imgTag = ({ src, alt, w = 800, h = 600, sizes = "100vw" }) => {
    const isUnsplash = src.includes("images.unsplash.com");
    const at = (width) => src.replace(/w=\d+/, `w=${width}`);
    const srcset = isUnsplash ? ` srcset="${esc(at(400))} 400w, ${esc(at(800))} 800w" sizes="${sizes}"` : "";
    return `<img src="${esc(isUnsplash ? at(800) : src)}"${srcset} alt="${esc(alt)}" width="${w}" height="${h}" loading="lazy" decoding="async">`;
  };

  const emptyState = ({ icone, titulo, texto, link }) => `
    <div class="empty">
      <i class="${icone}" aria-hidden="true"></i>
      <div>
        <h3>${esc(titulo)}</h3>
        <p>${esc(texto)}</p>
        ${link ? `<a class="text-link" href="${esc(link.href)}">${esc(link.rotulo)}</a>` : ""}
      </div>
    </div>`;

  /* ---------- Datas e status dos eventos ---------- */

  const parseDate = (iso) => (iso ? new Date(`${iso}T00:00:00`) : null);

  const startOfToday = () => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  };

  const eventState = (ev) => {
    const d = parseDate(ev.data);
    if (!d) return "indefinido";
    const t = startOfToday().getTime();
    if (d.getTime() < t) return "passado";
    if (d.getTime() === t) return "hoje";
    return "futuro";
  };

  const statusInfo = (ev) => {
    const state = eventState(ev);
    if (state === "passado") return { label: "Realizado", cls: "realizado" };
    if (state === "hoje") return { label: "Hoje", cls: "hoje" };
    const s = (ev.status || "").toLowerCase();
    if (s === "adiado") return { label: "Adiado", cls: "adiado" };
    if (s === "confirmado") return { label: "Confirmado", cls: "confirmado" };
    return { label: ev.status || (state === "futuro" ? "Em breve" : "A definir"), cls: "breve" };
  };

  const timeOf = (ev) => parseDate(ev.data)?.getTime() ?? Infinity;
  const upcomingEvents = () =>
    EVENTOS.filter((ev) => eventState(ev) !== "passado").sort((a, b) => (timeOf(a) === timeOf(b) ? 0 : timeOf(a) - timeOf(b)));
  const pastEvents = () => EVENTOS.filter((ev) => eventState(ev) === "passado").sort((a, b) => timeOf(b) - timeOf(a));

  const longDate = (ev) => {
    const d = parseDate(ev.data);
    return d ? `${d.getDate()} de ${MESES_LONGOS[d.getMonth()]} de ${d.getFullYear()}` : ev.dataTexto || "A definir";
  };

  /* ---------- Montagem dos blocos ---------- */

  const eventRow = (ev) => {
    const st = statusInfo(ev);
    const d = parseDate(ev.data);
    const cor = ev.cor || "pink";
    const tile = d
      ? `<span class="agenda-date date-${esc(cor)}"><span class="agenda-day">${String(d.getDate()).padStart(2, "0")}</span><span class="agenda-month">${MESES[d.getMonth()]} ${d.getFullYear()}</span></span>`
      : `<span class="agenda-date agenda-date-text date-${esc(cor)}">${esc(ev.dataTexto || "A definir")}</span>`;
    return `
      <li class="agenda-row">
        ${tile}
        <div class="agenda-info">
          <a class="agenda-name" href="#evento-${esc(ev.id)}">${esc(ev.titulo)}</a>
          <span class="agenda-type">${esc(ev.tipo)}</span>
        </div>
        <span class="status status-${st.cls}">${st.label}</span>
      </li>`;
  };

  const eventList = (list, vazio) =>
    list.length ? `<ul class="agenda-list">${list.map(eventRow).join("")}</ul>` : emptyState(vazio);

  const canaisHome = () => {
    const ig = externalLink(
      SITE.instagram.url,
      "channel",
      `<i class="fa-brands fa-instagram" aria-hidden="true"></i><span><span class="channel-name">Instagram</span><span class="channel-handle">${esc(SITE.instagram.usuario)}</span></span>`
    );
    const ytInner = `<i class="fa-brands fa-youtube" aria-hidden="true"></i><span><span class="channel-name">YouTube</span><span class="channel-handle">${esc(SITE.youtube.nome)}</span></span>`;
    const yt = SITE.youtube.url
      ? externalLink(SITE.youtube.url, "channel channel-blue", ytInner)
      : `<div class="channel channel-blue">${ytInner}</div>`;
    return `<div class="channel-list">${ig}${yt}</div>`;
  };

  const canaisContato = () => {
    const ig = externalLink(
      SITE.instagram.url,
      "contact-row",
      `<i class="fa-brands fa-instagram icon-pink" aria-hidden="true"></i><span><b>Instagram:</b> ${esc(SITE.instagram.usuario)}</span>`
    );
    const ytInner = `<i class="fa-brands fa-youtube icon-blue" aria-hidden="true"></i><span><b>YouTube:</b> ${esc(SITE.youtube.nome)}</span>`;
    const yt = SITE.youtube.url ? externalLink(SITE.youtube.url, "contact-row", ytInner) : `<p class="contact-row">${ytInner}</p>`;
    const mail = SITE.email
      ? `<li><a class="contact-row" href="mailto:${esc(SITE.email)}"><i class="fa-solid fa-envelope icon-pink" aria-hidden="true"></i><span><b>E-mail:</b> ${esc(SITE.email)}</span></a></li>`
      : "";
    return `<ul class="contact-list"><li>${ig}</li><li>${yt}</li>${mail}</ul>`;
  };

  const contatoForm = () =>
    SITE.email
      ? `<form class="form" data-contact-form>
          <div><label for="c-nome">Nome ou entidade</label><input id="c-nome" name="nome" type="text" autocomplete="name" required></div>
          <div><label for="c-msg">Mensagem</label><textarea id="c-msg" name="mensagem" rows="4" required></textarea></div>
          <button type="submit" class="btn btn-primary"><i class="fa-regular fa-paper-plane" aria-hidden="true"></i><span>Enviar mensagem</span></button>
          <p class="about-text">Ao enviar, abrimos o seu programa de e-mail com a mensagem pronta.</p>
        </form>`
      : `<p class="about-text">Para enviar propostas, tirar dúvidas ou sugerir melhorias neste site, mande uma mensagem direta pelo Instagram do NAC.</p>
         ${externalLink(SITE.instagram.url, "btn btn-primary", `<i class="fa-brands fa-instagram" aria-hidden="true"></i><span>Chamar no Instagram</span>`)}`;

  const projetos = () => `
    <div class="project-grid">
      ${PROJETOS.map(
        (p) => `
        <article class="project-card">
          <div class="project-media">
            ${imgTag({ src: p.img, alt: p.alt, sizes: "(min-width: 768px) 50vw, 100vw" })}
            <span class="pill pill-${esc(p.cor)}">${esc(p.categoria)}</span>
          </div>
          <div class="project-body">
            <h3 class="project-title">${esc(p.titulo)}</h3>
            <p class="project-text"><b>Objetivo:</b> ${esc(p.objetivo)}</p>
          </div>
        </article>`
      ).join("")}
    </div>`;

  const galeriaFotos = () =>
    GALERIA_FOTOS.length
      ? `<div class="gallery-grid">${GALERIA_FOTOS.map(
          (f) => `
          <figure class="gallery-card">
            <div class="gallery-media">${imgTag({ src: f.img, alt: f.alt, w: 600, h: 400, sizes: "(min-width: 768px) 33vw, 100vw" })}</div>
            <figcaption><span><span aria-hidden="true">${f.emoji || ""}</span> ${esc(f.titulo)}</span></figcaption>
          </figure>`
        ).join("")}</div>`
      : emptyState({ icone: "fa-regular fa-image", titulo: "Ainda não há fotos", texto: "Os registros fotográficos serão publicados aqui." });

  const galeriaVideos = () =>
    GALERIA_VIDEOS.length
      ? `<div class="gallery-grid">${GALERIA_VIDEOS.map((v, i) => {
          const poster = v.poster || (v.youtubeId ? `https://i.ytimg.com/vi/${encodeURIComponent(v.youtubeId)}/hqdefault.jpg` : "");
          return `
          <figure class="gallery-card">
            <div class="gallery-media">
              <button type="button" class="video-play" data-video-index="${i}" aria-label="Reproduzir vídeo: ${esc(v.titulo)}">
                ${poster ? `<img src="${esc(poster)}" alt="" width="480" height="360" loading="lazy" decoding="async">` : ""}
                <span class="video-icon"><i class="fa-solid fa-play" aria-hidden="true"></i></span>
              </button>
            </div>
            <figcaption><span>${esc(v.titulo)}</span><small>Vídeo com legendas</small></figcaption>
          </figure>`;
        }).join("")}</div>`
      : emptyState({
          icone: "fa-solid fa-film",
          titulo: "Os vídeos chegam em breve",
          texto: "Todos os vídeos serão publicados com legendas. Enquanto isso, assista às apresentações no canal do YouTube.",
          link: SITE.youtube.url ? { href: SITE.youtube.url, rotulo: "Abrir o canal no YouTube" } : null,
        });

  const galeriaTrabalhos = () =>
    GALERIA_TRABALHOS.length
      ? `<div class="gallery-grid">${GALERIA_TRABALHOS.map(
          (t) => `
          <figure class="gallery-card">
            <div class="gallery-media">${imgTag({ src: t.img, alt: t.alt, w: 600, h: 400, sizes: "(min-width: 768px) 33vw, 100vw" })}</div>
            <figcaption><span>${esc(t.titulo)}</span><small>${esc(t.autor)}${t.descricao ? ` — ${esc(t.descricao)}` : ""}</small></figcaption>
          </figure>`
        ).join("")}</div>`
      : emptyState({
          icone: "fa-solid fa-paintbrush",
          titulo: "Este espaço é dos estudantes",
          texto: "Aqui vão aparecer desenhos, pinturas, músicas e outras produções feitas no campus. Quer mostrar o seu trabalho?",
          link: { href: "#contatos", rotulo: "Fale com o NAC" },
        });

  const noticiaDestaque = () => {
    const n = NOTICIAS.find((item) => item.destaque);
    if (!n) return "";
    const ev = EVENTOS.find((e) => e.id === n.evento);
    const st = ev ? statusInfo(ev) : null;
    return `
      <article class="feature">
        ${n.img ? `<div class="feature-media">${imgTag({ src: n.img, alt: n.alt || "", w: 600, h: 400, sizes: "(min-width: 768px) 30vw, 100vw" })}</div>` : ""}
        <div class="feature-body">
          <div class="feature-tags">
            <span class="tag">${esc(n.rotulo)}</span>
            ${st ? `<span class="status status-${st.cls}">${st.label}</span>` : ""}
          </div>
          <h2 class="feature-title">${esc(n.titulo)}</h2>
          <p class="feature-text">${esc(n.texto)}</p>
          ${ev ? `<p><a class="text-link" href="#evento-${esc(ev.id)}">Ver detalhes do evento</a></p>` : ""}
        </div>
      </article>`;
  };

  const noticiasAvisos = () => {
    const avisos = NOTICIAS.filter((n) => !n.destaque);
    if (!avisos.length) return emptyState({ icone: "fa-regular fa-bell", titulo: "Nenhum aviso no momento", texto: "Quando houver comunicados do NAC, eles aparecem aqui." });
    return `<div class="notice-grid">${avisos
      .map(
        (n) => `
        <article class="card card-stack">
          <span class="tag tag-soft">${esc(n.rotulo)}</span>
          <h3 class="card-title">${esc(n.titulo)}</h3>
          <div class="callout"><i class="fa-solid fa-circle-info" aria-hidden="true"></i><p>${esc(n.texto)}</p></div>
          ${n.evento ? `<p><a class="text-link" href="#evento-${esc(n.evento)}">Ver página do evento</a></p>` : ""}
        </article>`
      )
      .join("")}</div>`;
  };

  const inscricoes = () => {
    const abertas = EVENTOS.filter((ev) => ev.inscricao?.url && eventState(ev) !== "passado");
    if (!abertas.length)
      return emptyState({
        icone: "fa-regular fa-pen-to-square",
        titulo: "Nenhuma inscrição aberta agora",
        texto: "Quando uma oficina ou evento abrir inscrições, o link aparece aqui e na página do evento.",
      });
    return `<ul class="agenda-list">${abertas
      .map(
        (ev) => `
        <li class="agenda-row">
          <span class="agenda-date date-${esc(ev.cor || "pink")}"><span class="agenda-day">${String(parseDate(ev.data)?.getDate() ?? "").padStart(2, "0")}</span><span class="agenda-month">${parseDate(ev.data) ? MESES[parseDate(ev.data).getMonth()] : ""}</span></span>
          <div class="agenda-info"><span class="agenda-name">${esc(ev.titulo)}</span><span class="agenda-type">${esc(ev.tipo)}</span></div>
          ${externalLink(ev.inscricao.url, "btn btn-primary", esc(ev.inscricao.rotulo || "Fazer inscrição"))}
        </li>`
      )
      .join("")}</ul>`;
  };

  const memoriaLinha = () => `
    <div class="timeline">
      ${MEMORIA.map(
        (m) => `
        <article class="timeline-item">
          <span class="timeline-dot dot-${esc(m.cor)}-fill" aria-hidden="true"></span>
          <div class="timeline-card">
            <span class="year-badge badge-${esc(m.cor)}">${esc(m.ano)}</span>
            <h2 class="timeline-title">${esc(m.titulo)}</h2>
            <p class="timeline-text"><b>Resultados:</b> ${esc(m.texto)}</p>
          </div>
        </article>`
      ).join("")}
    </div>`;

  const emptyEvents = (txt) => ({ icone: "fa-regular fa-calendar", titulo: txt.titulo, texto: txt.texto });

  const slots = {
    "home-proximos": () =>
      eventList(upcomingEvents().slice(0, 3), emptyEvents({ titulo: "Sem eventos marcados agora", texto: "Novas datas serão divulgadas em breve. Enquanto isso, reveja o que já aconteceu na Memória." })),
    "agenda-proximos": () =>
      eventList(upcomingEvents(), emptyEvents({ titulo: "Sem eventos marcados agora", texto: "Novas datas serão divulgadas em breve pelos canais oficiais." })),
    "agenda-passados": () =>
      eventList(pastEvents(), emptyEvents({ titulo: "Ainda não há eventos realizados", texto: "Os eventos que já aconteceram ficam guardados aqui." })),
    "memoria-eventos": () =>
      eventList(pastEvents(), emptyEvents({ titulo: "Ainda não há registros", texto: "Depois de cada evento, os registros ficam guardados aqui." })),
    "memoria-linha": memoriaLinha,
    "canais-home": canaisHome,
    "canais-contato": canaisContato,
    "contato-form": contatoForm,
    projetos,
    "galeria-fotos": galeriaFotos,
    "galeria-videos": galeriaVideos,
    "galeria-trabalhos": galeriaTrabalhos,
    "noticias-destaque": noticiaDestaque,
    "noticias-avisos": noticiasAvisos,
    inscricoes,
  };

  Object.entries(slots).forEach(([name, render]) => {
    const el = document.querySelector(`[data-slot="${name}"]`);
    if (el) el.innerHTML = render();
  });

  /* ---------- Página de cada evento ---------- */

  const renderEvento = (ev) => {
    const st = statusInfo(ev);
    const state = eventState(ev);
    const cor = ev.cor || "pink";

    let inscricaoHtml;
    if (ev.inscricao?.url && state !== "passado") {
      inscricaoHtml = externalLink(ev.inscricao.url, "btn btn-primary", esc(ev.inscricao.rotulo || "Fazer inscrição"));
    } else if (state === "passado") {
      inscricaoHtml = "Encerradas";
    } else {
      inscricaoHtml = esc(ev.inscricao?.texto || "Informações em breve nos canais oficiais");
    }

    const registros = ev.fotos?.length
      ? `<div class="gallery-grid">${ev.fotos
          .map(
            (f) => `<figure class="gallery-card"><div class="gallery-media">${imgTag({ src: f.img, alt: f.alt || "", w: 600, h: 400, sizes: "(min-width: 768px) 33vw, 100vw" })}</div>${f.legenda ? `<figcaption><span>${esc(f.legenda)}</span></figcaption>` : ""}</figure>`
          )
          .join("")}</div>`
      : emptyState({
          icone: "fa-regular fa-images",
          titulo: state === "passado" ? "Os registros chegam em breve" : "Os registros ficam aqui depois do evento",
          texto: state === "passado" ? "As fotos e vídeos desta atividade serão publicados nesta página." : "Depois que o evento acontecer, as fotos e vídeos aparecem nesta página.",
        });

    return `
      <p><a class="back-link" href="#agenda"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i> Voltar para a agenda</a></p>
      <header class="event-head event-head-${esc(cor)}">
        <span class="status status-${st.cls}">${st.label}</span>
        <p class="event-type">${esc(ev.tipo)}</p>
        <h1 class="section-title" id="t-evento">${esc(ev.titulo)}</h1>
      </header>
      <dl class="facts">
        <div class="fact"><dt>Data</dt><dd>${esc(longDate(ev))}</dd></div>
        <div class="fact"><dt>Horário</dt><dd>${esc(ev.horario || "A confirmar")}</dd></div>
        <div class="fact"><dt>Local</dt><dd>${esc(ev.local || "A confirmar")}</dd></div>
        <div class="fact"><dt>Inscrição</dt><dd>${inscricaoHtml}</dd></div>
      </dl>
      <div class="card card-stack">
        <h2 class="card-heading">Sobre o evento</h2>
        <p class="about-text">${esc(ev.descricao)}</p>
      </div>
      <div class="block">
        <h2 class="block-title block-title-green"><i class="fa-regular fa-images" aria-hidden="true"></i> Registros da atividade</h2>
        ${registros}
      </div>`;
  };

  /* ---------- Tamanho da fonte ---------- */

  const FONT = { min: 12, max: 22, step: 2, initial: 16 };
  const FONT_KEY = "nac-font-size";

  const readStored = (key) => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  };

  const store = (key, value) => {
    try {
      localStorage.setItem(key, String(value));
    } catch {
      /* armazenamento indisponível: segue sem salvar */
    }
  };

  const storedFont = Number(readStored(FONT_KEY));
  let fontSize = storedFont >= FONT.min && storedFont <= FONT.max ? storedFont : FONT.initial;

  const applyFontSize = (value) => {
    fontSize = Math.min(FONT.max, Math.max(FONT.min, value));
    root.style.setProperty("--base-font-size", `${fontSize}px`);
    store(FONT_KEY, fontSize);
  };

  const fontActions = {
    inc: () => applyFontSize(fontSize + FONT.step),
    dec: () => applyFontSize(fontSize - FONT.step),
    reset: () => applyFontSize(FONT.initial),
  };

  document.querySelectorAll("[data-font-action]").forEach((button) => {
    button.addEventListener("click", () => fontActions[button.dataset.fontAction]?.());
  });

  applyFontSize(fontSize);

  /* ---------- Alto contraste ---------- */

  const CONTRAST_KEY = "nac-contrast";
  const contrastButton = document.querySelector("[data-contrast-toggle]");

  const applyContrast = (isHigh, save = true) => {
    root.dataset.contrast = isHigh ? "high" : "normal";
    contrastButton?.setAttribute("aria-pressed", String(isHigh));
    if (save) store(CONTRAST_KEY, isHigh ? "high" : "normal");
  };

  applyContrast(readStored(CONTRAST_KEY) === "high", false);
  contrastButton?.addEventListener("click", () => applyContrast(root.dataset.contrast !== "high"));

  /* ---------- Menu no celular ---------- */

  const MOBILE_MENU_QUERY = "(max-width: 1099px)";
  const menuToggle = document.getElementById("menu-toggle");
  const navLinksList = document.getElementById("nav-links");
  const mobileQuery = window.matchMedia(MOBILE_MENU_QUERY);

  const setMenuOpen = (isOpen) => {
    if (!menuToggle || !navLinksList) return;
    navLinksList.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação");
  };

  menuToggle?.addEventListener("click", () => setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true"));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle?.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  mobileQuery.addEventListener("change", (event) => {
    if (!event.matches) setMenuOpen(false);
  });

  /* ---------- Navegação entre páginas ---------- */

  const main = document.getElementById("conteudo");
  const sections = Array.from(document.querySelectorAll(".tab-content"));
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));

  // "Ir para o conteúdo" não pode mudar o endereço (isso levaria à Home)
  document.querySelector("[data-skip-link]")?.addEventListener("click", (event) => {
    event.preventDefault();
    main?.focus();
  });

  const getRoute = () => {
    const hash = decodeURIComponent(location.hash.slice(1));
    if (hash.startsWith("evento-")) {
      const ev = EVENTOS.find((item) => item.id === hash.slice("evento-".length));
      if (ev) return { sectionId: "evento", navId: "agenda", event: ev };
    }
    if (hash !== "evento" && sections.some((section) => section.id === hash)) {
      return { sectionId: hash, navId: hash };
    }
    return { sectionId: "home", navId: "home" };
  };

  const showTab = ({ moveFocus }) => {
    const route = getRoute();
    let activeSection = null;

    if (route.event) {
      document.getElementById("evento-conteudo").innerHTML = renderEvento(route.event);
    }

    sections.forEach((section) => {
      const isActive = section.id === route.sectionId;
      section.classList.toggle("active-tab", isActive);
      if (isActive) activeSection = section;
    });

    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${route.navId}`;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    const pageName = route.event ? route.event.titulo : TITULOS[route.sectionId];
    document.title = route.sectionId === "home" ? "NAC - Núcleo de Arte e Cultura | IFSULDEMINAS" : `${pageName} | NAC - IFSULDEMINAS`;

    window.scrollTo({ top: 0 });

    if (moveFocus && activeSection) {
      activeSection.focus({ preventScroll: true });
    }
  };

  navLinks.forEach((link) => link.addEventListener("click", () => setMenuOpen(false)));

  window.addEventListener("hashchange", () => showTab({ moveFocus: true }));
  showTab({ moveFocus: false });

  /* ---------- Galeria: filtros e vídeos ---------- */

  const filterButtons = Array.from(document.querySelectorAll("[data-gallery-filter]"));
  const panels = Array.from(document.querySelectorAll("[data-gallery-panel]"));

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
      panels.forEach((panel) => {
        panel.hidden = panel.dataset.galleryPanel !== button.dataset.galleryFilter;
      });
    });
  });

  // O vídeo só é carregado quando a pessoa clica em reproduzir (página mais leve)
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-video-index]");
    if (!button) return;
    const video = GALERIA_VIDEOS[Number(button.dataset.videoIndex)];
    const media = button.closest(".gallery-media");
    if (!video || !media) return;

    if (video.youtubeId) {
      media.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.youtubeId)}?autoplay=1&cc_load_policy=1&hl=pt-BR" title="${esc(video.titulo)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    } else if (video.src) {
      media.innerHTML = `<video controls autoplay preload="metadata"${video.poster ? ` poster="${esc(video.poster)}"` : ""}><source src="${esc(video.src)}">${video.legendas ? `<track kind="captions" srclang="pt-BR" label="Português" src="${esc(video.legendas)}" default>` : ""}Seu navegador não consegue reproduzir este vídeo.</video>`;
    }
    media.querySelector("iframe, video")?.focus();
  });

  /* ---------- Formulário de contato (abre o e-mail do usuário) ---------- */

  document.addEventListener("submit", (event) => {
    if (!event.target.matches("[data-contact-form]") || !SITE.email) return;
    event.preventDefault();
    const data = new FormData(event.target);
    const nome = String(data.get("nome") || "").trim();
    const mensagem = String(data.get("mensagem") || "").trim();
    const assunto = encodeURIComponent(`Contato pelo site do NAC - ${nome}`);
    const corpo = encodeURIComponent(`${mensagem}\n\n${nome}`);
    location.href = `mailto:${SITE.email}?subject=${assunto}&body=${corpo}`;
  });
});

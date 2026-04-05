import { useState } from 'react';
import './HistoricoPublicacoes.css';

/* ── DATA ── */
const publicacoes = [
    {
        id: 1,
        title: 'Desafios da educação no Brasil',
        author: 'Pedro Oliveira',
        date: '04/12/2024',
        publishedBy: 'Admin',
        views: 312,
        downloads: 45,
        genero: 'Redacao',
        status: 'Ativo',
    },
    {
        id: 2,
        title: 'Perspectivas acerca do envelhecimento na sociedade brasileira',
        author: 'Maria Silva',
        date: '30/11/2024',
        publishedBy: 'Admin',
        views: 245,
        downloads: 38,
        genero: 'Redacao',
        status: 'Ativo',
    },
    {
        id: 3,
        title: 'A Última Flor do Lácio',
        author: 'João Santos',
        date: '27/11/2024',
        publishedBy: 'Editor',
        views: 187,
        downloads: 29,
        genero: 'Conto',
        status: 'Ativo',
    },
    {
        id: 4,
        title: 'Memórias de uma Cidade Pequena',
        author: 'Ana Costa',
        date: '24/11/2024',
        publishedBy: 'Admin',
        views: 156,
        downloads: 22,
        genero: 'Cronica',
        status: 'Ativo',
    },
    {
        id: 5,
        title: 'O Vaqueiro e o Sol Nordestino',
        author: 'Carlos Lima',
        date: '19/11/2024',
        publishedBy: 'Editor',
        views: 203,
        downloads: 31,
        genero: 'Cordel',
        status: 'Arquivado',
    },
    {
        id: 6,
        title: 'Entre Sombras e Luzes',
        author: 'Fernanda Reis',
        date: '14/11/2024',
        publishedBy: 'Admin',
        views: 289,
        downloads: 42,
        genero: 'Conto',
        status: 'Ativo',
    },
];

/* ── ICON COMPONENTS ── */
function IconDoc() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
        </svg>
    );
}

function IconCalendar() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
    );
}

function IconEye() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}

function IconDownload() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
    );
}

function IconYellowEye() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}

function IconGreenDownload() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
    );
}

function IconCheck() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}

function IconClock() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    );
}

function IconBook() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
    );
}

function IconGrid() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
        </svg>
    );
}

function IconExportDownload() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
    );
}

/* ── GENRE BADGE ── */
function GenreBadge({ genero }) {
    const map = {
        Redacao: { label: 'Redacao', cls: 'hist-genre-badge--redacao', icon: <IconDoc /> },
        Conto:   { label: 'Conto',   cls: 'hist-genre-badge--conto',   icon: <IconBook /> },
        Cronica: { label: 'Cronica', cls: 'hist-genre-badge--cronica', icon: <IconGrid /> },
        Cordel:  { label: 'Cordel',  cls: 'hist-genre-badge--cordel',  icon: <IconBook /> },
    };
    const { label, cls, icon } = map[genero] || { label: genero, cls: '', icon: null };
    return (
        <span className={`hist-genre-badge ${cls}`}>
            {icon} {label}
        </span>
    );
}

/* ── STATUS BADGE ── */
function StatusBadge({ status }) {
    const cls = status === 'Ativo' ? 'hist-status-badge--ativo' : 'hist-status-badge--arquivado';
    return <span className={`hist-status-badge ${cls}`}>{status}</span>;
}

/* ── TIMELINE DOT ── */
function TimelineDot({ status }) {
    if (status === 'Arquivado') {
        return (
            <div className="hist-timeline-item__dot hist-timeline-item__dot--archived">
                <IconClock />
            </div>
        );
    }
    return (
        <div className="hist-timeline-item__dot hist-timeline-item__dot--active">
            <IconCheck />
        </div>
    );
}

/* ── STATS ── */
const stats = [
    {
        label: 'Total de Publicações',
        value: '6',
        sub: 'Todas as categorias',
        colorKey: 'blue',
        icon: <IconDoc />,
    },
    {
        label: 'Este Mês',
        value: '0',
        sub: 'Novas publicações',
        colorKey: 'red',
        icon: <IconCalendar />,
    },
    {
        label: 'Visualizações',
        value: '1392',
        sub: 'Total acumulado',
        colorKey: 'yellow',
        icon: <IconYellowEye />,
    },
    {
        label: 'Downloads',
        value: '207',
        sub: 'Total acumulado',
        colorKey: 'green',
        icon: <IconGreenDownload />,
    },
];

/* ── MAIN COMPONENT ── */
export function HistoricoPublicacoes() {
    const [periodo, setPeriodo] = useState('ultimo-mes');
    const [tipo, setTipo] = useState('todos');
    const [statusFiltro, setStatusFiltro] = useState('todos');

    const filtered = publicacoes.filter((p) => {
        const tipoMatch = tipo === 'todos' || p.genero.toLowerCase() === tipo;
        const statusMatch = statusFiltro === 'todos' || p.status.toLowerCase() === statusFiltro;
        return tipoMatch && statusMatch;
    });

    return (
        <>
            {/* BANNER */}
            <div className="adm-banner">
                <h1 className="adm-banner__title">PAINEL ADMINISTRATIVO</h1>
                <p className="adm-banner__sub">Acompanhe o histórico de publicações</p>
            </div>

            {/* STATS */}
            <div className="hist-stats">
                {stats.map((s) => (
                    <div className="hist-stat-card" key={s.label}>
                        <div className="hist-stat-card__header">
                            <p className="hist-stat-card__label">{s.label}</p>
                            <div className={`hist-stat-card__icon hist-stat-card__icon--${s.colorKey}`}>
                                {s.icon}
                            </div>
                        </div>
                        <p className={`hist-stat-card__value hist-stat-card__value--${s.colorKey}`}>{s.value}</p>
                        <p className="hist-stat-card__sub">{s.sub}</p>
                    </div>
                ))}
            </div>

            {/* FILTERS */}
            <div className="hist-filters">
                <div className="hist-filter-group">
                    <label htmlFor="periodo">Período</label>
                    <select id="periodo" value={periodo} onChange={(e) => setPeriodo(e.target.value)}>
                        <option value="ultimo-mes">Último mês</option>
                        <option value="ultimos-3">Últimos 3 meses</option>
                        <option value="ultimos-6">Últimos 6 meses</option>
                        <option value="ultimo-ano">Último ano</option>
                        <option value="todos">Todos</option>
                    </select>
                </div>
                <div className="hist-filter-group">
                    <label htmlFor="tipo">Tipo de Conteúdo</label>
                    <select id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}>
                        <option value="todos">Todos os tipos</option>
                        <option value="redacao">Redação</option>
                        <option value="conto">Conto</option>
                        <option value="cronica">Crônica</option>
                        <option value="cordel">Cordel</option>
                    </select>
                </div>
                <div className="hist-filter-group">
                    <label htmlFor="status">Status</label>
                    <select id="status" value={statusFiltro} onChange={(e) => setStatusFiltro(e.target.value)}>
                        <option value="todos">Todos os status</option>
                        <option value="ativo">Ativo</option>
                        <option value="arquivado">Arquivado</option>
                    </select>
                </div>
            </div>

            {/* TIMELINE */}
            <div className="hist-timeline-wrap">
                <div className="hist-timeline-header">
                    <h2 className="hist-timeline-title">Linha do Tempo de Publicações</h2>
                    <button className="hist-export-btn">
                        <IconExportDownload /> Exportar Relatório
                    </button>
                </div>

                <div className="hist-timeline">
                    {filtered.map((item) => (
                        <div className="hist-timeline-item" key={item.id}>
                            {/* dot + vertical line */}
                            <div className="hist-timeline-item__left">
                                <TimelineDot status={item.status} />
                                <div className="hist-timeline-item__line" />
                            </div>

                            {/* card */}
                            <div className="hist-timeline-item__card">
                                <div className="hist-timeline-item__top">
                                    <div>
                                        <p className="hist-timeline-item__title">{item.title}</p>
                                        <div className="hist-timeline-item__meta">
                                            <span>Autor: {item.author}</span>
                                            <span>Publicado: {item.date}</span>
                                            <span>Por: {item.publishedBy}</span>
                                            <span><IconEye /> {item.views} views</span>
                                            <span><IconDownload /> {item.downloads} downloads</span>
                                        </div>
                                    </div>
                                    <div className="hist-timeline-item__right">
                                        <GenreBadge genero={item.genero} />
                                        <StatusBadge status={item.status} />
                                        <button className="hist-action-btn hist-action-btn--details">
                                            Ver Detalhes
                                        </button>
                                        {item.status !== 'Arquivado' && (
                                            <button className="hist-action-btn hist-action-btn--archive">
                                                Arquivar
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {filtered.length === 0 && (
                        <p style={{ color: '#aaa', fontSize: '0.9rem', textAlign: 'center', padding: '32px 0' }}>
                            Nenhuma publicação encontrada com os filtros selecionados.
                        </p>
                    )}
                </div>
            </div>
        </>
    );
}
import { useNavigate } from 'react-router-dom';
import './Essays.css';

/* ── ICONS ── */
function IconAward() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        </svg>
    );
}

function IconAwardSmall() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        </svg>
    );
}

function IconEye() {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}

function IconThumb() {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
            <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
        </svg>
    );
}

function IconDownload() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
    );
}

/* ── DATA ── */
const redacoes = [
    { id: 1, tag: 'Cultura',       titulo: 'Tema da Redação',  autor: 'Ana Clara Silva',    data: '20 Nov 2025', views: 124, likes: 56 },
    { id: 2, tag: 'Redes Sociais', titulo: 'Tema da Redação',  autor: 'João Pedro Santos',  data: '18 Nov 2025', views: 87,  likes: 42 },
    { id: 3, tag: 'Meio Ambiente', titulo: 'Tema da Redação',  autor: 'Maria Eduarda Costa',data: '15 Nov 2025', views: 156, likes: 98 },
    { id: 4, tag: 'Educação',      titulo: 'Título da Redação',autor: 'Lucas Mendes',        data: '12 Nov 2025', views: 76,  likes: 34 },
];

/* ── COMPONENT ── */
export function Essays() {
    const navigate = useNavigate();

    return (
        <section className="essays-section">
            <div className="essays-container">

                {/* HEADER */}
                <div className="essays-header">
                    <div>
                        <h2 className="essays-title">
                            <span className="essays-title__icon"><IconAward /></span>
                            Redações Nota 10
                        </h2>
                        <p className="essays-subtitle">Redações de excelência escritas pelos nossos alunos</p>
                    </div>
                    <button className="ver-todas" onClick={() => navigate('/categoria/redacoes')}>
                        Ver todas →
                    </button>
                </div>

                {/* GRID */}
                <div className="essays-grid">
                    {redacoes.map((r) => (
                        <div className="essay-card" key={r.id}>

                            {/* TOPO — tag + badge */}
                            <div className="card-top">
                                <span className="card-tag">{r.tag}</span>
                                <span className="card-badge">
                                    <IconAwardSmall /> Nota 10
                                </span>
                            </div>

                            {/* CORPO */}
                            <div className="card-body">
                                <h3>{r.titulo}</h3>
                                <p className="card-date">{r.data}</p>
                            </div>

                            {/* RODAPÉ */}
                            <div className="card-info">
                                <span className="card-author">
                                    <strong>Por:</strong> {r.autor}
                                </span>
                                <div className="card-stats">
                                    <span><IconEye /> {r.views}</span>
                                    <span><IconThumb /> {r.likes}</span>
                                    <span className="card-download"><IconDownload /></span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
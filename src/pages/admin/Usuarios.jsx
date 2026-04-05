import { useState } from 'react';
import './Usuarios.css';

const visualizadores = [
    {
        id: 1, name: 'Maria Silva', email: 'maria.silva@email.com', cadastro: '14/01/2024', conteudos: 3,
        publicacoes: [
            { tipo: 'Redação', titulo: 'Perspectivas acerca do envelhecimento na sociedade brasileira' },
            { tipo: 'Redação', titulo: 'Desafios da educação no Brasil' },
            { tipo: 'Conto', titulo: 'Entre Sombras e Luzes' },
        ],
    },
    {
        id: 2, name: 'João Santos', email: 'joao.santos@email.com', cadastro: '09/02/2024', conteudos: 2,
        publicacoes: [
            { tipo: 'Crônica', titulo: 'Segunda de manhã no sertão' },
            { tipo: 'Cordel', titulo: 'Cordel da Seca e da Esperança' },
        ],
    },
    {
        id: 3, name: 'Ana Costa', email: 'ana.costa@email.com', cadastro: '22/03/2024', conteudos: 5,
        publicacoes: [
            { tipo: 'Redação', titulo: 'O futuro da tecnologia no Brasil' },
            { tipo: 'Conto', titulo: 'A Última Chuva do Sertão' },
            { tipo: 'Conto', titulo: 'O Velho e o Rio' },
            { tipo: 'Crônica', titulo: 'Feira de Caruaru numa manhã de sábado' },
            { tipo: 'Cordel', titulo: 'O menino e o mar' },
        ],
    },
    {
        id: 4, name: 'Carlos Lima', email: 'carlos.lima@email.com', cadastro: '01/04/2024', conteudos: 1,
        publicacoes: [
            { tipo: 'Redação', titulo: 'Desigualdade social no nordeste brasileiro' },
        ],
    },
];

const administradores = [
    {
        id: 1,
        name: 'Admin Principal',
        email: 'admin@bibliotecaviva.com',
        ingresso: '31/12/2022',
        ultimaAtividade: '04/12/2024',
        stats: { total: 15, redacoes: 8, contos: 3, cronicas: 3, cordeis: 1 },
    },
    {
        id: 2,
        name: 'Editor',
        email: 'editor@bibliotecaviva.com',
        ingresso: '15/03/2023',
        ultimaAtividade: '03/12/2024',
        stats: { total: 12, redacoes: 4, contos: 5, cronicas: 2, cordeis: 1 },
    },
    {
        id: 3,
        name: 'Coordenador',
        email: 'coordenador@bibliotecaviva.com',
        ingresso: '10/06/2023',
        ultimaAtividade: '02/12/2024',
        stats: { total: 8, redacoes: 3, contos: 2, cronicas: 2, cordeis: 1 },
    },
];

function IconUser() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
        </svg>
    );
}

function IconShield() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
    );
}

function IconSearch() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
    );
}

function IconEye() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
        </svg>
    );
}

function IconTrash() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6"/>
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
            <path d="M10 11v6"/>
            <path d="M14 11v6"/>
            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
        </svg>
    );
}

function IconDoc() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
        </svg>
    );
}

function IconBook() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
    );
}

function IconFeather() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/>
            <line x1="16" y1="8" x2="2" y2="22"/>
            <line x1="17.5" y1="15" x2="9" y2="15"/>
        </svg>
    );
}

function IconScroll() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 0 1-4 0V5a2 2 0 0 0-2-2 2 2 0 0 0-2 2v3h4"/>
            <path d="M19 3H5"/>
            <path d="M12 11h5"/>
            <path d="M12 15h5"/>
        </svg>
    );
}

export function GerenciarUsuarios() {
    const [aba, setAba] = useState('visualizadores');
    const [busca, setBusca] = useState('');
    const [expandido, setExpandido] = useState(null);

    function toggleExpandir(id) {
        setExpandido((prev) => (prev === id ? null : id));
    }

    const filtradosVis = visualizadores.filter(
        (u) =>
            u.name.toLowerCase().includes(busca.toLowerCase()) ||
            u.email.toLowerCase().includes(busca.toLowerCase())
    );

    const filtradosAdm = administradores.filter(
        (u) =>
            u.name.toLowerCase().includes(busca.toLowerCase()) ||
            u.email.toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <div className="gu-wrap">

            <div className="adm-banner">
                <h1 className="adm-banner__title">PAINEL ADMINISTRATIVO</h1>
                <p className="adm-banner__sub">Gerencie usuários e administradores</p>
            </div>

            <div className="gu-card">
                <div className="gu-tabs">
                    <button
                        className={`gu-tab ${aba === 'visualizadores' ? 'gu-tab--active' : ''}`}
                        onClick={() => { setAba('visualizadores'); setBusca(''); setExpandido(null); }}
                    >
                        <IconUser /> Visualizadores
                    </button>
                    <button
                        className={`gu-tab gu-tab--shield ${aba === 'administradores' ? 'gu-tab--active-red' : ''}`}
                        onClick={() => { setAba('administradores'); setBusca(''); setExpandido(null); }}
                    >
                        <IconShield /> Administradores
                    </button>
                </div>

                <div className="gu-search">
                    <IconSearch />
                    <input
                        type="text"
                        placeholder={aba === 'visualizadores' ? 'Buscar visualizador...' : 'Buscar administrador...'}
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                    />
                </div>
            </div>

            {aba === 'visualizadores' && (
                <div className="gu-card">
                    <div className="gu-list-header">
                        <h2 className="gu-list-title">Visualizadores Cadastrados</h2>
                        <span className="gu-list-count">{filtradosVis.length} usuários</span>
                    </div>
                    <div className="gu-list">
                        {filtradosVis.map((u) => (
                            <div className="gu-item" key={u.id}>
                                <div className="gu-item__top">
                                    <div className="gu-avatar gu-avatar--navy">
                                        <IconUser />
                                    </div>
                                    <div className="gu-item__info">
                                        <p className="gu-item__name">{u.name}</p>
                                        <p className="gu-item__email">{u.email}</p>
                                    </div>
                                    <div className="gu-item__meta">
                                        Cadastrado em: {u.cadastro} &bull; {u.conteudos} conteúdos
                                    </div>
                                </div>
                                <div className="gu-item__actions">
                                    <button
                                        className="gu-action-btn"
                                        onClick={() => toggleExpandir(u.id)}
                                    >
                                        <IconEye /> {expandido === u.id ? 'Ocultar Conteúdos' : 'Ver Conteúdos'}
                                    </button>
                                    <button className="gu-action-btn gu-action-btn--red">
                                        <IconTrash /> Excluir
                                    </button>
                                </div>
                                {expandido === u.id && (
                                    <div className="gu-publicacoes">
                                        <p className="gu-publicacoes__label">Conteúdos Publicados:</p>
                                        <div className="gu-publicacoes__list">
                                            {u.publicacoes.map((pub, i) => (
                                                <div className="gu-publicacao" key={i}>
                                                    <span className={`gu-pub-badge gu-pub-badge--${pub.tipo.toLowerCase()}`}>
                                                        {pub.tipo === 'Redação' && <IconDoc />}
                                                        {pub.tipo === 'Conto' && <IconBook />}
                                                        {pub.tipo === 'Crônica' && <IconFeather />}
                                                        {pub.tipo === 'Cordel' && <IconScroll />}
                                                        {pub.tipo}
                                                    </span>
                                                    <span className="gu-pub-titulo">{pub.titulo}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {aba === 'administradores' && (
                <div className="gu-card">
                    <div className="gu-list-header">
                        <h2 className="gu-list-title">Administradores do Sistema</h2>
                        <span className="gu-list-count">{filtradosAdm.length} administradores</span>
                    </div>
                    <div className="gu-list">
                        {filtradosAdm.map((u) => (
                            <div className="gu-item gu-item--adm" key={u.id}>
                                <div className="gu-item__top">
                                    <div className="gu-avatar gu-avatar--red">
                                        <IconShield />
                                    </div>
                                    <div className="gu-item__info">
                                        <p className="gu-item__name">{u.name}</p>
                                        <p className="gu-item__email">{u.email}</p>
                                        <p className="gu-item__dates">
                                            Ingressou em: {u.ingresso}
                                            <span>Última atividade: {u.ultimaAtividade}</span>
                                        </p>
                                    </div>
                                    <div className="gu-stats">
                                        <p className="gu-stats__title">Estatísticas de Publicação</p>
                                        <p className="gu-stats__total">Total de Publicações: <strong>{u.stats.total}</strong></p>
                                        <div className="gu-stats__list">
                                            <span><IconDoc /> Redações: <b>{u.stats.redacoes}</b></span>
                                            <span><IconBook /> Contos: <b>{u.stats.contos}</b></span>
                                            <span><IconFeather /> Crônicas: <b>{u.stats.cronicas}</b></span>
                                            <span><IconScroll /> Cordéis: <b>{u.stats.cordeis}</b></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
}
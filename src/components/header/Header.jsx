import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

/* ── TOPBAR ICONS ── */
function IconBook() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
    );
}

function IconUser() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    );
}

function IconMenu() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
    );
}

function IconClose() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );
}

/* ── DRAWER ICONS ── */
function IconAward() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        </svg>
    );
}

function IconScrollText() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 0 1-4 0V5a2 2 0 0 0-2-2 2 2 0 0 0-2 2v3h4" />
            <path d="M19 3H5" />
            <path d="M12 11h5" />
            <path d="M12 15h5" />
        </svg>
    );
}

function IconBookOpen() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
    );
}

function IconFeather() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
            <line x1="16" y1="8" x2="2" y2="22" />
            <line x1="17.5" y1="15" x2="9" y2="15" />
        </svg>
    );
}

function IconClub() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
    );
}

function IconNewspaper() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
            <path d="M18 14h-8" />
            <path d="M15 18h-5" />
            <path d="M10 6h8v4h-8V6z" />
        </svg>
    );
}

function IconBarChart() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
            <line x1="2" y1="20" x2="22" y2="20" />
        </svg>
    );
}

function IconPalette() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </svg>
    );
}

function IconVideo() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="15" height="12" rx="2" ry="2" />
            <polyline points="17 9 22 5 22 19 17 15" />
        </svg>
    );
}

/* ── SECTIONS — a key deve bater com o :id da rota /categoria/:id ── */
const sections = [
    { label: 'Redações Nota 10', key: 'redacoes',     icon: <IconAward /> },
    { label: 'Cordéis',          key: 'cordeis',      icon: <IconScrollText /> },
    { label: 'Contos',           key: 'contos',       icon: <IconBookOpen /> },
    { label: 'Crônicas',         key: 'cronicas',     icon: <IconFeather /> },
    { label: 'Clube de Leitura', key: 'clube',        icon: <IconClub /> },
    { label: 'Jornal da Escola', key: 'jornal',       icon: <IconNewspaper /> },
    { label: 'Infográficos',     key: 'infograficos', icon: <IconBarChart /> },
    { label: 'Galeria de Artes', key: 'galeria',      icon: <IconPalette /> },
    { label: 'Vídeos Autorais',  key: 'videos',       icon: <IconVideo /> },
];

/* ── COMPONENT ── */
export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Pega o :id da URL atual → /categoria/contos = "contos"
    const activeSection = location.pathname.startsWith('/categoria/')
        ? location.pathname.split('/')[2]
        : null;

    const handleSection = (key) => {
        navigate(`/categoria/${key}`);
        setMenuOpen(false);
    };

    const handleLogoClick = () => {
        navigate('/');
        setMenuOpen(false);
    };

    return (
        <>
            <header>
                <nav className="topbar">

                    {/* LOGO — clica e volta para home */}
                    <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                        <span className="logo__icon"><IconBook /></span>
                        <span>BIBLIOTECA VIVA</span>
                    </div>

                    {/* ÍCONES DA DIREITA */}
                    <div className="icons">
                        <button className="icon-btn" title="Usuário" onClick={() => navigate('/login')}>
                            <IconUser />
                        </button>
                        <button
                            className={`icon-btn ${menuOpen ? 'icon-btn--active' : ''}`}
                            title="Menu"
                            onClick={() => setMenuOpen((v) => !v)}
                        >
                            {menuOpen ? <IconClose /> : <IconMenu />}
                        </button>
                    </div>

                </nav>
                <div className="red-line" />
            </header>

            {/* OVERLAY escuro atrás do drawer */}
            {menuOpen && (
                <div className="menu-overlay" onClick={() => setMenuOpen(false)} />
            )}

            {/* DRAWER lateral */}
            <div className={`menu-drawer ${menuOpen ? 'menu-drawer--open' : ''}`}>
                <p className="menu-drawer__title">Seções da Biblioteca</p>
                <ul className="menu-drawer__list">
                    {sections.map((s) => (
                        <li key={s.key}>
                            <button
                                className={`menu-drawer__item ${activeSection === s.key ? 'menu-drawer__item--active' : ''}`}
                                onClick={() => handleSection(s.key)}
                            >
                                <span className="menu-drawer__item-icon">{s.icon}</span>
                                <span>{s.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
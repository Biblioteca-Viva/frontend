import { useState } from 'react';
import './ContosCronicas.css';

const contos = [
    {
        id: 1,
        title: 'O Último Trem do Sertão',
        author: 'Beatriz Silva',
        tag: 'Suspense',
        starred: false,
    },
    {
        id: 2,
        title: 'Cartas que Nunca Enviei',
        author: 'Rafael Costa',
        tag: 'Romance',
        starred: true,
    },
    {
        id: 3,
        title: 'A Noite em que o Rio Secou',
        author: 'Camila Santos',
        tag: 'Drama',
        starred: false,
    },
];

const cronicas = [
    {
        id: 1,
        title: 'Feira de Caruaru numa Manhã de Sábado',
        author: 'Lucas Oliveira',
        date: '25 Nov 2025',
    },
    {
        id: 2,
        title: 'O Cheiro de Chuva no Agreste',
        author: 'Isabela Ferreira',
        date: '23 Nov 2025',
    },
    {
        id: 3,
        title: 'Minha Avó e o Rádio de Pilha',
        author: 'Gabriel Lima',
        date: '20 Nov 2025',
    },
];

function ContoCard({ title, author, tag, starred: initialStarred }) {
    const [starred, setStarred] = useState(initialStarred);

    return (
        <div className="cc-conto-card">
            <div className="cc-conto-card__top">
                <p className="cc-conto-card__title">{title}</p>
                <button className="cc-conto-card__star" onClick={() => setStarred(s => !s)} aria-label="Favoritar">
                    <svg width="15" height="15" viewBox="0 0 24 24"
                         fill={starred ? 'currentColor' : 'none'}
                         stroke="currentColor" strokeWidth="2.5"
                         strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    {starred ? 'Favoritado' : 'Favoritar'}
                </button>
            </div>
            <p className="cc-conto-card__author">por {author}</p>
            <span className="cc-conto-card__tag">{tag}</span>
        </div>
    );
}

function CronicaCard({ title, author, date }) {
    return (
        <div className="cc-cronica-card">
            <div className="cc-cronica-card__icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/>
                    <line x1="16" y1="8" x2="2" y2="22"/>
                    <line x1="17.5" y1="15" x2="9" y2="15"/>
                </svg>
            </div>
            <div className="cc-cronica-card__info">
                <p className="cc-cronica-card__title">{title}</p>
                <p className="cc-cronica-card__author">{author}</p>
            </div>
            <span className="cc-cronica-card__date">{date}</span>
        </div>
    );
}

export function ContosCronicas() {
    return (
        <section className="cc-section">
            <div className="cc-container">
                <div className="cc-grid">

                    {/* CONTOS */}
                    <div>
                        <div className="cc-category__header">
                            <div className="cc-category__label">
                                <div className="cc-category__icon">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                                         stroke="#d93025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                        <polyline points="14 2 14 8 20 8"/>
                                        <line x1="16" y1="13" x2="8" y2="13"/>
                                        <line x1="16" y1="17" x2="8" y2="17"/>
                                        <polyline points="10 9 9 9 8 9"/>
                                    </svg>
                                </div>
                                <h2 className="cc-category__name">Contos</h2>
                            </div>
                            <a href="/contos" className="cc-category__link">Ver todos →</a>
                        </div>
                        {contos.map((c) => (
                            <ContoCard key={c.id} {...c} />
                        ))}
                    </div>

                    {/* CRÔNICAS */}
                    <div>
                        <div className="cc-category__header">
                            <div className="cc-category__label">
                                <div className="cc-category__icon">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                                         stroke="#d93025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/>
                                        <line x1="16" y1="8" x2="2" y2="22"/>
                                        <line x1="17.5" y1="15" x2="9" y2="15"/>
                                    </svg>
                                </div>
                                <h2 className="cc-category__name">Crônicas</h2>
                            </div>
                            <a href="/cronicas" className="cc-category__link">Ver todos →</a>
                        </div>
                        {cronicas.map((c) => (
                            <CronicaCard key={c.id} {...c} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
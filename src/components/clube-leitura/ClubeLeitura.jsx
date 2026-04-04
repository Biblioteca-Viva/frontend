import { useState } from 'react';
import './ClubeLeitura.css';

const livroDoMes = {
    title: 'Quarto de Despejo',
    author: 'Carolina Maria de Jesus',
    description:
        'Diário de uma mulher que viveu na favela do Canindé, em São Paulo, nos anos 1950. Uma obra fundamental da literatura brasileira.',
    participants: 34,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop',
};

const proximoEncontro = {
    date: '15 de Dezembro, 14h',
    local: 'Biblioteca da Escola',
};

const resenhas = [
    {
        id: 1,
        name: 'Maria Eduarda',
        turma: '3º Ano A',
        stars: 5,
        text: 'Uma obra que me fez refletir profundamente sobre desigualdade social. Carolina escreve com uma força e honestidade raras. Leitura obrigatória.',
        video: null,
    },
    {
        id: 2,
        name: 'João Pedro',
        turma: '2º Ano B',
        stars: 5,
        text: null,
        video: 'https://youtube.com',
    },
    {
        id: 3,
        name: 'Ana Clara',
        turma: '1º Ano C',
        stars: 4,
        text: 'O diário de Carolina é devastador e bonito ao mesmo tempo. Cada página é um retrato vivo do Brasil que muitos preferem ignorar.',
        video: null,
    },
];

function Stars({ count }) {
    return (
        <div className="cl-review-card__stars">
            {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className={i <= count ? 'cl-star cl-star--filled' : 'cl-star'}>
                    ★
                </span>
            ))}
        </div>
    );
}

function ReviewCard({ name, turma, stars, text, video }) {
    return (
        <div className="cl-review-card">
            <div className="cl-review-card__top">
                <div>
                    <p className="cl-review-card__name">{name}</p>
                    <p className="cl-review-card__turma">{turma}</p>
                </div>
                <Stars count={stars} />
            </div>
            {text && <p className="cl-review-card__text">{text}</p>}
            {video && (
                <div className="cl-review-card__video-area">
                    <p className="cl-review-card__video-label">Assistir ao vídeo-resenha</p>
                    <a href={video} className="cl-review-card__video-link" target="_blank" rel="noreferrer">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <polygon points="10 8 16 12 10 16 10 8"/>
                        </svg>
                        Ver vídeo-resenha
                    </a>
                </div>
            )}
        </div>
    );
}

export function ClubeLeitura() {
    const [confirmado, setConfirmado] = useState(false);

    return (
        <section className="cl-section">
            <div className="cl-container">

                {/* HERO */}
                <div className="cl-hero">
                    <h1 className="cl-hero__title">
                        <span className="cl-hero__title-icon">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
         stroke="#d93025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
    </svg>
</span>
                        Clube de Leitura
                    </h1>
                    <p className="cl-hero__subtitle">
                        Leia, discuta e compartilhe suas impressões sobre o livro do mês
                    </p>
                </div>

                {/* MAIN GRID */}
                <div className="cl-main-grid">

                    {/* LIVRO DO MÊS */}
                    <div className="cl-book-card">
                        <div className="cl-book-card__header">
                            <span className="cl-book-card__header-icon">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
         stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
</span>
                            <h2 className="cl-book-card__header-title">Livro do Mês</h2>
                        </div>
                        <div className="cl-book-card__content">
                            <img
                                src={livroDoMes.image}
                                alt={livroDoMes.title}
                                className="cl-book-card__image"
                            />
                            <div className="cl-book-card__info">
                                <p className="cl-book-card__title">{livroDoMes.title}</p>
                                <p className="cl-book-card__author">por {livroDoMes.author}</p>
                                <p className="cl-book-card__desc">{livroDoMes.description}</p>
                                <div className="cl-book-card__participants">
    <span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
             stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
    </span>
                                    <span>{livroDoMes.participants} participantes</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PRÓXIMO ENCONTRO */}
                    <div className="cl-meeting-card">
                        <div className="cl-meeting-card__header">
                            <span className="cl-meeting-card__header-icon">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
         stroke="#1a2f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
</span>
                            <h2 className="cl-meeting-card__header-title">Próximo Encontro</h2>
                        </div>

                        <div className="cl-meeting-card__info-list">
                            <div className="cl-meeting-card__info-item">
                                <span className="cl-meeting-card__info-icon">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
         stroke="#d93025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
</span>
                                <div>
                                    <p className="cl-meeting-card__info-label">Data e Horário</p>
                                    <p className="cl-meeting-card__info-value">{proximoEncontro.date}</p>
                                </div>
                            </div>
                            <div className="cl-meeting-card__info-item">
                                <span className="cl-meeting-card__info-icon">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
         stroke="#d93025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
    </svg>
</span>
                                <div>
                                    <p className="cl-meeting-card__info-label">Local</p>
                                    <p className="cl-meeting-card__info-value">{proximoEncontro.local}</p>
                                </div>
                            </div>
                        </div>

                        <button
                            className="cl-meeting-card__btn"
                            onClick={() => setConfirmado((v) => !v)}
                        >
                            {confirmado ? (
                                <>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                         style={{ marginRight: 6, verticalAlign: 'middle' }}>
                                        <polyline points="20 6 9 17 4 12"/>
                                    </svg>
                                    Presença Confirmada!
                                </>
                            ) : 'Confirmar Presença'}
                        </button>
                        <p className="cl-meeting-card__hint">
                            Traga sua resenha ou prepare sua opinião sobre o livro!
                        </p>
                    </div>

                </div>

                {/* RESENHAS DOS ALUNOS */}
                <div className="cl-reviews__header">
                    <span className="cl-reviews__icon">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
         stroke="#1a2f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
</span>
                    <h2 className="cl-reviews__title">Resenhas dos Alunos</h2>
                </div>

                <div className="cl-reviews-grid">
                    {resenhas.map((r) => (
                        <ReviewCard key={r.id} {...r} />
                    ))}
                </div>

            </div>
        </section>
    );
}
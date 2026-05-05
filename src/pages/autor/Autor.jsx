import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import { getAllWorks } from '../../services/workService';
import { IconBookmark, IconHeart, IconMessage, IconCalendar, IconPencil } from '../../components/icons';
import './Autor.css';

const TYPE_MAP = {
    Essay:           { label: 'Redações',            route: 'redacoes'      },
    Cordel:          { label: 'Cordéis',             route: 'cordeis'       },
    Tale:            { label: 'Contos',              route: 'contos'        },
    ShortStory:      { label: 'Crônicas',            route: 'cronicas'      },
    Poem:            { label: 'Poemas',              route: 'poemas'        },
    Article:         { label: 'Jornal da Escola',    route: 'jornal'        },
    Infographic:     { label: 'Infográficos',        route: 'infograficos'  },
    Art:             { label: 'Galeria de Artes',    route: 'artes'         },
    Multimedia:      { label: 'Vídeos Autorais',     route: 'videos'        },
    LibraLiterature: { label: 'Literatura em Libras', route: 'libras'       },
};

export function Autor() {
    const navigate   = useNavigate();
    const { autor }  = useParams(); // nome do autor vindo da URL: /autor/:autor

    const [works, setWorks]           = useState([]);
    const [loading, setLoading]       = useState(true);
    const [activeFilter, setFilter]   = useState('Todas');

    // Tenta identificar o nome/grade do autor a partir dos dados carregados
    const [authorName, setAuthorName] = useState('');
    const [authorGrade, setAuthorGrade] = useState('');

    useEffect(() => {
        getAllWorks()
            .then((data) => {
                // Filtra obras pelo autor passado na URL (case-insensitive)
                const authorWorks = data.filter(
                    (w) => w.author?.toLowerCase() === decodeURIComponent(autor || '').toLowerCase()
                );
                setWorks(authorWorks);

                // Pega o nome e a série do primeiro resultado (se houver)
                if (authorWorks.length > 0) {
                    setAuthorName(authorWorks[0].author || '');
                    setAuthorGrade(authorWorks[0].grade || authorWorks[0].authorGrade || '');
                } else {
                    setAuthorName(decodeURIComponent(autor || ''));
                }
            })
            .catch(() => setWorks([]))
            .finally(() => setLoading(false));
    }, [autor]);

    /* ─── Filtros dinâmicos baseados nos tipos existentes ── */
    const usedTypes  = [...new Set(works.map((w) => w.type))];
    const filterTabs = ['Todas', ...usedTypes.map((t) => TYPE_MAP[t]?.label ?? t)];

    const filtered = activeFilter === 'Todas'
        ? works
        : works.filter((w) => (TYPE_MAP[w.type]?.label ?? w.type) === activeFilter);

    /* ─── Helpers ── */
    const formatDate = (iso) =>
        iso ? new Date(iso).toLocaleDateString('pt-BR') : '';

    const displayName = authorName || decodeURIComponent(autor || '');

    const initials = displayName
        .split(' ')
        .slice(0, 2)
        .map((w) => w[0]?.toUpperCase())
        .join('');

    const goToWork = (w) => {
        const route = TYPE_MAP[w.type]?.route ?? w.type?.toLowerCase();
        navigate(`/${route}/${w.id}`);
    };

    /* ─── Sub-components ── */
    const WorkCard = ({ w }) => {
        const typeLabel = TYPE_MAP[w.type]?.label ?? w.type;
        return (
            <article className="pf-work-card" onClick={() => goToWork(w)}>
                <span className="pf-work-card__type">{typeLabel.toUpperCase()}</span>
                <h3 className="pf-work-card__title">{w.title}</h3>
                <p className="pf-work-card__desc">{w.description}</p>
                <div className="pf-work-card__footer">
                    <span className="pf-work-card__meta">
                        <IconPencil size={13} color="#6b778c" /> {w.author}
                    </span>
                    <span className="pf-work-card__meta">
                        <IconCalendar size={13} color="#6b778c" /> {formatDate(w.publicationDate)}
                    </span>
                </div>
                <div className="pf-work-card__stats">
                    <span className="pf-work-card__stat">
                        <IconHeart size={13} color="#d62828" /> {w.likeCount ?? 0}
                    </span>
                    <span className="pf-work-card__stat">
                        <IconMessage size={13} color="#6b778c" /> {w.commentCount ?? 0}
                    </span>
                    <span className="pf-work-card__stat">
                        <IconBookmark size={13} color="#6b778c" />
                    </span>
                </div>
            </article>
        );
    };

    const EmptyState = () => (
        <div className="pf-empty">
            <IconBookmark size={48} color="#a09880" />
            <p>Nenhuma publicação encontrada.</p>
            <span>Este autor ainda não possui publicações.</span>
        </div>
    );

    /* ─── Render ── */
    return (
        <>
            <Header />
            <main className="pf-page">

                {/* ── Hero (sem botão Sair) ── */}
                <div className="pf-hero">
                    <div className="pf-hero__inner">
                        <div className="pf-avatar">{initials || '?'}</div>
                        <div className="pf-hero__info">
                            <h1 className="pf-name">{displayName}</h1>
                            {authorGrade && <span className="pf-grade">{authorGrade}</span>}
                        </div>
                    </div>
                </div>

                {/* ── Filtros por tipo de publicação ── */}
                <div className="pf-filters pf-filters--standalone">
                    {filterTabs.map((f) => (
                        <button
                            key={f}
                            className={`pf-filter ${activeFilter === f ? 'pf-filter--active' : ''}`}
                            onClick={() => setFilter(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* ── Conteúdo ── */}
                <div className="pf-body">
                    <section className="pf-works">
                        {loading ? (
                            <div className="pf-loading">
                                <span className="pf-spinner" />
                                <p>Carregando publicações...</p>
                            </div>
                        ) : filtered.length === 0 ? (
                            <EmptyState />
                        ) : (
                            <div className="pf-works__grid">
                                {filtered.map((w) => (
                                    <WorkCard key={w.id} w={w} />
                                ))}
                            </div>
                        )}
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
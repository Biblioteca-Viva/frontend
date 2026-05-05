import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categories as initialCategories } from '../../data/categories';
import { getHomeData } from '../../services/workService';
import './Sections.css';

export function Sections() {
  const [categories, setCategories] = useState(initialCategories);

  useEffect(() => {
    async function fetchCounts() {
      try {
        const data = await getHomeData();

        const counts = {
            'redacoes': data.essayCount || 0,
            'cordeis': data.cordelCount || 0,
            'contos': data.taleCount || 0,
            'cronicas': data.shortStoryCount || 0,
            'poemas': data.poemCount || 0,
            'jornal': data.articleCount || 0,
            'infograficos': data.infographicCount || 0,
            'artes': data.artCount || 0,
            'videos': data.multimediaCount || 0,
            'libras': data.libraLiteratureCount || 0,
            'clube-leitura': 0 
        };

        const updatedCategories = initialCategories.map(cat => ({
          ...cat,
          count: counts[cat.id] || 0
        }));

        setCategories(updatedCategories);
      } catch (error) {
        console.error("Erro ao buscar as contagens das seções:", error);
      }
    }

    fetchCounts();
  }, []);

  return (
      <section className="sections">
        <h2>Seções da Biblioteca</h2>
        <span className="title-line" />
        <p className="sections-description">
          Explore as diversas produções autorais dos nossos estudantes
        </p>
        <div className="grid">
          {categories.map((category) => (
              <Link to={`/categoria/${category.id}`} key={category.id} className="card">
                <div className={`icon ${category.color}`}>
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
                <span>{category.count} {category.count === 1 ? 'item' : 'itens'}</span>
              </Link>
          ))}
        </div>
      </section>
  );
}
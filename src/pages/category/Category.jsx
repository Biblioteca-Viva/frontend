import { useParams } from 'react-router-dom';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import { categories } from '../../data/categories.jsx';

export function Category() {
  const { id } = useParams();

  const currentCategory = categories.find(categoria => categoria.id === id);

  const pageTitle = currentCategory ? currentCategory.title : 'Categoria não encontrada';

  return (
    <main style={{ backgroundColor: '#f6f7f9', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <section style={{ flex: 1, padding: '80px 20px', textAlign: 'center', color: '#0a2a57' }}>
        
        <h1 style={{ fontSize: '42px', fontWeight: 'bold' }}>{pageTitle}</h1>
        
        <p style={{ marginTop: '20px', fontSize: '18px', color: '#42526e' }}>
          Em breve...
        </p>

      </section>

      <Footer />
    </main>
  );
}
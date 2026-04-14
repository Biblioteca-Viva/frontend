import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import { login } from '../../services/authService';
import './Login.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin() {
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError('E-mail ou senha inválidos.');
    } finally {
      setLoading(false);
    }
  }

  return (
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <section className="auth-container">
          <div className="auth-card">
            <h2>Bem-vindo de volta!</h2>
            <p className="auth-subtitle">Acesse a sua conta da Biblioteca Viva!</p>

            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input
                  type="text"
                  id="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="senha">Senha</label>
              <input
                  type="password"
                  id="senha"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <p style={{ color: '#d62828', fontSize: '14px', marginBottom: '8px' }}>{error}</p>}

            <button className="auth-btn" onClick={handleLogin} disabled={loading}>
              {loading ? 'ENTRANDO...' : 'ENTRAR'}
            </button>

            <Link to="/cadastro" className="auth-link">
              Ainda não tem conta? <span>Cadastre-se aqui</span>
            </Link>
          </div>
        </section>
        <Footer />
      </main>
  );
}
import './App.css'

function App() {
  return (
    <>
      {/* TOPO */}
      <nav className="topbar">
        <div className="logo">
          📚 <span>BIBLIOTECA VIVA</span>
        </div>
        <div className="icones">🔍 👤 ☰</div>
      </nav>

      <div className="linha-vermelha"></div>

      {/* HERO */}
      <header className="hero">
        <h1>BIBLIOTECA VIVA</h1>
        <p className="subtitulo">A biblioteca tá on!</p>

        <p className="local">
          EREM Abílio Monteiro, Lagoa do Ouro - PE
        </p>

        <p className="descricao">
          Leitura, Escrita e Protagonismo Digital. Um espaço onde os estudantes
          compartilham suas produções autorais e inspiram outros a criar.
          Juntos construímos conhecimento.
        </p>

        <div className="busca-container">
          <input
            type="text"
            placeholder="Buscar redações, contos, vídeos..."
          />
          <button className="btn-buscar">BUSCAR</button>
        </div>

        <div className="acoes">
          <button className="secundario">Explorar Acervo</button>
        </div>
      </header>

      {/* SEÇÕES */}
      <section className="secoes">
          <h2>Seções da Biblioteca</h2>
          <span className="linha-titulo"></span>

          <p className="descricao-secoes">
            Explore as diversas produções autorais dos nossos estudantes
          </p>

          <div className="grid">
            <div className="card">
              <div className="icone vermelho">🏅</div>
              <h3>Redações Nota 10</h3>
              <span>245 itens</span>
            </div>

            <div className="card">
              <div className="icone laranja">📖</div>
              <h3>Cordéis</h3>
              <span>189 itens</span>
            </div>

            <div className="card">
              <div className="icone azul">📄</div>
              <h3>Contos</h3>
              <span>342 itens</span>
            </div>

            <div className="card">
              <div className="icone roxo">✍️</div>
              <h3>Crônicas</h3>
              <span>276 itens</span>
            </div>

            <div className="card">
              <div className="icone verde">📘</div>
              <h3>Clube de Leitura</h3>
              <span>156 itens</span>
            </div>

            <div className="card">
              <div className="icone roxo-claro">📰</div>
              <h3>Jornal da Escola</h3>
              <span>98 itens</span>
            </div>

            <div className="card">
              <div className="icone verde-agua">🖼️</div>
              <h3>Infográficos</h3>
              <span>127 itens</span>
            </div>

            <div className="card">
              <div className="icone rosa">🎨</div>
              <h3>Galeria de Artes</h3>
              <span>213 itens</span>
            </div>

            <div className="card">
              <div className="icone laranja-forte">🎥</div>
              <h3>Vídeos Autorais</h3>
              <span>87 itens</span>
            </div>

            <div className="card">
              <div className="icone azul-petroleo">🌐</div>
              <h3>Literatura em Libras</h3>
              <span>45 itens</span>
            </div>
          </div>
        </section>

      {/* CONVITE */}
      <section className="convite">
        <h2>Faça Parte da Nossa Comunidade</h2>
        <p>
          Compartilhe suas produções culturais e inspire outros estudantes.
        </p>
        <button className="primario">Começar a Contribuir</button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p><strong>BIBLIOTECA VIVA</strong></p>
        <p>EREM Abílio Monteiro, Lagoa do Ouro - PE</p>
        <p>© 2025 Biblioteca Viva</p>
      </footer>
    </>
  )
}

export default App

import "./footer.css";

function Footer()
{
    return (
    
        <footer>
            <div className="container">
                <div className="footer">
                    <div className="logo">
                        <h2>GameZone</h2>
                        <img className="imagem" src="src/assets/games.png" alt="Logo" />
                    </div>
                </div>
                <div className="navegacao">
                    <h3>Navegação</h3>
                    <nav>
                        <li><a href="/">Início</a></li>
                        <li><a href="/games">Catálogo</a></li>
                        <li><a href="/about">Sobre mim</a></li>
                    </nav>
                </div>
                <div className="contato">
                    <h3>Contato</h3>

                    <p>Email: contato@gamezone.com</p>
                    <p>Brasil</p>
                </div>

                <p>© 2026 GameZone. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer;
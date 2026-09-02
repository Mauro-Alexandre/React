import "./header.css";

function Header()
{
    return (
        <header>
            
            
            <div className="logo">
                <h1>GameZone</h1>
                <img className="imagem" src="src/assets/games.png" alt="Logo" />
            </div>
            <nav>
                <li><a href="/">Início</a></li>
                <li><a href="/games">Catálogo</a></li>
                <li><a href="/about">Sobre mim</a></li>
            </nav>
        </header>
    )
}

export default Header;
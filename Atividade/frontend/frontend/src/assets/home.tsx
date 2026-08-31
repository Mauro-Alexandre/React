function Header()
{
    return (
        <header>
            <h1>GameZone</h1>
            <nav>
                <li><a href="/">Início</a></li>
                <li><a href="/games">Catálogo</a></li>
                <li><a href="/about">Sobre mim</a></li>
            </nav>
        </header>
    )
}

function Home()
{
    return (
        <main>
            <h2>Bem-vindo ao GameZone!</h2>
            <p>Descubra os melhores jogos do momento.</p>
        </main>
    )
}


export default Header, Home;
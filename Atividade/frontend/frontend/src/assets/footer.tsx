function Footer()
{
    return (
    
        <footer className=" bg-[#160429]">
            <div className="">
                <div className="">
                    <h2>GameZone</h2>
                    <img className="" src="src/assets/games.png" alt="Logo" />
                </div>
            </div>
            <div className="">
                <h3>Navegação</h3>
                <nav>
                    <li><a href="/">Início</a></li>
                    <li><a href="/games">Catálogo</a></li>
                    <li><a href="/about">Sobre mim</a></li>
                </nav>
            </div>
            <div className="">
                <h3>Contato</h3>

                <p>Email: contato@gamezone.com</p>
                <p>Brasil</p>
            </div>

            <p>© 2026 GameZone. Todos os direitos reservados.</p>

        </footer>
    )
}

export default Footer;
function Footer()
{
    return (

        <footer className="text-white bg-[#160429]">
            <div>
                <div>
                    <h2>GameZone</h2>
                    <img className="w-7 gap-2" src="src/assets/games.png" alt="Logo" />
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
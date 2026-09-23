import { Link } from "react-router-dom";

function Footer()
{
    return (

        <footer className="text-white bg-[#160429]">
            <div className="flex gap-125 p-5 mb-6 border-b-[0.1px]">
                <div>
                    <div className="flex gap-2 ml-10">
                        <img className="w-7" src="src/assets/games.png" alt="Logo" />
                        <h2 className="text-2xl text-[rgb(106,106,250)] font-['Franklin_Gothic_Medium','Arial_Narrow',Arial,sans-serif]">GameZone</h2>
                    </div>
                </div>
                
                <div className="list-none">
                    <h3 className="mb-3 font-semibold">Navegação</h3>
                    <nav >
                        <li className="mb-1">
                            <Link className="hover:text-[rgb(106,106,250)] 
                                hover:transition-delay 
                                hover:transition 
                                hover:duration-190"
                                to = {"/home"}>Início
                            </Link>
                        </li>
                        
                        <li className="mb-1">
                            <Link className="hover:text-[rgb(106,106,250)] 
                                hover:transition-delay 
                                hover:transition 
                                hover:duration-190"
                                to = {"/jogos"}>Catálogo
                            </Link>
                        </li>

                        <li>
                            <Link className="hover:text-[rgb(106,106,250)] 
                                hover:transition-delay 
                                hover:transition 
                                hover:duration-190"
                                to = {"/perfil"}>Sobre mim
                            </Link>
                        </li>
                    </nav>
                </div>
                <div className="list-none">
                    <h3 className="mb-3 font-semibold">Contato</h3>
                    
                    <nav>
                        <li className="mb-1">Email: Contato@gamezone.com</li>
                        <li>Brasil</li>
                    </nav>
                </div>
            </div>
            
            <p className="text-center">© 2026 GameZone. Todos os direitos reservados.</p>

        </footer>
    )
}

export default Footer;
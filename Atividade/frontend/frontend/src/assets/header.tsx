function Header() 
{
  return (
        <header className="flex justify-between items-center p-4 bg-[#160429] text-white w-full m-0 h-20 z-10">
            <div className="flex items-center gap-2 ml-10">
                <h1 className="text-xl text-[rgb(106,106,250)] ">GameZone</h1>
                <img className="w-6 mt-1 gap-2" src="src/assets/games.png" alt="Logo" />
            </div>
            <nav className="flex gap-4 list-none gap-22 mr-25">
                <li> 
                    <a className="text-white text-xl hover:text-[rgb(106,106,250)] hover:transition-delay" href="/">
                        Início
                    </a>
                </li>
                <li>
                    <a className="text-white text-xl hover:text-[rgb(106,106,250)]" href="/games">
                        Catálogo
                    </a>
                </li>
                <li>
                    <a className="text-white text-xl hover:text-[rgb(106,106,250)]" href="/about">
                        Sobre mim
                    </a>
                </li>
            </nav>
        </header>
    );
}

export default Header;

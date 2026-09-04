function Header() 
{
  return (
        <header className="flex justify-between items-center p-4 bg-[#160429] text-white w-full m-0 h-20 z-10">
            <div className="flex items-center gap-2 ml-10">
                <h1 className="text-3xl mb-1 text-[rgb(106,106,250)] font-['Franklin_Gothic_Medium','Arial_Narrow',Arial,sans-serif]">GameZone</h1>
                <img className="w-7 gap-2" src="src/assets/games.png" alt="Logo" />
            </div>
            <nav className="flex list-none gap-22 mr-25 decoration-2 font-['Arial',Helvetica,sans-serif]">
                <li> 
                    <a className="text-white 
                        text-xl 
                        hover:text-[rgb(106,106,250)] 
                        hover:transition-delay 
                        hover:transition 
                        hover:duration-190  
                        hover:underline
                        hover:underline-offset-20" 
                        href="/">Início
                    </a>
                </li>
                <li>
                    <a className="text-white 
                        text-xl 
                        hover:text-[rgb(106,106,250)] 
                        hover:transition-delay 
                        hover:transition 
                        hover:duration-190
                        hover:underline
                        hover:underline-offset-20"
                        href="/games">Catálogo
                    </a>
                </li>
                <li>
                    <a className="text-white 
                        text-xl
                        hover:text-[rgb(106,106,250)] 
                        hover:transition-delay 
                        hover:transition 
                        hover:duration-190
                        hover:underline
                        hover:underline-offset-20" 
                        href="/about">Sobre mim
                    </a>
                </li>
            </nav>
        </header>
    );
}

export default Header;

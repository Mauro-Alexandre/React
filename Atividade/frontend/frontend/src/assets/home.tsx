import Header from "./header";


function Home()
{
    return (
      
        <main className="min-h-200">
            <Header />
             
            <div className="flex mb-15">
                <div className="p-30">
                    <h1 className="text-6xl font-bold">Bem-vindo ao</h1> <h1 className="text-8xl text-[rgb(71,71,236)] font-['Franklin_Gothic_Medium','Arial_Narrow',Arial,sans-serif]">GameZone!</h1>
                    <br />
                    <p className="text-[25px]">Aqui você encontra uma seleção especial <br /> de jogos incríveis para todos os gostos.</p>
                    <br />
                    <p className="text-[25px]">Explore nosso catálogo e descubra novas <br /> aventuras!</p>
                    <br />  

                    <button className="bg-blue-600 h-16 w-60
                    text-[23px]
                    font-semibold
                    text-white
                    rounded-2xl
                    hover:bg-[rgb(23,23,129)] 
                    hover:transition-delay 
                    hover:transition 
                    hover:duration-160"> <a href="../jogos">Acessar catálogo</a></button>
                </div>

                <div>
                    <img src="/src/assets/PC.png" alt="PC" className="w-250 ml-44"/>
                </div>
            </div>

            <h1 className="text-center font-bold text-3xl">Destaques do catálogo</h1>

            <div className="flex gap-72 p-13 m-5">
                <div>
                    <img src="" alt="" />

                    <h2 className="text-2xl font-bold">Minecraft</h2>
                    <p className="text-blue-500 font-bold border-1 border-blue-700 w-20 text-center mt-2 mb-2">Aventura</p>
                    <p>Explore mundos infinitos  e <br /> construa o que imaginar.</p>
                </div>

                <div>
                    <img src="" alt="" />

                    <h2 className="text-2xl font-bold">Stardew Valley</h2>
                    <p className="text-blue-500 font-bold border-1 border-blue-700 w-22 text-center mt-2 mb-2">Simulação</p>
                    <p>Viva uma vida tranquila no <br /> campo e cuide da sua fazenda.</p>
                </div>

                <div>
                    <img src="" alt="" />

                    <h2 className="text-2xl font-bold">Hollow Knight</h2>
                    <p className="text-blue-500 font-bold border-1 border-blue-700 w-20 text-center mt-2 mb-2">Aventura</p>
                    <p>Explore um reino sombrio cheio <br /> de mistérios e desafios.</p>
                </div>

                <div>
                    <img src="" alt="" />

                    <h2 className="text-2xl font-bold">Mario Kart 8 Deluxe</h2>
                    <p className="text-blue-500 font-bold border-1 border-blue-700 w-20 text-center mt-2 mb-2">Corrida</p>
                    <p>Corra com seus personagens <br /> favoritos em pistas incríveis.</p>
                </div>
            </div>


            <div className="flex justify-center">
                <button className="font-bold text-[23px] border-1 text-blue-500 w-65 h-14 rounded-[10px] mb-10 mt-10 ">
                    <a className="hover:text-blue-800  hover:transition-delay hover:transition hover:duration-160" href="../jogos">
                    Ver todos os jogos</a>
                </button>
            </div>      
        </main>
       
    )
}

export default Home;

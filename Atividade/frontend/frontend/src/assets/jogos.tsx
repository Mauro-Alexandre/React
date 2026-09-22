import Header from "./header";

function Jogos()
{
    return (

        <main>

            <Header />

            <div className="mt-15">
                <h1 className="font-semibold text-4xl flex justify-center">Catálogo de Jogos</h1>

                <p className="text-2xl flex justify-center mt-5">Confira alguns jogos disponíveis em nosso catálogo.</p>
            </div>

            <div className="flex gap-10 p-13 m-5 bg-cyan-100 rounded-2xl">
                <div>
                    <img src="/src/assets/minecraft.jfif" alt="minecraft" className="w-90 h-80 object-cover object-top rounded-3xl mb-5 "/>

                    <h2 className="text-2xl font-bold">Minecraft</h2>
                    <p className="text-blue-500 font-bold border border-blue-700 w-20 text-center mt-1 mb-2">Aventura</p>
                    <p>Um jogo de construção, exploração e sobrevivência em mundo de blocos.</p>

                    <button className="bg-blue-600 h-12 w-80 mt-5
                        text-[20px]
                        font-semibold
                        text-white
                        rounded-[10px]
                        hover:bg-[rgb(23,23,129)] 
                        hover:duration-160">Saiba mais
                    </button>
                </div>

                <div>
                    <img src="src/assets/stardew.png" alt="stardew" className="w-90 h-80 object-cover object-top rounded-3xl mb-5"/>

                    <h2 className="text-2xl font-bold">Stardew Valley</h2>
                    <p className="text-blue-500 font-bold border border-blue-700 w-22 text-center mt-2 mb-2">Simulação</p>
                    <p>Um jogo de simulação onde  você administra uma fazenda e conhece os moradores.</p>

                     <button className="bg-blue-600 h-12 w-80 mt-5
                        text-[20px]
                        font-semibold
                        text-white
                        rounded-[10px]
                        hover:bg-[rgb(23,23,129)] 
                        hover:duration-160">Saiba mais
                    </button>
                </div>

                <div>
                    <img src="src/assets/hk.webp" alt="hk" className="w-90 h-80 object-cover object-top rounded-3xl mb-5"/>

                    <h2 className="text-2xl font-bold">Hollow Knight</h2>
                    <p className="text-blue-500 font-bold border border-blue-700 w-20 text-center mt-2 mb-2">Aventura</p>
                    <p>Explore um vasto reino subterrâneo enquanto enfrenta criaturas e descobre mistérios.</p>

                     <button className="bg-blue-600 h-12 w-80 mt-5
                        text-[20px]
                        font-semibold
                        text-white
                        rounded-[10px]
                        hover:bg-[rgb(23,23,129)] 
                        hover:duration-160">Saiba mais
                    </button>
                </div>

                <div>
                    <img src="src/assets/mk.jpg" alt="mk" className="w-90 h-80 object-cover object-top rounded-3xl mb-5"/>

                    <h2 className="text-2xl font-bold">Mario Kart 8 Deluxe</h2>
                    <p className="text-blue-500 font-bold border border-blue-700 w-20 text-center mt-2 mb-2">Corrida</p>
                    <p>Um divertido jogo de corrida com personagens, pistas e itens especiais.</p>

                     <button className="bg-blue-600 h-12 w-80 mt-5
                        text-[20px]
                        font-semibold
                        text-white
                        rounded-[10px]
                        hover:bg-[rgb(23,23,129)] 
                        hover:duration-160">Saiba mais
                    </button>
                </div>
            </div>


        </main>
    )
}

export default Jogos;
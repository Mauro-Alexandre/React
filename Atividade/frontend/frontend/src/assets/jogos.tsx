import Header from "./header";

function Jogos()
{
    return (

        <main>

            <Header />

            <div>
                <h1>Catálogo de Jogos</h1>

                <p>Confira alguns jogos disponíveis em nosso catálogo</p>
            </div>

            <div className="flex gap-20 p-13 m-5 bg-cyan-100 rounded-3xl">
                <div className="transition-[scale] hover:scale-105">
                    <img src="/src/assets/minecraft.jfif" alt="minecraft" className="w-90 h-80 object-cover object-top rounded-3xl mb-5 "/>

                    <h2 className="text-2xl font-bold">Minecraft</h2>
                    <p className="text-blue-500 font-bold border border-blue-700 w-20 text-center mt-1 mb-2">Aventura</p>
                    <p>Explore mundos infinitos  e construa o que imaginar.</p>
                </div>

                <div className="transition-[scale] hover:scale-105">
                    <img src="src/assets/stardew.png" alt="stardew" className="w-90 h-80 object-cover object-top rounded-3xl mb-5"/>

                    <h2 className="text-2xl font-bold">Stardew Valley</h2>
                    <p className="text-blue-500 font-bold border border-blue-700 w-22 text-center mt-2 mb-2">Simulação</p>
                    <p>Viva uma vida tranquila no campo e cuide da sua fazenda.</p>
                </div>

                <div className="transition-[scale] hover:scale-105">
                    <img src="src/assets/hk.webp" alt="hk" className="w-90 h-80 object-cover object-top rounded-3xl mb-5"/>

                    <h2 className="text-2xl font-bold">Hollow Knight</h2>
                    <p className="text-blue-500 font-bold border border-blue-700 w-20 text-center mt-2 mb-2">Aventura</p>
                    <p>Explore um reino sombrio cheio de mistérios e desafios.</p>
                </div>

                <div className="transition-[scale] hover:scale-105">
                    <img src="src/assets/mk.jpg" alt="mk" className="w-90 h-80 object-cover object-top rounded-3xl mb-5"/>

                    <h2 className="text-2xl font-bold">Mario Kart 8 Deluxe</h2>
                    <p className="text-blue-500 font-bold border border-blue-700 w-20 text-center mt-2 mb-2">Corrida</p>
                    <p>Corra com seus personagens favoritos em pistas incríveis.</p>
                </div>
            </div>


        </main>
    )
}

export default Jogos;
import Header from "./header";
import Footer from "./footer";

function Perfil() 
{
    return (
        <main>
            <Header />

            <div className="flex p-20 gap-70">
                <img src="./src/assets/foto.png" alt="foto de perfil" className="h-100 ml-20"/>

                <div>
                    <h1 className="font-bold text-5xl mb-5">Sobre mim</h1>

                    <h2 className="text-blue-600 font-bold text-3xl mb-5">
                        Olá! Meu nome é João.
                    </h2>

                    <div className="text-[20px] w-150">
                        <p className="mb-5">Sou estudante do curso Técnico em informática e estou aprendendodesenvolvimento web.</p>

                        <p className="mb-5">Gosto de tecnologia, programação, música e videogames.</p>

                        <p>Escolhi criar um catálogo de jogos porque videogames fizeram partedos meus interesses e permitiram trabalhar com diferentes categorias e informações.</p>
                    </div>
                </div>
        </div>

            <div className="flex gap-50 m-15 p-15 mt-1">
 
                <div className="border-[0.5px] w-100 h-55 rounded-[10px] shadow-2xl transition-[scale] hover:scale-105">
                    <img src="./src/assets/controle-de-video-game.png" alt="controle" className="w-15 ml-25 mt-2"/>
                    <h2 className="text-center font-bold text-2xl mb-5 mt-8">Gamer</h2>

                    <p className="text-center text-[20px]">Apaixonado por jogos desde criança.</p>
                </div>

                <div className="border-[0.5px] w-100 h-55 rounded-[10px] shadow-2xl transition-[scale] hover:scale-105">
                    <img src="./src/assets/codigo.png" alt="código" className="w-15 ml-25"/>

                    <h2 className="text-center font-bold text-2xl mb-5 mt-10">Desenvolvedor</h2>

                    <p className="text-center text-[19px]">Sempre aprendendo novas tecnologias.</p>
                </div>

                <div className="border-[0.5px] w-100 h-55 rounded-[10px] shadow-2xl transition-[scale] hover:scale-105">
                    <img src="./src/assets/tocador-de-musica.png" alt="musica" className="w-12 ml-25 mt-3"/>
                    <h2 className="text-center font-bold text-2xl mb-5 mt-10">Músicas</h2>

                    <p className="text-center text-[20px] w-60">Amo ouvir diferentes estilos musicais.</p>
                </div>

                <div className="border-[0.5px] w-100 h-55 rounded-[10px] shadow-2xl transition-[scale] hover:scale-105">
                    <img src="./src/assets/abra-o-livro.png" alt="livro" className="w-13 ml-25 mt-3"/>
                    <h2 className="text-center font-bold text-2xl mb-5 mt-10">Estudante</h2>

                    <p className="text-center text-[20px]">Sempre buscando evoluir.</p>
                </div>
                
            </div>
        <Footer />
        </main>
    );
}

export default Perfil;

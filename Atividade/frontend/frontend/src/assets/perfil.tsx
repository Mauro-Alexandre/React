import Header from "./header";
import Footer from "./footer";

function Perfil()
{
    return (
        <main>
            <Header/>
            <div className="flex p-20">
                <img src="" alt="" />

                <div>
                    <h1 className="font-bold text-5xl mb-5">Sobre mim</h1>

                    <h2 className="text-blue-600 font-bold text-3xl mb-5">Olá! Meu nome é João.</h2>
                    
                    <div className="text-[20px] w-150">
                        <p className="mb-5">Sou estudante do curso Técnico em informática e estou aprendendo desenvolvimento web.</p>
                        
                        <p className="mb-5">Gosto de tecnologia, programação, música e videogames.</p>
                    
                        <p>Escolhi criar um catálogo de jogos porque videogames fizeram parte dos meus interesses e permitiram trabalhar com diferentes categorias e informações.</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-50 m-15 p-15">
                <div className="">
                    <img src="" alt="" />
                    <h2>Gamer</h2>
                    
                    <p>Apaixonado por jogos desde criança.</p>
                </div>
                 <div>
                    <img src="" alt="" />
                    <h2>Desenvolvedor</h2>
                    
                    <p>Sempre aprendendo novas tecnologias.</p>
                </div>
                 <div>
                    <img src="" alt="" />
                    <h2>Músicas</h2>
                    
                    <p>Amo ouvir diferentes estilos musicais.</p>
                </div>
                 <div>
                    <img src="" alt="" />
                    <h2>Estudante</h2>
                    
                    <p>Sempre buscando evoluir.</p>
                </div>
            </div>
            <Footer/>
        </main>
    )
}

export default Perfil;
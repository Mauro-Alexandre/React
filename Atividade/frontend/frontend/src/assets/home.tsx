import Header from "./header";
import Footer from "./footer";

function Home()
{
    return (

        <main>
            <Header />
            <div className="contaniner">
                <div className="apresentacao">
                    <h2>Bem-vindo ao GameZone!</h2>

                    <p>Aqui você encontra uma seleção especial de jogos incríveis para todos os gostos.</p>

                    <p>Explore nosso catálogo e descubra novas aventuras!</p>

                    <button className="btn-catalogo"><a href="/jogos">Acessar catálogo</a></button>
                </div>

                <div className="catalogo">
                    <div className="card">
                        <img src="" alt="" />

                        <h2>Minecraft</h2>
                        <h3>Aventura</h3>

                        <p>Explore mundos infinitos e construa o que imaginar.</p>
                    </div>
                    <div className="card">
                        <img src="" alt="" />

                        <h2>Stardew Valley</h2>
                        <h3>Simulação</h3>

                        <p>Viva uma vida tranquila no campo e cuide da sua fazenda.</p>
                    </div>
                    <div className="card">

                    </div>
                    <div className="card">
                        
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}


export default Home;
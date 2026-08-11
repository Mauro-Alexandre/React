import "./App.css";
import Botao from "./components/Botao";

function app() 
{
  return (
    <main className="flex min-h-screen items-center justify-center bg-amber-400">
      <div className="rounded-xl bg-amber-50 p-8 shadow-lg">
        <h1 className="text-5x1 text-center font-bold text-blue-800">
          Hello World!
        </h1>
        <p className="mt-3 text-center">Bem vindo ao react com tailwind</p>
        <div className="flex gap-2 justify-center mt-5">
          <Botao texto="Comprar" cor="bg-cyan-800" corHover="hover:bg-cyan-600"></Botao>
          <Botao texto="Vender" cor="bg-red-800" corHover="hover:bg-red-600"></Botao>
        </div>
      </div>
    </main>
  );
}

export default app;

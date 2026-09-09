import { useState, useEffect } from "react";

type Contato =
{
    id: number;
    name: string;
    email: string;
}

function Contato()
{
    const [contatos, setContatos] = useState<Contatos[]>([]);
    const [erro, setErro] = useState("");
    const [carregando, setCarregando] = useState(true);

    useEffect(() =>
    {
        async function buscarContatos()
        {
            try 
            {
                const resposta = await fetch("http://localhost:3000/api/contatos");

                if(!resposta.ok)
                {
                    throw new Error("Error ao buscar contato");
                }

                const dados = await resposta.json();

                setContatos(dados);
            } 
            catch (error) 
            {
                setErro((error as Error).message);
            }
            finally
            {
                setCarregando(false);
            }
        }

        buscarContatos();
    }, []);

    if(carregando)
    {
        return (
            <div className="flex justify-center">
                <p className="text-red-700 font-bold">Carregando contatos...</p>
            </div>
        )
    }

    if(erro)
    {
        return (
            <div className="flex justify-center text-red-700">
                {erro}
            </div>
        )
    }

    return (
        <main className="mx-auto max-w-5x1 p-6">
            <div className="mb-6 text-4x1 font-bold text-blue-900">
                <h1>Lista de Contatos</h1>
            </div>

            <div className="flex flex-col gap-5">
                { contatos.length === 0 ? (
                    <p className="text-gray-500">Nenhum usuário encontrado.</p>
                ) : (
                    contatos.map((contato) => 
                    (
                        <div key={contato.id} className="rounded border p-4 max-w-2xs flex-wrap">
                            <h2 className="text-xl font-bold">{contato.name}</h2>

                            <p className="text-gray-600">{contato.email}</p>
                        </div>
                    ))
                )}
            </div>
        </main>
    );
}

export default Contato;
import { useState } from "react";

type Usuario = 
{
    id: number;
    name: string;
    email: string;
}

function Produtos()
{
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [name, setName] = useState("");

    async function buscarUsuarios() 
    {
        const resposta = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`,);
        const dados = await resposta.json();   
        const resultado = dados.filter((usuario: Usuario) =>
            usuario.name.toLowerCase().includes(name.toLowerCase()),
        );

        setUsuarios(resultado);
    }
    
    return (
        <main className="max-w-5x1 mx-auto p-6">
            <h1 className="mb-6 text-4x1 font-bold mb-6 text-blue-900">
                {" "}
                Pesquisar Usuários
            </h1>
            <div>
                <input 
                    type="text" 
                    placeholder="Digite parte de um nome..." 
                    value={name}    
                    onChange={(e) => setName(e.target.value)} 
                    className="border rounded-lg p-3 w-full mb-3"
                />
                <button className="rounded-lg bg-blue-500 px-4 py-2 text-white" onClick={buscarUsuarios}>
                    Buscar Usuários
                </button>
                <div className="space-y-4 mt-6"> 
                    {usuarios.length === 0 ? 
                    (
                        <p className="text-gray-500">Nenhum usuário encontrado.</p>
                    ) : (
                        usuarios.map((usuario) => (
                            <div key={usuario.id} className="rounded-lg border p-4 shadow-md hover:shadow-lg transition-shadow">
                                <h2 className="text-xl font-semibold text-blue-900">{usuario.name}</h2>
                                <p className="text-gray-700">{usuario.email}</p>
                            </div>
                        ))                     
                    )}
                </div>
            </div>
        </main>
    );
}

export default Produtos;
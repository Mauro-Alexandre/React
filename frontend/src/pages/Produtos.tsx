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
    const [email, setEmail] = useState("");
    const [edicao, setEdicao] = useState<number | null>(null);

    async function buscarUsuarios() 
    {
        const resposta = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`,);
        const dados = await resposta.json();   
        const resultado = dados.filter((usuario: Usuario) =>
            usuario.name.toLowerCase().includes(name.toLowerCase()),
        );

        setUsuarios(resultado);
    }

    //Cadastramento Local
   /* function cadastrarUsuarios()
    {

        const novoUsuario: Usuario = 
        {
            id: Date.now(),
            name: name,
            email: email
        };

        setUsuarios([...usuarios, novoUsuario]);
        setName("");
        setEmail("");
    } */

    async function cadastrarUsuarios()
    {
        const resposta = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${edicao}`, 
        {
            method: "POST",
            headers: {"Content-Type": "aplication/json"},
            body: JSON.stringify
            ({
                name: name,
                email: email
            })
        });

        const novoUsuario = await resposta.json();
        setUsuarios([...usuarios, novoUsuario]);
        setName("");
        setEmail("");
    }

    function editarUsuarios(id: number)
    {
        const usuario = usuarios.find((usuario => usuario.id === id));
        if (usuario) 
        {    
            setName(usuario.name);
            setEmail(usuario.email);
            setEdicao(id);
        }
    }

    /*function salvarEdicao()
    {
        setUsuarios
        (
            usuarios.map((usuario) => 
            {
                if (usuario.id === edicao)
                {
                    return {
                        ...usuario,
                        name: name,
                        email: email
                    }
                }
                
                return usuario;
            }),
        );

        setEdicao(null);
        setName("");
        setEmail("");
    } */

    async function salvarEdicao()
    {
        const resposta = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${edicao}`,
        {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify
            ({
                name: name,
                email: email,
            }),
        });

        const usuarioAtualizado = await resposta.json();
        setUsuarios
        (
            usuarios.map((usuario) => 
            (
                usuario.id === edicao ? usuarioAtualizado: usuario
            )
        ));

        setEdicao(null);
        setName("");
        setEmail("");
    }

    /*function deletarUsuarios(id: number)
    {
        const usuariosAtualizados = usuarios.filter((usuario) => usuario.id !== id)

        setUsuarios(usuariosAtualizados);
    }*/

    async function deletarUsuarios(id: number)
    {
        await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${id}`, 
        {
            method: "DELETE",
        });

        setUsuarios(usuarios.filter((usuario) => usuario.id !== id))
    }
    
    return (
        <main className="max-w-5x1 mx-auto p-6">
            <h1 className="mb-6 text-4x1 font-bold text-blue-900">
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

                <input 
                    type="email" 
                    placeholder="Digite um email..." 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-3 w-full rounded-lg border p-3"
                />

                <div className="flex gap-2">
                    <button className="cursor-pointer rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" onClick={buscarUsuarios}>
                        Buscar 
                    </button>
                    
                    <button className={`cursor-pointer rounded-lg bg-green-500 px-4 py-2 text-white ${edicao === null 
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-yellow-500 hover:bg-yellow-600"}`} 
                        onClick={edicao === null ? cadastrarUsuarios : salvarEdicao}>
                        {edicao === null ? "Cadastrar" : "Salvar edição"}
                    </button>
                </div>

                <div className="space-y-4 mt-6"> 
                    {usuarios.length === 0 ? 
                    (
                        <p className="text-gray-500">Nenhum usuário encontrado.</p>
                    ) 
                    : 
                    (
                        usuarios.map((usuario) => 
                        (
                            <div key={usuario.id} className="rounded-lg border p-4">
                                <h2 className="text-xl font-bold">{usuario.name}</h2>
                                <p className="text-gray-600">{usuario.email}</p>
                                <div className="mt-2 flex gap-2">
                                    <button className="cursor-pointer rounded-lg bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600" onClick={() => editarUsuarios(usuario.id)}>
                                        Editar
                                    </button>

                                    <button className="cursor-pointer rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600" onClick={() => deletarUsuarios(usuario.id)}>
                                        Deletar
                                    </button>
                                </div>
                            </div>
                        ))                     
                    )}
                </div>
            </div>
        </main>
    );
}

export default Produtos;
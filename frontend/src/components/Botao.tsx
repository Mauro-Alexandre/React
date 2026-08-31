type BotaoProps = 
{
    texto: string;
    cor: string;
    corHover?: string;
};

function Botao({ texto, cor, corHover }: BotaoProps) 
{
    return (
        <button className={`rounded-lg ${cor} text-white px-4 py-2  ${corHover}`}>
            {texto}
        </button>
    )
}

export default Botao;
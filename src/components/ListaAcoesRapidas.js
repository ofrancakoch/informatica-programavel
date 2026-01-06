import { PathToIcons } from "./PathToIcons.js"
import { acoesRapidas } from "./AcoesRapidas.js"

export const listaAcoesRapidas = acoesRapidas.map( acao =>
        <div key={acao.id} className="w-60 h-20 rounded-md bg-[#089AD8] flex justify-center items-center text-white hover:scale-105 duration-300 cursor-pointer">
            <a className="flex justify-center items-center">
                <img
                    src={PathToIcons(acao)}
                    alt={"Ícone " + acao.nome}
                />

                <p className="ml-5">
                    {acao.nome}
                </p>
            </a>
        </div>
);
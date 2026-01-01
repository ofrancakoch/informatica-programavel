import { PathToIcons } from "./PathToIcons.js"
import { abas } from "./Abas.js"

export const listaDeAbas = abas.map( aba =>
        <ul key={aba.id} className="mt-4 flex w-48 hover:bg-[#79CDF0] rounded-md p-2 cursor-pointer">
            <img
                src={PathToIcons(aba)}
                alt={"Ícone " + aba.nome}
            />

            <p className="ml-5">
                {aba.nome}
            </p>
            
        </ul>
);
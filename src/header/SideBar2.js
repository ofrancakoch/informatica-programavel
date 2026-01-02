import logo_sentinelas_svg from "../logo_sentinelas.png"
import { listaDeAbas } from "./ListaDeAbas.js";
import Header from "../pages/Header.js";

const SideBar = () => {

    return (
        <>
        <main className="flex">
            <aside className="w-56 bg-[#089AD8] border-2 border-solid border-gray-300 h-screen relative z-10">
                
                <nav className="mt-7 text-white flex flex-col justify-between items-center">

                    <img
                    src={logo_sentinelas_svg}
                    alt="Logo Sentinelas"
                    width={200}
                    className="hover:scale-110 duration-300 cursor-pointer"
                    />
                
                    <div className="mt-7">
                        {listaDeAbas}
                    </div>

            

                {/*Sistema de Conta (Foto e Nome Personalizável). 
                Pesquisar como faz isso. Por enquanto, o React 
                não será aplicado aqui. Será um exemplo genérico*/}
                    <div className="absolute bottom-8 flex w-48 hover:bg-[#79CDF0] rounded-md p-2 cursor-pointer">

                        <img
                        src="/icons/icone_configuracoes.svg"
                        alt="Ícone Configurações"
                        />

                        <p className="ml-5">Configurações</p>
                        
                    </div>

                </nav> 

            </aside>

            <div className="flex-1">
                <Header/>
            </div>

        </main>
        </>
    );



}

export default SideBar;
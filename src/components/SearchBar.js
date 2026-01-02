import { useState } from "react";

const SearchBar = () => {

    const  open = useState(true);

    return(
        <>

            <div className="flex items-center rounded-md w-80 h-10 bg-[#089AD8] p-3">            
          
                <img
                        src="/icons/icone_pesquisa.svg"
                        alt="Ícone Pesquisa"
                        width={20}
                        className={`ml-2 mr-5 ${open && "mr-2"}`}
                />
                
                <input type={"search"} placeholder="Procurar" 
                className={`text-base bg-transparent w-full text-white font-normal placeholder-white focus:outline-none ${!open && "hidden"}`}/>

            </div>

        </>
    );
}

export default SearchBar;
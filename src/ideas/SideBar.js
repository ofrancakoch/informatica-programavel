import logo_sentinelas_svg from "../logo_sentinelas.png"
import { ChevronDown, ChevronLeft, Search, CircleDollarSign } from 'lucide-react';
import { useState } from "react";


const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const Menus = [
    { title: "Financeiro" },
    { title: "Secretaria" },
    { title: "Media"},
    {
      title: "Cadastro",
      submenu: true,
      submenuItems: [{ title: "Membros" }, { title: "Especialidades" }, { title: "Classes" }],
    },
    { title: "Atos" },
    { title: "Atas"},
    { title: "Setting" },
    { title: "Logout" },
  ];

  return(
    <>
      <main className="flex">  
        <nav 
          className={`bg-[#1976B9] h-screen p-5 
          ${open ? "w-72" : "w-20"} relative duration-300`}>
          
          <ChevronLeft 
            className={`bg-[#FBC71F] text-white
              w-10 h-10 rounded-full absolute -right-7 top-12 
              border-2 border-[#FBC71F] cursor-pointer mr-2
              ${!open && "rotate-180"}`} 
            onClick={() => setOpen(!open)} 
          />

          <div className="inline-flex">
            <a href="#">
              <img
                src={logo_sentinelas_svg}
                alt="Logo Sentinelas"
                className={`${open ? "w-[200px]" : "w-0"}
                  duration-250 hover:scale-105 transition-all 
                  cursor-pointer block float-left my-3`}/>
            </a>
          </div>

          <div className=
            {`flex items-center rounded-md
            bg-black mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}>            
          
            <Search className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`}/>
            
            <input type={"search"} placeholder="Procurar" 
            className=
              {`text-base bg-transparent w-full 
              text-white font-normal placeholder-white 
              focus:outline-none ${!open && "hidden"}`}/>

          </div>

          <ul className="pt-2">
            {Menus.map((menu, index) => (
              <li key={index} className={`text-gray-300 text-sm cursor-pointer rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
                
                {/* 1. Container do Cabeçalho (Icone + Texto + Seta) */}
                <div 
                  // Movemos o evento de click para o container inteiro para melhor UX
                  onClick={() => menu.submenu && setSubMenuOpen(!subMenuOpen)} 
                  className={`flex items-center gap-x-4 p-2 hover:bg-light-white hover:bg-[#FBC71F] rounded-md`}
                >
                  <span className="text-2xl">
                    <CircleDollarSign />
                  </span>

                  <span className={`text-base font-medium flex-1 text-left duration-200 ${!open && "hidden"}`}>
                    {menu.title}
                  </span>

                  {/* Seta condicional */}
                  {menu.submenu && open && (
                    <ChevronDown className={`duration-200 ${subMenuOpen && "rotate-180"}`} />
                  )}
                </div>

                {/* 2. O Submenu fica FORA do flex container acima, mas DENTRO do li */}
                {menu.submenu && subMenuOpen && open && (
                  <ul className="pl-8 mt-2"> {/* Adicionei pl-8 para indentação */}
                    {menu.submenuItems.map((submenuItem, subIndex) => (
                      <li 
                        key={subIndex} 
                        className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#FBC71F] rounded-md"
                      >
                        {submenuItem.title}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

        </nav>
        <div className="bg-[#FBC71F] w-24 relative h-screen shrink-0">
          <p className="font-long-shot text-black text-6xl whitespace-nowrap 
               absolute top-1/2 left-1/2 
               -translate-x-1/2 -translate-y-1/2 -rotate-90">
            S.G.C SENTINELAS
          </p>
        </div>
      </main>
    </>
  );
}

export default SideBar;
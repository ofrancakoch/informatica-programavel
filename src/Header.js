import logo_sentinelas from "./logo_sentinelas.png"
import nome_sentinelas from "./nome_sentinelas.png"
import logo_sentinelas_svg from "./logo_sentinelas.png"
import { ChevronDown, ChevronLeft, Search, CircleDollarSign } from 'lucide-react';
import { useState } from "react";

const Header = () => {
  return (
    <header>
    {/*add a New Ticker over the navigation bar saying: "Sistema de Gerenciamento de Clubes dos Sentinelas"*/}
      {/*<NewsTicker/>*/}
      {/*<NavBar/>*/}
      <SideBar/>
    </header>  
  ); 
}

export default Header;



const NavBar = () => {

  return(
      <>
        <nav className="text-black  bg-[#1976B9]">
          <div className="relative flex items-center justify-between mx-auto w-[92%] ">
            <a href="#">
              <img
                src={logo_sentinelas_svg}
                alt="Logo Sentinelas"
                className="w-[150px] hover:scale-105 transition-all my-3"/>
            </a>
          
          {/*<ul className="hidden xl:flex item-center gap-[6vw] font-semibold text-base py-6 pr-[10vw]">
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Secretaria</li>
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Finances</li>
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Sobre</li>
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Entrar</li>
          </ul>*/}
          
            <p className="absolute left-1/2 transform -translate-x-1/2 text-[#FFFF] text-2xl font-long-shot">CLUBE DE DESBRAVADORES SENTINELAS</p>


            <i className="bx bx-search-alt text-[#FFFF] text-2xl"></i>
          </div>
        </nav>
        <hr className="border-solid border-[#FBC71F] border-4 drop-shadow-md"></hr>
    </>

  );
}





const NewsTicker = () => {
  return(
    <div className="w-full h-[10x] overflow-hidden whitespace-nowra bg-black">
      <span className="flex items-center py-[1px] animate-infinite-scroll font-long-shot text-[#FFFF] text-2xl my-1">
        SISTEMA DE GERENCIAMENTO DO CLUBE SENTINELAS
      </span>
    </div>
  );
}




const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const Menus = [
    { title: "Financeiro" },
    { title: "Secretaria" },
    { title: "Media", spacing: true },
    {
      title: "Cadastro",
      submenu: true,
      submenuItems: [{ title: "Membros" }, { title: "Especialidades" }, { title: "Classes" }],
    },
    { title: "Atos" },
    { title: "Atas", spacing: true },
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
              <>
                <li key={index} 
                  className={`text-white text-sm 
                  flex items-center gap-x-4 cursor-pointer p-2 
                  hover:bg-[#FBC71F] rounded-md ${menu.spacing ? "mt-9" : "mt-2" }`}>

                  <span className="text-2xl block float-left">
                    <CircleDollarSign/>
                  </span>

                  <span className={`text-base font-medium duration-200 ${!open && "hidden"}`}>
                    {menu.title}
                  </span>
                  
                  {menu.submenu && open &&(
                    <ChevronDown className={`${subMenuOpen && "rotate-180"}`} onClick={() => setSubMenuOpen(!subMenuOpen)} />
                  )} 

                  {menu.submenu && subMenuOpen && open && (
                    <ul>
                      {menu.submenuItems.map((submenuItem, index) => (
                        <li key={index} className="text-white text-sm 
                          flex items-center gap-x-4 cursor-pointer p-2 px-5
                        hover:bg-[#FBC71F] rounded-md">
                          {submenuItem.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </>

            ))}
          </ul>

        </nav>
        <div className="bg-[#FBC71F]">
          <p className="font-long-shot text-black
          -rotate-90 relative top-1/2 text-4xl ">
            SENTINELAS
          </p>
        </div>
      </main>
    </>
  );
}
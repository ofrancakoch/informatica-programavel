import logo_sentinelas from "./logo_sentinelas.png"
import nome_sentinelas from "./nome_sentinelas.png"

const Header = () => {
  return (
    <header>
    {/*add a New Ticker over the navigation bar saying: "Sistema de Gerenciamento de Clubes dos Sentinelas"*/}
      <NavBar/>
    </header>  
  ); 
}

export default Header;



const NavBar = () => {

  return(
      <>
        <div className="w-full h-[10x] overflow-hidden whitespace-nowra bg-black">
            <span className="flex items-center py-[1px] animate-infinite-scroll font-long-shot text-[#FFFF] text-2xl my-1">SISTEMA DE GERENCIAMENTO DE CLUBE</span>
        </div>
        <nav className=" flex item-center justify-center text-black md:px-50 bg-[#1976B9] drop-shadow-md">
          <div className="flex items-center">
            <a href="#">
              <img
                src={logo_sentinelas}
                alt="Logo Sentinelas"
                className="w-[150px] hover:scale-105 transition-all my-3"/>
            </a>
          </div>
          {/*<ul className="hidden xl:flex item-center gap-[6vw] font-semibold text-base py-6 pr-[10vw]">
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Secretaria</li>
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Finances</li>
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Sobre</li>
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Entrar</li>
          </ul>*/}
          
          {/*<div className="flex items-center">
            <i className="bx bx-search-alt color-white"></i>
          </div>*/}
        </nav>
        <hr className="border-solid border-[#FBC71F] border-4"></hr>
    </>

  );
}


const NewsTicker = () => {
  return(
    <>
    </>

  );
}
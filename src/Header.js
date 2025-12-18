import logo_sentinelas from "./logo_sentinelas.png"

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
        <nav className="flex items-center justify-between text-black md:px-50 bg-[#1976B9] drop-shadow-md">
          <a href="#">
            <img
              src={logo_sentinelas}
              alt="Logo Sentinelas"
              className="w-[200px] hover:scale-105 transition-all py-3 pl-10 mx-auto"/>
          </a>

          <ul className="hidden xl:flex item-center gap-[6vw] font-semibold text-base py-6 pr-[10vw]">
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Secretaria</li>
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Finances</li>
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Sobre</li>
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Entrar</li>
          </ul>

        </nav>
        <hr className="border-solid border-[#FBC71F] border-2"></hr>
    </>

  );
}
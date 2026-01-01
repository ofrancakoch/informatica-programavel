import logo_sentinelas_svg from "../logo_sentinelas.png"

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

export default NavBar;
import SearchBar from "../components/SearchBar";

const Header = () => {

    return(
        <>
            <header>
                <div className="flex justify-center items-center mt-5 w-screen -ml-56 relative z-0">
                    

                    <SearchBar/>
                    

                    <div className=" flex items-center gap-5 absolute w-44 h-10 right-5">
                        <img
                            src="/icons/icone_notificacoes.svg"
                            alt="Ícone Notificações"
                            width={25}
                            className="cursor-pointer"
                        />
                        <div className="w-0.5 h-7 rounded-md bg-gray-300"></div>
            
                            <p>Octávio França</p>
                        
                            
                    </div>
                </div>
                <div className="mt-3 w-full h-0.5 bg-gray-300"></div>
            </header>
        </>
    );
}

export default Header;
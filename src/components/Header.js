import SearchBar from "./SearchBar";
import HeaderButton from "./HeaderButton";
import Notifications from "./Notifications";


const Header = () => {

    return(
        <>
            <header>
                <div className="flex justify-center items-center mt-5 w-screen -ml-56 relative z-0">
                    

                    <SearchBar/>
                    

                    <div className=" flex items-center gap-5 absolute  h-10 mr-5 right-5">
                        
                        
                        
                        <Notifications/>



                        <div className="w-0.5 h-7 rounded-md bg-gray-300"></div>
            
                            <HeaderButton/>
                            
                    </div>
                </div>
                <div className="mt-3 w-full h-0.5 bg-gray-300"></div>
            </header>
        </>
    );
}

export default Header;
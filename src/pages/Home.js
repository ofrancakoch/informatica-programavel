import SideBar from "../components/SideBar.js";
import Header from "../components/Header.js";
import { Nome } from "../components/FuncaoNome.js";
import { listaAcoesRapidas } from "../components/ListaAcoesRapidas.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Home = () => {
    
    return(
       <>
        <main className="flex">
            <SideBar/>

            <div className="flex-1">
                <Header/>
                <div>
                
                    <h1 className="mt-10 ml-36 flex justify-start">Seja Bem-vindo, <Nome nome="Octávio França"/>!</h1>
                    <h2 className="mt-10 ml-36 flex justify-start">Notícias | Sentinelas</h2>
                    <h2 className="mt-10 ml-36 flex justify-start">Carrosel de Notícias deve estar aqui</h2>
                    <h2 className="my-10 ml-36 flex justify-start ">Botões de ações rápidas</h2>
                    
                    {/*utilize Swiper.js to use create carrousel*/}


                    <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                        {listaAcoesRapidas}
                    </div>
                    
                </div>
            
            
            
            
            
            
            </div>

            
        </main>
       </> 
    );
}

export default Home;
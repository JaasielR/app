import React from 'react';
import './home.css'
import AutoPlayDemo from "@/componentes/panel.tsx";
import BusquedaMenu from "@/pages/home/table.tsx";

const Home: React.FC = () => {
    return (

        <div className="grid-caja">
            <aside><AutoPlayDemo/></aside>
            <section>
                <div className="hero">
                    <h1>
                        ¡DESCUBRE!
                    </h1>
                    <p>
                       Selecciona lo que te gustaria saber acerca del mundo de Naruto
                    </p>
                    <BusquedaMenu/>
                </div>
            </section>

        </div>

    );
};

export default Home;
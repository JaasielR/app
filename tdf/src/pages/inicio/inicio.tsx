import './inicio.css'
import React from "react";
import {Button} from "primereact/button";
import Home from '@/pages/home/home.tsx'

const Inicio: React.FC = () => {
    return (
        <>
            <div id="inicio" className="hero">
                <div data-aos="fade-down">
                <h1>
                    TODO SOBRE NARUTO
                </h1>
                <h1>
                    ¡DATTEBAYO!
                </h1>
                <a href="#home">
                <Button label="Explorar" />
                </a>
                </div>
            </div>

            <section id="home">
                <div data-aos="fade-down">
                    <Home/>
                </div>
            </section>
        </>

    );
};

export default Inicio;
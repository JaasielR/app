import '../../styles/inicio.css'
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

                    <Button
                        label="Explorar"
                        onClick={() => {
                            document
                                .getElementById("pagina2")
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}
                    />

                </div>
            </div>

            <section id="pagina2">
                <div data-aos="fade-down">
                    <Home/>
                </div>
            </section>
        </>

    );
};

export default Inicio;
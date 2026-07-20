import Inicio from "@/pages/inicio/inicio.tsx";
import BasicDemo from "@/componentes/menu.tsx";
import Title from "@/pages/home/title.tsx";
import { Routes, Route } from "react-router-dom";
import Personajes from "@/pages/characters/personajes.tsx";
import Clans from "@/pages/clans/clans.tsx";
import Akatsuki from "@/pages/akatsuki/akatsuki.tsx";
import Villas from "@/pages/aldeas/aldeas.tsx";
import TailedBeasts from "@/pages/bestias/beasts.tsx";


function App() {
    return (
        <>
            <div className="grid-caj">
                <header className="menu-fijo bg-linear-to-br from-stone-900 via-zinc-800 to-neutral-800 shadow-md p-4">
                    <nav className="w-full flex items-center px-8">
                        <h1 className="text-[8px] font-bold text-gray-800"><Title/></h1>
                        <div className="ml-328 mr-2">
                            <BasicDemo/>
                        </div>
                    </nav>
                </header>
            </div>

            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/personajes" element={<Personajes/>} />
                <Route path="/clanes" element={<Clans/>} />
                <Route path="/akatsuki" element={<Akatsuki/>} />
                <Route path="/aldeas" element={<Villas/>} />
                <Route path="/tailed-beast" element={<TailedBeasts/>} />
            </Routes>


        </>

    )
}

export default App
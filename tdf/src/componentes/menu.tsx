import './menu.css'
import { MegaMenu } from 'primereact/megamenu';
import type {MenuItem} from 'primereact/menuitem';
import {useLocation, useNavigate} from "react-router-dom";

export default function BasicDemo() {

    const navigate = useNavigate();
    const location = useLocation();

    const irAInicio = () => {
        if (location.pathname === "/") {

            document.getElementById("inicio")?.scrollIntoView({
                behavior: "smooth"
            });
        } else {
            //
            navigate("/", { state: { scrollTo: "inicio" } });
        }
    };

    const items: MenuItem[] = [
        {
            label: 'HOME',
            icon: 'pi pi-flag-fill',
            command: irAInicio

        },
        {
            label: 'NARUTO',
            icon: 'pi pi-flag-fill',
            items: [
                [
                    {
                        label: 'Opciones',
                        items: [{ label: 'Personajes' , command: () => navigate("/personajes") } , { label: 'Clanes', command: () => navigate("/clanes")  }, { label: 'Aldeas', command: () => navigate("/aldeas") },{ label: 'Tailed Beasts', command: () => navigate("/tailed-beast") }, { label: 'Akatsuki' , command: () => navigate("/akatsuki") }]
                    }
                ],
            ]
        },
    ];

    return (
        <div className="card">
            <MegaMenu model={items} breakpoint="960px" />
        </div>
    )
}

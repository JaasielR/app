import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "@/app/store";
import App from './App.tsx'
import './index.css'
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'aos/dist/aos.css';
import AOS from 'aos';


AOS.init({
    duration: 800,
    once: true,
});

createRoot(document.getElementById('root')!).render(

    <StrictMode>
        <Provider store={store}>
            <BrowserRouter basename="/app">
                <App />
            </BrowserRouter>
        </Provider>
    </StrictMode>

)

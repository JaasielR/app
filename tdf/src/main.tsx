import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter } from 'react-router-dom';



AOS.init({
    duration: 800,
    once: true,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter basename="/app">
          <App />
      </BrowserRouter>
  </StrictMode>,
)

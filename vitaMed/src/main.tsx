import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

import Home from './routes/Home';
import SobreNos from './routes/Sobre';
import CentralAjuda from './routes/Ajuda';
import Contato from './routes/Contatos';
import Integrantes from './routes/Integrantes';
import Error from './routes/Error';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="sobre-nos" element={<SobreNos />} />
          <Route path="central-ajuda" element={<CentralAjuda />} />
          <Route path="contato" element={<Contato />} />
          <Route path="integrantes" element={<Integrantes />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
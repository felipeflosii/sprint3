import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import "./index.css";

// Obrigatórias
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home/index.tsx';
import Integrantes from './routes/Integrantes/index.tsx';
import Contatos from './routes/Contatos/index.tsx';
import Sobre from './routes/Sobre/index.tsx';

// Adicionais
import Paciente from './routes/Paciente/index.tsx';
import Ensino from './routes/Ensino/index.tsx';
import Error from './routes/Paciente/index.tsx';
import Unidades from './routes/Unidades/index.tsx';

const router = createBrowserRouter([
  {path:"/", element:<App/>, errorElement:<Error/>, children:[
    {path:"/", element: <Home/>},
    {path:"/paciente", element: <Paciente/>},
    {path:"/integrantes", element: <Integrantes/>},
    {path:"/ensino", element: <Ensino/>},
    {path:"/contatos", element: <Contatos/>},
    {path:"/sobre", element: <Sobre/>},
    {path:"/unidades", element: <Unidades/>},
  ]}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
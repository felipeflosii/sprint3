import React from 'react';
import { Outlet } from 'react-router-dom';
import Cabecalho from './components/Cabecalho/Cabecalho';
import Menu from './components/Menu/Menu';
import Rodape from './components/Rodape/Rodape';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Cabecalho />
      <Menu />
      <main className="flex-grow">
        <Outlet /> {/* Aqui as rotas serão renderizadas */}
      </main>
      <Rodape />
    </div>
  );
};

export default App;
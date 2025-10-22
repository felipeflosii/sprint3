import React from 'react';
import { Outlet } from 'react-router-dom';
import Cabecalho from './components/Cabecalho/Cabecalho';
import Rodape from './components/Rodape/Rodape';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Cabecalho />
      <main className="flex-grow">
        <Outlet /> 
      </main>
      <Rodape />
    </div>
  );
};

export default App;
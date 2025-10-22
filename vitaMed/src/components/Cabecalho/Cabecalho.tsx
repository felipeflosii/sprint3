import React from 'react';
import logohc from '../../assets/img/hospital.png';
import Menu from '../Menu/Menu.tsx';

const Cabecalho: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex flex-col items-center gap-4">
        {/* Logo + Título */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-4">
          <img
            src={logohc}
            alt="Logo Hospital das Clínicas"
            className="h-16 w-16 object-contain filter invert brightness-0"
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Saúde Digital - HC</h1>
            <p className="text-blue-100 text-sm md:text-base">
              Hospital das Clínicas da FMUSP
            </p>
          </div>
        </div>

        {/* Menu importado */}
        <Menu />
      </div>
    </header>
  );
};

export default Cabecalho;

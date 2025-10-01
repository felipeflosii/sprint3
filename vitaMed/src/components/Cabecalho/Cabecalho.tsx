import React from 'react';
import LogoHC from '../../assets/img/logo2hc.png';

const Cabecalho: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src={LogoHC} 
              alt="Logo Hospital das Clínicas" 
              className="h-16 w-16 object-contain" 
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Saúde Digital - HC</h1>
              <p className="text-blue-100 text-sm md:text-base">Hospital das Clínicas da FMUSP</p>
            </div>
          </div>

          <div className="hidden md:block">
            <span className="text-blue-100 text-sm">Atendimento 24h</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Cabecalho;
import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import logohc from '../../assets/img/hospital.png';
import Menu from '../Menu/Menu.tsx';
import { useAuth } from '../../context/useAuth';

const Cabecalho: React.FC = () => {
  const { usuario, logout } = useAuth(); // inclui logout
  const primeiroNome = usuario?.nome ? String(usuario.nome).split(' ')[0] : '';

  function handleLogout() {
    logout();
  }

  return (
    <header className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex flex-col items-center gap-4">
        {/* Linha superior: logo/título + área do usuário */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
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

          {/* Área do usuário */}
          <div className="absolute top-4 right-6 md:static md:self-center">
            <div className="flex items-center gap-4">
              {usuario ? (
                <div className="flex items-center gap-3">
                  <FiUser className="text-white text-xl" />
                  <span className="font-semibold">Olá, {primeiroNome}</span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium transition"
                  >
                    Sair
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-2 bg-white text-blue-700 px-4 py-2 rounded-md font-semibold hover:bg-blue-50 transition"
                >
                  <FiUser className="text-blue-700 text-lg" />
                  Fazer Login
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Menu importado */}
        <Menu />
      </div>
    </header>
  );
};

export default Cabecalho;

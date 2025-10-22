// src/components/Rodape/Rodape.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../utils/icons"; 

import LogoHC from "../../assets/img/logo2hc.png";

const { Facebook, Instagram, Youtube, Globe } = Icons;

const Rodape: React.FC = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-[#0e0e0e] text-gray-300 pt-12 pb-6">
      {/* Conteúdo principal */}
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Coluna 1 - Branding e Social */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={LogoHC}
              alt="Hospital das Clínicas"
              className="h-10 w-10 object-contain filter invert brightness-0"
            />
            <h2 className="text-lg font-semibold text-white">
              VitaMed - HC
            </h2>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Inovação e empatia na saúde digital. Tornando o acesso à saúde mais
            fácil, intuitivo e acessível para todos.
          </p>

          <div className="flex gap-4 text-gray-400 text-lg">
            <a
              href="https://www.facebook.com/hospitaldasclinicasdafmusp"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              >
              <Facebook className="text-xl" />
            </a>
            <a
              href="https://www.instagram.com/hospitalhcfmusp/"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              >
              <Instagram className="text-xl" />
            </a>
            <a 
              href="https://www.youtube.com/@hospitaldasclinicasdafmusp3623"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              >
              <Youtube className="text-xl" />
            </a>
          </div>

          {/* Seletor de idioma */}
          <div className="mt-6 flex items-center gap-2 text-sm text-gray-400 cursor-pointer hover:text-white transition-colors">
            <Globe className="text-base" />
            <span>Português (Brasil)</span>
          </div>
        </div>

        {/* Coluna 2 - Explore */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/"
                className="hover:text-white transition-colors duration-200"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="/sobre-nos"
                className="hover:text-white transition-colors duration-200"
              >
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link
                to="/central-ajuda"
                className="hover:text-white transition-colors duration-200"
              >
                Central de Ajuda
              </Link>
            </li>
            <li>
              <Link
                to="/integrantes"
                className="hover:text-white transition-colors duration-200"
              >
                Equipe
              </Link>
            </li>
          </ul>
        </div>

        {/* Coluna 3 - Recursos / Suporte */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Recursos</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/contato"
                className="hover:text-white transition-colors duration-200"
              >
                Contato
              </Link>
            </li>
            <li>
              <a
                href="https://www.hc.fm.usp.br/hc/comunicacao/imprensa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                Imprensa
              </a>
            </li>
            <li>
              <a
                href="https://trabalheconosco.vagas.com.br/ffm?btn=enc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                Vagas / Carreiras
              </a>
            </li>
            <li>
              <a
                href="https://ouvidoria.hc.fm.usp.br"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                Ouvidoria
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 4 - Conta */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Conta</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Minha Conta
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Histórico
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Configurações
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Sair
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Linha divisória */}
      <div className="border-t border-gray-700 mt-10 pt-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-4 md:space-y-0">
          <p>© {anoAtual} Hospital das Clínicas da FMUSP. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Configurações de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;

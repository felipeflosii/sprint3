import React from 'react';
import { Link } from 'react-router-dom';

const Error: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Ícone/Ilustração */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
              <svg 
                className="w-16 h-16 text-blue-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" 
                />
              </svg>
            </div>
          </div>

          {/* Código do erro */}
          <h1 className="text-9xl font-bold text-gray-800 mb-4">404</h1>
          
          {/* Título */}
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Página Não Encontrada
          </h2>

          {/* Mensagem */}
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
            Desculpe, a página que você está procurando não existe ou foi movida. 
            Verifique o URL ou navegue pelo menu para encontrar o que precisa.
          </p>

          {/* Ações */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Voltar para a Página Inicial
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 bg-white hover:bg-gray-50"
            >
              Voltar à Página Anterior
            </button>
          </div>

          {/* Links úteis */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Talvez você esteja procurando por:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/central-ajuda"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
              >
                Central de Ajuda
              </Link>
              <Link
                to="/contato"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
              >
                Contato
              </Link>
              <Link
                to="/sobre-nos"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
              >
                Sobre Nós
              </Link>
              <Link
                to="/integrantes"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
              >
                Integrantes
              </Link>
            </div>
          </div>

          {/* Informação de contato */}
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <p className="text-gray-700 mb-2">
              Precisa de ajuda? Entre em contato com nossa equipe:
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> ouvidoria.geral@hc.fm.usp.br | 
              <strong> Telefone:</strong> (11) 2661-1048
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
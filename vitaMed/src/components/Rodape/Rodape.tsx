import React from 'react';

const Rodape: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          © 2025 Hospital das Clínicas da FMUSP. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Rodape;
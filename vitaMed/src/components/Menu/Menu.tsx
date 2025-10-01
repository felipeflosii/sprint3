import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Menu: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/sobre-nos', label: 'Sobre Nós' },
    { path: '/central-ajuda', label: 'Central de Ajuda' },
    { path: '/contato', label: 'Contato' },
    { path: '/integrantes', label: 'Integrantes' },
  ];

  return (
    <nav className="bg-blue-500 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`py-4 px-2 border-b-2 transition-colors duration-200 ${
                location.pathname === item.path
                  ? 'border-white font-semibold'
                  : 'border-transparent hover:border-blue-200'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Menu;
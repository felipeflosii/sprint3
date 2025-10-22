import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    <nav className="w-full text-white">
      <div className="container mx-auto flex justify-center">
        <div className="flex flex-wrap gap-6 text-base font-medium">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 rounded-md transition-all duration-300 
                  ${
                    isActive
                      ? 'bg-white text-blue-700 font-semibold shadow-md'
                      : 'hover:bg-white/10 hover:text-blue-100'
                  }`}
              >
                {item.label}

                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-300 rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Menu;

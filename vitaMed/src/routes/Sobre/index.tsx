import React, { FC } from "react";

const Sobre: FC = () => {
  return (
    <main className="font-poppins bg-[#f9f9f9] text-gray-800 px-6 py-10">
      {/* Seção de introdução */}
      <section className="bg-white shadow-md rounded-2xl p-8 mb-10">
        <h2 className="text-3xl font-bold text-[#004aad] mb-4">
          Sobre o Projeto
        </h2>
        <p className="text-gray-700 leading-relaxed">
          O Projeto <span className="font-semibold">PHC</span> visa melhorar a saúde digital, 
          reduzindo o absenteísmo e facilitando o acesso aos serviços digitais de saúde.
        </p>
      </section>

      {/* Seção de cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card Equipe */}
        <div className="flex flex-col items-center text-center bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow">
          <span className="text-5xl mb-4">🧑‍💻</span>
          <h3 className="text-xl font-semibold text-[#004aad] mb-2">
            Equipe
          </h3>
          <p className="text-gray-600">
            Nossa equipe é composta por profissionais dedicados à inovação na saúde digital.
          </p>
        </div>

        {/* Card Tecnologia */}
        <div className="flex flex-col items-center text-center bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow">
          <span className="text-5xl mb-4">⚙️</span>
          <h3 className="text-xl font-semibold text-[#004aad] mb-2">
            Tecnologia
          </h3>
          <p className="text-gray-600">
            Utilizamos tecnologias modernas para soluções eficientes e acessíveis.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Sobre;

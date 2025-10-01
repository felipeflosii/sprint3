import React, { FC } from "react";

const Integrantes: FC = () => {
  return (
    <main className="font-poppins bg-[#f9f9f9] text-gray-800 px-6 py-10">
      <section className="bg-white shadow-md rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-[#004aad] text-center mb-10">
          Nosso Time
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Arthur */}
          <div className="card flex flex-col items-center bg-white border border-gray-100 shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <span className="text-5xl mb-4">👨‍💼</span>
            <h3 className="text-lg font-semibold text-[#004aad] text-center leading-snug">
              Arthur Brito da <br /> Silva
            </h3>
            <p className="text-gray-600 mt-2 text-sm">rm562085 - 1TDSPG</p>
          </div>

          {/* Luiz */}
          <div className="card flex flex-col items-center bg-white border border-gray-100 shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <span className="text-5xl mb-4">👨‍💻</span>
            <h3 className="text-lg font-semibold text-[#004aad] text-center leading-snug">
              Luiz Felipe Flosi dos Santos
            </h3>
            <p className="text-gray-600 mt-2 text-sm">rm563197 - 1TDSPG</p>
          </div>

          {/* Pedro */}
          <div className="card flex flex-col items-center bg-white border border-gray-100 shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <span className="text-5xl mb-4">👨‍💻</span>
            <h3 className="text-lg font-semibold text-[#004aad] text-center leading-snug">
              Pedro Henrique Brum Lopes
            </h3>
            <p className="text-gray-600 mt-2 text-sm">rm561780 - 1TDSPG</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Integrantes;

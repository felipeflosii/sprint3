import React, { FC } from "react";

const Sobre: FC = () => {
  return (
    <main>
      <section>
        <h2 className="text-3xl font-bold text-blue-600">Sobre o Projeto</h2>
        <p>
          O Projeto PHC visa melhorar a saúde digital, reduzindo o absenteísmo e
          facilitando o acesso aos serviços digitais de saúde.
        </p>
      </section>

      <section className="cards">
        <div className="card">
          <i>🧑‍💻</i>
          <h3>Equipe</h3>
          <p>
            Nossa equipe é composta por profissionais dedicados à inovação na
            saúde digital.
          </p>
        </div>
        <div className="card">
          <i>⚙️</i>
          <h3>Tecnologia</h3>
          <p>
            Utilizamos tecnologias modernas para soluções eficientes e
            acessíveis.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Sobre;

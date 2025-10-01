import React, { FC } from "react";

const Integrantes: FC = () => {
  return (
    <main>
      <section>
        <h2>Nosso Time</h2>
        <div className="cards">
          <div className="card">
            <i>👨‍💼</i>
            <h3>
              Arthur Brito da <br /> Silva
            </h3>
            <p>rm562085 - 1TDSPG</p>
          </div>
          <div className="card">
            <i>👨‍💻</i>
            <h3>Luiz Felipe Flosi dos Santos</h3>
            <p>rm563197 - 1TDSPG</p>
          </div>
          <div className="card">
            <i>👨‍💻</i>
            <h3>Pedro Henrique Brum Lopes</h3>
            <p>rm561780 - 1TDSPG</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Integrantes;

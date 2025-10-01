import React, { FC } from "react";

const Contatos: FC = () => {
  return (
    <main className="font-poppins bg-[#f9f9f9] text-gray-800 px-6 py-10">
      {/* Seção de mapa */}
      <section className="map-container bg-white shadow-md rounded-2xl p-6 mb-10">
        <h2 className="text-2xl font-bold text-[#004aad] mb-4">Localização</h2>
        <iframe
          title="Hospital das Clínicas"
          width="100%"
          height={450}
          className="rounded-xl mb-4"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.858434573572!2d-46.669848!3d-23.55703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b2b4b4b4b4b%3A0x94ce5b2b4b4b4b4b!2sHospital%20das%20Cl%C3%ADnicas%20da%20USP!5e0!3m2!1spt-BR!2sbr!4v1633021223456!5m2!1spt-BR!2sbr"
        />
        <p className="text-gray-700">
          <strong>Endereço:</strong> Av. Dr. Enéas de Carvalho Aguiar, 255 – Cerqueira César, São Paulo, SP – CEP 05403-000
        </p>
      </section>

      {/* Seção de contatos */}
      <section className="contatos bg-white shadow-md rounded-2xl p-6 mb-10">
        <h2 className="text-2xl font-bold text-[#004aad] mb-6">Contatos</h2>
        <div className="space-y-3 text-gray-700">
          <p><strong>Telefone Geral:</strong> (11) 2661-0000</p>
          <p>
            <strong>E-mail Geral:</strong>{" "}
            <a href="mailto:superintendencia.pa@hc.fm.usp.br" className="text-[#004aad] hover:text-[#ffd700]">
              superintendencia.pa@hc.fm.usp.br
            </a>
          </p>
          <p><strong>Central de Atendimento:</strong> (11) 2661-7025</p>
          <p>
            <strong>Ouvidoria:</strong>{" "}
            <a href="mailto:ouvidoria.umarizal.imrea@hc.fm.usp.br" className="text-[#004aad] hover:text-[#ffd700]">
              ouvidoria.umarizal.imrea@hc.fm.usp.br
            </a>
          </p>
          <p><strong>Central de Agendamento:</strong> (11) 3066-3000</p>
          <p><strong>Central de Triagem:</strong> (11) 3069-7660</p>
          <p><strong>Instituto de Psiquiatria - Autorizações:</strong> (11) 2661-9825 / (11) 2661-9829</p>
          <p>
            <strong>E-mail de Autorizações:</strong>{" "}
            <a href="mailto:autorizacaoss.ipq@hc.fm.usp.br" className="text-[#004aad] hover:text-[#ffd700]">
              autorizacaoss.ipq@hc.fm.usp.br
            </a>
          </p>
          <p>
            <strong>Instituto do Coração (InCor):</strong>{" "}
            <a href="mailto:incor@hc.fm.usp.br" className="text-[#004aad] hover:text-[#ffd700]">
              incor@hc.fm.usp.br
            </a>
          </p>
          <p>
            <strong>Disciplina de Cirurgia Geral e Trauma:</strong>{" "}
            <a href="mailto:trauma.ichc@hc.fm.usp.br" className="text-[#004aad] hover:text-[#ffd700]">
              trauma.ichc@hc.fm.usp.br
            </a>
          </p>
          <p><strong>Central de Atendimento do HCX Fmusp:</strong> (11) 2661-7025</p>
          <p>
            <strong>E-mail do HCX Fmusp:</strong>{" "}
            <a href="mailto:hcxonline.hcx@hc.fm.usp.br" className="text-[#004aad] hover:text-[#ffd700]">
              hcxonline.hcx@hc.fm.usp.br
            </a>
          </p>
        </div>
      </section>

      {/* Seção de redes sociais */}
      <section className="socials bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-[#004aad] mb-6">Nossas Redes</h2>
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/hospitalhcfmusp/"
            aria-label="Instagram HCFMUSP"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#004aad] hover:text-[#ffd700] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={36}
              height={36}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm4.271 4.09a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/company/hcfmusp/"
            aria-label="LinkedIn HCFMUSP"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#004aad] hover:text-[#ffd700] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={36}
              height={36}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Contatos;

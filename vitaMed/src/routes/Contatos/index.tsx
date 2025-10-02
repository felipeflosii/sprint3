import React, { useState } from 'react';

// Interface para os dados da unidade
interface Unidade {
  nome: string;
  endereco: string;
  telefone?: string;
  email?: string;
  horario?: string;
}

const Contato: React.FC = () => {
  const [unidadeSelecionada, setUnidadeSelecionada] = useState<Unidade | null>(null);
  const [modalAberto, setModalAberto] = useState(false);

  // Sua API Key do Google Maps
  const GOOGLE_MAPS_API_KEY = 'AIzaSyDYhuJ_0yW-Zo6kYwFpBVnRkvarSOpjw4A';

  const abrirModal = (unidade: Unidade) => {
    setUnidadeSelecionada(unidade);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setUnidadeSelecionada(null);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      fecharModal();
    }
  };

  const unidades: Unidade[] = [
    {
      nome: "Instituto Central (ICHC)",
      endereco: "Av. Dr. Enéas de Carvalho Aguiar, 255 – Cerqueira César – São Paulo/SP",
      telefone: "(11) 2661-7000",
      email: "ichc@hc.fm.usp.br",
      horario: "24 horas"
    },
    {
      nome: "Prédio dos Ambulatórios (PAMB)",
      endereco: "Av. Dr. Enéas de Carvalho Aguiar, 155 – Cerqueira César – São Paulo/SP",
      telefone: "(11) 2661-6000",
      horario: "Segunda a Sexta, 7h às 18h"
    },
    {
      nome: "Instituto de Psiquiatria (IPq)",
      endereco: "Rua Dr. Ovídio Pires de Campos, 785 – Cerqueira César – São Paulo/SP",
      telefone: "(11) 2661-7500",
      email: "ipq@hc.fm.usp.br",
      horario: "24 horas"
    },
    {
      nome: "Instituto de Ortopedia e Traumatologia (IOT)",
      endereco: "Rua Dr. Ovídio Pires de Campos, 333 – Cerqueira César – São Paulo/SP",
      telefone: "(11) 2661-7300",
      horario: "Segunda a Sexta, 7h às 19h"
    },
    {
      nome: "Instituto de Medicina Física e Reabilitação (IMRea)",
      endereco: "Eixo Rosa do Complexo HC, nº 7 – Portão 3 do InReal – São Paulo/SP",
      telefone: "(11) 2661-7200",
      horario: "Segunda a Sexta, 7h às 18h"
    },
    {
      nome: "Instituto da Criança e do Adolescente (ICr)",
      endereco: "Av. Dr. Enéas de Carvalho Aguiar, 647 – Cerqueira César – São Paulo/SP",
      telefone: "(11) 2661-8500",
      horario: "24 horas"
    },
    {
      nome: "Instituto do Coração (InCor)",
      endereco: "Av. Dr. Enéas de Carvalho Aguiar, 44 – Cerqueira César – São Paulo/SP",
      telefone: "(11) 2661-5000",
      email: "incor@hc.fm.usp.br",
      horario: "24 horas"
    },
    {
      nome: "Instituto de Radiologia (InRad)",
      endereco: "Rua Dr. Ovídio Pires de Campos, 75 – Cerqueira César – São Paulo/SP",
      telefone: "(11) 2661-6000",
      horario: "Segunda a Sexta, 7h às 19h"
    },
    {
      nome: "Instituto do Câncer do Estado de São Paulo (ICESP)",
      endereco: "Av. Dr. Arnaldo, 251 – Cerqueira César – São Paulo/SP",
      telefone: "(11) 3893-2000",
      horario: "Segunda a Sexta, 7h às 19h"
    },
    {
      nome: "Instituto Perdizes (IPer)",
      endereco: "Rua Caiubi, 1142 – Perdizes – São Paulo/SP",
      telefone: "(11) 2661-7900",
      horario: "Segunda a Sexta, 7h às 18h"
    }
  ];

  const getGoogleMapsUrl = (endereco: string) => {
    const query = encodeURIComponent(`${endereco}, São Paulo, Brasil`);
    return `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${query}&zoom=16`;
  };

  const abrirNoGoogleMaps = (endereco: string) => {
    const query = encodeURIComponent(`${endereco}, São Paulo, Brasil`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Contato</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Seção de Contato */}
          <div className="space-y-8">
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Ouvidoria Geral</h2>
              <div className="space-y-3">
                <p className="text-gray-600">
                  <strong className="text-gray-800">E-mail:</strong><br />
                  <a href="mailto:ouvidoria.geral@hc.fm.usp.br" className="text-blue-600 hover:text-blue-800 underline">
                    ouvidoria.geral@hc.fm.usp.br
                  </a>
                </p>
                <p className="text-gray-600">
                  <strong className="text-gray-800">Telefones:</strong><br />
                  <a href="tel:1126611048" className="text-blue-600 hover:text-blue-800 underline">(11) 2661-1048</a><br />
                  <a href="tel:1126611561" className="text-blue-600 hover:text-blue-800 underline">(11) 2661-1561</a>
                </p>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Redes Sociais Oficiais
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://www.facebook.com/hospitaldasclinicasdafmusp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg transition-colors duration-200 text-sm font-medium text-center"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/hospitalhcfmusp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg transition-colors duration-200 text-sm font-medium text-center"
                >
                  Instagram
                </a>
                <a
                  href="https://x.com/hospitalHCFMUSP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg transition-colors duration-200 text-sm font-medium text-center"
                >
                  X / Twitter
                </a>
                <a
                  href="https://www.youtube.com/@hospitaldasclinicasdafmusp3623"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg transition-colors duration-200 text-sm font-medium text-center"
                >
                  YouTube
                </a>
                <a
                  href="https://www.linkedin.com/company/hcfmusp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg transition-colors duration-200 text-sm font-medium text-center"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.tiktok.com/search/user?q=Hospital%20das%20cl%C3%ADnicas&t=1759365163913"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg transition-colors duration-200 text-sm font-medium text-center"
                >
                  TikTok
                </a>
              </div>
            </section>
          </div>

          {/* Seção de Unidades */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Unidades do Complexo HCFMUSP
            </h2>
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
              {unidades.map((unidade, index) => (
                <button
                  key={index}
                  onClick={() => abrirModal(unidade)}
                  className="w-full text-left border-b border-gray-200 pb-4 last:border-b-0 hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200 group"
                >
                  <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                    {unidade.nome}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {unidade.endereco}
                  </p>
                  <span className="text-blue-600 text-sm font-medium mt-1 inline-block group-hover:underline">
                    Ver detalhes e localização →
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        {modalAberto && unidadeSelecionada && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={handleBackdropClick}
          >
            <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden animate-fade-in">
              {/* Cabeçalho do Modal */}
              <div className="bg-blue-600 text-white p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold pr-4">{unidadeSelecionada.nome}</h3>
                    <p className="text-blue-100 mt-1">{unidadeSelecionada.endereco}</p>
                  </div>
                  <button
                    onClick={fecharModal}
                    className="text-white hover:text-gray-200 text-2xl font-bold bg-blue-700 hover:bg-blue-800 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Conteúdo do Modal */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-3 text-lg">Informações de Contato</h4>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <div>
                            <p className="font-medium text-gray-700">Endereço</p>
                            <p className="text-gray-600">{unidadeSelecionada.endereco}</p>
                          </div>
                        </div>

                        {unidadeSelecionada.telefone && (
                          <div className="flex items-start space-x-3">
                            <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <div>
                              <p className="font-medium text-gray-700">Telefone</p>
                              <a href={`tel:${unidadeSelecionada.telefone}`} className="text-blue-600 hover:text-blue-800 underline">{unidadeSelecionada.telefone}</a>
                            </div>
                          </div>
                        )}

                        {unidadeSelecionada.email && (
                          <div className="flex items-start space-x-3">
                            <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <div>
                              <p className="font-medium text-gray-700">E-mail</p>
                              <a href={`mailto:${unidadeSelecionada.email}`} className="text-blue-600 hover:text-blue-800 underline">{unidadeSelecionada.email}</a>
                            </div>
                          </div>
                        )}

                        {unidadeSelecionada.horario && (
                          <div className="flex items-start space-x-3">
                            <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                              <p className="font-medium text-gray-700">Horário de Atendimento</p>
                              <p className="text-gray-600">{unidadeSelecionada.horario}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => abrirNoGoogleMaps(unidadeSelecionada.endereco)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 w-full flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                    >
                      <span>Abrir no Google Maps</span>
                    </button>
                  </div>

                  {/* Mapa */}
                  <div className="rounded-lg overflow-hidden shadow-lg h-80 lg:h-auto">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      style={{ border: 0, minHeight: '320px' }}
                      src={getGoogleMapsUrl(unidadeSelecionada.endereco)}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contato;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Ajuda: React.FC = () => {
  const [perguntaAberta, setPerguntaAberta] = useState<number | null>(null);

  const perguntasFrequentes = [
    {
      pergunta: "Como agendar uma consulta?",
      resposta: "Você pode agendar sua consulta de três formas: pelo site, pelo telefone (11) 2661-1048 ou pessoalmente em qualquer unidade do complexo hospitalar.",
      passos: [
        "Acesse o portal do paciente em nosso site",
        "Escolha a especialidade e o médico desejado",
        "Selecione data e horário disponíveis",
        "Confirme o agendamento"
      ]
    },
    {
      pergunta: "Quais são os horários de atendimento?",
      resposta: "O Hospital das Clínicas atende 24 horas nos setores de emergência. Para consultas agendadas, o horário é das 7h às 18h, de segunda a sexta-feira.",
      observacoes: [
        "Emergência: 24 horas todos os dias",
        "Consultas: Segunda a sexta, 7h-18h",
        "Exames: Segunda a sábado, 6h-20h"
      ]
    },
    {
      pergunta: "Como obter resultados de exames?",
      resposta: "Os resultados podem ser acessados de duas formas: pelo portal do paciente online ou retirados pessoalmente no setor de atendimento.",
      opcoes: [
        "Portal Online: Acesso 24h com login e senha",
        "Pessoalmente: Setor de Resultados das 7h às 19h",
        "Telefone: (11) 2661-5000 para informações"
      ]
    },
    {
      pergunta: "Como entrar em contato com a ouvidoria?",
      resposta: "Nossa ouvidoria está disponível para sugestões, elogios e reclamações através de múltiplos canais.",
      contatos: [
        "E-mail: ouvidoria.geral@hc.fm.usp.br",
        "Telefone: (11) 2661-1561",
        "Presencial: Av. Dr. Enéas de Carvalho Aguiar, 255"
      ]
    },
    {
      pergunta: "Quais documentos levar para a consulta?",
      resposta: "É importante trazer documentos de identificação e exames anteriores para melhor atendimento.",
      documentos: [
        "Documento de identidade com foto (RG/CNH)",
        "Cartão do SUS ou convênio médico",
        "Exames anteriores relacionados",
        "Receitas médicas em uso"
      ]
    },
    {
      pergunta: "Como cancelar ou remarcar uma consulta?",
      resposta: "Cancelamentos e remarcações devem ser feitos com pelo menos 24 horas de antecedência.",
      procedimentos: [
        "Pelo telefone: (11) 2661-1048",
        "Pelo portal do paciente",
        "Pessoalmente na unidade",
        "Horário mínimo: 24h antes"
      ]
    }
  ];

  const togglePergunta = (index: number) => {
    setPerguntaAberta(perguntaAberta === index ? null : index);
  };

  const servicosRapidos = [
    {
      icone: "📅",
      titulo: "Agendamento Online",
      descricao: "Agende suas consultas pela internet",
      link: "#agendar"
    },
    {
      icone: "📋",
      titulo: "Pré-Consulta",
      descricao: "Prepare-se para sua consulta",
      link: "#preparo"
    },
    {
      icone: "🏥",
      titulo: "Localizações",
      descricao: "Encontre nossas unidades",
      link: "/contato"
    },
    {
      icone: "💊",
      titulo: "Medicamentos",
      descricao: "Informações sobre farmácia",
      link: "#medicamentos"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header Hero */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Central de Ajuda
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas rápidas para suas dúvidas e aprenda a usar nossos serviços digitais
          </p>
        </div>

        {/* Serviços Rápidos */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Acesso Rápido
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicosRapidos.map((servico, index) => (
              <Link
                key={index}
                to={servico.link}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group hover:transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{servico.icone}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {servico.titulo}
                </h3>
                <p className="text-gray-600 text-sm">
                  {servico.descricao}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ Interativo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Perguntas Frequentes
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {perguntasFrequentes.map((item, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => togglePergunta(index)}
                  className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {item.pergunta}
                  </h3>
                  <span className="text-blue-600 text-xl font-bold transform transition-transform duration-200">
                    {perguntaAberta === index ? '−' : '+'}
                  </span>
                </button>
                
                {perguntaAberta === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <p className="text-gray-700 mb-4">{item.resposta}</p>
                    
                    {item.passos && (
                      <div className="bg-blue-50 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Passo a passo:</h4>
                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                          {item.passos.map((passo, i) => (
                            <li key={i}>{passo}</li>
                          ))}
                        </ol>
                      </div>
                    )}
                    
                    {item.observacoes && (
                      <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Observações importantes:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          {item.observacoes.map((obs, i) => (
                            <li key={i}>{obs}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {item.opcoes && (
                      <div className="bg-green-50 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Opções disponíveis:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          {item.opcoes.map((opcao, i) => (
                            <li key={i}>{opcao}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {item.contatos && (
                      <div className="bg-purple-50 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Canais de contato:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          {item.contatos.map((contato, i) => (
                            <li key={i}>{contato}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {item.documentos && (
                      <div className="bg-red-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Documentos necessários:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          {item.documentos.map((doc, i) => (
                            <li key={i}>{doc}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {item.procedimentos && (
                      <div className="bg-indigo-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Procedimentos:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          {item.procedimentos.map((proc, i) => (
                            <li key={i}>{proc}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contato de Emergência */}
        <section className="bg-red-50 border border-red-200 rounded-xl p-8 mb-12">
          <div className="text-center">
            <div className="text-4xl mb-4">🚨</div>
            <h2 className="text-2xl font-bold text-red-800 mb-4">
              Atendimento de Emergência
            </h2>
            <p className="text-red-700 mb-4">
              Para situações de emergência, dirija-se imediatamente à unidade mais próxima ou ligue para:
            </p>
            <div className="text-3xl font-bold text-red-800 mb-2">
              (11) 2661-7000
            </div>
            <p className="text-red-600 text-sm">
              Atendimento 24 horas em todas as unidades de emergência
            </p>
          </div>
        </section>

        {/* Ainda com Dúvidas? */}
        <section className="bg-blue-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ainda precisa de ajuda?
          </h2>
          <p className="text-blue-100 text-xl mb-6 max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudar você com qualquer dúvida adicional
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-blue-500 rounded-lg p-4">
              <div className="text-2xl mb-2">📞</div>
              <h3 className="font-semibold mb-2">Telefone</h3>
              <p>(11) 2661-1048</p>
              <p>(11) 2661-1561</p>
            </div>
            <div className="bg-blue-500 rounded-lg p-4">
              <div className="text-2xl mb-2">✉️</div>
              <h3 className="font-semibold mb-2">E-mail</h3>
              <p>ouvidoria.geral@hc.fm.usp.br</p>
            </div>
          </div>
          <Link
            to="/contato"
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2 mt-6"
          >
            <span>Ver Todos os Contatos</span>
            <span>→</span>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Ajuda;
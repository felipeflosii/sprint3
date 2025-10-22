import React from 'react';
import { Link } from 'react-router-dom';

import LogoHC from '../../assets/img/logo2hc.png';
import ArthurFoto from '../../assets/img/brito.jpeg';
import LuizFoto from '../../assets/img/flosi.jpeg';
import PedroFoto from '../../assets/img/brum.jpeg';

const Home: React.FC = () => {
  // Dados dos integrantes
  const integrantes = [
    {
      nome: "Arthur Brito",
      foto: ArthurFoto,
      descricao: "Desenvolvedor Full Stack"
    },
    {
      nome: "Luiz Felipe Flosl", 
      foto: LuizFoto,
      descricao: "Desenvolvedor Frontend"
    },
    {
      nome: "Pedro Brum",
      foto: PedroFoto,
      descricao: "Desenvolvedor Backend"
    }
  ];

  // Recursos principais
  const recursos = [
    {
      icone: "🔍",
      titulo: "Central de Ajuda",
      descricao: "Encontre respostas para suas dúvidas mais frequentes sobre agendamentos, horários e resultados.",
      link: "/central-ajuda",
      cor: "from-blue-500 to-blue-600"
    },
    {
      icone: "🏥",
      titulo: "Nossas Unidades",
      descricao: "Conheça todas as unidades do complexo hospitalar e encontre a mais próxima de você.",
      link: "/contato",
      cor: "from-green-500 to-green-600"
    },
    {
      icone: "👥",
      titulo: "Nossa Equipe",
      descricao: "Conheça os desenvolvedores por trás do projeto Saúde Digital.",
      link: "/integrantes",
      cor: "from-purple-500 to-purple-600"
    },
    {
      icone: "📞",
      titulo: "Fale Conosco",
      descricao: "Entre em contato com nossa ouvidoria e redes sociais.",
      link: "/contato",
      cor: "from-orange-500 to-orange-600"
    }
  ];

  // Estatísticas
  const estatisticas = [
    { numero: "8", label: "Unidades Hospitalares" },
    { numero: "24/7", label: "Atendimento Emergencial" },
    { numero: "7M+", label: "Pacientes Atendidos" },
    { numero: "97,6%", label: "Satisfação dos Usuários" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Call to Action Final */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Pronto para uma experiência melhor em saúde digital?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore todas as funcionalidades que preparamos para você
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/central-ajuda"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Começar Agora
            </Link>
            <Link
              to="/sobre-nos"
              className="border-2 border-gray-300 text-gray-700 hover:border-gray-400 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Saber Mais
            </Link>
          </div>
        </div>
      </section>

      {/* Recursos Principais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Nossos Serviços
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recursos.map((recurso, index) => (
              <Link
                key={index}
                to={recurso.link}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:transform group-hover:-translate-y-2 h-full">
                  <div className={`h-2 bg-gradient-to-r ${recurso.cor}`}></div>
                  <div className="p-6">
                    <div className="text-3xl mb-4">{recurso.icone}</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {recurso.titulo}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {recurso.descricao}
                    </p>
                    <span className="text-blue-600 font-semibold group-hover:underline">
                      Acessar →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre o Projeto */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre o Projeto</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O <strong>Saúde Digital</strong> surgiu para enfrentar um desafio real: a dificuldade 
              que muitas pessoas têm em lidar com ferramentas digitais na área da saúde, 
              reduzindo os altos índices de absenteísmo e melhorando a qualidade do atendimento.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Missão</h3>
              <p className="text-gray-600">
                Promover inclusão digital na saúde, oferecendo ferramentas que ajudem 
                pacientes a utilizar serviços digitais com autonomia.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Visão</h3>
              <p className="text-gray-600">
                Ser referência no desenvolvimento de soluções que reduzam o absenteísmo 
                e melhorem o acesso à saúde digital.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💙</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Valores</h3>
              <p className="text-gray-600">
                Empatia, Inclusão, Inovação, Comprometimento e Ética guiam 
                todas as nossas ações.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Rápido */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Precisa de Ajuda?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudar você. Entre em contato através dos nossos canais.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl mb-2">📞</div>
              <h3 className="font-semibold mb-2">Telefone</h3>
              <p className="text-blue-100">(11) 2661-1048</p>
              <p className="text-blue-100">(11) 2661-1561</p>
            </div>
            
            <div>
              <div className="text-2xl mb-2">✉️</div>
              <h3 className="font-semibold mb-2">E-mail</h3>
              <p className="text-blue-100">ouvidoria.geral@hc.fm.usp.br</p>
            </div>
            
            <div>
              <div className="text-2xl mb-2">🕒</div>
              <h3 className="font-semibold mb-2">Atendimento</h3>
              <p className="text-blue-100">Emergência: 24 horas</p>
              <p className="text-blue-100">Consultas: 7h às 18h</p>
            </div>
          </div>

          <Link
            to="/contato"
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Ver Todos os Contatos</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Nossos Números
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {estatisticas.map((estatistica, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {estatistica.numero}
                </div>
                <div className="text-gray-600 font-medium">
                  {estatistica.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Nossa Equipe
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Conheça os desenvolvedores dedicados que tornaram este projeto possível
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {integrantes.map((integrante, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={integrante.foto} 
                    alt={integrante.nome}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {integrante.nome}
                </h3>
                <p className="text-gray-600 mb-4">{integrante.descricao}</p>
                <p className="text-sm text-gray-500">
                  Estudante de Análise e Desenvolvimento de Sistemas - FIAP
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/integrantes"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Conheça Toda a Equipe</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>      
    </div>
  );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';

// Importando imagens
import LogoHC from '../../assets/img/logo2hc.png';
import ArthurFoto from '../../assets/img/brito.jpeg';
import LuizFoto from '../../assets/img/flosi.jpeg';
import PedroFoto from '../../assets/img/brum.jpeg';

const Sobre: React.FC = () => {
  const timeline = [
    {
      ano: "Março 2025",
      titulo: "Identificação do Problema",
      descricao: "Observamos os altos índices de absenteísmo devido à dificuldade com ferramentas digitais na saúde."
    },
    {
      ano: "Março 2025",
      titulo: "Parceria com HC-FMUSP",
      descricao: "Fechamos parceria com o Hospital das Clínicas para desenvolver soluções reais."
    },
    {
      ano: "Maio 2025",
      titulo: "Desenvolvimento do Projeto",
      descricao: "Início do desenvolvimento da plataforma Saúde Digital com foco em usabilidade."
    },
    {
      ano: "Futuro",
      titulo: "Expansão e Melhorias",
      descricao: "Planejamos expandir para outras instituições e adicionar novas funcionalidades."
    }
  ];

  const valores = [
    {
      icone: "❤️",
      titulo: "Empatia",
      descricao: "Colocamos o paciente no centro de todas as decisões de design e desenvolvimento."
    },
    {
      icone: "🌍",
      titulo: "Inclusão",
      descricao: "Criamos soluções acessíveis para pessoas de todas as idades e níveis de familiaridade digital."
    },
    {
      icone: "💡",
      titulo: "Inovação",
      descricao: "Buscamos constantemente novas tecnologias e abordagens para melhorar a experiência em saúde."
    },
    {
      icone: "🎯",
      titulo: "Comprometimento",
      descricao: "Comprometidos com resultados reais que impactem positivamente a vida das pessoas."
    },
    {
      icone: "⚖️",
      titulo: "Ética",
      descricao: "Respeito absoluto à privacidade e segurança dos dados dos pacientes."
    },
    {
      icone: "🤝",
      titulo: "Colaboração",
      descricao: "Trabalhamos em parceria com instituições de saúde e a comunidade."
    }
  ];

  const equipePreview = [
    { nome: "Arthur Brito", foto: ArthurFoto, cargo: "Designer UX/UI" },
    { nome: "Luiz Felipe Flosl", foto: LuizFoto, cargo: "Líder de Projeto" },
    { nome: "Pedro Brum", foto: PedroFoto, cargo: "DevOps" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header Hero */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-6 mb-6">
            <img 
              src={LogoHC} 
              alt="Hospital das Clínicas" 
              className="h-20 w-20 object-contain"
            />
            <div>
              <h1 className="text-5xl font-bold text-gray-800 mb-2">
                Sobre Nós
              </h1>
              <p className="text-xl text-gray-600">
                Conheça a história, missão e valores do projeto Saúde Digital
              </p>
            </div>
          </div>
        </div>

        {/* Nossa História */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Nossa História
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                O projeto <strong className="text-blue-600">Saúde Digital</strong> surgiu a partir da necessidade de 
                enfrentar um desafio real e urgente: a dificuldade que muitas pessoas, especialmente 
                idosos e aqueles com menor familiaridade tecnológica, têm em lidar com ferramentas 
                digitais na área da saúde.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Observamos que essa <strong>barreira digital</strong> gera altos índices de absenteísmo, 
                impactando diretamente na qualidade do atendimento médico e na eficiência do 
                sistema de saúde como um todo.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Em parceria com o <strong>Hospital das Clínicas da FMUSP</strong>, trabalhamos para 
                desenvolver soluções que tornem o acesso à saúde digital mais fácil, intuitivo 
                e verdadeiramente acessível para todos.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Impacto Social</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-700">Redução do absenteísmo em consultas</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-700">Maior autonomia dos pacientes</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-700">Otimização do tempo dos profissionais de saúde</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-700">Inclusão digital na saúde</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Nossa Jornada
          </h2>
          <div className="relative">
            {/* Linha do tempo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>
            
            {/* Eventos */}
            <div className="space-y-12">
              {timeline.map((evento, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Ponto na linha */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white z-10"></div>
                  
                  {/* Conteúdo */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="text-blue-600 font-bold text-lg mb-2">{evento.ano}</div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{evento.titulo}</h3>
                      <p className="text-gray-600">{evento.descricao}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Nossos Princípios
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-600 text-white rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4">Missão</h3>
              <p className="text-blue-100">
                Promover inclusão digital na saúde, oferecendo ferramentas e soluções que 
                ajudem pacientes a utilizar serviços digitais com autonomia e facilidade.
              </p>
            </div>
            
            <div className="bg-green-600 text-white rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-bold mb-4">Visão</h3>
              <p className="text-green-100">
                Ser referência no desenvolvimento de soluções que contribuam para reduzir 
                o absenteísmo na saúde, melhorando a experiência e o acesso dos pacientes.
              </p>
            </div>
            
            <div className="bg-purple-600 text-white rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold mb-4">Valores</h3>
              <p className="text-purple-100">
                Empatia, Inclusão, Inovação, Comprometimento e Ética guiam todas 
                as nossas ações e decisões.
              </p>
            </div>
          </div>

          {/* Valores Detalhados */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((valor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl mb-4">{valor.icone}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{valor.titulo}</h3>
                <p className="text-gray-600 text-sm">{valor.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Preview da Equipe */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Conheça Nossa Equipe
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Um time dedicado de estudantes de Análise e Desenvolvimento de Sistemas da FIAP
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {equipePreview.map((membro, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={membro.foto} 
                    alt={membro.nome}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-800">{membro.nome}</h3>
                <p className="text-gray-600 text-sm">{membro.cargo}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/integrantes"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Conhecer Toda a Equipe</span>
              <span>→</span>
            </Link>
          </div>
        </section>

        {/* Parceria HC-FMUSP */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Parceria com Hospital das Clínicas
          </h2>
          <p className="text-blue-100 text-xl mb-6 max-w-3xl mx-auto">
            Desenvolvemos este projeto em colaboração direta com o Hospital das Clínicas da FMUSP, 
            uma das instituições de saúde mais renomadas da América Latina.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl mb-2">🏥</div>
              <h3 className="font-semibold mb-2">Referência em Saúde</h3>
              <p className="text-blue-100 text-sm">Um dos maiores complexos hospitalares da América Latina</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl mb-2">🎓</div>
              <h3 className="font-semibold mb-2">Excelência Acadêmica</h3>
              <p className="text-blue-100 text-sm">Vinculado à Universidade de São Paulo</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl mb-2">💡</div>
              <h3 className="font-semibold mb-2">Inovação em Saúde</h3>
              <p className="text-blue-100 text-sm">Pioneiro em pesquisas e novas tecnologias médicas</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sobre;
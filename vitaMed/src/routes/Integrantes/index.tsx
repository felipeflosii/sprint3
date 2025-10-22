import React from 'react';
import { Link } from 'react-router-dom';

// Importando as imagens
import ArthurFoto from '../../assets/img/brito.jpeg';
import LuizFoto from '../../assets/img/flosi.jpeg';
import PedroFoto from '../../assets/img/brum.jpeg';
import LogoHC from '../../assets/img/logo2hc.png';

const Integrantes: React.FC = () => {
  const integrantes = [
    {
      nome: "Arthur Brito da Silva ㅤㅤㅤ RM562085 - 1TDSPG",
      foto: ArthurFoto,
      cargo: "Desenvolvedor Full Stack & UX/UI Designer",
      descricao: "Responsável pela arquitetura do sistema e integração entre frontend e backend. Especialista em React, TypeScript e Node.js.",
      habilidades: ["React", "TypeScript", "Node.js", "OracleSQL", "UX/UI Design"],
      contato: {
        email: "britoarthur150@gmail.com",
        linkedin: "https://www.linkedin.com/in/arthur-brito-da-silva-06658b276/",
        github: "https://github.com/thubrito"
      },
      contribuicoes: [
        "Arquitetura do sistema",
        "Desenvolvimento do backend",
        "Integração de APIs",
        "Coordenação da equipe"
      ]
    },
    {
      nome: "Luiz Felipe Flosi dos Santos RM563197 - 1TDSPG",
      foto: LuizFoto,
      cargo: "Desenvolvedor Frontend & Líder de Projeto",
      descricao: "Focado na experiência do usuário e interface visual. Desenvolve componentes React com Tailwind CSS e garante a acessibilidade.",
      habilidades: ["React", "Tailwind CSS", "Figma", "UX/UI Design", "JavaScript"],
      contato: {
        email: "felipeflosi@gmail.com",
        linkedin: "https://www.linkedin.com/in/felipeflosii/",
        github: "https://github.com/felipeflosii"
      },
      contribuicoes: [
        "Design da interface",
        "Componentes React",
        "Experiência do usuário",
        "Responsividade"
      ]
    },
    {
      nome: "Pedro Henrique Brum Lopes RM561780 - 1TDSPG",
      foto: PedroFoto,
      cargo: "Desenvolvedor Backend & ChatBot Specialist",
      descricao: "Gerencia a infraestrutura, banco de dados e APIs. Garante a segurança e performance do sistema.",
      habilidades: ["Python", "Django", "Docker", "MySQL", "Mac"],
      contato: {
        email: "pbrum191@gmail.com",
        linkedin: "https://www.linkedin.com/in/pedro-brum-66a31b326/",
        github: "https://github.com/PedroBrum-DEV"
      },
      contribuicoes: [
        "API Restful",
        "Banco de dados",
        "Deploy e DevOps",
        "Segurança da aplicação"
      ]
      
    }
  ];

  const tecnologias = [
    { nome: "React", icone: "⚛️", categoria: "Frontend" },
    { nome: "TypeScript", icone: "🔷", categoria: "Linguagem" },
    { nome: "Tailwind CSS", icone: "🎨", categoria: "Estilização" },
    { nome: "Node.js", icone: "🟢", categoria: "Backend" },
    { nome: "OracleSQL", icone: "🐘", categoria: "Banco de Dados" },
    { nome: "Docker", icone: "🐳", categoria: "DevOps" },
    { nome: "Figma", icone: "🎯", categoria: "Design" },
    { nome: "Git", icone: "📚", categoria: "Versionamento" }
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
                Nossa Equipe
              </h1>
              <p className="text-xl text-gray-600">
                Conheça os talentos por trás do projeto Saúde Digital
              </p>
            </div>
          </div>
        </div>

        {/* Sobre a Equipe */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Sobre o Desenvolvimento
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Este projeto foi desenvolvido por estudantes do curso de <strong>Análise e Desenvolvimento de Sistemas da FIAP</strong>, 
                em parceria com o <strong>Hospital das Clínicas da FMUSP</strong>.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Nosso objetivo é transformar a experiência digital em saúde, tornando-a mais 
                acessível, intuitiva e humana para todos os pacientes.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Duração do Projeto</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Início:</span>
                  <span className="font-semibold">Março 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Previsão de Conclusão:</span>
                  <span className="font-semibold">Novembro 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">
                    Versão Final
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrantes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Conheça os Desenvolvedores
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {integrantes.map((integrante, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                {/* Foto */}
                <div className="h-64 overflow-hidden">
                  <img 
                    src={integrante.foto} 
                    alt={integrante.nome}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                {/* Informações */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {integrante.nome}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {integrante.cargo}
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {integrante.descricao}
                  </p>

                  {/* Habilidades */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Habilidades Técnicas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {integrante.habilidades.map((habilidade, i) => (
                        <span 
                          key={i}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium"
                        >
                          {habilidade}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contribuições */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Principais Contribuições:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {integrante.contribuicoes.map((contribuicao, i) => (
                        <li key={i}>{contribuicao}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Contato */}
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Contato:</h4>
                    <div className="flex space-x-4">
                      <a 
                        href={`mailto:${integrante.contato.email}`}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                        title="E-mail"
                      >
                        ✉️
                      </a>
                      <span className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer" title="LinkedIn">
                        💼
                      </span>
                      <span className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer" title="GitHub">
                        💻
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tecnologias Utilizadas */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Tecnologias do Projeto
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tecnologias.map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors duration-200">
                <div className="text-2xl mb-2">{tech.icone}</div>
                <h3 className="font-semibold text-gray-800">{tech.nome}</h3>
                <p className="text-gray-600 text-sm">{tech.categoria}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-blue-600 text-white rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              Interessado no Projeto?
            </h2>
            <p className="text-blue-100 text-xl mb-6 max-w-2xl mx-auto">
              Entre em contato para saber mais sobre nossa iniciativa ou colaborar conosco
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contato"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Entrar em Contato
              </Link>
              <Link
                to="/sobre-nos"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Saber Mais
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Integrantes;
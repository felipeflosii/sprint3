import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiLogIn, FiUser, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import LogoHC from '../../assets/img/logo2hc.png';

const API_URL = import.meta.env.VITE_API_URL_PACIENTE;

function apenasDigitos(valor: string) {
  return valor.replace(/\D/g, '');
}

function cpfValido(cpf: string) {
  const digitos = apenasDigitos(cpf);
  return digitos.length === 11;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');

    const cpfDigits = apenasDigitos(cpf);

    if (!cpfDigits || !senha) {
      setErro('Preencha todos os campos.');
      return;
    }

    if (!cpfValido(cpfDigits)) {
      setErro('CPF inválido. Informe os 11 dígitos do CPF.');
      return;
    }

    try {
      setCarregando(true);

      const resposta = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cpf: cpfDigits, senha }),
      });

      if (!resposta.ok) {
        if (resposta.status === 401) throw new Error('Credenciais inválidas.');
        let errMsg = 'Erro ao tentar fazer login.';
        try {
          const json = await resposta.json();
          if (json?.message) errMsg = json.message;
        } catch {
          // ignore
        }
        throw new Error(errMsg);
      }

      const dados = await resposta.json();

      if (dados.token) localStorage.setItem('token', dados.token);
      if (dados.usuario) localStorage.setItem('usuario', JSON.stringify(dados.usuario));

      navigate('/');
    } catch (err: any) {
      setErro(err.message || 'Erro ao conectar com o servidor.');
    } finally {
      setCarregando(false);
    }
  };

  const formatarCpfVisual = (valor: string) => {
    const d = apenasDigitos(valor).slice(0, 11);
    return d
      .replace(/^(\d{3})(\d)/, '$1.$2')
      .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden max-w-4xl w-full grid md:grid-cols-2">
        
        {/* Lado esquerdo */}
        <div className="bg-gradient-to-br from-blue-700 to-indigo-700 text-white flex flex-col justify-center items-center p-10">
          <img
            src={LogoHC}
            alt="Logo HC"
            className="h-20 w-20 mb-6 object-contain filter invert brightness-0"
          />
          <h2 className="text-3xl font-bold mb-2 text-center">Saúde Digital - HC</h2>
          <p className="text-blue-100 text-center mb-6">
            Bem-vindo(a) ao sistema digital do Hospital das Clínicas da FMUSP.
          </p>
          <p className="text-sm text-blue-200 text-center">
            Acesse sua conta para gerenciar informações e serviços.
          </p>
        </div>

        {/* Lado direito: formulário */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <FiLogIn className="text-blue-600" /> Fazer Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Campo CPF */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                CPF
              </label>
              <div className="flex items-center border-2 border-gray-200 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <FiUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="000.000.000-00"
                  value={cpf}
                  onChange={(e) => setCpf(formatarCpfVisual(e.target.value))}
                  className="w-full outline-none text-gray-700"
                  disabled={carregando}
                />
              </div>
            </div>

            {/* Campo Senha com botão para mostrar/ocultar */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Senha
              </label>
              <div className="flex items-center border-2 border-gray-200 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <FiLock className="text-gray-400 mr-2" />
                <input
                  type={mostrarSenha ? 'text' : 'password'}
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="w-full outline-none text-gray-700"
                  disabled={carregando}
                />
                <button
                  type="button"
                  onClick={() => setMostrarSenha((prev) => !prev)}
                  className="text-gray-400 hover:text-gray-600 ml-2 focus:outline-none"
                  tabIndex={-1}
                >
                  {mostrarSenha ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {/* Mensagem de erro */}
            {erro && (
              <p className="text-red-600 text-sm font-medium">{erro}</p>
            )}

            {/* Botão de Login */}
            <button
              type="submit"
              disabled={carregando}
              className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors ${
                carregando ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {carregando ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          {/* Links adicionais */}
          <div className="mt-6 text-center text-gray-600 text-sm">
            <p>
              Esqueceu sua senha?{' '}
              <a
                href="https://accountportaldopaciente.hc.fm.usp.br/f41d2bb6-71e3-4c68-9dcb-ba5635ab8b08/esqueci-minha-senha?t=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiJpbnRlcm5hbC5wb3J0YWwtcGFjaWVudGUtd2ViIiwiY2xpZW50X25hbWUiOiJQb3J0YWwgZG8gUGFjaWVudGUiLCJzZXNzaW9uX2lkIjoiZjQxZDJiYjYtNzFlMy00YzY4LTlkY2ItYmE1NjM1YWI4YjA4IiwiaWF0IjoxNzYyNDAwMjg0fQ.Q7b-SQH9EOSvQLHjUgwplzJZtiQX9pkk4H523jggQG8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Clique aqui
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

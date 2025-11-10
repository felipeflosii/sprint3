import { useState } from 'react';
import { FiLogIn, FiUser, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';
import LogoHC from '../../assets/img/logo2hc.png';

const API_URL = import.meta.env.VITE_API_URL_PACIENTE || 'http://localhost:8080/Paciente';

function apenasDigitos(valor: string) {
  return valor.replace(/\D/g, '');
}

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro('');

    const cpfDigits = apenasDigitos(cpf);
    if (!cpfDigits || !senha) {
      setErro('Preencha CPF e senha.');
      return;
    }

    setCarregando(true);

    try {
      const resp = await fetch(API_URL, {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
      });

      if (!resp.ok) {
        if (resp.status === 404) setErro('Endpoint não encontrado (404).');
        else setErro(`Erro ao acessar API (status ${resp.status}).`);
        return;
      }

      const pacientes = await resp.json();

      if (!Array.isArray(pacientes)) {
        setErro('Resposta do servidor inesperada (esperava lista de pacientes).');
        return;
      }

      const pacienteEncontrado = pacientes.find(
        (p: any) => apenasDigitos(p.cpf) === cpfDigits && String(p.senha) === String(senha)
      );

      if (pacienteEncontrado) {
        login(pacienteEncontrado); // usa o contexto Auth
        navigate('/usuario');
      } else {
        setErro('CPF ou senha incorretos.');
      }
    } catch (err: any) {
      console.error('[Login] Erro ao conectar à API:', err);
      setErro(
        'Erro de rede/CORS: verifique se a API está acessível em ' +
        API_URL + '. Confira também o console (F12 → Console / Network).'
      );
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden max-w-4xl w-full grid md:grid-cols-2">
        <div className="bg-gradient-to-br from-blue-700 to-indigo-700 text-white flex flex-col justify-center items-center p-10">
          <img src={LogoHC} alt="Logo HC" className="h-20 w-20 mb-6 object-contain filter invert brightness-0" />
          <h2 className="text-3xl font-bold mb-2 text-center">Saúde Digital - HC</h2>
          <p className="text-blue-100 text-center mb-6">
            Bem-vindo(a) ao sistema digital do Hospital das Clínicas.
          </p>
        </div>

        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <FiLogIn className="text-blue-600" /> Fazer Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">CPF</label>
              <div className="flex items-center border-2 border-gray-200 rounded-lg px-3 py-2">
                <FiUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  placeholder="00000000000"
                  disabled={carregando}
                  className="w-full outline-none text-gray-700"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Senha</label>
              <div className="flex items-center border-2 border-gray-200 rounded-lg px-3 py-2">
                <FiLock className="text-gray-400 mr-2" />
                <input
                  type={mostrarSenha ? 'text' : 'password'}
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="Digite sua senha"
                  disabled={carregando}
                  className="w-full outline-none text-gray-700"
                />
                <button
                  type="button"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  className="text-gray-400 hover:text-gray-600 ml-2"
                >
                  {mostrarSenha ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {erro && <p className="text-red-600 text-sm font-medium">{erro}</p>}

            <button
              type="submit"
              disabled={carregando}
              className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition ${
                carregando ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {carregando ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

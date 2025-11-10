import { useEffect, useState } from 'react';
import { FiCalendar, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

interface Consulta {
  id: number;
  data: string;
  hora: string;
  especialidade: string;
  medico: string;
}

export default function Usuario() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState<any>(null);

  // Mantém apenas o estado de consultas (sem o setConsultas, já que não é usado ainda)
  const [consultas] = useState<Consulta[]>([]);

  const formatarCPF = (cpf: string) => {
    if (!cpf) return '';
    return cpf
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  };

  useEffect(() => {
    const userData = localStorage.getItem('usuario');
    if (userData) {
      const dados = JSON.parse(userData);
      setUsuario(dados);
    }
  }, []);

  if (!usuario) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] text-center">
        <p className="text-xl mb-4">Você precisa estar logado para acessar esta página.</p>
        <button
          onClick={() => navigate('/login')}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
        >
          Fazer login
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <div className="flex items-center mb-6 gap-3">
        <FiUser className="text-3xl text-blue-600" />
        <div>
          <h2 className="text-2xl font-semibold">{usuario.nome}</h2>
          {usuario.cpf && <p className="text-gray-600">CPF: {formatarCPF(usuario.cpf)}</p>}
          {usuario.dataNascimento && (
            <p className="text-gray-600">
              Nascimento: {new Date(usuario.dataNascimento).toLocaleDateString('pt-BR')}
            </p>
          )}
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <FiCalendar /> Suas Consultas
      </h3>

      {consultas.length === 0 ? (
        <p className="text-gray-500">Nenhuma consulta marcada no momento.</p>
      ) : (
        <ul className="space-y-4">
          {consultas.map((consulta) => (
            <li key={consulta.id} className="border p-4 rounded-md">
              <p><strong>Data:</strong> {consulta.data}</p>
              <p><strong>Hora:</strong> {consulta.hora}</p>
              <p><strong>Especialidade:</strong> {consulta.especialidade}</p>
              <p><strong>Médico:</strong> {consulta.medico}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

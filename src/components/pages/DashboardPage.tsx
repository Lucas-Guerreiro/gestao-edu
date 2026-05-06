import { useAuth } from '../../contexts/AuthContext'

const DashboardPage = () => {
  const { currentUser } = useAuth()

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Bem-vindo, {currentUser?.email ?? 'Usuário'}!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Total de Alunos</h2>
          <p className="text-3xl font-bold text-blue-600">124</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Turmas Ativas</h2>
          <p className="text-3xl font-bold text-green-600">12</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Tarefas Pendentes</h2>
          <p className="text-3xl font-bold text-yellow-600">3</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
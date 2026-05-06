import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const Sidebar = () => {
  const { currentUser } = useAuth()

  return (
    <aside className="w-64 min-h-screen bg-gray-800 text-white p-6 shadow-lg">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">EduManage</h1>
        {currentUser && (
          <p className="text-sm opacity-75 truncate">{currentUser.email}</p>
        )}
      </div>
      <nav className="space-y-2">
        <Link
          to="/dashboard"
          className="block py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Dashboard
        </Link>
        <Link
          to="/students"
          className="block py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Alunos
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar
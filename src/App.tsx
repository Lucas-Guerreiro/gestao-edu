import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

// Interfaces
interface Student {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive';
}

// Mock data
const mockStudents: Student[] = [
  { id: 1, name: 'João Silva', email: 'joao@email.com', status: 'active' },
  { id: 2, name: 'Maria Oliveira', email: 'maria@email.com', status: 'active' },
  { id: 3, name: 'Pedro Santos', email: 'pedro@email.com', status: 'inactive' },
  { id: 4, name: 'Ana Costa', email: 'ana@email.com', status: 'active' },
  { id: 5, name: 'Lucas Ferreira', email: 'lucas@email.com', status: 'active' },
];

const stats = [
  { title: 'Total Alunos', value: 150, icon: '👥' },
  { title: 'Turmas Ativas', value: 12, icon: '📚' },
  { title: 'Professores', value: 8, icon: '👨‍🏫' },
];

// Sidebar component
const Sidebar: React.FC = () => (
  <div className="w-64 bg-gray-800 text-white min-h-screen p-4 fixed left-0 top-0 z-10">
    <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `block py-2 px-4 mb-4 rounded-lg transition-colors ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/alunos"
        className={({ isActive }) =>
          `block py-2 px-4 mb-4 rounded-lg transition-colors ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
        }
      >
        Alunos
      </NavLink>
    </nav>
  </div>
);

// Dashboard component
const Dashboard: React.FC = () => (
  <div className="ml-64 p-8 min-h-screen bg-gray-50">
    <h2 className="text-3xl font-bold mb-8 text-gray-800">Dashboard</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">{stat.icon}</div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
          <p className="text-gray-600 font-medium">{stat.title}</p>
        </div>
      ))}
    </div>
  </div>
);

// Alunos component
const Alunos: React.FC = () => (
  <div className="ml-64 p-8 min-h-screen bg-gray-50">
    <h2 className="text-3xl font-bold mb-8 text-gray-800">Alunos</h2>
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {mockStudents.map((student) => (
            <tr key={student.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    student.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {student.status === 'active' ? 'Ativo' : 'Inativo'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// Main App component
const App: React.FC = () => (
  <Router>
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/alunos" element={<Alunos />} />
      </Routes>
    </div>
  </Router>
);

export default App;

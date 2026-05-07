import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import StudentsPage from './components/pages/StudentsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-100">
        {/* Fixed Sidebar */}
        <aside className="w-64 bg-gray-800 shadow-xl fixed h-full z-40 overflow-y-auto">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-white mb-8">My App</h1>
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/dashboard"
                    className="flex items-center py-3 px-4 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
                  >
                    <span className="mr-3">📊</span>Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/alunos"
                    className="flex items-center py-3 px-4 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
                  >
                    <span className="mr-3">👥</span>Alunos
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64 p-8 overflow-y-auto">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/alunos" element={<StudentsPage />} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

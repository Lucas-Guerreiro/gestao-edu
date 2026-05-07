import React, { useState, FormEvent } from 'react';
import { useStudents } from '@/hooks/useStudents';
import { useStudentFilter } from '@/hooks/useStudentFilter';
import { StudentFilter } from '@/components/StudentFilter';

interface Student {
  id: string;
  name: string;
  email: string;
  grade: number;
}

interface FormData {
  name: string;
  email: string;
  grade: number;
}

const StudentsPage: React.FC = () => {
  const { students, addStudent, updateStudent, deleteStudent } = useStudents();
  const { filteredStudents, searchTerm, setSearchTerm, emailFilter, setEmailFilter, minGrade, setMinGrade, maxGrade, setMaxGrade, sortBy, setSortBy, clearFilters } = useStudentFilter(students);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', grade: 0 });

  const handleOpenModal = (student?: Student) => {
    if (student) {
      setEditingStudent(student);
      setFormData({ name: student.name, email: student.email, grade: student.grade });
    } else {
      setEditingStudent(null);
      setFormData({ name: '', email: '', grade: 0 });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (editingStudent) {
      updateStudent(editingStudent.id, formData);
    } else {
      addStudent(formData);
    }
    setIsModalOpen(false);
    setEditingStudent(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('Tem certeza que deseja deletar este aluno?')) {
      deleteStudent(id);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Gerenciar Alunos</h1>
      <div className="mb-8">
        <StudentFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          emailFilter={emailFilter}
          setEmailFilter={setEmailFilter}
          minGrade={minGrade}
          setMinGrade={setMinGrade}
          maxGrade={maxGrade}
          setMaxGrade={setMaxGrade}
          sortBy={sortBy}
          setSortBy={setSortBy}
          clearFilters={clearFilters}
        />
      </div>
      <button
        onClick={() => handleOpenModal()}
        className="mb-6 bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors font-medium"
      >
        Novo Aluno
      </button>
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredStudents.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.grade}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleOpenModal(student)}
                    className="bg-green-600 text-white px-4 py-1 rounded text-xs mr-2 hover:bg-green-700 transition-colors"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="bg-red-600 text-white px-4 py-1 rounded text-xs hover:bg-red-700 transition-colors"
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">
                {editingStudent ? 'Editar Aluno' : 'Novo Aluno'}
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Grade (0-100)</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: parseFloat(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white border border-transparent rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  {editingStudent ? 'Atualizar' : 'Criar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentsPage;
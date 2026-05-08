import React, { useState, useEffect, FormEvent } from 'react';
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
  const { filteredStudents, searchTerm, setSearchTerm, minGrade, setMinGrade, maxGrade, setMaxGrade } = useStudentFilter(students);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', grade: 0 });

  useEffect(() => {
    if (students.length === 0) {
      addStudent({ name: 'João Silva', email: 'joao@example.com', grade: 85 });
      addStudent({ name: 'Maria Santos', email: 'maria@example.com', grade: 92 });
      addStudent({ name: 'Pedro Oliveira', email: 'pedro@example.com', grade: 78 });
    }
  }, [students.length, addStudent]);

  const openNewStudent = () => {
    setEditingStudent(null);
    setFormData({ name: '', email: '', grade: 0 });
    setIsModalOpen(true);
  };

  const openEdit = (student: Student) => {
    setEditingStudent(student);
    setFormData({ name: student.name, email: student.email, grade: student.grade });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingStudent(null);
    setFormData({ name: '', email: '', grade: 0 });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingStudent) {
      updateStudent(editingStudent.id, formData);
    } else {
      addStudent(formData);
    }
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Gerenciar Alunos</h1>
          <button
            onClick={openNewStudent}
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-6 rounded-lg shadow-md transition duration-200"
          >
            Novo Aluno
          </button>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <StudentFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            minGrade={minGrade}
            setMinGrade={setMinGrade}
            maxGrade={maxGrade}
            setMaxGrade={setMaxGrade}
          />

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.grade}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                      <button
                        onClick={() => openEdit(student)}
                        className="text-indigo-600 hover:text-indigo-900 font-medium transition duration-150"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => {
                          if (confirm('Tem certeza que deseja deletar este aluno?')) {
                            deleteStudent(student.id);
                          }
                        }}
                        className="text-red-600 hover:text-red-900 font-medium transition duration-150"
                      >
                        Deletar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {editingStudent ? 'Editar Aluno' : 'Novo Aluno'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Grade (0-100)</label>
                  <input
                    type="number"
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: Number(e.target.value) })}
                    min="0"
                    max="100"
                    step="1"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-6 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition duration-150"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 shadow-md transition duration-150"
                  >
                    {editingStudent ? 'Atualizar' : 'Criar'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentsPage;

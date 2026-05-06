import { useState } from 'react'
import { Student } from '../../types'

const mockStudents: Student[] = [
  { id: '1', name: 'João Silva', email: 'joao@example.com', grade: 'A' },
  { id: '2', name: 'Maria Santos', email: 'maria@example.com', grade: 'B' },
  { id: '3', name: 'Pedro Oliveira', email: 'pedro@example.com', grade: 'A-' },
]

const StudentsPage = () => {
  const [students] = useState(mockStudents)

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Alunos</h1>
      <div className="bg-white shadow-xl rounded-xl overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nome
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nota
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {student.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.grade}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StudentsPage
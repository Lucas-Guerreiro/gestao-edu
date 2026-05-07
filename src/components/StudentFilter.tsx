import React from 'react';

type SortBy = 'nome' | 'email' | 'nota';

interface StudentFilterProps {
  searchName: string;
  setSearchName: (value: string) => void;
  filterEmail: string;
  setFilterEmail: (value: string) => void;
  minGrade: number;
  setMinGrade: (value: number) => void;
  maxGrade: number;
  setMaxGrade: (value: number) => void;
  sortBy: SortBy;
  setSortBy: (value: SortBy) => void;
  clearFilters: () => void;
}

const StudentFilter: React.FC<StudentFilterProps> = ({
  searchName,
  setSearchName,
  filterEmail,
  setFilterEmail,
  minGrade,
  setMinGrade,
  maxGrade,
  setMaxGrade,
  sortBy,
  setSortBy,
  clearFilters,
}) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-xl border border-gray-200">
      <h3 className="text-xl font-bold mb-6 text-gray-800">Filtros de Alunos</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Busca por nome</label>
          <input
            type="text"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Digite o nome..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Filtro por email</label>
          <input
            type="email"
            value={filterEmail}
            onChange={(e) => setFilterEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Digite o email..."
          />
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">Ordenação</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortBy)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
          >
            <option value="nome">Nome</option>
            <option value="email">Email</option>
            <option value="nota">Nota</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 pt-6 border-t border-gray-200">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nota mínima</label>
          <input
            type="number"
            min="0"
            max="10"
            step="0.1"
            value={minGrade}
            onChange={(e) => setMinGrade(parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nota máxima</label>
          <input
            type="number"
            min="0"
            max="10"
            step="0.1"
            value={maxGrade}
            onChange={(e) => setMaxGrade(parseFloat(e.target.value) || 10)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-gray-200">
        <button
          onClick={clearFilters}
          className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 shadow-sm"
        >
          Limpar filtros
        </button>
      </div>
    </div>
  );
};

export default StudentFilter;

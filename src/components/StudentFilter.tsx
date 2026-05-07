import React, { FC, Dispatch, SetStateAction } from 'react';

type SortBy = 'name' | 'email' | 'grade';

interface StudentFilterProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  emailFilter: string;
  setEmailFilter: Dispatch<SetStateAction<string>>;
  minGrade: number;
  setMinGrade: Dispatch<SetStateAction<number>>;
  maxGrade: number;
  setMaxGrade: Dispatch<SetStateAction<number>>;
  sortBy: SortBy;
  setSortBy: Dispatch<SetStateAction<SortBy>>;
  clearFilters: () => void;
}

export const StudentFilter: FC<StudentFilterProps> = ({
  searchTerm,
  setSearchTerm,
  emailFilter,
  setEmailFilter,
  minGrade,
  setMinGrade,
  maxGrade,
  setMaxGrade,
  sortBy,
  setSortBy,
  clearFilters,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
            Buscar por nome
          </label>
          <input
            id="search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Digite o nome do aluno..."
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Filtro por email
          </label>
          <input
            id="email"
            type="email"
            value={emailFilter}
            onChange={(e) => setEmailFilter(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Digite o email..."
          />
        </div>
        <div>
          <label htmlFor="minGrade" className="block text-sm font-medium text-gray-700 mb-2">
            Nota mínima
          </label>
          <input
            id="minGrade"
            type="number"
            min="0"
            max="100"
            step="1"
            value={minGrade}
            onChange={(e) => setMinGrade(Number(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="maxGrade" className="block text-sm font-medium text-gray-700 mb-2">
            Nota máxima
          </label>
          <input
            id="maxGrade"
            type="number"
            min="0"
            max="100"
            step="1"
            value={maxGrade}
            onChange={(e) => setMaxGrade(Number(e.target.value) || 100)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-2">
            Ordenar por
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortBy)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="name">Nome</option>
            <option value="email">Email</option>
            <option value="grade">Nota</option>
          </select>
        </div>
        <div className="col-span-full md:col-span-2 lg:col-span-3 flex justify-center md:justify-end">
          <button
            onClick={clearFilters}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-150 ease-in-out w-full md:w-auto"
          >
            Limpar filtros
          </button>
        </div>
      </div>
    </div>
  );
};
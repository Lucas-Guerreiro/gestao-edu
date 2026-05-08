import React from 'react';

interface StudentFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  minGrade: number;
  setMinGrade: (grade: number) => void;
  maxGrade: number;
  setMaxGrade: (grade: number) => void;
}

export const StudentFilter: React.FC<StudentFilterProps> = ({
  searchTerm,
  setSearchTerm,
  minGrade,
  setMinGrade,
  maxGrade,
  setMaxGrade
}) => {
  const clearFilters = () => {
    setSearchTerm('');
    setMinGrade(0);
    setMaxGrade(100);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-white shadow-md rounded-lg">
      <input
        type="text"
        placeholder="Search by name"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        type="number"
        min="0"
        max="100"
        placeholder="Min grade"
        className="w-24 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={minGrade}
        onChange={(e) => setMinGrade(Number(e.target.value) || 0)}
      />
      <input
        type="number"
        min="0"
        max="100"
        placeholder="Max grade"
        className="w-24 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={maxGrade}
        onChange={(e) => setMaxGrade(Number(e.target.value) || 100)}
      />
      <button
        onClick={clearFilters}
        className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 font-medium"
      >
        Limpar filtros
      </button>
    </div>
  );
};
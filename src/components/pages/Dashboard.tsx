import React from 'react';

const Dashboard: React.FC = () => {
  const stats = [
    {
      icon: '👨‍🎓',
      number: '150',
      label: 'Total Alunos'
    },
    {
      icon: '📚',
      number: '12',
      label: 'Turmas Ativas'
    },
    {
      icon: '👨‍🏫',
      number: '8',
      label: 'Professores'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 text-center group cursor-pointer border border-gray-100 hover:border-blue-200"
            >
              <span className="text-6xl mb-6 block group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </span>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                {stat.number}
              </h3>
              <p className="text-lg text-gray-600 font-semibold uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

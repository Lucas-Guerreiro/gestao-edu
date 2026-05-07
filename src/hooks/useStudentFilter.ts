interface Student {
  id: string;
  name: string;
  email: string;
  grade: number;
}

import { useState, useMemo, useCallback } from 'react';

type SortBy = 'name' | 'email' | 'grade';

export function useStudentFilter(students: Student[]) {
  const [searchTerm, setSearchTerm] = useState('');
  const [emailFilter, setEmailFilter] = useState('');
  const [minGrade, setMinGrade] = useState(0);
  const [maxGrade, setMaxGrade] = useState(100);
  const [sortBy, setSortBy] = useState<SortBy>('name');

  const filteredStudents = useMemo(() => {
    let result = students.filter((student) => {
      const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesEmail = student.email.toLowerCase().includes(emailFilter.toLowerCase());
      const matchesGrade = student.grade >= minGrade && student.grade <= maxGrade;
      return matchesSearch && matchesEmail && matchesGrade;
    });

    result.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'email':
          return a.email.localeCompare(b.email);
        case 'grade':
          return a.grade - b.grade;
        default:
          return 0;
      }
    });

    return result;
  }, [students, searchTerm, emailFilter, minGrade, maxGrade, sortBy]);

  const clearFilters = useCallback(() => {
    setSearchTerm('');
    setEmailFilter('');
    setMinGrade(0);
    setMaxGrade(100);
    setSortBy('name');
  }, []);

  return {
    filteredStudents,
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
  };
}
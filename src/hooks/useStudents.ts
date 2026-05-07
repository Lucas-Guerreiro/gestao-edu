import { useState, useCallback } from 'react';

interface Student {
  id: string;
  name: string;
  email: string;
  grade: number;
  createdAt: string;
}

export function useStudents() {
  const [students, setStudents] = useState<Student[]>([]);

  const addStudent = useCallback((newStudent: Omit<Student, 'id' | 'createdAt'>) => {
    const id = `student-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const createdAt = new Date().toISOString();
    setStudents(prev => [...prev, { id, createdAt, ...newStudent }]);
  }, []);

  const updateStudent = useCallback((id: string, updates: Partial<Student>) => {
    setStudents(prev => prev.map(student => 
      student.id === id ? { ...student, ...updates } : student
    ));
  }, []);

  const deleteStudent = useCallback((id: string) => {
    setStudents(prev => prev.filter(s => s.id !== id));
  }, []);

  const getStudentById = useCallback((id: string): Student | undefined => {
    return students.find(s => s.id === id);
  }, [students]);

  return {
    students,
    addStudent,
    updateStudent,
    deleteStudent,
    getStudentById,
  };
}
import { useState } from 'react';

interface Student {
  id: string;
  name: string;
  email: string;
  grade: number;
  createdAt: string;
}

export function useStudents() {
  const [students, setStudents] = useState<Student[]>([]);

  const addStudent = (newStudentData: { name: string; email: string; grade: number }) => {
    const newStudent: Student = {
      id: crypto.randomUUID(),
      name: newStudentData.name,
      email: newStudentData.email,
      grade: newStudentData.grade,
      createdAt: new Date().toISOString(),
    };
    setStudents((prev) => [...prev, newStudent]);
  };

  const updateStudent = (id: string, updates: Partial<{ name: string; email: string; grade: number }>) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? { ...student, ...updates }
          : student
      )
    );
  };

  const deleteStudent = (id: string) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  const getStudentById = (id: string): Student | undefined => {
    return students.find((student) => student.id === id);
  };

  return {
    students,
    addStudent,
    updateStudent,
    deleteStudent,
    getStudentById,
  };
}
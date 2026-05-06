export interface Student {
  id: string
  name: string
  email: string
  grade?: string
  createdAt?: Date
}

export interface User {
  uid: string
  email: string
  name: string
}
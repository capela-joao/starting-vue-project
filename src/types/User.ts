export interface User {
  _id: string;
  name: string;
  email: string;
  password?: string;
  profileImage?: string;
  bio?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface createUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  profileImage?: string;
  bio?: string;
}

export interface updateUser {
  name?: string;
  email?: string;
  password?: string;
  profileImage?: string;
  bio?: string;
}

export interface loginResponse {
  user: User;
  token: string;
}

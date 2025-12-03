import type { createUser, updateUser, User } from '@/types/User';
import { api } from './api';

export const register = async (data: createUser): Promise<User> => {
  const response = await api.post('/users/register', data);
  return response.data;
};

export const update = async (id: string, data: updateUser): Promise<User> => {
  const response = await api.put(`/users/${id}`, data);
  return response.data;
};

export const getUsers = async (): Promise<User[]> => {
  const response = await api.get('/users');
  return response.data;
};

export const getUserById = async (id: string): Promise<User> => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

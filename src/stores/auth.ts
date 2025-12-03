import { defineStore } from 'pinia';
import type { User } from '@/types/User';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    token: localStorage.getItem('token') || null,
  }),

  actions: {
    setAuth(user: User, token: string) {
      this.user = user;
      this.token = token;
      localStorage.setItem('token', token);
    },

    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('token');
    },
  },
});

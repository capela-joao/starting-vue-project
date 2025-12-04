import { defineStore } from 'pinia';
import type { User } from '@/types/User';
import { api } from '@/api/api';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    isAuthenticated: false,
    loading: true,
  }),

  actions: {
    setAuth(user: User) {
      this.user = user;
      this.isAuthenticated = true;
    },

    logout() {
      this.user = null;
      this.isAuthenticated = false;
    },
    async restoreAuth() {
      try {
        const res = await api.get('/users/profile', {
          withCredentials: true,
        });
        this.setAuth(res.data);
      } catch {
        this.logout();
      } finally {
        this.loading = false;
      }
    },
  },
});

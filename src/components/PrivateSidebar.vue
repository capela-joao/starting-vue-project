<template>
  <aside
    class="w-64 bg-gray-950 h-screen p-4 text-gray-50 space-y-6 flex flex-col"
  >
    <div class="flex items-center space-x-4 text-xl font-bold">
      <h3>Starting Vue</h3>
    </div>

    <div class="flex flex-col justify-between h-full">
      <div class="flex flex-col gap-6 px-6">
        <router-link
          to="/dashboard"
          :class="[
            $route.path === '/dashboard'
              ? 'bg-gray-100 text-gray-950'
              : 'bg-transparent text-gray-50',
            'p-2 rounded-md transition-colors duration-300 ease-in-out',
          ]"
        >
          Dashboard
        </router-link>
        <router-link
          to="/profile"
          :class="[
            $route.path === '/profile'
              ? 'bg-gray-100 text-gray-950'
              : 'bg-transparent text-gray-50',
            'p-2 rounded-md transition-colors duration-300 ease-in-out',
          ]"
        >
          Profile
        </router-link>
      </div>
      <div class="flex gap-6 px-6">
        <button
          @click="handleLogout"
          class="bg-transparent text-gray-50 text-left mb-10 rounded-none hover:text-red-500 hover:border-b hover: border-red-500 w-full"
        >
          Logout
        </button>
      </div>
    </div>
  </aside>
</template>
<script setup>
import { useAuthStore } from '@/stores/auth';
import router from '@/router';
import { api } from '@/api/api';

const auth = useAuthStore();

const handleLogout = async () => {
  try {
    await api.post('/users/logout', {}, { withCredentials: true });
    auth.logout();
    router.push('/login');
  } catch (err) {
    console.log(err);
  }
};
</script>

<template>
  <aside
    class="w-64 bg-gray-950 h-screen p-4 text-gray-50 space-y-6 flex flex-col"
  >
    <div class="flex items-center space-x-4 text-xl font-bold">
      <h3>Starting Vue</h3>
    </div>

    <div class="flex flex-col justify-between h-full">
      <div class="flex flex-col gap-6 px-6">
        <router-link to="/dashboard" class="hover:border-b hover:border-gray-50"
          >Dashboard</router-link
        >
        <router-link to="/profile" class="hover:border-b hover:border-gray-50"
          >Meu perfil</router-link
        >
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
<script>
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();

function handleLogout() {
  auth.logout();
}
</script>

<script setup>
import { onMounted, ref } from 'vue';
import { getUserById } from '@/api/userService';
import { useAuthStore } from '@/stores/auth';
import PrivateSidebar from '@/components/PrivateSidebar.vue';

const auth = useAuthStore();
const user = ref(null);

onMounted(async () => {
  await auth.restoreAuth();

  if (auth.user) {
    const res = await getUserById(auth.user._id);
    user.value = res.data;
  }
});
</script>
<template>
  <div
    v-if="!auth.loading && auth.user"
    class="w-full flex flex-col gap-4 p-4 items-center"
  >
    <h1>Bem-vindo, {{ auth.user.name }}!</h1>
  </div>

  <div v-else>Carregando...</div>
</template>

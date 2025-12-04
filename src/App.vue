<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import PublicNavbar from '@/components/PublicNavbar.vue';
import PrivateSidebar from './components/PrivateSidebar.vue';

const route = useRoute();

const isPublicRoute = computed(() => route.meta.public === true);
const isPrivateRoute = computed(() => route.meta.requiresAuth === true);
</script>

<template>
  <PublicNavbar v-if="isPublicRoute" />
  <div class="min-h-screen flex">
    <PrivateSidebar
      v-if="isPrivateRoute"
      class="{ 'w-64': open, 'w-20': !open, }"
    />
    <router-view class="flex-1 p-6 transition-all duration-300" />
  </div>
</template>

<style scoped></style>

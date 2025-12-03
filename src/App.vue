<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import PublicNavbar from '@/components/PublicNavbar.vue';

const route = useRoute();

const isPublicRoute = computed(() => route.meta.public === true);
</script>

<template>
  <PublicNavbar v-if="isPublicRoute" />
  <router-view />
</template>

<style scoped></style>

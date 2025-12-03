<template>
  <nav
    class="w-full h-16 bg-gray-950 text-gray-50 px-4 flex justify-between items-center"
  >
    <div class="flex items-center font-bold text-xl">
      <router-link to="/">Testing Vue.js</router-link>
    </div>
    <div class="flex gap-6 px-6 items-center">
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </div>
  </nav>
</template>

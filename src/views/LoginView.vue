<template>
  <div>
    <h1>Efetue o login</h1>

    <form @submit.prevent="handleLogin" class="flex flex-col items-center">
      <input
        v-model="email"
        type="email"
        placeholder="Insira o seu e-mail"
        required
      />
      <input
        v-model="password"
        type="password"
        placeholder="Insira a sua senha"
        required
      />
      <button type="submit" class="m-6">Login</button>
    </form>

    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { api } from '@/api/api';
import router from '@/router';

const email = ref('');
const password = ref('');
const error = ref('');

const handleLogin = async () => {
  error.value = '';

  try {
    const data = await api.post('/users/login', {
      email: email.value,
      password: password.value,
    });

    console.log('Login realizado com sucesso!', data);

    router.push('/dashboard');
  } catch (err) {
    if (err.response) {
      error.value = err.response.data.message || 'Erro ao logar';
    } else {
      error.value = 'Não foi possível conectar ao servidor.';
    }
  }
};
</script>

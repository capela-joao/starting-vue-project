<template>
  <div class="w-full flex flex-col gap-4 p-4 items-center">
    <h1>Criar Conta</h1>

    <form @submit.prevent="handleRegister" class="flex flex-col">
      <label for="name">Nome:</label>
      <input
        v-model="name"
        type="text"
        placeholder="Insira o seu nome"
        required
      />
      <label for="email">E-mail:</label>
      <input
        v-model="email"
        type="email"
        placeholder="Insira o seu e-mail"
        required
      />
      <label for="password">Senha:</label>
      <input
        v-model="password"
        type="password"
        placeholder="Insira a sua senha"
        required
      />
      <label for="confirmPassword">Confirme sua senha:</label>
      <input
        v-model="confirmPassword"
        type="password"
        placeholder="Confirme a sua senha"
        required
      />
      <button type="submit" class="m-6">Registrar</button>
    </form>

    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { register } from '@/api/userService';
import router from '@/router';

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const error = ref('');
const loading = ref(false);

const handleRegister = async () => {
  try {
    error.value = '';
    loading.value = true;

    if (password.value !== confirmPassword.value) {
      error.value = 'As senhas não coincidem';
      loading.value = false;
      return;
    }
    const data = await register({
      name: name.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    });

    console.log('Usuário registrado com sucesso!', data);

    name.value = '';
    email.value = '';
    password.value = '';
    confirmPassword.value = '';

    router.push('/login');
  } catch (err: any) {
    if (err.response) {
      error.value = err.response.data.message || 'Erro ao registrar';
    } else {
      error.value = 'Não foi possível conectar ao servidor.';
    }
  } finally {
    loading.value = false;
  }
};
</script>

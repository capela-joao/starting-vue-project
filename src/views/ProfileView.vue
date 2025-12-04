<template>
  <div class="w-full flex flex-col gap-4 p-4 items-center">
    <h1>Perfil</h1>

    <form @submit.prevent="handleUpdate" class="flex flex-col">
      <div class="flex gap-2">
        <div class="w-32 h-32 rounded-full overflow-hidden bg-gray-300">
          <img
            v-if="preview"
            :src="preview"
            class="w-full h-full object-cover"
          />
          <div
            v-else
            class="w-full h-full flex items-center justify-center text-gray-600"
          >
            Foto
          </div>
        </div>
        <input
          type="file"
          id="profileImage"
          accept="image/*"
          class="hidden"
          @change="onSelect"
        />
        <label
          for="profileImage"
          class="cursor-pointer flex items-center bg-transparente text-white px-4 py-2 rounded transition"
        >
          Escolher Foto
        </label>
      </div>

      <label for="name">Nome:</label>
      <input v-model="name" type="text" placeholder="Insira o seu nome" />
      <label for="email">E-mail:</label>
      <input
        v-model="email"
        type="email"
        placeholder="Insira o seu e-mail"
        disabled
        class="text-gray-400"
      />
      <label for="bio">Bio:</label>
      <textarea
        v-model="bio"
        type="text"
        placeholder="Escreva uma bio..."
        class="bg-transparent p-2 border border-gray-600 outline-none focus:border-gray-200"
      />
      <button type="submit" class="m-6">Atualizar</button>
    </form>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { api } from '@/api/api';
import router from '@/router';

const imageFile = ref(null);
const preview = ref(null);

const auth = useAuthStore();
const user = ref(null);

const name = ref('');
const email = ref('');
const bio = ref('');

onMounted(async () => {
  await auth.restoreAuth();

  if (auth.user) {
    name.value = auth.user.name;
    email.value = auth.user.email;
    bio.value = auth.user.bio;
    if (auth.user.profileImage) {
      preview.value = `http://localhost:5001/uploads/users/${auth.user.profileImage}`;
    }
  }
});

function onSelect(e) {
  const file = e.target.files[0];
  if (!file) return;

  imageFile.value = file;
  preview.value = URL.createObjectURL(file);
}
const handleUpdate = async () => {
  try {
    const form = new FormData();

    form.append('name', name.value);
    form.append('bio', bio.value);

    if (imageFile.value) {
      form.append('profileImage', imageFile.value);
    }

    const response = await api.put('/users/', form, {
      withCredentials: true,
    });
    if (response.data.profileImage) {
      preview.value = `http://localhost:5001/uploads/users/${response.data.profileImage}?t=${Date.now()}`;
    }

    router.push('/profile');
  } catch (err) {
    console.log(err);
  }
};
</script>

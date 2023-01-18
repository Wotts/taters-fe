<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/stores/authStore';

const auth = useAuthStore();

const username = ref<string>("");
const password = ref<string>("");

const logMeIn = (): boolean => auth.login(username.value, password.value);
</script>

<template>
  <input
    v-model="username"
    placeholder="username"
    @keyup.enter="logMeIn"
  />
  <input
    v-model="password"
    placeholder="password"
    type="password"
    @keyup.enter="logMeIn"
  />
  <button @click="logMeIn">Login</button>
</template>
<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore';
import router from '@/router';

const auth = useAuthStore();
</script>

<template>
  <div class="column">
    <p>Welcome back, Robert.</p>
    <button @click="router.push({name: 'Login'})">Login</button>
    <button @click="router.push({name: 'Dashboard'})">Dashboard</button>
    <button v-if="auth.isAuthenticated()" @click="auth.logout()">Logout</button>
  </div>
</template>

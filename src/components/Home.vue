<script setup lang="ts">
import { navigate } from '@/helpers/navigate';
import { useAuthStore } from '@/stores/authStore';

const auth = useAuthStore();
</script>

<template>
  <div class="column">
    <p>Welcome back, Robert.</p>
    <button v-if="!auth.isAuthenticated()" @click="navigate('Login')">Login</button>
    <button @click="navigate('Dashboard')">Dashboard</button>
    <button v-if="auth.isAuthenticated()" @click="auth.logout()">Logout</button>
  </div>
</template>

<script setup lang="ts">
import { navigate } from '@/helpers/navigate';
import { useAuthStore } from '@/stores/authStore';

const auth = useAuthStore();
</script>

<template>
  <div class="column">
    <p>Welcome to your dashboard.</p>
    <p>You've peeled 63719812 potatoes this week.</p>
    <p>That's not enough, Robert.</p>
    <p>You still have 36280188 potatoes to go.</p>
    <button @click="navigate('Home')">Home</button>
    <button @click="auth.logout()">Logout</button>
  </div>
</template>

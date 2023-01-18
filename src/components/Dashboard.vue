<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore';

const auth = useAuthStore();
</script>

<template>
  <span>
    Welcome to your dashboard. You've peeled 63719812 potatoes this week.
    That's not enough, Robert.
    You still have 36280188 potatoes to go.
  </span>
  <button @click="auth.logout()">Logout</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
import router from '@/router';

const auth = useAuthStore();

const route = useRoute();

const username = ref("");
const password = ref("");

const logMeIn = (): void => {
  const loginSuccessful = auth.login(username.value, password.value);

  if (loginSuccessful) {
    const redirect = route.query.redirect;

    if (typeof redirect === 'string') {
      router.push(redirect);
    } else {
      router.push({name: 'Home'});
    }
  }
}
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
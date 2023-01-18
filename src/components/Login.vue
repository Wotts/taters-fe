<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { navigate } from '@/helpers/navigate';
import router from '@/router';
import { useAuthStore } from '@/stores/authStore';

const auth = useAuthStore();

const route = useRoute();

const username = ref("");
const password = ref("");

const showError = ref(false);

const logMeIn = (): void => {
  const loginSuccessful = auth.login(username.value, password.value);

  if (loginSuccessful) {
    const redirect = route.query.redirect;

    typeof redirect === 'string'
      ? router.push(redirect)
      : navigate('Home');
  } else {
    showError.value = true;
  }
}
</script>

<template>
  <div class="column">
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
    <p v-if="showError">That's wrong.</p>
    <button @click="logMeIn">Login</button>
    <button v-if="auth.isAuthenticated()" @click="auth.logout()">Logout</button>
    <button @click="navigate('Home')">Home</button>
  </div>
</template>

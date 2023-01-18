import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core';

export const useAuthStore = defineStore('auth', () => {
  const authState = useStorage('authenticated', false);

  const isAuthenticated = (): boolean => {
    return authState.value;
  }

  const login = (username: string, password: string): boolean => {
    if (username === 'uncinc' && password === 'letmein') {
      authState.value = true;
    }

    return authState.value;
  }

  const logout = (): void => {
    authState.value = false;
  }

  return { isAuthenticated, login, logout };
});
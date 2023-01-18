import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core';
import { Authorization } from '@/enums/auth';

export const useAuthStore = defineStore('auth', () => {
  const authState = useStorage('authenticated', false);

  const isAuthenticated = (): boolean => {
    return authState.value;
  }

  const login = (username: string, password: string): boolean => {
    if (
      username === Authorization.username &&
      password === Authorization.password
    ) {
      authState.value = true;
    }

    return authState.value;
  }

  const logout = (): void => {
    authState.value = false;
  }

  return { isAuthenticated, login, logout };
});
<script setup>
import { LeftPanel, LoginForm } from '@/components';

const handleLogin = (credentials) => {
  console.log('Login attempt:', credentials);
};

</script>

<template>
  <div class="login-container">
    <LeftPanel />
    
    <LoginForm
      @login="handleLogin"
      @toggle-password="togglePasswordVisibility"
    />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.login-container {
  display: flex;
  min-height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #101822;
}

@media (max-width: 1024px) {
  .login-container {
    flex-direction: column;
  }
}
</style>
<script setup>
import { reactive, ref } from 'vue';
import { useLoginStore } from '@/stores';

const dataUser = reactive({
  email: '',
  password: '',
});

const showPassword = ref(false);
const loginStore = useLoginStore();
</script>

<template>
  <div class="right-panel">
    <div class="form-container">
      <div class="form-header">
        <h2>Bem-vindo de volta!</h2>
        <p class="subtitle">Entre com suas credenciais para continuar</p>
      </div>

      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">E-mail</label>
          <div class="input-wrapper">
            <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <input
              id="email"
              v-model="dataUser.email"
              type="email"
              placeholder="seu@email.com"
              required
            />
          </div>
        </div>

        <div class="form-group">
          <label for="password">Senha</label>
          <div class="password-input">
            <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
            <input
              id="password"
              v-model="dataUser.password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Digite sua senha"
              required
            />
            <button
              type="button"
              class="toggle-password"
              @click="showPassword = !showPassword"
            >
              <svg v-if="!showPassword" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
              <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="form-options">
          <label class="remember-me">
            <input v-model="rememberMe" type="checkbox" />
            <span>Lembrar de mim</span>
          </label>
          <a href="#" class="forgot-password">Esqueceu a senha?</a>
        </div>

        <button type="submit" class="btn-login" @click="loginStore.loginUser(dataUser)">
          Entrar
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </button>
      </form>


      <p class="signup-text">
        Não tem uma conta? <router-link to="/register" class="signup-link">Criar conta grátis</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.right-panel {
  flex: 1;
  background: #111418;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.form-container {
  width: 100%;
  max-width: 460px;
}

.form-header {
  margin-bottom: 40px;
}

h2 {
  color: white;
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 12px;
  letter-spacing: -0.02em;
}

.subtitle {
  color: #9da8b9;
  font-size: 16px;
  font-weight: 500;
}

.form-group {
  margin-bottom: 24px;
}

label {
  display: block;
  color: white;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 16px;
  color: #637588;
  pointer-events: none;
}

input[type="email"],
input[type="password"],
input[type="text"] {
  width: 100%;
  padding: 14px 16px 14px 46px;
  background: #1c2027;
  border: 2px solid #282f39;
  border-radius: 10px;
  color: white;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s ease;
}

input::placeholder {
  color: #637588;
  font-weight: 400;
}

input:focus {
  outline: none;
  border-color: #136dec;
  background: #1e2530;
  box-shadow: 0 0 0 4px rgba(19, 109, 236, 0.1);
}

.password-input {
  position: relative;
  display: flex;
  align-items: center;
}

.password-input input {
  padding-right: 50px;
}

.toggle-password {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #637588;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  border-radius: 6px;
}

.toggle-password:hover {
  color: white;
  background: #282f39;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: white;
  font-size: 14px;
  font-weight: 500;
}

.remember-me input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #136dec;
}

.forgot-password {
  color: #136dec;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: color 0.3s;
}

.forgot-password:hover {
  color: #42a5f5;
}

.btn-login {
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #136dec 0%, #0d5bc7 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 4px 20px rgba(19, 109, 236, 0.3);
}

.btn-login:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(19, 109, 236, 0.4);
}

.btn-login:active {
  transform: translateY(0);
}

.divider {
  text-align: center;
  margin: 32px 0;
  position: relative;
}

.divider::before,
.divider::after {
  content: '';
  position: absolute;
  top: 50%;
  width: calc(50% - 85px);
  height: 1px;
  background: #282f39;
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

.divider span {
  color: #637588;
  font-size: 13px;
  font-weight: 600;
  padding: 0 16px;
  background: #111418;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.social-buttons {
  display: flex;
  gap: 14px;
  margin-bottom: 32px;
}

.btn-social {
  flex: 1;
  padding: 14px;
  background: #1c2027;
  border: 2px solid #282f39;
  border-radius: 10px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
}

.btn-social:hover {
  background: #282f39;
  border-color: #3a4558;
  transform: translateY(-2px);
}

.signup-text {
  text-align: center;
  color: #9da8b9;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 28px;
}

.signup-link {
  color: #136dec;
  text-decoration: none;
  font-weight: 700;
  transition: color 0.3s;
}

.signup-link:hover {
  color: #42a5f5;
}

@media (max-width: 1024px) {
  .right-panel {
    flex: 1;
  }
}

@media (max-width: 640px) {
  .right-panel {
    padding: 24px;
  }

  .form-container {
    max-width: 100%;
  }

  h2 {
    font-size: 28px;
  }

  .social-buttons {
    flex-direction: column;
  }
}
</style>
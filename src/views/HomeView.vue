<script setup>
import router from '@/router';
import { ref } from 'vue';

const darkMode = ref(true);
const email = ref('');

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Email submitted:', email.value);
};
</script>

<template>
  <div :class="['app-container', { 'dark': darkMode }]">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-wrapper">
        <div class="nav-logo">
          <svg class="logo-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <h2>TaskMaster</h2>
        </div>


        <div class="nav-actions">
          <button @click="toggleDarkMode" class="btn-icon" title="Alternar tema">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
            </svg>
          </button>
          <button class="btn-secondary" @click="router.push('/register')">Cadastre-se</button>
          <button class="btn-primary" @click="router.push('/login')">Login</button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <!-- Hero Text -->
          <div class="hero-text">
            <div class="badge">
              <span class="badge-dot"></span>
              <span>Nova Versão 2.0 Disponível</span>
            </div>
            <h1>
              Transforme sua rotina em <span class="highlight">resultados</span>
            </h1>
            <p class="subtitle">
              A ferramenta definitiva para organizar tarefas, colaborar com sua equipe e manter o foco no que realmente importa. Simples, rápido e eficiente.
            </p>
            <div class="hero-buttons">
              <button class="btn-hero-primary">Começar Agora</button>
              <button class="btn-hero-secondary">
                <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Ver Demo
              </button>
            </div>
            <div class="social-proof">
              <div class="avatars">
                <div class="avatar avatar-1"></div>
                <div class="avatar avatar-2"></div>
                <div class="avatar avatar-3"></div>
                <div class="avatar-count">+2k</div>
              </div>
              <p>Já usado por mais de 10.000 profissionais</p>
            </div>
          </div>

          <!-- Hero Visual -->
          <div class="hero-visual">
            <div class="gradient-blob"></div>
            <div class="app-mockup">
              <div class="mockup-header">
                <div class="traffic-lights">
                  <span class="light red"></span>
                  <span class="light yellow"></span>
                  <span class="light green"></span>
                </div>
              </div>
              <div class="mockup-content">
                <div class="mockup-title">
                  <h3>Projeto Website</h3>
                  <span class="status-badge">Em progresso</span>
                </div>
                <div class="task-list">
                  <div class="task-item">
                    <svg class="task-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke-width="2"/>
                    </svg>
                    <span class="task-text">Design da Home</span>
                    <div class="avatar-small blue">AS</div>
                  </div>
                  <div class="task-item completed">
                    <svg class="task-icon checked" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span class="task-text">Briefing inicial</span>
                    <div class="avatar-small purple">JP</div>
                  </div>
                  <div class="task-item">
                    <svg class="task-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke-width="2"/>
                    </svg>
                    <span class="task-text">Implementação CSS</span>
                    <div class="avatar-small orange">MR</div>
                  </div>
                </div>
                <div class="chart">
                  <div class="bar bar-1"></div>
                  <div class="bar bar-2"></div>
                  <div class="bar bar-3"></div>
                  <div class="bar bar-4"></div>
                  <div class="bar bar-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features" id="recursos">
      <div class="features-container">
        <div class="features-header">
          <span class="section-tag">Recursos Poderosos</span>
          <h2>Tudo o que você precisa para manter o controle</h2>
          <p>Projetado para eliminar o caos do seu dia a dia com ferramentas intuitivas e inteligentes.</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon blue">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3>Entrada Rápida</h3>
            <p>Adicione tarefas em segundos usando atalhos de teclado inteligentes e processamento de linguagem natural.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon purple">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h3>Colaboração Real</h3>
            <p>Compartilhe listas, atribua tarefas e converse com sua equipe diretamente no contexto do trabalho.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon green">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <h3>Insights Visuais</h3>
            <p>Visualize seu progresso com gráficos automáticos que mostram onde você gasta mais tempo.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon orange">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
            </div>
            <h3>Sincronização Cloud</h3>
            <p>Seus dados estão sempre seguros e disponíveis em qualquer dispositivo, a qualquer momento.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon red">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
              </svg>
            </div>
            <h3>Lembretes Inteligentes</h3>
            <p>Nunca mais esqueça um prazo. Receba notificações baseadas em localização e horário.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon teal">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
              </svg>
            </div>
            <h3>Modo Escuro Nativo</h3>
            <p>Cuidadosamente desenhado para reduzir o cansaço visual e economizar bateria.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="cta-container">
        <div class="cta-content">
          <h2>Pronto para organizar sua vida?</h2>
          <p>Junte-se gratuitamente hoje e comece a transformar seus objetivos em realidade.</p>
          <form @submit="handleSubmit" class="cta-form">
            <input 
              v-model="email" 
              type="email" 
              placeholder="Seu melhor e-mail"
              required
            />
            <button type="submit">Criar conta grátis</button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-brand">
            <div class="brand-logo">
              <svg class="logo-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>TaskMaster</span>
            </div>
            <p>Ajudando pessoas e times a alcançarem seu potencial máximo através da organização.</p>
          </div>
          <div class="footer-links">
            <div class="footer-column">
              <h4>Produto</h4>
              <a href="#">Recursos</a>
              <a href="#">Integrações</a>
              <a href="#">Roadmap</a>
            </div>
            <div class="footer-column">
              <h4>Empresa</h4>
              <a href="#">Sobre</a>
              <a href="#">Carreiras</a>
              <a href="#">Blog</a>
              <a href="#">Contato</a>
            </div>
            <div class="footer-column">
              <h4>Legal</h4>
              <a href="#">Privacidade</a>
              <a href="#">Termos</a>
              <a href="#">Segurança</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2023 TaskMaster. Todos os direitos reservados.</p>
          <div class="social-links">
            <a href="#" aria-label="Website">🌐</a>
            <a href="#" aria-label="Email">✉️</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-container {
  min-height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: #f6f7f8;
  color: #111418;
  transition: background-color 0.3s, color 0.3s;
}

.app-container.dark {
  background: #101822;
  color: white;
}

/* Navigation */
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: white;
  border-bottom: 1px solid #e5e7eb;
  transition: background-color 0.3s, border-color 0.3s;
}

.dark .navbar {
  background: #111418;
  border-bottom-color: #282f39;
}

.nav-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  width: 32px;
  height: 32px;
  color: #136dec;
}

.nav-logo h2 {
  font-size: 18px;
  font-weight: 700;
}

.nav-links {
  display: flex;
  gap: 36px;
}

.nav-links a {
  text-decoration: none;
  color: #637588;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.3s;
}

.dark .nav-links a {
  color: #9da8b9;
}

.nav-links a:hover {
  color: #136dec;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-icon:hover {
  background: #f3f4f6;
}

.dark .btn-icon:hover {
  background: #282f39;
}

.icon {
  width: 20px;
  height: 20px;
}

.btn-secondary {
  padding: 10px 16px;
  border: none;
  background: transparent;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s;
  color: white;
}

.btn-secondary:hover {
  background: #f3f4f6;
}

.dark .btn-secondary:hover {
  background: #282f39;
}

.btn-primary {
  padding: 10px 16px;
  border: none;
  background: #136dec;
  color: white;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(19, 109, 236, 0.2);
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background: #0d5bc7;
}

/* Hero Section */
.hero {
  padding: 80px 40px;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
}

.hero-content {
  display: flex;
  gap: 48px;
  align-items: center;
}

.hero-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.badge {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 9999px;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
  font-size: 12px;
  font-weight: 500;
  color: #637588;
}

.dark .badge {
  border-color: #3b4554;
  background: #1c2027;
  color: #9da8b9;
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
}

.hero-text h1 {
  font-size: 56px;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.highlight {
  color: #136dec;
}

.subtitle {
  font-size: 18px;
  line-height: 1.6;
  color: #637588;
  max-width: 540px;
}

.dark .subtitle {
  color: #9da8b9;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-hero-primary {
  padding: 14px 24px;
  border: none;
  background: #136dec;
  color: white;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(19, 109, 236, 0.3);
  transition: all 0.3s;
}

.btn-hero-primary:hover {
  background: #0d5bc7;
  transform: scale(1.05);
}

.btn-hero-secondary {
  padding: 14px 24px;
  border: 1px solid #e5e7eb;
  background: white;
  color: #111418;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s;
}

.dark .btn-hero-secondary {
  background: #282f39;
  border-color: transparent;
  color: white;
}

.btn-hero-secondary:hover {
  background: #f9fafb;
}

.dark .btn-hero-secondary:hover {
  background: #3b4554;
}

.social-proof {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  color: #637588;
}

.dark .social-proof {
  color: #9da8b9;
}

.avatars {
  display: flex;
  align-items: center;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid white;
  background: #d1d5db;
  margin-left: -8px;
}

.dark .avatar {
  border-color: #111418;
}

.avatar:first-child {
  margin-left: 0;
}

.avatar-1 {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.avatar-2 {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.avatar-3 {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.avatar-count {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid white;
  background: #282f39;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  margin-left: -8px;
}

.dark .avatar-count {
  border-color: #111418;
}

/* Hero Visual */
.hero-visual {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;
}

.gradient-blob {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2));
  border-radius: 50%;
  filter: blur(60px);
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}

.app-mockup {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 500px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  border: 1px solid #e5e7eb;
}

.dark .app-mockup {
  background: #1c2027;
  border-color: #282f39;
}

.mockup-header {
  padding: 12px 16px;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
}

.dark .mockup-header {
  background: #1a1d24;
  border-bottom-color: #282f39;
}

.traffic-lights {
  display: flex;
  gap: 6px;
}

.light {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.light.red { background: #ef4444; }
.light.yellow { background: #fbbf24; }
.light.green { background: #10b981; }

.mockup-content {
  padding: 24px;
  background: white;
}

.dark .mockup-content {
  background: #111418;
}

.mockup-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.mockup-title h3 {
  font-size: 18px;
  font-weight: 700;
}

.status-badge {
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  background: rgba(19, 109, 236, 0.2);
  color: #136dec;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
}

.task-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: #f6f7f8;
}

.dark .task-item {
  border-color: #282f39;
  background: #1c2027;
}

.task-icon {
  width: 20px;
  height: 20px;
  color: #136dec;
  flex-shrink: 0;
}

.task-icon.checked {
  color: #10b981;
}

.task-text {
  flex: 1;
  font-size: 14px;
  font-weight: 500;
}

.task-item.completed .task-text {
  text-decoration: line-through;
  opacity: 0.5;
}

.avatar-small {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
}

.avatar-small.blue { background: #3b82f6; }
.avatar-small.purple { background: #a855f7; }
.avatar-small.orange { background: #f97316; }

.chart {
  display: flex;
  gap: 8px;
  align-items: flex-end;
  height: 64px;
  opacity: 0.5;
  margin-top: 16px;
}

.bar {
  flex: 1;
  background: #136dec;
  border-radius: 4px 4px 0 0;
}

.bar-1 { height: 40%; opacity: 0.4; }
.bar-2 { height: 70%; opacity: 0.6; }
.bar-3 { height: 50%; opacity: 1; }
.bar-4 { height: 80%; opacity: 0.4; }
.bar-5 { height: 60%; opacity: 0.3; }

/* Features Section */
.features {
  padding: 80px 40px;
  background: white;
}

.dark .features {
  background: #1c2027;
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
}

.features-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 64px;
}

.section-tag {
  display: inline-block;
  color: #136dec;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}

.features-header h2 {
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 16px;
}

.features-header p {
  font-size: 18px;
  color: #637588;
}

.dark .features-header p {
  color: #9da8b9;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.feature-card {
  padding: 24px;
  border-radius: 12px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  transition: all 0.3s;
}

.dark .feature-card {
  background: #111418;
  border-color: #282f39;
}

.feature-card:hover {
  border-color: rgba(19, 109, 236, 0.5);
  box-shadow: 0 10px 25px rgba(19, 109, 236, 0.05);
}

.feature-icon {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  transition: transform 0.3s;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
}

.feature-icon svg {
  width: 28px;
  height: 28px;
}

.feature-icon.blue {
  background: #dbeafe;
  color: #136dec;
}

.dark .feature-icon.blue {
  background: rgba(19, 109, 236, 0.2);
}

.feature-icon.purple {
  background: #f3e8ff;
  color: #9333ea;
}

.dark .feature-icon.purple {
  background: rgba(147, 51, 234, 0.2);
  color: #a855f7;
}

.feature-icon.green {
  background: #d1fae5;
  color: #059669;
}

.dark .feature-icon.green {
  background: rgba(5, 150, 105, 0.2);
  color: #10b981;
}

.feature-icon.orange {
  background: #fed7aa;
  color: #ea580c;
}

.dark .feature-icon.orange {
  background: rgba(234, 88, 12, 0.2);
  color: #fb923c;
}

.feature-icon.red {
  background: #fecaca;
  color: #dc2626;
}

.dark .feature-icon.red {
  background: rgba(220, 38, 38, 0.2);
  color: #ef4444;
}

.feature-icon.teal {
  background: #ccfbf1;
  color: #0d9488;
}

.dark .feature-icon.teal {
  background: rgba(13, 148, 136, 0.2);
  color: #14b8a6;
}

.feature-card h3 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
}

.feature-card p {
  font-size: 15px;
  line-height: 1.6;
  color: #637588;
}

.dark .feature-card p {
  color: #9da8b9;
}

/* CTA Section */
.cta {
  padding: 80px 40px;
  background: #f6f7f8;
}

.dark .cta {
  background: #101822;
}

.cta-container {
  max-width: 960px;
  margin: 0 auto;
  background: #136dec;
  border-radius: 16px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
}

.cta-container::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at top right, rgba(255, 255, 255, 0.1), transparent);
  pointer-events: none;
}

.cta-content {
  padding: 64px 80px;
  text-align: center;
  position: relative;
  z-index: 10;
}

.cta-content h2 {
  font-size: 36px;
  font-weight: 900;
  color: white;
  margin-bottom: 16px;
}

.cta-content > p {
  font-size: 18px;
  color: #bfdbfe;
  margin-bottom: 32px;
}

.cta-form {
  display: flex;
  gap: 12px;
  max-width: 480px;
  margin: 0 auto 16px;
}

.cta-form input {
  flex: 1;
  height: 48px;
  padding: 0 16px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  outline: none;
}

.cta-form input:focus {
  box-shadow: 0 0 0 3px rgba(191, 219, 254, 0.3);
}

.cta-form input::placeholder {
  color: #9ca3af;
}

.cta-form button {
  padding: 0 24px;
  height: 48px;
  border: none;
  background: #101822;
  color: white;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.3s;
}

.cta-form button:hover {
  background: #1c2027;
}

.cta-disclaimer {
  font-size: 12px;
  color: #bfdbfe;
}

/* Footer */
.footer {
  background: white;
  border-top: 1px solid #e5e7eb;
}

.dark .footer {
  background: #111418;
  border-top-color: #282f39;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 40px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  gap: 48px;
  margin-bottom: 48px;
}

.footer-brand {
  max-width: 320px;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.brand-logo .logo-icon {
  width: 24px;
  height: 24px;
  color: #136dec;
}

.brand-logo span {
  font-size: 18px;
  font-weight: 700;
}

.footer-brand p {
  font-size: 14px;
  line-height: 1.6;
  color: #637588;
}

.dark .footer-brand p {
  color: #9da8b9;
}

.footer-links {
  display: flex;
  gap: 80px;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-column h4 {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
}

.footer-column a {
  font-size: 14px;
  color: #637588;
  text-decoration: none;
  transition: color 0.3s;
}

.dark .footer-column a {
  color: #9da8b9;
}

.footer-column a:hover {
  color: #136dec;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
  border-top: 1px solid #e5e7eb;
}

.dark .footer-bottom {
  border-top-color: #282f39;
}

.footer-bottom p {
  font-size: 14px;
  color: #637588;
}

.dark .footer-bottom p {
  color: #9da8b9;
}

.social-links {
  display: flex;
  gap: 16px;
}

.social-links a {
  font-size: 20px;
  color: #637588;
  text-decoration: none;
  transition: color 0.3s;
}

.dark .social-links a {
  color: #9da8b9;
}

.social-links a:hover {
  color: #136dec;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-content {
    flex-direction: column;
  }

  .hero-text h1 {
    font-size: 42px;
  }

  .nav-links {
    display: none;
  }

  .footer-content {
    flex-direction: column;
  }

  .footer-links {
    flex-wrap: wrap;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .nav-wrapper {
    padding: 0 20px;
  }

  .hero {
    padding: 40px 20px;
  }

  .hero-text h1 {
    font-size: 32px;
  }

  .features {
    padding: 60px 20px;
  }

  .features-header h2 {
    font-size: 28px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .cta {
    padding: 60px 20px;
  }

  .cta-content {
    padding: 48px 24px;
  }

  .cta-content h2 {
    font-size: 28px;
  }

  .cta-form {
    flex-direction: column;
  }

  .footer-container {
    padding: 40px 20px;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}

@media (max-width: 640px) {
  .btn-secondary {
    display: none;
  }

  .hero-text h1 {
    font-size: 28px;
  }

  .subtitle {
    font-size: 16px;
  }

  .hero-visual {
    min-height: 400px;
  }
}
</style>
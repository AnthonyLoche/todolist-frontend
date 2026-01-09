<template>
  <div class="left-panel">
    <div class="content">
      <div class="logo">
        <div class="logo-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h1>TaskMaster</h1>
      </div>
      
      <p class="quote">
        "Organizar sua vida não é sobre gerenciamento de tempo, é sobre gerenciamento de atenção."
      </p>
      
      <p class="subtext">Junte-se a milhares de pessoas produtivas hoje.</p>

      <div class="stats">
        <div class="stat-item">
          <div class="stat-number">10k+</div>
          <div class="stat-label">Usuários Ativos</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">50k+</div>
          <div class="stat-label">Tarefas Criadas</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">98%</div>
          <div class="stat-label">Satisfação</div>
        </div>
      </div>

      <div class="features-list">
        <div class="feature-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
          </svg>
          <span>Sincronização em tempo real</span>
        </div>
        <div class="feature-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
          </svg>
          <span>Segurança de dados garantida</span>
        </div>
        <div class="feature-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
          </svg>
          <span>Interface intuitiva e moderna</span>
        </div>
      </div>
    </div>

    <div class="decorative-element"></div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.left-panel {
  flex: 1;
  background: linear-gradient(135deg, #136dec 0%, #0d5bc7 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 60px;
}

.left-panel::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: 
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 50%);
  animation: floating 20s ease-in-out infinite;
}

@keyframes floating {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(30px, -30px) rotate(5deg); }
}

.decorative-element {
  position: absolute;
  bottom: -100px;
  right: -100px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
}

.content {
  position: relative;
  z-index: 1;
  max-width: 520px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 48px;
}

.logo-icon {
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.logo h1 {
  color: white;
  font-size: 32px;
  font-weight: 900;
  letter-spacing: -0.02em;
}

.quote {
  color: white;
  font-size: 28px;
  line-height: 1.4;
  margin-bottom: 24px;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.subtext {
  color: rgba(255, 255, 255, 0.85);
  font-size: 18px;
  margin-bottom: 48px;
  font-weight: 500;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 48px;
  padding: 32px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-item {
  text-align: center;
}

.stat-number {
  color: white;
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 6px;
}

.stat-label {
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  font-weight: 500;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 15px;
  font-weight: 500;
}

.feature-item svg {
  color: rgba(255, 255, 255, 0.9);
  flex-shrink: 0;
}

@media (max-width: 1024px) {
  .left-panel {
    display: none;
  }
}
</style>
<template>
  <div>
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-content">
        <div class="title-row">
          <div class="live-trading-badge">
            <span class="live-dot"></span>
            Live Trading
          </div>
          <h1 class="main-title">$GET</h1>
        </div>
        
        <div class="centered-content">
          <p class="description">
            The future of decentralized finance, powering innovation,<br>
            enabling growth, and creating value for the community.
          </p>
          
          <div class="price-section">
            <div class="price">$0.002546</div>
            <div class="change">+6.47%</div>
          </div>
          
          <div class="action-buttons">
            <a href="https://jup.ag/swap/SOL-GeutGuhcTYRf4rkbZmWDMEgjt5jHyJN4nHko38GJjQhv" target="_blank" class="buy-btn">
              Buy $GET Now
            </a>
            <button class="whitepaper-btn">
              View Whitepaper
            </button>
          </div>
        </div>
      </div>
      
      <div class="hero-image">
        <div class="token-wrapper">
          <img src="/images/token/token.png" alt="GET Token" />
        </div>
      </div>
    </div>

    <!-- Tokenomics Section -->
    <div class="tokenomics-section">
      <h2>$GET Tokenomics</h2>
      <div class="tokenomics-content">
        <ul>
          <li><strong>10 billion GET</strong></li>
          <li>
            <strong>Allocation:</strong>
            <ul>
              <li><strong>70% Governance (7B GET)</strong></li>
              <li><strong>20% Team (2B GET)</strong></li>
              <li><strong>10% Liquidity (1B GET)</strong></li>
            </ul>
          </li>
          <li><a href="https://solscan.io/token/GeutGuhcTYRf4rkbZmWDMEgjt5jHyJN4nHko38GJjQhv" target="_blank">See $GET on SolScan</a></li>
        </ul>
      </div>
    </div>

    <!-- Token Lock Section -->
    <div class="token-lock-section">
      <div class="content">
        <h2>Token Lock & Release Schedule</h2>
        <ul>
          <li><strong>Team Share Lock</strong>: Locked in <a href="https://lock.jup.ag" target="_blank">https://lock.jup.ag</a> for 5 years.</li>
          <li><strong>Governance Lock:</strong> Locked for 10 years, with 700M GET released annually for governance participants.</li>
        </ul>
      </div>
      <div class="image">
        <img src="/images/token/tokenomicsdesktop.png" alt="Token Lock & Release Schedule" />
      </div>
    </div>

    <!-- Buy Section -->
    <div class="buy-section">
      <h2>Join the Movement</h2>
      <h3>Buy $GET Today</h3>
      <p>Empower education. Power the Gama ecosystem.</p>
      <a href="https://jup.ag/swap/SOL-GeutGuhcTYRf4rkbZmWDMEgjt5jHyJN4nHko38GJjQhv" target="_blank" class="jupiter-btn">
        <img src="/images/token/jupiter.png" alt="Jupiter" />
        Buy on Jupiter
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // Jupiter terminal integration can be added later
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  background: #000000;
  color: white;
  padding: 2rem 4rem;
  position: relative;
}

.hero-content {
  flex: 1;
  max-width: 600px;
  padding-right: 2rem;
}

.title-row {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.live-trading-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(0, 212, 170, 0.2);
  border: 1px solid #00d4aa;
  border-radius: 25px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  color: #00d4aa;
  flex-shrink: 0;
}

.live-dot {
  width: 8px;
  height: 8px;
  background: #00d4aa;
  border-radius: 50%;
  margin-right: 8px;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

.main-title {
  font-size: 8rem;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.02em;
  margin: 0;
}

.centered-content {
  text-align: center;
}

.description {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  opacity: 0.9;
  font-weight: 400;
}

.price-section {
  margin-bottom: 3rem;
}

.price {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white;
}

.change {
  font-size: 1.5rem;
  color: #4ade80;
  font-weight: 600;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.buy-btn {
  background: #00d4aa;
  color: white;
  padding: 16px 32px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  border: none;
}

.buy-btn:hover {
  background: #00b894;
  transform: translateY(-1px);
}

.whitepaper-btn {
  background: transparent;
  color: #9ca3af;
  padding: 16px 32px;
  border-radius: 25px;
  border: 1px solid #374151;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.whitepaper-btn:hover {
  background: #374151;
  color: white;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.token-wrapper {
  position: relative;
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
}

.token-wrapper img {
  max-width: 500px;
  height: auto;
  animation: slowTilt 8s ease-in-out infinite;
  filter: drop-shadow(0 0 15px rgba(0, 212, 170, 0.2));
  transition: transform 0.5s ease;
  display: block;
}

.token-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.25) 50%,
    transparent
  );
  animation: shimmer 4s ease-in-out infinite;
  z-index: 1;
  pointer-events: none;
}

.token-wrapper:hover img {
  transform: scale(1.08) rotateY(20deg) rotateX(5deg);
  filter: drop-shadow(0 0 25px rgba(0, 212, 170, 0.4));
}

@keyframes slowTilt {
  0%, 100% {
    transform: rotateX(-8deg) rotateY(0deg);  /* Top tilt */
  }
  25% {
    transform: rotateX(8deg) rotateY(0deg);   /* Bottom tilt */
  }
  50% {
    transform: rotateX(0deg) rotateY(-8deg);  /* Left tilt */
  }
  75% {
    transform: rotateX(0deg) rotateY(8deg);   /* Right tilt */
  }
}

@keyframes shimmer {
  0% {
    left: -100%;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    left: 100%;
    opacity: 0;
  }
}

.tokenomics-section {
  padding: 4rem 2rem;
  background: white;
}

.tokenomics-section h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
}

.tokenomics-content {
  max-width: 800px;
  margin: 0 auto;
}

.token-lock-section {
  display: flex;
  align-items: center;
  padding: 4rem 2rem;
  background: #24292f;
  color: white;
}

.token-lock-section .content {
  flex: 1;
  padding-right: 2rem;
}

.token-lock-section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.token-lock-section .image {
  flex: 1;
}

.token-lock-section img {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 10px;
}

.buy-section {
  text-align: center;
  padding: 4rem 2rem;
  background: #f5f5f5;
}

.buy-section h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.buy-section h3 {
  font-size: 2rem;
  color: #ffb600;
  margin-bottom: 1rem;
}

.jupiter-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #000;
  color: white;
  padding: 1rem 2rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 2rem;
}

.jupiter-btn img {
  width: 30px;
  height: 30px;
}

a {
  color: #00d4aa;
}

ul {
  text-align: left;
}

@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }
  
  .hero-content {
    padding-right: 0;
    margin-bottom: 2rem;
  }
  
  .title-row {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .main-title {
    font-size: 4rem;
  }
  
  .price {
    font-size: 2.5rem;
  }
  
  .action-buttons {
    flex-direction: column;
    align-items: stretch;
  }
  
  .token-lock-section {
    flex-direction: column;
  }
  
  .token-lock-section .content {
    padding-right: 0;
    margin-bottom: 2rem;
  }
}
</style>

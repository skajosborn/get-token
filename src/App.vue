<template>
  <div>
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-container">
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
    </div>

    <!-- About GET Section -->
    <TokenAboutSection />

    <!-- How to Get Token Section -->
    <HowGetTokenSection />

    <!-- Tokenomics Section -->
    <TokenomicsSection />

    <!-- Trust Community Section -->
    <TrustCommunitySection />
  </div>
</template>

<script>
import TokenomicsSection from './components/token/TokenomicsSection.vue';
import TokenAboutSection from './components/token/TokenAboutSection.vue';
import HowGetTokenSection from './components/token/HowGetTokenSection.vue';
import TrustCommunitySection from './components/token/TrustCommunitySection.vue';

export default {
  name: 'App',
  components: {
    TokenomicsSection,
    TokenAboutSection,
    HowGetTokenSection,
    TrustCommunitySection,
  },
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
  justify-content: center;
  min-height: 100vh;
  background: #000000 url('/images/token/background.png') center center/cover no-repeat;
  color: white;
  padding: 2rem 4rem;
  position: relative;
}

.hero-container {
  display: flex;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  width: 100%;
}

.hero-content {
  flex: 1;
  max-width: 600px;
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
  background: rgba(56, 178, 172, 0.6);
  border: 1px solid rgba(56, 178, 172, 0.7);
  border-radius: 25px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  flex-shrink: 0;
  backdrop-filter: blur(10px);
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
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
}

.buy-btn {
  background: #4ade80;
  color: white;
  padding: 16px 32px;
  border-radius: 9999px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s ease;
  border: none;
  display: inline-block;
  min-width: 160px;
  text-align: center;
}

.buy-btn:hover {
  background: #22c55e;
  transform: translateY(-1px);
}

.whitepaper-btn {
  background: #374151;
  color: #ffffff;
  padding: 16px 32px;
  border-radius: 9999px;
  border: none;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 180px;
  text-align: center;
}

.whitepaper-btn:hover {
  background: #4b5563;
  transform: translateY(-1px);
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
  filter: drop-shadow(0 0 15px rgba(0, 212, 170, 0.2)) drop-shadow(0 35px 80px rgba(0, 212, 170, 0.4)) drop-shadow(0 50px 120px rgba(0, 212, 170, 0.2));
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
  filter: drop-shadow(0 0 25px rgba(0, 212, 170, 0.4)) drop-shadow(0 45px 100px rgba(0, 212, 170, 0.6)) drop-shadow(0 65px 150px rgba(0, 212, 170, 0.3));
}

@keyframes slowTilt {
  0%, 100% {
    transform: rotateY(-15deg);  /* Left tilt */
  }
  50% {
    transform: rotateY(15deg);   /* Right tilt */
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





a {
  color: #00d4aa;
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
}
</style>

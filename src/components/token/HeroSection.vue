<template>
  <section class="hero-section">
    <div class="background-wrapper">
      <img src="/images/token/TokenBackground.png" alt="Background" class="background-image" />
    </div>
    <v-container class="hero-container">
      <v-row align="center" justify="center" class="min-h-screen">
        <v-col cols="12" md="6" class="hero-content">
          <div class="title-row">
            <div class="live-trading-badge">
              <span class="live-dot"></span>
              Live Trading
            </div>
            <h1 class="main-title">$GET</h1>
          </div>
          
          <p class="description">
            The future of decentralized finance. powering innovation,
            enabling growth, and creating value for the community.
          </p>
          
          <div class="price-section">
            <div class="price">${{ animatedPrice }}</div>
            <div class="change">+6.47%</div>
          </div>
          
          <div class="action-buttons">
            <button class="buy-btn">Buy $GET Now</button>
            <button class="whitepaper-btn">View Whitepaper</button>
          </div>
                </v-col>
        
        <v-col cols="12" md="6" class="hero-image-desktop">
          <div class="token-wrapper">
            <img src="/images/token/token.png" alt="GET Token" />
          </div>
        </v-col>
        </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const finalPrice = 0.002546;
const animatedPrice = ref(0);

onMounted(() => {
  const duration = 1200;
  const frameRate = 60;
  const totalFrames = Math.round((duration / 1000) * frameRate);
  let frame = 0;

  const animate = () => {
    frame++;
    const progress = Math.min(frame / totalFrames, 1);
    animatedPrice.value = +(finalPrice * progress).toFixed(6);
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  animate();
});
</script>

<style scoped>
.hero-section {
  position: relative;
  color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: #000;
}

.background-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: -80px;
  left: 20%;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 0;
  transform: scale(0.8) translateY(-50px);
  opacity: 0.8;
}

.hero-container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
}

.title-row {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.live-trading-badge {
  background: rgba(5, 182, 231, 0.3);
  border: 1px solid rgba(110, 119, 129, 1);
  border-radius: 25px;
  padding: 8px 16px;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
}

.live-dot {
  width: 8px;
  height: 8px;
  background: #24aa94;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.main-title {
  font-size: 8rem;
  font-weight: 900;
  margin: 0;
  color: white;
}

.description {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #b0b0b0;
  margin-bottom: 2rem;
  max-width: 500px;
}

.price-section {
  margin-bottom: 2rem;
}

.price {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
}

.change {
  font-size: 1.5rem;
  color: #24aa94;
  font-weight: 600;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.buy-btn, .whitepaper-btn {
  padding: 14px 28px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.buy-btn {
  background: linear-gradient(to bottom, #24aa94, #0e443b);
  color: white;
}

.buy-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(36, 170, 148, 0.3);
}

.whitepaper-btn {
  background: rgba(66, 73, 82, 1);
  border: 1.5px solid rgba(110, 119, 129, 1);
  color: white;
}

.whitepaper-btn:hover {
  background: rgba(80, 90, 100, 1);
  transform: translateY(-2px);
}

.hero-image {
  text-align: center;
  margin: 2rem 0;
}

.hero-image-desktop {
  display: flex;
  align-items: center;
  justify-content: center;
}

.token-wrapper {
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-radius: 50%;
}

.token-wrapper img {
  max-width: 500px;
  width: 100%;
  height: auto;
  animation: slowTilt 8s ease-in-out infinite;

  transition: transform 0.5s ease;
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
}

@keyframes slowTilt {
  0%, 100% {
    transform: rotateY(-15deg);
  }
  50% {
    transform: rotateY(15deg);
  }
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

@media (max-width: 960px) {
  .title-row {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .main-title {
    font-size: 5rem;
  }
  
  .hero-content {
    text-align: center;
  }
  
  .action-buttons {
    justify-content: center;
  }
  
  .hero-image-desktop {
    margin-top: 2rem;
  }
  
  .token-wrapper img {
    max-width: 300px;
  }
}

@media (max-width: 600px) {
  .main-title {
    font-size: 3.5rem;
  }
  
  .price {
    font-size: 2rem;
  }
  
  .description {
    font-size: 1rem;
  }
  
  .action-buttons {
    flex-direction: column;
    width: 100%;
  }
  
  .buy-btn, .whitepaper-btn {
    width: 100%;
  }
  
  .token-wrapper img {
    max-width: 250px;
  }
}

/* Mobile-only bottom padding for coin */
@media (max-width: 768px) {
  .hero-image-desktop {
    padding-bottom: 3rem;
  }
}
</style>
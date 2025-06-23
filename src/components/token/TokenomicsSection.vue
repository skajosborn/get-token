<template>
  <div class="tokenomics-section">
    <div class="tokenomics-image-container">
      <img 
        src="/images/token/GET_Tokenomics_Desktop.svg" 
        alt="GET Tokenomics Chart" 
        class="tokenomics-image desktop-svg" 
      />
      <img 
        src="/images/token/GET_Tokenomics_Android_Small.svg" 
        alt="GET Tokenomics Chart" 
        class="tokenomics-image mobile-svg" 
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TokenomicsSection'
}
</script>

<style scoped>
.tokenomics-section {
  padding: 4rem 2rem;
  background: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tokenomics-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  width: 100%;
}

.tokenomics-image {
  max-width: 100%;
  height: auto;
  filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.1));
  border-radius: 10px;
}

.mobile-svg {
  display: none;
}

.desktop-svg {
  display: block;
}

/* Responsive design */
@media (max-width: 768px) {
  .tokenomics-section {
    padding: 2rem 1rem;
    min-height: 80vh;
    display: flex;
    align-items: center;
  }
  
  .tokenomics-image-container {
    max-width: 100%;
    width: 100%;
  }
  
  .tokenomics-image {
    max-width: 90vw;
    width: 90vw;
    height: auto;
  }
  
  .desktop-svg {
    display: none;
  }
  
  .mobile-svg {
    display: block;
  }
}

@media (max-width: 480px) {
  .tokenomics-section {
    padding: 1.5rem 0.75rem;
  }
  
  .tokenomics-image {
    max-width: 100%;
  }
}
</style>
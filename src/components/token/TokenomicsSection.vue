<template>
  <div class="tokenomics-section">
    <div class="tokenomics-image-container">
      <img 
        src="/images/token/GET_Tokenomics_Desktop.svg" 
        alt="GET Tokenomics Chart" 
        class="tokenomics-image" 
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

/* Responsive design */
@media (max-width: 768px) {
  .tokenomics-image {
    max-width: 350px;
  }
}
</style>
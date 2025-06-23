<template>
  <div>
    <section class="how-get-section">
      <div class="container">
        <div class="svg-container">
          <img
            src="/images/token/GetHow.svg"
            alt="How to Get $GET Tokens"
            class="how-get-svg"
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script setup></script>

<style scoped>
.how-get-section {
  background: #fff;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.svg-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.how-get-svg {
  max-width: 100%;
  height: auto;
  filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.1));
}

/* Responsive design */
@media (max-width: 768px) {
  .how-get-section {
    padding: 3rem 1rem;
  }
  
  .how-get-svg {
    max-width: 100%;
  }
}
</style>
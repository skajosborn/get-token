<template>
  <div>
    <section class="about-get-section">
      <div class="container">
        <div class="svg-container">
          <img
            src="/images/token/AboutGet.svg"
            alt="About $GET - What is $GET and What Can You Do With $GET"
            class="about-get-svg"
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script setup></script>

<style scoped>
.about-get-section {
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

.about-get-svg {
  max-width: 100%;
  height: auto;
  filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.1));
}

/* Responsive design */
@media (max-width: 768px) {
  .about-get-section {
    padding: 3rem 1rem;
  }
  
  .about-get-svg {
    max-width: 100%;
  }
}
</style>
<template>
  <div>
    <section class="about-get-section">
      <div class="container">
        <div class="svg-container">
          <img
            src="/images/token/AboutGet.svg"
            alt="About $GET - What is $GET and What Can You Do With $GET"
            class="about-get-svg desktop-svg"
          />
          <img
            src="/images/token/GET_What_is_GET_Android_Small.svg"
            alt="About $GET - What is $GET and What Can You Do With $GET"
            class="about-get-svg mobile-svg"
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

.mobile-svg {
  display: none;
}

.desktop-svg {
  display: block;
}

/* Responsive design */
@media (max-width: 768px) {
  .about-get-section {
    padding: 2rem 1rem;
    min-height: 80vh;
    display: flex;
    align-items: center;
  }
  
  .container {
    max-width: 100%;
    width: 100%;
  }
  
  .about-get-svg {
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
  .about-get-section {
    padding: 1.5rem 0.75rem;
  }
}
</style>
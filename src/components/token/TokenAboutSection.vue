<template>
  <section class="about-get-section">
    <div class="container">
      <div class="svg-container">
        <!-- Desktop: Combined What is GET + What Can You Do -->
        <img
          src="/images/token/AboutGet.svg"
          alt="About $GET - What is $GET and What Can You Do With $GET"
          class="about-get-svg desktop-svg"
        />
        
        <!-- Mobile: Separate What is GET section -->
        <img
          src="/images/token/GET_What_is_GET_Android_Small.svg"
          alt="What is $GET"
          class="about-get-svg mobile-svg"
        />
        
        <!-- Mobile: Separate What Can You Do section -->
        <img
          src="/images/token/WhatCanYouDoAndroidSmall.svg"
          alt="What Can You Do With $GET"
          class="what-can-you-do-svg mobile-svg"
        />
      </div>
    </div>
  </section>
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

.about-get-svg, .what-can-you-do-svg {
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
    min-height: auto;
  }
  
  .svg-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .desktop-svg {
    display: none;
  }
  
  .mobile-svg {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
  }
}

@media (max-width: 480px) {
  .about-get-section {
    padding: 1.5rem 0.75rem;
  }
}
</style>
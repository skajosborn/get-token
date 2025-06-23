<template>
  <section class="trust-community-section">
    <div class="container">
      <h2 class="trust-community-title">Built On Trust, Driven By Community</h2>
      <p class="trust-community-subtitle">
        At Gamatrain, our mission is to empower the community through a foundation of:
      </p>
      <div class="trust-community-content">
        <div class="trust-community-left">
          <div class="trust-community-list">
            <div class="trust-community-list-item">
              <div class="trust-community-icon trust-icon">
                🔒
              </div>
              <span class="trust-community-list-text">Trust</span>
            </div>
            <div class="trust-community-list-item">
              <div class="trust-community-icon transparency-icon">
                🔍
              </div>
              <span class="trust-community-list-text">Transparency</span>
            </div>
            <div class="trust-community-list-item">
              <div class="trust-community-icon accountability-icon">
                🤝
              </div>
              <span class="trust-community-list-text">Shared Accountability</span>
            </div>
          </div>
        </div>
        <div class="trust-community-right">
          <img
            src="/images/token/TrustImage.svg"
            alt="Community trust and collaboration illustration"
            class="trust-community-illustration desktop-svg"
          />
          <img
            src="/images/token/GET_Mission_Android_Small.svg"
            alt="Built on Trust - Mobile version"
            class="trust-community-illustration mobile-svg"
            onError="console.log('Mobile SVG failed to load')"
          />
          <!-- Fallback content for mobile -->
          <div class="mobile-fallback">
            <h2>Built on Trust, Driven by Community</h2>
            <p>At GamaTrain, our mission is to empower the community through a foundation of:</p>
            <ul>
              <li>🔒 Trust</li>
              <li>🔍 Transparency</li>  
              <li>🤝 Shared Accountability</li>
            </ul>
            <p>Every decision, reward, and improvement is made with our contributors in mind - because GamaTrain is built with you, not just for you.</p>
          </div>
        </div>
      </div>
      <p class="trust-community-description">
        Every decision, reward, and improvement is made with our contributors in mind - because GamaTrain is built with you, not just for you.
      </p>
    </div>
  </section>
</template>

<script setup>
// Component uses GetMission.svg for crisp, scalable graphics
</script>

<style scoped>
.trust-community-section {
  background: #fff;
  padding: 4rem 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.trust-community-title {
  text-align: center;
  color: #354053;
  font-weight: 700;
  margin-bottom: 2rem;
  font-size: 2rem;
  line-height: 1.2;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.trust-community-subtitle {
  text-align: center;
  color: #24292f;
  margin-bottom: 3rem;
  font-size: 1.4rem;
  line-height: 1.6;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.trust-community-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 4rem;
  min-height: 320px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.trust-community-left {
  flex: 1;
  max-width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.trust-community-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
}

.trust-community-list-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.trust-community-icon {
  background: #23272f;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1.3rem;
}

.trust-community-list-text {
  color: #24292f;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: "Inter", sans-serif;
}

.trust-community-right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 280px;
}

.trust-community-illustration {
  max-width: 200px;
  width: 100%;
  height: auto;
}

.mobile-svg {
  display: none;
}

.desktop-svg {
  display: block;
}

.trust-community-description {
  text-align: center;
  color: #4a5568;
  font-size: 1.4rem;
  line-height: 1.6;
  max-width: 1200px;
  margin: 0 auto;
}

/* Responsive design */
@media (max-width: 768px) {
  .trust-community-section {
    padding: 3rem 1rem;
    min-height: 60vh;
    background: #fff;
  }
  
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
    min-height: 50vh;
  }
  
  .trust-community-title,
  .trust-community-subtitle,
  .trust-community-content,
  .trust-community-description {
    display: none !important;
  }
  
  .trust-community-right {
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .desktop-svg {
    display: none !important;
  }
  
  .mobile-svg {
    display: none !important; /* Hide SVG since it's not loading */
  }
  
  .mobile-fallback {
    display: block !important;
    text-align: center;
    padding: 2rem;
    color: #24292f;
  }
  
  .mobile-fallback h2 {
    color: #354053;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }
  
  .mobile-fallback p {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  
  .mobile-fallback ul {
    list-style: none;
    padding: 0;
    margin: 1.5rem 0;
  }
  
  .mobile-fallback li {
    font-size: 1.2rem;
    margin: 0.8rem 0;
    font-weight: 600;
  }
  
  /* Show fallback if SVG doesn't load or as backup */
  .mobile-svg:not([src*="GET_Mission_Android_Small.svg"]) + .mobile-fallback,
  .mobile-svg[src=""] + .mobile-fallback {
    display: block !important;
  }
}

@media (max-width: 480px) {
  .trust-community-section {
    padding: 1.5rem 0.75rem;
  }
  
  .trust-community-title {
    font-size: 1.5rem;
  }
  
  .trust-community-subtitle {
    font-size: 1rem;
  }
  
  .trust-community-description {
    font-size: 1rem;
    padding: 0 0.5rem;
  }
}
</style>
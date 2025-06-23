<template>
  <div id="app">
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Token About Section (includes What Can You Do content) -->
    <TokenAboutSection />
    
    <!-- How to Earn $GET Section -->
    <EarnGetSection />
    
    <!-- Tokenomics Section -->
    <TokenomicsSection />
    
    <!-- How to Get $GET Section -->
    <HowGetTokenSection />
    
    <!-- Economy/Built On Section -->
    <EconomySection />
    
    <!-- Trust Community Section -->
    <TrustCommunitySection />
  </div>
</template>

<script>
import HeroSection from './components/token/HeroSection.vue';
import TokenAboutSection from './components/token/TokenAboutSection.vue';
import EarnGetSection from './components/token/EarnGetSection.vue';
import TokenomicsSection from './components/token/TokenomicsSection.vue';
import HowGetTokenSection from './components/token/HowGetTokenSection.vue';
import EconomySection from './components/token/EconomySection.vue';
import TrustCommunitySection from './components/token/TrustCommunitySection.vue';

export default {
  name: 'App',
  components: {
    HeroSection,
    TokenAboutSection,
    EarnGetSection,
    TokenomicsSection,
    HowGetTokenSection,
    EconomySection,
    TrustCommunitySection,
  }
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

#app {
  width: 100%;
}
</style>

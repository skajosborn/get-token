<template>
  <div class="tokenomics-section">
    <div class="tokenomics-container">
      <!-- Desktop Version -->
      <div class="desktop-tokenomics">
        <div class="tokenomics-content">
          <div class="tokenomics-header">
            <h2 class="section-title">Tokenomics</h2>
          </div>
          
          <div class="tokenomics-main">
            <div class="chart-section">
              <div class="chart-container">
                <img 
                  :src="GetPieChart" 
                  alt="GET Token Distribution Chart" 
                  class="pie-chart-image"
                  @mousemove="handleChartMouseMove"
                  @mouseleave="handleMouseOut"
                />
                
                <!-- Popup overlays -->
                <div 
                  v-if="activePopup === 'governance'"
                  class="popup-overlay governance-popup"
                  :style="popupPosition"
                >
                  <img :src="GovernancePopup" alt="Governance Details" />
                </div>
                
                <div 
                  v-if="activePopup === 'liquidity'"
                  class="popup-overlay liquidity-popup"
                  :style="popupPosition"
                >
                  <img :src="LiquidityPopup" alt="Liquidity Details" />
                </div>
                
                <div 
                  v-if="activePopup === 'team'"
                  class="popup-overlay team-popup"
                  :style="popupPosition"
                >
                  <img :src="TeamPopup" alt="Team Details" />
                </div>
              </div>
            </div>
            
            <div class="legend-section">
              <div class="legend-items">
                <div class="legend-item governance" @mouseenter="showPopup('governance')" @mouseleave="hidePopup">
                  <div class="legend-color" style="background: #F8BA23;"></div>
                  <div class="legend-info">
                    <div class="title-with-icon">
                      <img :src="GovernanceIcon" alt="Governance" class="legend-icon" />
                      <h3>Governance Allocation</h3>
                    </div>
                    <p class="percentage">70%</p>
                    <p class="description">7B $GET - Locked for 10 years</p>
                  </div>
                </div>
                
                <div class="legend-item liquidity" @mouseenter="showPopup('liquidity')" @mouseleave="hidePopup">
                  <div class="legend-color" style="background: #70EEF1;"></div>
                  <div class="legend-info">
                    <div class="title-with-icon">
                      <img :src="LiquidityIcon" alt="Liquidity" class="legend-icon" />
                      <h3>Liquidity Pool</h3>
                    </div>
                    <p class="percentage">10%</p>
                    <p class="description">6.125B $GET - Market liquidity</p>
                  </div>
                </div>
                
                <div class="legend-item team" @mouseenter="showPopup('team')" @mouseleave="hidePopup">
                  <div class="legend-color" style="background: #17A79D;"></div>
                  <div class="legend-info">
                    <div class="title-with-icon">
                      <img :src="TeamIcon" alt="Team" class="legend-icon" />
                      <h3>Team & Development</h3>
                    </div>
                    <p class="percentage">20%</p>
                    <p class="description">4.375B $GET - Development fund</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Mobile Version with Static Image -->
      <div class="mobile-tokenomics">
        <img 
          src="/images/token/GET_Tokenomics_Android_Small.svg" 
          alt="GET Tokenomics Chart" 
          class="tokenomics-image" 
        />
      </div>
    </div>
  </div>
</template>

<script>
import GetPieChart from './PieChart3.svg'
import GovernanceIcon from './Governance.svg'
import LiquidityIcon from './Liquidity.svg'
import TeamIcon from './Team.svg'
import GovernancePopup from './GovernancePopup.svg'
import LiquidityPopup from './LiquidityPopup.svg'
import TeamPopup from './TeamPopup.svg'

export default {
  name: 'TokenomicsSection',
  data() {
    return {
      GetPieChart,
      GovernanceIcon,
      LiquidityIcon,
      TeamIcon,
      GovernancePopup,
      LiquidityPopup,
      TeamPopup,
      activePopup: null,
      popupPosition: {}
    }
  },
  
  methods: {
    handleChartMouseMove(event) {
      const rect = event.target.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const mouseX = event.clientX - rect.left - centerX;
      const mouseY = event.clientY - rect.top - centerY;
      
      // Calculate angle from center (0 degrees = right, 90 = bottom, etc.)
      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
      if (angle < 0) angle += 360;
      
      // Determine which section based on angle and distance from center
      const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
      const maxRadius = Math.min(centerX, centerY) * 0.8; // Approximate chart radius
      
      if (distance < maxRadius) {
        // Adjust angles based on your pie chart layout
        // Governance: 70% (large section, roughly 0-252 degrees)
        // Liquidity: 10% (small section, roughly 252-288 degrees) 
        // Team: 20% (medium section, roughly 288-360 degrees)
        
        let popupType = null;
        if (angle >= 0 && angle < 252) {
          popupType = 'governance';
        } else if (angle >= 252 && angle < 288) {
          popupType = 'liquidity';
        } else if (angle >= 288 && angle <= 360) {
          popupType = 'team';
        }
        
        if (popupType && popupType !== this.activePopup) {
          this.activePopup = popupType;
        }
        
        // Position popup near the mouse cursor
        if (this.activePopup) {
          this.popupPosition = {
            left: (event.clientX - rect.left + 20) + 'px',
            top: (event.clientY - rect.top - 50) + 'px'
          };
        }
      } else {
        this.activePopup = null;
      }
    },
    
    handleMouseOut() {
      this.activePopup = null;
    },
    
    showPopup(type) {
      this.activePopup = type;
      // Position popup over the corresponding pie chart section
      if (type === 'governance') {
        // Position over yellow section (70% - largest section, left-center area)
        this.popupPosition = {
          left: '120px',
          top: '160px'
        };
      } else if (type === 'liquidity') {
        // Position over light teal section (10% - small section, top-right area)
        this.popupPosition = {
          left: '280px',
          top: '80px'
        };
      } else if (type === 'team') {
        // Position over dark teal section (20% - medium section, bottom-right area)
        this.popupPosition = {
          left: '280px',
          top: '240px'
        };
      }
    },
    
    hidePopup() {
      this.activePopup = null;
    }
  }
}
</script>

<style scoped>
.tokenomics-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.tokenomics-container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.desktop-tokenomics {
  display: block;
}

.mobile-tokenomics {
  display: none;
}

.tokenomics-content {
  text-align: center;
}

.tokenomics-header {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #6c757d;
  font-weight: 400;
}

.tokenomics-main {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
}

.chart-section {
  flex: 0 0 auto;
}

.chart-container {
  position: relative;
  display: inline-block;
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.pie-chart-image {
  width: 400px;
  height: 400px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.pie-chart-image:hover {
  transform: scale(1.02);
}

.legend-section {
  flex: 1;
  min-width: 300px;
}

.legend-items {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
}

.legend-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.legend-color {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  flex-shrink: 0;
}

.title-with-icon {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 0.5rem;
}

.legend-icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
}

.legend-info h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
}

.legend-info .percentage {
  font-size: 1.5rem;
  font-weight: 700;
  color: #17A79D;
  margin: 0 0 0.25rem 0;
}

.legend-info .description {
  font-size: 0.95rem;
  color: #6c757d;
  margin: 0;
}

.popup-overlay {
  position: absolute;
  z-index: 1000;
  pointer-events: none;
  opacity: 1;
  transform: translateY(0);
  transition: all 0.3s ease;
}

.popup-overlay img {
  max-width: 350px;
  height: auto;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2));
  border-radius: 10px;
}

/* Style popup colors to match pie chart sections */
.popup-overlay img[src*="GovernancePopup"] {
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2)) sepia(1) saturate(2) hue-rotate(15deg) brightness(1.1);
}

.popup-overlay img[src*="LiquidityPopup"] {
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2)) sepia(1) saturate(1.5) hue-rotate(140deg) brightness(1.3);
}

.popup-overlay img[src*="TeamPopup"] {
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2)) sepia(1) saturate(1.8) hue-rotate(140deg) brightness(0.9);
}

/* Mobile styles */
@media (max-width: 768px) {
  .desktop-tokenomics {
    display: none;
  }

  .mobile-tokenomics {
    display: block;
    width: 100%;
    padding: 0;
  }

  .tokenomics-image {
    width: 100%;
    height: auto;
    display: block;
    max-width: none;
  }
}

@media (max-width: 1024px) {
  .tokenomics-main {
    flex-direction: column;
    gap: 3rem;
  }
  
  .legend-section {
    width: 100%;
    max-width: 500px;
  }
  
  .pie-chart-image {
    width: 350px;
    height: 350px;
  }
}

@media (max-width: 480px) {
  .tokenomics-section {
    padding: 4rem 0;
  }
  
  .pie-chart-image {
    width: 300px;
    height: 300px;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
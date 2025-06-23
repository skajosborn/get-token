<template>
  <Pie
    :data="chartData"
    :options="chartOptions"
    :style="{ height: height + 'px', width: width + 'px' }"
    ref="chart"
  />
</template>

<script>
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: "PieChart",
  components: {
    Pie,
  },
  props: {
    width: {
      type: Number,
      default: 220,
    },
    height: {
      type: Number,
      default: 220,
    },
    chartData: {
      type: Object,
      required: true,
    },
  },
  emits: ['mouseover', 'mouseout'],
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false, // Disable default tooltip since we're using custom popups
          },
        },
        onHover: (event, elements) => {
          if (elements && elements.length > 0) {
            this.$emit('mouseover', event, elements);
          } else {
            this.$emit('mouseout', event);
          }
        },
        interaction: {
          intersect: true,
          mode: 'point'
        },
        elements: {
          arc: {
            borderWidth: 2,
          }
        }
      },
    };
  },
  mounted() {
    // Additional setup if needed
    this.$nextTick(() => {
      const canvas = this.$refs.chart?.$el?.querySelector('canvas');
      if (canvas) {
        canvas.style.cursor = 'pointer';
      }
    });
  }
};
</script>

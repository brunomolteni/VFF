<template>
  <div class="range" :data-min="min" :data-max="max" :data-step="step">
      <input type="hidden" name="min" :value="min" />
      <input type="hidden" name="max" :value="max" />
  </div>
</template>

<script>
  import "./range.js" // from https://github.com/hitsthings/multi-slider-range

  export default {
    props: {
      min: {
        type: Number,
        default: 1
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 10
      }
    },
    mounted(){
        initRangeSliders();
        this.$el.addEventListener('change', (e) => {
            this.$emit('change', {name: e.target.getAttribute('data-name'),value:e.target.getAttribute('data-value')})
        });
    }
  }
</script>
<style src="./range.css"></style>
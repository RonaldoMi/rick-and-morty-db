<template>
  <article
    class="card"
    :style="`border-radius: ${borderRadius}; box-shadow: ${boxShadow}`"
  >
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-content">
      <div class="card-content-title">
        <slot name="title"></slot>
      </div>

      <div class="card-content-subtitle">
        <slot name="subtitle"></slot>
      </div>

      <div class="card-content-description">
        <slot name="description"></slot>
      </div>
    </div>
  </article>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  rounded: {
    type: String,
    default: 'md',
    validator: (value) => {
      return ['xs', 'sm', 'md', 'lg', 'xl'].includes(value);
    },
  },
  elevation: {
    type: String,
    default: 'md',
    validator: (value) => {
      return ['xs', 'sm', 'md', 'lg', 'xl'].includes(value);
    },
  },
});

const borderRadius = computed(() => {
  const bSize = {
    xs: '5px',
    sm: '10px',
    md: '25px',
    lg: '40px',
    xl: '60px',
  };
  return bSize[props.rounded];
});
const boxShadow = computed(() => {
  const shadowSize = {
    xs: '0 2px 4px rgba(0, 0, 0, 0.2)',
    sm: '0 2px 4px rgba(0, 0, 0, 0.3)',
    md: '0 4px 8px rgba(0, 0, 0, 0.4)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.6)',
    xl: '0 8px 16px rgba(0, 0, 0, 0.8)',
  };
  return shadowSize[props.elevation];
});
</script>
<style scoped>
.card {
  height: 220px;
  max-width: 600px;
  display: flex;
  overflow: hidden;
  background: rgb(60, 62, 68);
  margin: 0.75rem;
}
.card-header :slotted(img) {
  width: 229.2px;
  display: block;
  height: 100%;
  margin: 0px;
  opacity: 1;
  transition: opacity 0.5s ease 0s;
  object-position: center center;
  object-fit: cover;
}
.card-content {
  width: 370.8px;
}
.card-content-title {
  padding-top: 0.5rem;
  padding-left: 0.8rem;
}
.card-content-subtitle {
  padding-left: 0.8rem;
  padding-top: 1rem;
}
.card-content-description {
  padding-left: 0.8rem;
  padding-top: 0.5rem;
}
@media (max-width: 40.625em) {
  .card {
    flex-direction: column;
    height: initial;
    width: 100%;
  }

  .card-header :slotted(img) {
    height: 300px;
    width: 100%;
  }

  .card-content {
    padding-bottom: 0.8rem;
    width: 100%;
  }
}
</style>

<template>
  <div
    class="loading"
    :style="`width: ${size}; height: ${size}; 
             border-top: 4px solid;
             border-top-color: ${color}`"
  />
</template>

<script setup>
defineProps({
  size: {
    type: String,
    default: '24px',
  },
  color: {
    type: String,
    default: '#1867c0',
  },
});
</script>

<style scoped>
.loading {
  transform: translate(-50%, -50%);
  border: 4px solid rgba(214, 217, 219, 0.9);
  border-radius: 50%;
  animation: spin 0.5s linear infinite;
}

@keyframes spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>

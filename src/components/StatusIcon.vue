<template>
  <div class="box">
    <div class="ball" :style="`background-color: ${color}`" />
    <span>{{ label }}</span>
  </div>
</template>
<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'grey',
  },
});
</script>
<style scoped>
.box {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
}
.ball {
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
  margin-right: 0.3rem;
}
</style>

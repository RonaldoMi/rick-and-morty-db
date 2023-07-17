<template>
  <header class="nav">
    <icon-rick-nav color="rgb(51, 51, 51)" />
  </header>
</template>
<script setup>
import IconRickNav from '@/components/icons/IconRickNav.vue';
</script>
<style scoped>
.nav {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px auto;
  width: 100%;
  min-height: 60px;
  padding: 0px 1.5rem;
}
</style>

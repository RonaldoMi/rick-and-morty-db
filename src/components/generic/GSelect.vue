<template>
  <div class="select">
    <label
      class="select-label"
      :class="{ active: modelValue || modelValue === '' }"
      :style="modelValue || modelValue === '' ? `color: ${color}` : ''"
    >
      {{ label }}
    </label>
    <select
      class="select-select"
      :value="modelValue"
      @change="updateSelect($event)"
      @focus="isSelectActive = true"
      @blur="isSelectActive = false"
    >
      <option
        v-for="(option, index) in items"
        :key="index"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
    <icon-expand
      height="1.5rem"
      width="1.5rem"
      class="select-arrow-icon"
      :color="color"
      :class="{ active: isSelectActive }"
    />
    <div v-if="loading" class="select-loading">
      <icon-loading :color="color" />
    </div>
  </div>
</template>

<script setup>
import IconLoading from '@/components/icons/IconLoading.vue';
import IconExpand from '@/components/icons/IconExpand.vue';

import { ref, defineProps, defineEmits } from 'vue';

const emit = defineEmits(['update:modelValue']);

defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  items: {
    type: Array,
    default: () => [],
  },
  label: {
    type: String,
    default: '',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: '#1867c0',
  },
});

const isSelectActive = ref(false);

const updateSelect = (event) => {
  event.target.blur();
  emit('update:modelValue', event.target.value);
};
</script>

<style scoped>
.select {
  display: inline-block;
  position: relative;
  width: 100%;
}

.select-select {
  padding: 20px 16px;
  padding-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  outline: none;
  width: 100%;
  background-color: white;
  z-index: 2;
  color: #888;
  border-radius: 0.5rem;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.select-arrow-icon {
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  pointer-events: none;
  transition: transform 0.2s ease;
}
.select-arrow-icon.active {
  transform: translateY(-50%) rotate(180deg);
}
.select-label {
  position: absolute;
  top: 50%;
  left: 16px;
  font-size: 16px;
  color: #888;
  transform: translateY(-50%);
  pointer-events: none;
  transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
}
.select-label.active {
  top: 8px;
  font-size: 13px;
  font-weight: 400;
}
.select-loading {
  position: absolute;
  top: 50%;
  left: 80%;
}
</style>

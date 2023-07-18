<template>
  <div class="search-input">
    <label
      class="search-input__label"
      :class="{ active: isInputActive || modelValue !== '' }"
      :style="isInputActive || modelValue !== '' ? `color: ${color}` : ''"
    >
      {{ label }}
    </label>
    <input
      class="search-input__input"
      :type="type"
      :value="modelValue"
      @input="handleInput($event.target.value)"
      @focus="isInputActive = true"
      @blur="isInputActive = modelValue !== ''"
    />
    <div v-if="loading" class="search-input__loading">
      <icon-loading :color="color" />
    </div>
    <div
      class="search-input__underline"
      :style="`background-color: ${color}`"
    ></div>
  </div>
</template>

<script setup>
import IconLoading from '@/components/icons/IconLoading.vue';

import { ref, defineProps, defineEmits } from 'vue';

const emit = defineEmits(['update:modelValue']);

defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
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

const isInputActive = ref(false);

const handleInput = (value) => {
  emit('update:modelValue', value);
};
</script>

<style scoped>
.search-input {
  display: inline-block;
  position: relative;
  width: 100%;
}

.search-input__input {
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
}

.search-input__underline {
  position: relative;
  width: 100%;
  height: 3px;
  transform-origin: center;
  transform: scaleX(0);
  transition: transform 0.2s ease-out;
  z-index: 1;
}

.search-input__input:focus + .search-input__underline,
.search-input__input .search-input__underline {
  transform: scaleX(1);
}

.search-input__label {
  position: absolute;
  top: 50%;
  left: 16px;
  font-size: 16px;
  color: #888;
  transform: translateY(-50%);
  pointer-events: none;
  transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
}

.search-input__label.active {
  top: 8px;
  font-size: 13px;
  font-weight: 400;
}

.search-input__loading {
  position: absolute;
  top: 50%;
  left: 90%;
}
</style>

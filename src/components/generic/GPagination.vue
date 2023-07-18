<template>
  <div class="pagination">
    <button
      class="pagination-button pagination-button--prev"
      :disabled="currentPage === 1 || disabled"
      @click="previousPage"
    >
      &lt;
    </button>

    <div
      v-if="showToStartPage()"
      style="display: inline-flex; align-items: flex-end"
    >
      <button class="pagination-item" @click="goToPage(1)">1</button>
      <span>...</span>
    </div>

    <ul class="pagination-list">
      <li
        v-for="page in displayedPages"
        :key="page"
        :class="{ 'pagination-item--active': currentPage === page }"
      >
        <button class="pagination-item" @click="goToPage(page)">
          {{ page }}
        </button>
      </li>
    </ul>

    <div
      v-if="showToEndPage()"
      style="display: inline-flex; align-items: flex-end"
    >
      <span>...</span>

      <button class="pagination-item" @click="goToPage(totalPages)">
        {{ totalPages }}
      </button>
    </div>

    <button
      class="pagination-button pagination-button--next"
      :disabled="currentPage === totalPages || disabled"
      @click="nextPage"
    >
      &gt;
    </button>
  </div>
</template>

<script setup>
import { computed, defineEmits } from 'vue';

const props = defineProps({
  currentPage: {
    type: Number,
    default: 1,
    validator: (value) => {
      return value > 0;
    },
  },
  totalPages: {
    type: Number,
    default: 1,
    validator: (value) => {
      return value > 0;
    },
  },
  displayLimit: {
    type: Number,
    default: 5,
    validator: (value) => {
      return value > 0;
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:currentPage']);

const previousPage = () => {
  if (props.currentPage > 1 && !props.disabled) {
    emit('update:currentPage', props.currentPage - 1);
  }
};

const nextPage = () => {
  if (props.currentPage < props.totalPages && !props.disabled) {
    emit('update:currentPage', props.currentPage + 1);
  }
};

const goToPage = (page) => {
  if (page != props.currentPage && !props.disabled) {
    emit('update:currentPage', page);
  }
};

const showToStartPage = () => {
  return props.currentPage - Math.floor(props.displayLimit / 2) > 1;
};

const showToEndPage = () => {
  return (
    props.currentPage + Math.floor(props.displayLimit / 2) < props.totalPages
  );
};

const displayedPages = computed(() => {
  const total = props.totalPages;
  const current = props.currentPage;
  const limit = props.displayLimit;

  const middle = Math.floor(limit / 2);
  let start = current - middle;
  let end = current + middle;

  if (start <= 0) {
    start = 1;
    end = Math.min(limit, total);
  }

  if (end > total) {
    end = total;
    start = Math.max(total - limit + 1, 1);
  }

  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
});
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 1rem;
  border-radius: 0.8rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.pagination-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: #f0f0f0;
  color: #333;
  font-size: 16px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.pagination-button:hover {
  background-color: #e0e0e0;
}

.pagination-button--prev {
  margin-right: 8px;
}

.pagination-button--next {
  margin-left: 8px;
}

.pagination-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.pagination-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 16px;
}

.pagination-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  color: #333;
  font-size: 16px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.pagination-item:hover {
  background-color: #e0e0e0;
}

.pagination-item--active {
  color: #fff;
  background-color: #e0e0e0;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.pagination-item--active:hover {
  background-color: #e0e0e0;
}

/* Classes responsivas */

@media (max-width: 480px) {
  .pagination-button,
  .pagination-item {
    width: 24px;
    height: 24px;
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .pagination-button,
  .pagination-item {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }
}
</style>

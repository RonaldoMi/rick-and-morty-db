<template>
  <div style="height: 100vh; width: 100vw">
    <g-nav />

    <section class="hero-section">
      <icon-rick-and-morty color="rgb(245, 245, 245)" />
      <h1 class="hero-section-title">The Rick and Morty API</h1>
    </section>

    <section class="custom-section-menu">
      <div class="custom-section-menu-search">
        <icon-search
          style="margin-right: 8px"
          height="35px"
          width="35px"
          color="white"
        />
        <g-input
          v-model="charSearch"
          label="Nome do Personagem"
          :loading="loadingChar"
          @input="handleSearchInput"
        />
      </div>
    </section>

    <section class="content-section">
      <div class="content-section-card">
        <g-card
          v-for="char in charList"
          :key="char.id"
          rounded="sm"
          elevation="sm"
        >
          <template #header>
            <img :src="char.image" :alt="char.name" />
          </template>

          <template #title>
            <div>
              <a href="#">
                <h2 class="white-text font-bold-2">{{ char.name }}</h2>
              </a>
              <status-icon
                :label="`${char.status} - ${char.species}`"
                :color="statusList[char.status]"
              />
            </div>
          </template>

          <template #subtitle>
            <div>
              <p class="gray-text font-medium">Last known location:</p>
              <a href="#">
                <p class="white-text font-large">{{ char.location.name }}</p>
              </a>
            </div>
          </template>

          <template #description>
            <div>
              <p class="gray-text font-medium">First seen in:</p>
              <a href="#">
                <p class="white-text font-large">
                  {{ char.firstSeen ? char.firstSeen : 'Aguarde...' }}
                </p>
              </a>
            </div>
          </template>
        </g-card>
      </div>
      <div style="padding-top: 20px">
        <g-pagination
          :current-page="currentPage"
          :total-pages="totalPages"
          @update:current-page="goToPage($event)"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import GCard from '@/components/generic/GCard.vue';
import GNav from '@/components/generic/GNav.vue';
import GPagination from '@/components/generic/GPagination.vue';
import GInput from '@/components/generic/GInput.vue';

import IconRickAndMorty from '@/components/icons/IconRickAndMorty.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import StatusIcon from '@/components/StatusIcon.vue';

import { useCharacterStore } from '@/stores/character';
import { useEpisodeStore } from '@/stores/episode';
import { onMounted, computed, ref, watch } from 'vue';
import { debounce } from 'lodash';
import apiState from '../api/apiStates';

onMounted(() => {
  characterStore.FETCH_CHARACTER();
});

const characterStore = useCharacterStore();
const episodeStore = useEpisodeStore();

const statusList = ref({
  Alive: 'rgb(85, 204, 68)',
  Unknown: 'rgb(158, 158, 158)',
  Dead: 'rgb(214, 61, 46)',
});
const currentPage = ref(1);
const charSearch = ref('');

const charList = computed(() => characterStore.charList);
const epList = computed(() => episodeStore.epList);
const loadingChar = computed(
  () => characterStore.storeState === apiState.LOADING
);
const totalPages = computed(() => characterStore.charInfo.pages);
const charParams = computed(() => ({
  name: charSearch.value,
  page: currentPage.value,
}));

watch(charList, () => {
  try {
    const episodeIds = charList.value.map((char) => {
      if (char.episode.length > 0) {
        return char.episode[0].split('/').pop();
      }
    });
    episodeStore.FETCH_MULT_EPISODE([...new Set(episodeIds)]);
  } catch (error) {
    console.warn('Watch:charList -> ', error);
  }
});
watch(epList, () => {
  try {
    if (Array.isArray(epList.value)) {
      epList.value.forEach((ep) => {
        const chars = charList.value.filter(
          (char) => ep.url === char.episode[0]
        );

        chars.forEach((fChar) => {
          fChar['firstSeen'] = ep.name;
        });
      });
    }
  } catch (error) {
    console.warn('Watch:epList -> ', error);
  }
});

const goToPage = (page) => {
  currentPage.value = page;
  characterStore.FETCH_CHARACTER(charParams.value);
};

const handleSearchInput = () => {
  delayedSearch();
};

const delayedSearch = debounce(() => {
  currentPage.value = 1;
  characterStore.FETCH_CHARACTER(charParams.value);
}, 700);
</script>
<style scoped>
.hero-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(50vh - 60px px);
  min-height: 395.5px;
  text-align: center;
  position: relative;
  -webkit-box-pack: center;
  -webkit-box-align: center;
}
.hero-section-title {
  position: absolute;
  font-size: 5.625rem;
  font-weight: 900;
  color: rgb(32, 35, 41);
}
.content-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4.5rem 0px;
  background: rgb(39, 43, 51);
  min-height: calc(50vh - 60px);
  -webkit-box-align: center;
  -webkit-box-pack: center;
}
.content-section-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1920px;
  -webkit-box-pack: center;
  -webkit-box-align: center;
}
.custom-section-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  background: rgba(39, 43, 51, 1);
  -webkit-box-align: center;
  -webkit-box-pack: center;
}
.custom-section-menu-search {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 55.625em) {
  .hero-section-title {
    font-size: 3.75rem;
  }
}
@media (max-width: 40.625em) {
  .hero-section-title {
    font-size: 3.125rem;
  }
}
</style>

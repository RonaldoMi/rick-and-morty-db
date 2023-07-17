import { defineStore } from 'pinia';
import { getEpisode } from '../api/getMultEpisode';
import apiState from '../api/apiStates';

export const FETCH_MULT_EPISODE = 'FETCH_MULT_EPISODE';

export const useEpisodeStore = defineStore('episode', {
  state: () => ({
    storeState: apiState.INIT,
    storeMsgError: '',
    epList: [],
    epInfo: {},
  }),

  actions: {
    async [FETCH_MULT_EPISODE](ids = []) {
      this.storeState = apiState.LOADING;
      const response = await getEpisode(ids);

      if (response.status == 200) {
        const data = response.data;
        this.epList = data;
      } else {
        this.storeState = apiState.ERROR;
        this.storeMsgError = 'Não foi possível realizar a busca dos episódios.';
      }
    },
  },
});

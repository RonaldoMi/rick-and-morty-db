import { defineStore } from 'pinia';
import { getCharacter } from '../api/getCharacter';
import apiState from '../api/apiStates';

export const FETCH_CHARACTER = 'FETCH_CHARACTER';

export const useCharacterStore = defineStore('character', {
  state: () => ({
    storeState: apiState.INIT,
    storeMsgError: '',
    charList: [],
    charInfo: {},
  }),

  actions: {
    async [FETCH_CHARACTER](params = {}) {
      this.storeState = apiState.LOADING;

      const response = await getCharacter(params);
      if (response.status == 200) {
        const data = response.data;
        this.charList = data.results;
        this.charInfo = data.info;
        this.storeState = apiState.LOADED;
      } else if (response.status == 404) {
        this.charList = [];
        this.charInfo = {};
        this.storeState = apiState.LOADED;
      } else {
        this.storeState = apiState.ERROR;
        this.storeMsgError =
          'Não foi possível realizar a busca dos personagens.';
      }
    },
  },
});

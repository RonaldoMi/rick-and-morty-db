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
    async [FETCH_CHARACTER](page = 1, name = undefined, status = undefined) {
      this.storeState = apiState.LOADING;
      const params = {
        page,
        name,
        status,
      };
      const response = await getCharacter(params);

      if (response.status == 200) {
        const data = response.data;
        this.charList = data.results;
        this.charInfo = data.info;
      } else {
        this.storeState = apiState.ERROR;
        this.storeMsgError =
          'Não foi possível realizar a busca dos personagens.';
      }
    },
  },
});

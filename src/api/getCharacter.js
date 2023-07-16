import axios from 'axios';

export const getCharacter = async (params) => {
  const url = `https://rickandmortyapi.com/api/character`;

  const response = axios.get(url, {
    headers: {},
    params: params,
  });

  return response;
};

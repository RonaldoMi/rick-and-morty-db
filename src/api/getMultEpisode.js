import axios from 'axios';

export const getEpisode = async (ids) => {
  const url = `https://rickandmortyapi.com/api/episode/${ids}`;
  const response = axios
    .get(url, {
      headers: {},
      params: {},
    })
    .catch((error) => {
      return error.response;
    });
  return response;
};

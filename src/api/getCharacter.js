import axios from 'axios';

export const getCharacter = async (params) => {
  // params = {page, name, status}
  const url = `https://rickandmortyapi.com/api/character`;

  const response = await axios
    .get(url, {
      headers: {},
      params: params,
    })
    .catch((error) => {
      return error.response;
    });
  return response;
};

import axios from 'axios';

export const getUser = async (userId) => {
  const response = await axios.get('https://reqres.in/api/users/2');
  return response.data.data;
};

export const getWorkOuts = async () => {
  const response = await axios.get('https://wger.de/api/v2/exercisecategory/');
  return response.data.results;
};

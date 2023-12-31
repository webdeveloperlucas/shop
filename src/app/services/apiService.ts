import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1',

});

export const getData = async (endpoint:string, params = {}) => {
  try {
    const response = await apiService.get(endpoint, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};
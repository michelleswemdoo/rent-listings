import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-rapidapi-host': 'realty-in-us.p.rapidapi.com',
    'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
  },
});

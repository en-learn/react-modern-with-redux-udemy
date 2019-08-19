import axios from 'axios';
import settings from '../config.local';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${settings.unsplashApiKey}`,
  },
});

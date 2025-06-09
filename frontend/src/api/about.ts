import axios from 'axios';

export interface AboutUs {
  id: number;
  title: string;
  content: string;
  image?: string;
}

export const fetchAboutUs = async (): Promise<AboutUs> => {
  const response = await axios.get('/api/about/');
  return response.data;
};

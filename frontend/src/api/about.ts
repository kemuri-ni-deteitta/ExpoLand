import axios from 'axios';

export interface AboutUs {
  id: number;
  title: string;
  content: string;
  image?: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
  is_active: boolean;
}

export interface Testimonial {
  id: number;
  company_name: string;
  letter_image: string;
  text_content: string;
  is_active: boolean;
}

export interface Certificate {
  id: number;
  title: string;
  certificate_image: string;
  is_active: boolean;
}

export const fetchAboutUs = async (): Promise<AboutUs> => {
  const response = await axios.get('/api/about/');
  return response.data;
};

export const fetchPartners = async (): Promise<Partner[]> => {
  const response = await axios.get('/api/about/partners/');
  return response.data;
};

export const fetchTestimonials = async (): Promise<Testimonial[]> => {
  const response = await axios.get('/api/about/testimonials/');
  return response.data;
};

export const fetchCertificates = async (): Promise<Certificate[]> => {
  const response = await axios.get('/api/about/certificates/');
  return response.data;
};

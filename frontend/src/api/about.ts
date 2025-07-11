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

export interface Contact {
  id: number;
  title: string;
  subtitle: string;
  phone: string;
  email: string;
  address: string;
  working_hours_weekdays: string;
  working_hours_saturday: string;
  working_hours_sunday: string;
  map_latitude: number;
  map_longitude: number;
  map_zoom: number;
  description: string;
  whatsapp_link?: string;
  telegram_link?: string;
  vk_link?: string;
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

export const fetchContact = async (): Promise<Contact> => {
  const response = await axios.get('/api/about/contacts/');
  return response.data;
};

export interface RequestFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service_type: string;
  subject: string;
  message: string;
  budget: string;
  deadline: string;
}

export const submitRequest = async (requestData: RequestFormData): Promise<any> => {
  const response = await axios.post('/api/about/requests/', requestData);
  return response.data;
};

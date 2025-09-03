export interface Event {
  location: string | string[];
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
    image: string; 
}

export interface Translation {
  [key: string]: string | Translation;
}
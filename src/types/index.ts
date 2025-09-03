export interface Event {
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
}

export interface Translation {
  [key: string]: string | Translation;
}
export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  url: string;
}

export interface Profile {
  name: string;
  location: string;
  description: string;
  about: string;
  email: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

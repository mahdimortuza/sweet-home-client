export interface TProperty {
  _id: string;
  owner: Owner;
  title: string;
  image: string;
  optImage1: string;
  optImage2: string;
  optImage3: string;
  video: string;
  bath: number;
  toilet: number;
  price: number;
  kitchen: string;
  category: string;
  ratings: number;
  description: string;
  status: string;
  location: string;
  offer: any;
}

export interface Owner {
  name: string;
  image: string;
  status: string;
}

export interface Product {
  _id: string;
  name: string;
  company: string;
  price: number;
  rating?: number;
  featured: boolean;
}

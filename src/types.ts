export interface Product {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
  review: string;
  downloads: number;
  rating: number;
  amazonLink: string;
  pros: string[];
  cons: string[];
  userRatings?: number[];
}
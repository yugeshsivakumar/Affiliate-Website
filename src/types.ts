export interface Product {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
  review: string;
  downloads: string;
  rating: number;
  amazonLink: string;
  pros: string[];
  cons: string[];
  userRatings?: number[];
  platformLinks?: {
    windows?: string;
    mac?: string;
    linux?: string;
    android?: string;
    ios?: string;
  };
}
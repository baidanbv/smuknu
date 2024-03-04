export interface Product {
  _id: string;
  title: string;
  image: string;
  price: number;
  discountInPercent: number;
  recommended: boolean;
  created: Date;

  amount?: number;
}

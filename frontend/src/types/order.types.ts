import type { Product } from "./product.types.ts";

export type Order = {
  id: number;
  title: string;
  date: string;
  description: string;
  products: Product[];
};
import type { Guarantee, Price } from "./common.types.ts";

export type Product = {
  id: number;
  serialNumber: number;
  isNew: number;
  title: string;
  type: string;
  specification: string;
  guarantee: Guarantee;
  price: Price[];
  order: number;
  date: string;
};
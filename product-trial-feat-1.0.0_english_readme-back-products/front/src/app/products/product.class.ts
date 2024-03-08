export class Product {
  id?:number;
  code?:string;
  name?:string;
  description?:string;
  price?:number;
  quantity?:number;
  inventoryStatus?:string;
  category?:string;
  image?:string;
  rating?:number;
}

export interface ProductPayload {
  products: Product[];
  total: number;
}
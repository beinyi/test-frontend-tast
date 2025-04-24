export interface Product {
  id: number;
  name: string;
}

export interface Item extends Product {
  select: boolean;
}

export interface Product{
    id:string,
    name:string,
    category:string,
    price:number,
    checked:boolean,
    deleted:boolean
}

export interface ProductProps{
    product: Product;
}

export interface ListProps {
  listProducts: Product[];
  showDeleteButtons: boolean;
  onDeleteProduct: (id: string | number) => void;
};
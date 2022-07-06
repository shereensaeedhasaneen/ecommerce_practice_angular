export interface IProduct {
  id:number,
  image:string,
  title:string,
  description:string,
  price:number,
  category:string,
  rating:Rating
}
export interface Rating {
  rate:number,count:number
}

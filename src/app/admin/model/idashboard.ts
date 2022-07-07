export interface IDashboard {
    id:number,
    userId:number,
    date:string,
    products:IProductQuantity[]
}

export interface IProductQuantity {
  productId:number,
  quantity:number
}

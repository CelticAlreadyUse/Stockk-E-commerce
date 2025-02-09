export type warehouse ={
    data:{
        id: number;
        name: string;
        description: string;
        category_list?: CategoriesWarehouse[];        picture_url_list: WarehouseImages[]; 
        created_at: string; 
        zip: string;
        phone: string;
        email: string;
    }
}
export type CategoriesWarehouse = {
    id: number;
    name: string;
  }
  
export type  WarehouseImages={
    id: number;
    warehouse_id: number;
    image_url: string;
  }
  
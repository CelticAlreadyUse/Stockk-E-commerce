import { init, Models } from "@rematch/core";
import { RematchDispatch, RematchRootState } from "@rematch/core";
import { cart } from "./models/cart";
import { products } from "./models/products";

export interface RootModel extends Models<RootModel> {
  cart: typeof cart;
  products: typeof products;
}

export const models: RootModel = { cart, products };

export const store = init({
  models,
});

export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
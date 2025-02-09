import { createModel } from "@rematch/core";
import { RootModel } from "../store";

type Product = {
  id: number;
  name: string;
  price: number;
};

export const products = createModel<RootModel>()({
  state: [
    { id: 1, name: "Laptop", price: 15000000 },
    { id: 2, name: "Mouse", price: 500000 },
    { id: 3, name: "Keyboard", price: 1000000 },
  ] as Product[],
  reducers: {},
});

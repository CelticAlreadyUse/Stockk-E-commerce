import { createModel } from "@rematch/core";
import { RootModel } from "../store";

type CartItem = {
  id:number
  itemTitle:string
  itemImage:string
  itemPrice:number
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

export const cart = createModel<RootModel>()({
  state: {
    items: JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[],
  } as CartState,
  reducers: {
    addToCart(state, item: CartItem) {
      const existingItem = state.items.find((i) => i.id === item.id);
      let newItems;
      if (existingItem) {
        newItems = state.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        newItems = [...state.items, { ...item, quantity: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(newItems));
      return { ...state, items: newItems };
    },
    increaseQuantity(state, id: number) {
      const newItems = state.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(newItems));
      return { ...state, items: newItems };
    },    decreaseQuantity(state, id: number) {
      const newItems = state.items
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // Hapus item jika quantity = 0
      localStorage.setItem("cart", JSON.stringify(newItems));
      return { ...state, items: newItems };
    },
    removeFromCart(state, id: number) {
      const newItems = state.items.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(newItems));
      return { ...state, items: newItems };
    },
    clearCart(state) {
      localStorage.removeItem("cart");
      return { ...state, items: [] };
    },
    
  },
});

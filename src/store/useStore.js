import { create } from "zustand";

export const useUIStore = create((set) => ({
  isNavActive: false,

  setIsNavsetActive: () =>
    set((state) => ({
      isNavActive: !state.isNavActive,
    })),
}));

export const useTabStore = create((set) => ({
  activeTab: "main",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));

export const useCartStore = create((set) => ({
  cartItems: [],
  isCartModalOpen: false,

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cartItems.find((item) => item.id === product.id);
      const addedQuantity = product.quantity || 1;
      
      if (existingItem) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + addedQuantity }
              : item
          ),
        };
      }
      return { cartItems: [...state.cartItems, { ...product, quantity: addedQuantity }] };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      ),
    })),

  clearCart: () => set({ cartItems: [] }),

  toggleCartModal: () => set((state) => ({ isCartModalOpen: !state.isCartModalOpen })),
  
  openCartModal: () => set({ isCartModalOpen: true }),
  closeCartModal: () => set({ isCartModalOpen: false }),
}));

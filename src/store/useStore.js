import { create } from "zustand";

export const useUIStore = create((set) => ({
  isNavActive: false,

  setIsNavsetActive: () =>
    set((state) => ({
      isNavActive: !state.isNavActive,
    })),
}));

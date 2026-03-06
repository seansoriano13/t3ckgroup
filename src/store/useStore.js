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

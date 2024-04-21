import { TProperty } from "@/constants/property";
import { create } from "zustand";

export const useComparisonStore = create((set) => ({
  store: [],
  addToStore: (property: TProperty) =>
    set((state) => ({ store: [...state.store, property] })),
  removeFromStore: (propertyId) =>
    set((state) => ({
      store: state.store.filter(
        (property: TProperty) => property._id !== propertyId
      ),
    })),
  clearStore: set({ store: [] }),
}));

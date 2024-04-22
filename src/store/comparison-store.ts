import { TProperty } from "@/constants/property";
import { create } from "zustand";

interface IProductState {
  store: TProperty[];
  addToStore: (property: TProperty) => void;
  removeFromStore: (propertyId: string) => void;
  clearStore: () => void;
}

export const useComparisonStore = create<IProductState>((set) => ({
  store: [],
  addToStore: (property: TProperty) =>
    set((state) => ({ store: [...state.store, property] })),
  removeFromStore: (propertyId) =>
    set((state) => ({
      store: state.store.filter(
        (property: TProperty) => property._id !== propertyId
      ),
    })),
  clearStore: () => set({ store: [] }),
}));

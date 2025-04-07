import { STORAGE_KEYS } from "@/constants";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface FavoritesState {
  favorites: string[];
  addFavorite: (city: string) => void;
  removeFavorite: (city: string) => void;
  isFavorite: (city: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (city) => {
        if (!get().favorites.includes(city)) {
          set((state) => ({ favorites: [...state.favorites, city] }));
        }
      },

      removeFavorite: (city) => {
        set((state) => ({
          favorites: state.favorites.filter((fav) => fav !== city),
        }));
      },

      isFavorite: (city) => {
        return get().favorites.includes(city);
      },
    }),
    {
      name: STORAGE_KEYS.FAVORITES_KEYS,
    }
  )
);

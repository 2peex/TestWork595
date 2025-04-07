import { STORAGE_KEYS } from "@/constants";
import { WeatherState } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useWeatherStore = create<WeatherState>()(
  persist(
    (set) => ({
      weather: null,
      city: "",
      loading: false,
      error: null,
      setWeather: (data) => set({ weather: data }),
      setCity: (city) => set({ city }),
      setLoading: (loading) => set({ loading }),
      setError: (error) => set({ error }),
    }),
    {
      name: STORAGE_KEYS.WEATHER,
    }
  )
);

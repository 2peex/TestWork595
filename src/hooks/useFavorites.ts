import { getWeather } from "@/services/weatherApi";
import { FavoritesState, useFavoritesStore } from "@/store/favoritesStore";
import { useEffect, useState } from "react";

export function useFavorites() {
  const { favorites } = useFavoritesStore();
  const [favoritesWeather, setFavoritesWeather] = useState<FavoritesState[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFavoritesWeather = async () => {
      setLoading(true);
      try {
        const weatherData = await Promise.all(
          favorites.map((city) => getWeather(city))
        );
        setFavoritesWeather(
          weatherData.filter(Boolean) as unknown as FavoritesState[]
        );
      } finally {
        setLoading(false);
      }
    };

    if (favorites.length > 0) {
      fetchFavoritesWeather();
    } else {
      setFavoritesWeather([]);
    }
  }, [favorites]);

  return { favorites: favoritesWeather, loading };
}

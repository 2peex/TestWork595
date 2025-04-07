"use client";

import { useWeatherStore } from "@/store/weatherStore";
import { useRouter } from "next/navigation";
import { SectionTitle } from "@/components/styled/Layout";
import { Grid } from "@/components/styled/Layout";
import WeatherCard from "@/components/styled/FavoritsCard";
import { useFavoritesStore } from "@/store/favoritesStore";
import Image from "next/image";
import {
  EmptyState,
  CardWrapper,
  RemoveButton,
} from "@/components/styled/Favorites";

export default function FavoritesPage() {
  const favorites = useFavoritesStore((state) => state.favorites);
  const setCity = useWeatherStore((state) => state.setCity);
  const removeFromFavorites = useFavoritesStore(
    (state) => state.removeFavorite
  );
  const router = useRouter();

  const handleCityClick = (city: string) => {
    setCity(city);
    router.push("/");
  };

  return (
    <div>
      <SectionTitle>Избранные города</SectionTitle>

      {favorites.length === 0 ? (
        <EmptyState>
          <p>У вас пока нет избранных городов</p>
        </EmptyState>
      ) : (
        <Grid $columns={3}>
          {favorites.map((city) => (
            <CardWrapper key={city}>
              <WeatherCard city={city} onClick={() => handleCityClick(city)} />
              <RemoveButton
                $variant="ghost"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFromFavorites(city);
                }}
              >
                <Image src="/del.png" alt="delete" width={30} height={30} />
              </RemoveButton>
            </CardWrapper>
          ))}
        </Grid>
      )}
    </div>
  );
}

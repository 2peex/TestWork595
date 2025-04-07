import { useEffect } from "react";
import { useWeatherStore } from "@/store/weatherStore";
import { getWeather } from "@/services/weatherApi";
import { TEXT_CONSTANTS } from "@/constants";

export function useWeather(cityName: string) {
  const { weather, setWeather, setCity, loading, setLoading, error, setError } =
    useWeatherStore();

  useEffect(() => {
    try {
      setLoading(false);
      setError(null);

      if (cityName) {
        getWeather(cityName);
      } 
      
    } catch (err) {
      setError(TEXT_CONSTANTS.ERRORS.ERROR_WEATHER_DATA_1);
      console.error(TEXT_CONSTANTS.ERRORS.ERROR_WEATHER_DATA_2, err);
    } finally {
      setLoading(true);
    }
  }, [cityName, setWeather, setCity, setLoading, setError]);

  return {
    weather,
    loading,
    error,
  };
}

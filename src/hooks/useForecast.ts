import { useEffect } from "react";

import { useWeatherStore } from "@/store/weatherStore";
import { useForecast } from "@/store/forecastStore";
import { getForecast } from "@/services/weatherApi";
import { TEXT_CONSTANTS } from "@/constants";

export function useForecastData() {
  const { weather } = useWeatherStore();
  const {
    dailyForecast: daily,
    hourlyForecast: hourly,
    loading,
    error,
    setForecast,
    setLoading,
    setError,
  } = useForecast();

  useEffect(() => {
    if (!weather?.coord) return;

    const fetchForecast = async () => {
      try {
        setLoading(true);
        const forecast = await getForecast(
          weather.coord.lat,
          weather.coord.lon
        );
        if (forecast) {
          setForecast(forecast);
        }
      } catch (err) {
        setError(TEXT_CONSTANTS.ERRORS.ERROR_FORECAST_DATA);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [weather?.coord, setForecast, setLoading, setError]);

  return { daily, hourly, loading, error };
}

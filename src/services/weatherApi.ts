import axios from "axios";
import {
  API_KEY,
  FORECAST_LINK,
  TEXT_CONSTANTS,
  WEATHER_LINK,
} from "@/constants";
import { useWeatherStore } from "@/store/weatherStore";
import { HourlyForecast, DailyForecast, ForecastResponse } from "@/types";
import {
  formatFullDate,
  formatTemperature,
  formatTime,
  formatWeekday,
  getDateKey,
} from "@/utils/formatUtils";

export async function getWeather(cityName: string) {
  const url = `${WEATHER_LINK}?q=${cityName}&appid=${API_KEY}&units=metric&lang=ru`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    const weatherData = {
      main: {
        temp: formatTemperature(data.main.temp),
        feels_like: formatTemperature(data.main.feels_like),
        humidity: data.main.humidity,
      },
      coord: {
        lon: data.coord.lon,
        lat: data.coord.lat,
      },
      weather: [
        {
          description: data.weather[0].description,
          icon: data.weather[0].icon,
        },
      ],
      wind: {
        speed: data.wind.speed,
      },
      clouds: {
        all: data.clouds.all,
      },
      name: data.name,
    };

    useWeatherStore.getState().setWeather(weatherData);
    useWeatherStore.getState().setCity(data.name);
  } catch (error) {
    console.error(TEXT_CONSTANTS.ERRORS.ERROR_WEATHER_DATA_1, error);
  }
}

export async function getForecast(
  lat: number | undefined,
  lon: number | undefined
): Promise<{ hourly: HourlyForecast[]; daily: DailyForecast[] } | null> {
  if (!lat || !lon) {
    console.error(TEXT_CONSTANTS.ERRORS.ERROR_WEATHER_DATA_3);
    return null;
  }

  const url = `${FORECAST_LINK}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ru`;

  try {
    const response = await axios.get<ForecastResponse>(url);
    const data = response.data;

    const hourly: HourlyForecast[] = data.list.slice(0, 6).map((item) => ({
      time: formatTime(item.dt),
      temp: formatTemperature(item.main.temp),
      icon: item.weather[0].icon,
      desc: item.weather[0].description,
    }));

    const dailyMap: Record<string, DailyForecast> = {};

    data.list.forEach((item) => {
      const date = getDateKey(item.dt);
      const hour = new Date(item.dt * 1000).getHours();

      if (!dailyMap[date] && hour >= 12 && hour <= 15) {
        dailyMap[date] = {
          day: formatWeekday(item.dt),
          temp: formatTemperature(item.main.temp),
          icon: item.weather[0].icon,
          desc: item.weather[0].description,
          dt_txt: formatFullDate(item.dt),
        };
      }
    });

    return {
      hourly,
      daily: Object.values(dailyMap).slice(0, 5),
    };
  } catch (error) {
    console.error(TEXT_CONSTANTS.ERRORS.ERROR_WEATHER_DATA_2, error);
    return null;
  }
}

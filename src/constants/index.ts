export const SERVER_URL = "http://api.openweathermap.org";
export const WEATHER_LINK = `${SERVER_URL}/data/2.5/weather`;
export const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
export const FORECAST_LINK = `${SERVER_URL}/data/2.5/forecast`;
export const GEO_API_URL = "https://api.openweathermap.org/geo/1.0/direct";

export const server_link = "http://api.openweathermap.org/geo/1.0/direct";

export const ROUTES = {
  HOME: "/",
  FORECAST: "/forecast",
  FAVORITES: "/favorites",
};

export const STORAGE_KEYS = {
  FAVORITES: "favorite_cities",
  WEATHER: "weather-storage",
  FAVORITES_KEYS: "favorites-storage",
};

export const TEXT_CONSTANTS = {
  ERRORS: {
    INPUT_ERROR_VALIDATE_1: "Можно вводить только буквы и пробелы",
    INPUT_ERROR_VALIDATE_2: "Введите название города",
    INPUT_ERROR_VALIDATE_3: "Название города не должно содержать цифры",
    ERROR_WEATHER_DATA_1: "Не удалось получить данные о погоде",
    ERROR_WEATHER_DATA_2: "Ошибка получения погоды",
    ERROR_WEATHER_DATA_3: "Некорректные параметры",
    ERROR_FORECAST_DATA: "Ошибка при загрузке прогноза",
  },
  TABS: {
    DAILY: "daily",
    HOURLY: "hourly",
  },
  LINKS: {
    MAIN: "Главная",
    FORECAST: "Прогноз",
    FAVORITES: "Избранное",
  },
};

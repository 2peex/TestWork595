export interface Weather {
  city: string;
  temperature: number;
  description: string;
  icon: string;
}

export interface ForecastDay {
  date: string;
  temperature: number;
  description: string;
  icon: string;
}

export interface Forecast {
  city: string;
  days: ForecastDay[];
}

export interface FavoriteCity {
  name: string;
  country: string;
}

export interface LoadingProps {
  className: string;
}

export interface WeatherCondition {
  description: string;
  icon: string;
}

export interface MainForecastData {
  temp: number;
  feels_like: number;
  humidity: number;
}

export interface ForecastItem {
  dt: number;
  main: MainForecastData;
  weather: WeatherCondition[];
  dt_txt: string;
}

export interface ForecastResponse {
  list: ForecastItem[];
}

export interface HourlyForecast {
  time: string;
  temp: number;
  icon: string;
  desc: string;
}

export interface DailyForecast {
  day: string;
  temp: number;
  icon: string;
  desc: string;
  dt_txt: string;
}

export type WeatherData = {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  coord: {
    lat: number;
    lon: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind?: {
    speed: number;
  };
  clouds?: {
    all: number;
  };
  name?: string;
} | null;

export interface WeatherState {
  weather: WeatherData | null;
  city: string;
  loading: boolean;
  error: string | null;
  setWeather: (data: WeatherData | null) => void;
  setCity: (city: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}
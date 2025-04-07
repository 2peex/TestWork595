import { create } from "zustand";

interface HourlyForecast {
  time: string;
  temp: number;
  icon: string;
  desc: string;
}

interface DailyForecast {
  day: string;
  temp: number;
  icon: string;
  desc: string;
  dt_txt: string;
}

interface ForecastState {
  dailyForecast: DailyForecast[];
  hourlyForecast: HourlyForecast[];
  loading: boolean;
  error: string | null;
  setForecast: (forecast: {
    daily: DailyForecast[];
    hourly: HourlyForecast[];
  }) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useForecast = create<ForecastState>((set) => ({
  dailyForecast: [],
  hourlyForecast: [],
  loading: false,
  error: null,
  setForecast: ({ daily, hourly }) =>
    set({ dailyForecast: daily, hourlyForecast: hourly }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));

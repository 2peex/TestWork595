export const formatTemperature = (temp: number): number => Math.round(temp);

export const formatTime = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatWeekday = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleDateString("ru-RU", {
    weekday: "short",
  });
};

export const formatFullDate = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
  });
};

export const getDateKey = (timestamp: number): string => {
  return new Date(timestamp * 1000).toISOString().split("T")[0];
};

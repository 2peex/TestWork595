"use client";

import type React from "react";
import { useState } from "react";
import { SearchForm, StyledInput } from "@/components/styled/TextField";
import { IconButton } from "./styled/IconButton";
import { useWeatherStore } from "@/store/weatherStore";
import { API_KEY, GEO_API_URL, TEXT_CONSTANTS } from "@/constants";

export default function SearchBar() {
  const setCity = useWeatherStore((state) => state.setCity);
  const { setLoading } = useWeatherStore();
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[a-zA-Zа-яА-Я\s\-']*$/.test(value)) {
      setSearchInput(value);
      setError("");
    } else {
      setError(TEXT_CONSTANTS.ERRORS.INPUT_ERROR_VALIDATE_1);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = searchInput.trim();
    setLoading(false);

    if (!trimmedInput) {
      setError(TEXT_CONSTANTS.ERRORS.INPUT_ERROR_VALIDATE_2);
      return;
    }

    if (/[0-9]/.test(trimmedInput)) {
      setError(TEXT_CONSTANTS.ERRORS.INPUT_ERROR_VALIDATE_3);
      return;
    }

    try {
      const response = await fetch(
        `${GEO_API_URL}?q=${encodeURIComponent(
          trimmedInput
        )}&limit=1&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Ошибка при запросе к геокодингу");
      }

      const data = await response.json();

      if (!data || data.length === 0) {
        setError("Город не найден");
        return;
      }
      setLoading(true);
      setCity(trimmedInput);
      setSearchInput("");
      setError("");
    } catch (err) {
      setError("Произошла ошибка при валидации города");
      console.error(err);
    }
  };

  return (
    <div>
      {error && <div style={{ color: "red", margin: "5px 0" }}>{error}</div>}
      <SearchForm onSubmit={handleSearch}>
        <StyledInput
          type="text"
          placeholder="Поиск города..."
          value={searchInput}
          onChange={handleInputChange}
          aria-invalid={!!error}
        />
        <IconButton type="submit">
          <span>Поиск</span>
        </IconButton>
      </SearchForm>
    </div>
  );
}

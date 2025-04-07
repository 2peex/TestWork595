import { IconButton } from "./styled/IconButton";
import {
  StyledCard,
  StyledCardContent,
  StyledCardDescription,
  StyledCardHeader,
  StyledCardTitle,
} from "./styled/Cards";
import { Flex, Grid } from "./styled/Layout";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import {
  IconContainer,
  LargeIconContainer,
  WeatherDetail,
  WeatherDetailText,
} from "./styled/WeatherIcons";
import Image from "next/image";
import { useWeatherStore } from "@/store/weatherStore";
import { useWeather } from "@/hooks/useWeather";
import { useFavoritesStore } from "@/store/favoritesStore";
import { SkeletonMain } from "./styled/Skeleton";

const Temperature = styled.span`
  font-size: 4rem;
  font-weight: 700;
  color: ${theme.colors.text.primary};
`;

const WeatherCondition = styled.p`
  font-size: 1.5rem;
  color: ${theme.colors.text.accent};
  margin: ${theme.spacing.xs} 0 0;
`;

export default function WeatherNowDisplay() {
  const city = useWeatherStore((state) => state.city);
  const addToFavorites = useFavoritesStore((state) => state.addFavorite);
  const isFavorite = useFavoritesStore((state) => state.isFavorite(city));

  const { weather, loading } = useWeather(city);

  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  const formatDate = currentDate.toLocaleDateString("ru-RU", options);

  return !loading ? (
    <SkeletonMain />
  ) : (
    <StyledCard>
      <StyledCardHeader>
        <Flex>
          <div>
            <StyledCardTitle>{city}</StyledCardTitle>
            <StyledCardDescription>{formatDate}</StyledCardDescription>
          </div>
          <IconButton onClick={() => addToFavorites(city)} $variant="ghost">
            <Image
              src={isFavorite ? "/heart_red.png" : "/heart.png"}
              alt="heart"
              width={30}
              height={30}
            />
          </IconButton>
        </Flex>
      </StyledCardHeader>
      <StyledCardContent>
        <Grid $columns={2}>
          <Flex $direction="column" $align="center" $justify="center">
            <Flex $gap={theme.spacing.lg}>
              <LargeIconContainer>
                <Image
                  src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
                  alt="sun"
                  width={80}
                  height={80}
                />
              </LargeIconContainer>
              <Temperature>{weather?.main.temp}°C</Temperature>
            </Flex>
            <WeatherCondition>
              {weather?.weather[0].description}
            </WeatherCondition>
          </Flex>
          <Grid $columns={2}>
            <WeatherDetail>
              <IconContainer>
                <Image src="/feels_like.png" alt="sun" width={30} height={30} />
              </IconContainer>
              <WeatherDetailText>
                <p>Ощущается как</p>
                <p>{weather?.main.feels_like}°C</p>
              </WeatherDetailText>
            </WeatherDetail>

            <WeatherDetail>
              <IconContainer>
                <Image src="/wind.png" alt="sun" width={30} height={30} />
              </IconContainer>
              <WeatherDetailText>
                <p>Ветер</p>
                <p>{weather?.wind?.speed} м/с</p>
              </WeatherDetailText>
            </WeatherDetail>

            <WeatherDetail>
              <IconContainer>
                <Image src="/humidity.png" alt="sun" width={30} height={30} />
              </IconContainer>
              <WeatherDetailText>
                <p>Влажность</p>
                <p>{weather?.main.humidity}%</p>
              </WeatherDetailText>
            </WeatherDetail>

            <WeatherDetail>
              <IconContainer>
                <Image src="/cloud.png" alt="sun" width={30} height={30} />
              </IconContainer>
              <WeatherDetailText>
                <p>Облачность</p>
                <p>{weather?.clouds?.all}%</p>
              </WeatherDetailText>
            </WeatherDetail>
          </Grid>
        </Grid>
      </StyledCardContent>
    </StyledCard>
  );
}

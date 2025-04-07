"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/styled/Layout";
import { StyledCard, StyledCardContent } from "@/components/styled/Cards";
import { IconContainer } from "@/components/styled/WeatherIcons";
import { Grid } from "@/components/styled/Layout";
import { useWeatherStore } from "@/store/weatherStore";
import { useForecastData } from "@/hooks/useForecast";
import { SkeletonList } from "@/components/styled/Skeleton";
import Image from "next/image";
import {
  TabsContainer,
  TabsList,
  TabTrigger,
  TabContent,
  ForecastItemDays,
  DayText,
  DateText,
  TempText,
  ConditionText,
  ForecastItemHours,
  TimeText,
} from "@/components/styled/Forecast";
import { TEXT_CONSTANTS } from "@/constants";

export default function ForecastPage() {
  const city = useWeatherStore((state) => state.city);
  const [activeTab, setActiveTab] = useState(TEXT_CONSTANTS.TABS.DAILY);
  const { daily, hourly, loading } = useForecastData();

  return (
    <div>
      <SectionTitle>Прогноз погоды для города {city}</SectionTitle>
      <TabsContainer>
        <TabsList>
          <TabTrigger
            $active={activeTab === TEXT_CONSTANTS.TABS.DAILY}
            onClick={() => setActiveTab(TEXT_CONSTANTS.TABS.DAILY)}
          >
            Ежедневно
          </TabTrigger>
          <TabTrigger
            $active={activeTab === TEXT_CONSTANTS.TABS.HOURLY}
            onClick={() => setActiveTab(TEXT_CONSTANTS.TABS.HOURLY)}
          >
            Почасовой
          </TabTrigger>
        </TabsList>
        {!loading ? (
          <>
            <TabContent $active={activeTab === TEXT_CONSTANTS.TABS.DAILY}>
              <StyledCard>
                <StyledCardContent>
                  <Grid $columns={5}>
                    {daily.map((item, index) => (
                      <ForecastItemDays key={index}>
                        <DayText>{item.day}</DayText>
                        <DateText>{item.dt_txt}</DateText>
                        <IconContainer>
                          <Image
                            src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                            alt="icon"
                            width={60}
                            height={60}
                          />
                        </IconContainer>
                        <TempText>{item.temp}</TempText>
                        <ConditionText>{item.desc}</ConditionText>
                      </ForecastItemDays>
                    ))}
                  </Grid>
                </StyledCardContent>
              </StyledCard>
            </TabContent>
            <TabContent $active={activeTab === TEXT_CONSTANTS.TABS.HOURLY}>
              <StyledCard>
                <StyledCardContent>
                  <Grid $columns={6}>
                    {hourly.map((item, index) => (
                      <ForecastItemHours key={index}>
                        <TimeText>{item.time}</TimeText>
                        <IconContainer>
                          <Image
                            src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                            alt="icon"
                            width={60}
                            height={60}
                          />
                        </IconContainer>
                        <TempText>{item.temp}</TempText>
                        <ConditionText>{item.desc}</ConditionText>
                      </ForecastItemHours>
                    ))}
                  </Grid>
                </StyledCardContent>
              </StyledCard>
            </TabContent>
          </>
        ) : (
          <>
            <TabContent $active={activeTab === TEXT_CONSTANTS.TABS.DAILY}>
              <StyledCard>
                <SkeletonList />
              </StyledCard>
            </TabContent>
            <TabContent $active={activeTab === TEXT_CONSTANTS.TABS.HOURLY}>
              <StyledCard>
                <StyledCardContent></StyledCardContent>
              </StyledCard>
            </TabContent>
          </>
        )}
      </TabsContainer>
    </div>
  );
}

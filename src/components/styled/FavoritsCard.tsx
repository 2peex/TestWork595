"use client"

import { useRouter } from "next/navigation"
import { StyledWeatherCard } from "@/components/styled/Cards"
import styled from "styled-components"
import { theme } from "@/styles/theme"
import { IconContainer } from "./WeatherIcons"
import Image from "next/image"

const CityName = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.text.primary};
`


const CardContent = styled.div`
  padding: ${theme.spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

type WeatherCardProps = {
  city: string
  onClick?: () => void
}

export default function WeatherCard({ city, onClick }: WeatherCardProps) {
  const router = useRouter()


  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      router.push("/")
    }
  }

  return (
    <StyledWeatherCard onClick={handleClick}>
      <CardContent>
        <CityName>{city}</CityName>
        <IconContainer>
        <Image src="/city.png" alt="city" width={60} height={60}/>
        </IconContainer>
      </CardContent>
    </StyledWeatherCard>
  )
}


import styled from "styled-components";
import { theme } from "@/styles/theme";

export const StyledCard = styled.div`
  background: linear-gradient(
    to right,
    ${() => `rgba(53, 92, 125, 0.8)`},
    ${() => `rgba(114, 90, 122, 0.8)`}
  );
  backdrop-filter: blur(8px);
  border-radius: ${theme.borderRadius.medium};
  border: 1px solid rgba(255, 117, 130, 0.2);
  color: ${theme.colors.text.primary};
  transition: all ${theme.transitions.default};
  box-shadow: ${theme.shadows.card};
  overflow: hidden;
  min-height: 160px;
`;

export const StyledCardHeader = styled.div`
  padding: ${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.xs};
`;

export const StyledCardTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 600;
  margin: 0;
  color: ${theme.colors.text.primary};
`;

export const StyledCardDescription = styled.p`
  font-size: 1rem;
  color: ${theme.colors.text.accent};
  margin: 8px 0;
`;

export const StyledCardContent = styled.div`
  padding: ${theme.spacing.md};
`;

export const StyledWeatherCard = styled(StyledCard)`
  cursor: pointer;
  transition: transform ${theme.transitions.default};

  &:hover {
    transform: scale(1.05);
  }
`;

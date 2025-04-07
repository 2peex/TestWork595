import styled from "styled-components";
import { theme } from "@/styles/theme";

export const IconContainer = styled.div`
  background-color: rgba(255, 117, 130, 0.2);
  border-radius: ${theme.borderRadius.round};
  padding: ${theme.spacing.sm};
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: ${theme.spacing.sm} 0;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${theme.colors.primary};
  }
`;

export const LargeIconContainer = styled(IconContainer)`
  padding: ${theme.spacing.md};

  svg {
    width: 48px;
    height: 48px;
  }
`;

export const WeatherDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing.md};
  background-color: rgba(53, 92, 125, 0.4);
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.medium};
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform ${theme.transitions.default};

  &:hover {
    transform: scale(1.05);
  }
`;

export const WeatherDetailText = styled.div`
  display: flex;
  flex-direction: column;

  p:first-child {
    font-size: 0.875rem;
    color: ${theme.colors.text.secondary};
    margin: 0;
  }

  p:last-child {
    font-size: 1rem;
    font-weight: 500;
    color: ${theme.colors.text.primary};
    margin: 0;
  }
`;

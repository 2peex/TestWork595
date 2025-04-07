import { theme } from "@/styles/theme";
import { styled } from "styled-components";

export const TabsContainer = styled.div`
  width: 100%;
`;

export const TabsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(53, 92, 125, 0.6);
  backdrop-filter: blur(8px);
  border-radius: ${theme.borderRadius.medium};
  overflow: hidden;
  margin-bottom: ${theme.spacing.md};
`;

export const TabTrigger = styled.button<{ $active: boolean }>`
  padding: ${theme.spacing.md};
  background: ${(props) =>
    props.$active ? theme.colors.primary : "transparent"};
  color: ${theme.colors.text.primary};
  border: none;
  transition: background-color ${theme.transitions.default};
  font-weight: 500;

  &:hover {
    background-color: ${(props) =>
      props.$active ? theme.colors.primary : "rgba(255, 117, 130, 0.3)"};
  }
`;

export const TabContent = styled.div<{ $active: boolean }>`
  display: ${(props) => (props.$active ? "block" : "none")};
  height: 360px;
`;

export const ForecastItemDays = styled.div`
  display: flex;
  height: 250px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.medium};
  transition: all ${theme.transitions.default};
  border: 1px solid transparent;

  &:hover {
    transform: scale(1.05);
    background-color: rgba(161, 106, 103, 0.3);

    border-color: rgba(255, 117, 130, 0.3);
  }
`;

export const ForecastItemHours = styled.div`
  display: flex;
  height: 230px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.medium};
  transition: all ${theme.transitions.default};
  border: 1px solid transparent;

  &:hover {
    transform: scale(1.05);
    background-color: rgba(161, 106, 103, 0.3);

    border-color: rgba(255, 117, 130, 0.3);
  }
`;

export const DayText = styled.p`
  font-size: 1.9rem;
  font-weight: 500;
  margin: 0;
  color: ${theme.colors.text.primary};
`;

export const DateText = styled.p`
  font-size: 1rem;
  margin: ${theme.spacing.xs} 0;
  color: ${theme.colors.text.accent};
`;

export const TimeText = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  color: ${theme.colors.text.primary};
`;

export const TempText = styled.p`
  font-size: 2rem;
  font-weight: 500;
  margin: ${theme.spacing.xs} 0;
  color: ${theme.colors.text.primary};
`;

export const ConditionText = styled.p`
  font-size: 1rem;
  margin: 0;
  color: ${theme.colors.text.accent};
`;

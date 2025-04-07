import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
`;

export const PageTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};

  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`;

export const Grid = styled.div<{ $columns?: number }>`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${theme.spacing.md};

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(${(props) => props.$columns || 3}, 1fr);
  }
`;

export const Flex = styled.div<{
  $direction?: "row" | "column";
  $align?: string;
  $justify?: string;
  $gap?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.$direction || "row"};
  align-items: ${(props) => props.$align || "center"};
  justify-content: ${(props) => props.$justify || "flex-start"};
  gap: ${(props) => props.$gap || theme.spacing.md};
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.lg};
`;

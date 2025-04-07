import styled from "styled-components";
import { theme } from "@/styles/theme";

export const StyledInput = styled.input`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 117, 130, 0.3);
  border-radius: ${theme.borderRadius.medium};
  color: ${theme.colors.text.primary};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  width: 100%;
  transition: all ${theme.transitions.default};

  &::placeholder {
    color: rgba(29, 29, 29, 0.7);
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(255, 117, 130, 0.2);
  }
`;

export const SearchForm = styled.form`
  display: flex;
  width: 100%;
  max-width: 400px;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.lg};
`;

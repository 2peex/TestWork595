import { theme } from "@/styles/theme";
import { styled } from "styled-components";
import { IconButton } from "./IconButton";

export const EmptyState = styled.div`
  text-align: center;
  padding: ${theme.spacing.xl};
  background-color: rgba(53, 92, 125, 0.4);
  border-radius: ${theme.borderRadius.medium};
  backdrop-filter: blur(8px);
  color: ${theme.colors.text.primary};
`;

export const CardWrapper = styled.div`
  position: relative;

  &:hover button {
    opacity: 1;
  }
`;

export const RemoveButton = styled(IconButton)`
  position: absolute;
  top: ${theme.spacing.sm};
  right: ${theme.spacing.sm};
  opacity: 0;
  transition: opacity ${theme.transitions.default};
  background-color: rgba(255, 117, 130, 0.2);

  &:hover {
    background-color: rgba(255, 117, 130, 0.4);
  }
`;

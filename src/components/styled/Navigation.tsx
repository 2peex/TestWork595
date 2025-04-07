"use client";

import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Nav = styled.nav`
  display: flex;
  gap: ${theme.spacing.sm};
`;

export const NavLink = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.medium};
  transition: all ${theme.transitions.default};
  border: none;

  ${(props) =>
    props.active
      ? `
    background-color: ${theme.colors.primary};
    color: white;
  `
      : `
    background-color: rgba(53, 92, 125, 0.4);
    color: white;
    
    &:hover {
      background-color: rgba(255, 117, 130, 0.8);
    }
  `}

  @media (max-width: 640px) {
    span {
      display: none;
    }
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.lg};
`;

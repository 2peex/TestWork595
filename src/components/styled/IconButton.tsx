import styled from "styled-components";

export const StyledButton = styled.button<{
  $variant?: "default" | "ghost" | "outline";
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 500;
  border-radius: 8px;

  ${(props) =>
    props.$variant === "default" || !props.$variant
      ? `
    width: 120px;
    height: 35px;
    color: white;
    border: none;
    background: rgba(241, 52, 71, 0.8);
    &:hover {
      background-color: rgba(255, 117, 130, 0.8);
    }
  `
      : ""}

  ${(props) =>
    props.$variant === "ghost"
      ? `
    background-color: transparent;
    color: white;
    border: none;
    margin-bottom: 30px;
    
    &:hover {
      background-color: rgba(255, 117, 130, 0.2);
    }
  `
      : ""}
  
  ${(props) =>
    props.$variant === "outline"
      ? `
    width: 120px;
    height: 35px;
    background-color: transparent;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-color: white;
    }
  `
      : ""}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const IconButton = styled(StyledButton)`
  padding: 5px;
`;

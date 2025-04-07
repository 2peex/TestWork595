import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
`;

const SkeletonRow = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  padding: 16px;
  overflow-x: auto;
`;

export const SkeletonStroke = styled.div<{ $width: string; $heigth: string }>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$heigth};
  background: linear-gradient(
    90deg,
    #ff758384 25%,
    #f6595992 50%,
    #ff758384 75%
  );
  background-size: 200% 100%;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

export const SkeletonCardDays = styled.div`
  width: calc(20% - 13px);
  height: 270px;
  background: linear-gradient(
    90deg,
    #ff758335 25%,
    #f659595a 50%,
    #ff758335 75%
  );
  background-size: 200% 100%;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${pulse} 1.5s ease-in-out infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const SkeletonList = () => {
  return (
    <SkeletonRow>
      {[...Array(5)].map((_, index) => (
        <SkeletonCardDays key={index}>
          <SkeletonStroke $width="120px" $heigth="40px" />
          <SkeletonStroke $width="150px" $heigth="60px" />
          <SkeletonStroke $width="120px" $heigth="40px" />
        </SkeletonCardDays>
      ))}
    </SkeletonRow>
  );
};

export const SkeletonMain = styled.div`
  min-width: 350px;
  height: 340px;
  background: linear-gradient(
    90deg,
    #ff758335 25%,
    #f659595a 50%,
    #ff758335 75%
  );
  background-size: 200% 100%;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

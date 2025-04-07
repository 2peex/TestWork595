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

export const SkeletonStroke = styled.div<{
  $width: string;
  $heigth: string;
  $margin?: number;
}>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$heigth};
  background: linear-gradient(
    90deg,
    #ff758344 25%,
    #f6595961 50%,
    #ff758344 75%
  );
  background-size: 200% 100%;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${pulse} 1.5s ease-in-out infinite;
  margin: ${(props) => props.$margin};
`;

export const SkeletonCardDays = styled.div`
  width: 100%;
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
  padding: 20px;
`;

export const SkeletonList = () => {
  return (
    <SkeletonRow>
      {[...Array(5)].map((_, index) => (
        <SkeletonCardDays key={index}>
          <SkeletonStroke $width="100%" $heigth="40px" />
          <SkeletonStroke $width="100%" $heigth="60px" />
          <SkeletonStroke $width="100%" $heigth="40px" />
        </SkeletonCardDays>
      ))}
    </SkeletonRow>
  );
};

export const SkeletonMain = styled.div`
  min-width: 350px;
  width: 100%;
  height: 340px;
  background: linear-gradient(
    90deg,
    #f9869235 25%,
    #f6595937 50%,
    #f9869235 75%
  );
  background-size: 200% 100%;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${pulse} 1.5s ease-in-out infinite;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  padding: 50px;
`;

export const SkeletonWeatherNow = () => {
  return (
    <SkeletonMain>
      <SkeletonStroke $width="100%" $heigth="250px" />
      <SkeletonStroke $width="100%" $heigth="250px" />
    </SkeletonMain>
  );
};

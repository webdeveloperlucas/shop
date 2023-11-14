import { lighten } from "polished";
import styled, { css, keyframes } from "styled-components";


export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  row-gap: 20px;
  max-width: 938px;
  margin: 0 auto;
  padding: 128px 0px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
 
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 128px 24px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
   
  }
  @media (max-width: 430px) {
    grid-template-columns: 1fr;
   
  }
`;

const animation = keyframes`
  from {
    background-position:0% 0%
  }
  to {
    background-position:135% 0%
  }
`

export const SkeletonContent = styled.div`

    width: 100%;
    height: 280px;
    opacity:0.6;
    border-radius: 8px;
    cursor:progress;
    background: linear-gradient(
      -90deg,
      #91AAB4 0%,
      ${lighten(0.2, '#91AAB4')} 50%,
      #91AAB4 100%
    );
    background-size: 400% 400%;
  
    animation: ${animation} 1.2s ease-in-out infinite;
`
import { lighten } from "polished";
import styled, { css, keyframes } from "styled-components";


export const Container = styled.header`
    width: 100%;
    height: 101px;
    background: #0F52BA;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 80px;
    position: fixed ;
    z-index:99;
    @media (max-width: 600px){
        padding: 16px 24px;
    }
`


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
    height: 110px;
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
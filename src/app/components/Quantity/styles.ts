import styled from "styled-components";

export const Container = styled.div`
   
`
export const Label = styled.div`
    color: #000;
    font-family: Montserrat;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 6px;
    
    @media (max-width:600px){
        display:none;
    }
`
export const Control = styled.div`
    border-radius: 4px;
    border: 0.3px solid #BFBFBF;
    background: #FFF;
    width: 80px;
    height: 30px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media (max-width:600px){
        height: 30px;
    }
`
export const InputPlus = styled.div`
   
`
export const InputMinus = styled.div`
    cursor: pointer;
`
export const Number = styled.div`
        color: #000;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
`
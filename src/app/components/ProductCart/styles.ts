import styled from "styled-components";

export const Container = styled.div`
    
    max-width: 396px;
    height: 95px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #FFF;
    box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
    padding: 16px;
    display: flex;
    align-items: center;
    gap:16px;
    position:relative;
    backround: red;
    @media(max-width:600px){
        display: flex;
        flex-direction: column;
        height: auto;
        width:90%;
    }
}
`
export const Image = styled.div`
    width: 90px;

`
export const Title = styled.div`
    color: #2C2C2C;
    font-family: Montserrat;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
`
export const Quantity = styled.div`
    width: 120px;

`

export const Price = styled.div`
    color: #000;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px;
    width: 100px;

    @media (max-width:600px){
        width: content;
        padding: 6px;
        height: 30px;
        border-radius: 4px;
        background: #373737;
        color: #FFF;
        font-family: Montserrat;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: 15px; 
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Close = styled.div`
    position:absolute;
    right: -10px;
    top:-10px;
    border-radius:100%;
    background: black;
    width:20px;
    height:20px;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const PriceContainer = styled.div`
    display: flex;

   @media(max-width:600px){
        display: flex;
        flex-direction: row;
        height: auto;
        width:90%;
    }
`

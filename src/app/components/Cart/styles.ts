import styled from "styled-components";

export const Sidebar = styled.div`
    max-width: 486px;
    width: 100%;
    height: 91%;
    position: fixed;
    top: 0px;
    right: 0px;
    background: #0F52BA;
    box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
    z-index:998;
`

export const Container = styled.div`
    padding: 36px;
    display: flex; 
    flex-direction: column;
    
    height: 100%;
    gap: 20px;
`

export const Header = styled.div`
    color: #FFF;
    font-family: Montserrat;
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    position: relative;
`
export const Close = styled.button`
    width: 38px;
    height: 38px;
    border-radius: 100%;
    position: absolute;
    right: 36px;
    top:36px;
    background: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
 
    z-index:999;
    &:hover{
        opacity: 0.7;
        cursor: pointer;
    }
    
`

export const List = styled.div`
  
    display: flex;
    flex-direction: column;
    gap: 26px;
    height: 100%;
    overflow:hidden;
    overflow-y:scroll;
    padding: 16px 0px;
    
    &::-webkit-scrollbar {
        width: 6px; /* Largura do scrollbar */
    }

    &::-webkit-scrollbar-thumb {
        background-color: #888; 
        border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
        background-color: #f1f1f1; 
        border-radius: 4px;
    }`

export const Subtotal = styled.div`
    width: 100%
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    h1{
        color: #FFF;

        font-family: Montserrat;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 15px; 
    }
    span{
        color: #FFF;

        font-family: Montserrat;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 15px; /
    }
`

export const Button = styled.button`
    width: 100%;
    height: 97px;
    flex-shrink: 0;
    background: #000;
    color: white;
    border:0px;
    color: #FFF;

font-family: Montserrat;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: 15px; 
`
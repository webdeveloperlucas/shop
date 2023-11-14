'use client'
import styled from "styled-components";

export const Container = styled.div`
border-radius: 8px;
background: #FFF;
position: relative;
box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);

`

export const Card = styled.div`
    display: flex; 
    flex-direction: column;
    gap: 8px;
    padding: 18px 12px;
   
`


export const Image = styled.div`
    max-width: 170px;
    margin: 0 auto; 
`

export const Content = styled.div`
   display: flex;
   justify-content: space-between;
`

export const Title = styled.div``

export const Badge = styled.div`
    width: content;
    padding: 6px;
    height: 26px;
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

`

export const Paragraph = styled.div`
    color: #2C2C2C;
    font-family: Montserrat;
    font-size: 10px;
    font-style: normal;
    font-weight: 300;
    line-height: 12px; 
    max-width: 80%;
    height: 50px;
`

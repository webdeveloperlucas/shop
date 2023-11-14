import styled from "styled-components";

export const Button = styled.button`
    width:100%;
    height: 32px;
    background:#0F52BA;
    border: 0px;
    border-radius: 0px 0px 4px 4px;
    text-transform: uppercase;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    gap: 8px;
    position:absolute;
    bottom:0;
    transition-duration: 0.6s;

    &:hover {
        cursor: pointer;
        opacity: .75;
    }
`
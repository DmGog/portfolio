import styled from "styled-components";
import {theme} from "../styles/Theme";


export const SectionTitle = styled.h2`
    color: ${theme.colors.font};
    font-weight: 600;
    font-size: 36px;
    letter-spacing: 0.14em;
    font-family: "Josefin Sans", sans-serif;
    text-align: center;
    margin-bottom: 90px;
    
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: ${theme.colors.accentColor};
        bottom: -30px;
        
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
`

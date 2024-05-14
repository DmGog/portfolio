import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Main = styled.section`
    min-height: 100vh;
    display: flex;

    @media ${theme.media.tablet} {
        ${FlexWrapper} {
            justify-content: space-around;
        }
    }

`
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    
    .pseudo-element {
        content: "";
        width: 400px;
        height: 400px;
        border: 2px solid ${theme.colors.secondaryBg};
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: -1;
        transform: translate(-50%, -50%) rotate(-165deg); 

        @media ${theme.media.mobile} {
            width: 314px;
            height: 414px;
        }
    }

    .pseudo-element-1 {
        transform: translate(-50%, -50%) rotate(-150deg);
    }

    .pseudo-element-2 {
        transform: translate(-50%, -50%) rotate(-135deg);
    }

    .pseudo-element-3 {
        transform: translate(-50%, -50%) rotate(-120deg);
    }

    .pseudo-element-4 {
        transform: translate(-50%, -50%) rotate(-105deg);
    }

    @media ${theme.media.mobile} {
        margin-top: 65px;
    }
`;

const Photo = styled.img`
    width: 350px;
    height: 350px;
    border-radius: 50%;
    object-fit: cover;
    border: 8px solid ${theme.colors.accentColor};
    

    @media ${theme.media.mobile} {
        width: 310px;
        height: 310px;
    }
`
const MainTitle = styled.h1`
    ${font({weight: 400, Fmax: 27, Fmin: 20})}
`
const Name = styled.h2`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36})}
    
    letter-spacing: 0.05em;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;

        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accentColor};
            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    ;
    }
;
    
    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
    };
`
const SmallText = styled.span`
    font-weight: 400;
    font-size: 14px;
`
export const S = {
    Main,
    SmallText,
    Name,
    MainTitle,
    PhotoWrapper,
    Photo
}
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "../../../components/Link";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";


const Works = styled.section`
    ${FlexWrapper} {
        gap: 30px;
    }
`


const Work = styled.div`
    background-color: ${theme.colors.secondaryBg};
    
    ${Link} {
        padding: 10px 0;
        & + ${Link} {
            margin-left: 20px;
        }
    }
;
`

const ImageWrapper = styled.div`
    position: relative;

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: ${theme.animations.transition};

        &::before {
            height: 100%;
            width: 100%;
        }
    }
;


    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        backdrop-filter: blur(2px);
        background: rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: ${theme.animations.transition};
    }
;


    &:hover {

        &::before {
            opacity: 1;
        }
    ;

        ${Button} {
            opacity: 1;
        }
    ;
    }
;

    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }

    ;
        ${Button} {
            opacity: 1;
        }

    ;
    }

`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Description = styled.div`
    padding: 25px 20px;

`

const TitleWork = styled.h3`
    text-transform: capitalize;
`
const TextWork = styled.p`
    text-align: left;
    margin: 14px 0 10px;
`

export const S = {
    Works,
    Work,
    ImageWrapper,
    Image,
    Description,
    TitleWork,
    TextWork,


}
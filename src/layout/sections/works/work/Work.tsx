import React from "react";
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";

type WorkPropsType = {
    title: string
    text: string
    src: string
}


export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt=""/>
                <Button>view project</Button>
            </ImageWrapper>
            <Description>
                <TitleWork>{props.title}</TitleWork>
                <TextWork>{props.text}</TextWork>
                <Link href={"#"}>demo</Link>
                <Link href={"#"}>code</Link>
            </Description>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    max-width: 540px;
    width: 100%;
    height: 100%;

    & + & {
        margin-left: 60px;
    }

    background-color: ${theme.colors.secondaryBg};

    ${Link} {
        padding: 10px 0;

        //для всех Link, которые идут после Link

        & + ${Link} {
            margin-left: 20px;
        }
    }
;
`

const ImageWrapper = styled.div`
    position: relative;

    &:hover {


        &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            backdrop-filter: blur(8px);
            background: rgba(0, 0, 0, 0.3);

        }
    ;

        ${Button} {
            display: block;
        }
    ;
    }
;

    ${Button} {
        display: none;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &::before {
            height: 100%;
            width: 100%;
        }
    }
;

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

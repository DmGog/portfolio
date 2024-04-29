import React from "react";
import styled from "styled-components";

type WorkPropsType = {
    title: string
    text: string
    src: string
}


export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <TitleWork>{props.title}</TitleWork>
            <TextWork>{props.text}</TextWork>
            <Link href={"#"}>demo</Link>
            <Link href={"#"}>code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: darkkhaki;
    max-width: 540px;
    width: 100%;
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const TitleWork = styled.h3``
const TextWork = styled.p``
const Link = styled.a``

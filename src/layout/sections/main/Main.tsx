import React from "react";
import photo from "../../../assets/images/foto.jpg"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Dmitriy Goglev</span></Name>
                        <MainTitle>A Frontend Developer. </MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: indianred;
    display: flex;

`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`
const MainTitle = styled.h1`
    font-weight: 400;
    font-size: 27px;
`
const Name = styled.h2`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 0.05em;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 0;

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
`
const SmallText = styled.span`
    font-weight: 400;
    font-size: 14px;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;

    &::before {
        content: "";
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accentColor};

        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;

    }
`
import React from "react";
import photo from "../../../assets/images/foto.jpg"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Dmitriy Goglev</Name>
                    <MainTitle>A Frontend Developer. </MainTitle>
                </div>
                <Photo src={photo} alt=""/>

            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: indianred;
`

const Photo = styled.img`
    width: 350px;
    height: 350px;
    object-fit: cover;
`
const MainTitle = styled.h1`
`
const Name = styled.h2`
`
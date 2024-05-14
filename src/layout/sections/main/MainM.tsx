import React from "react";
import photo from "../../../assets/images/foto.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Main_StylesM";

export const MainM:React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Dmitriy Goglev</span></S.Name>
                        <S.MainTitle>A Frontend Developer. </S.MainTitle>
                    </div>
                    <S.PhotoWrapper>
                        <div className="pseudo-element pseudo-element-1"></div>
                        <div className="pseudo-element pseudo-element-2"></div>
                        <div className="pseudo-element pseudo-element-3"></div>
                        <div className="pseudo-element pseudo-element-4"></div>
                        <div className="pseudo-element pseudo-element-5"></div>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};



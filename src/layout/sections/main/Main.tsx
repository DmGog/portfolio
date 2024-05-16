import React from "react";
import photo from "../../../assets/images/foto.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";

export const Main: React.FC = () => {
    return (
        <S.Main id={"home"}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Dmitriy Goglev</span></S.Name>
                        <S.MainTitle>
                            <p>A Frontend Developer.</p>
                            <Typewriter
                                options={{
                                    strings: ["A Frontend Developer."],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100
                                }}
                            /> </S.MainTitle>
                    </div>
                    <S.PhotoWrapper>
                        <Tilt><S.Photo src={photo} alt=""/> </Tilt>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};



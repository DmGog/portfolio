import React from "react";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from "./Skills_Styles";

const skillData = [
    {
        iconId: "code",
        title: "html5",
    },
    {
        iconId: "css",
        title: "css3",
    },
    {
        iconId: "react",
        title: "react",
    },
    {
        iconId: "ts",
        title: "typescript",
    },
    {
        iconId: "sc",
        title: "styled components",
    },
    {
        iconId: "wb",
        title: "web design",
    },
]


export const Skills: React.FC = () => {


    return (
        <S.Skills id={"skills"}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>

                    {skillData.map((s, index) => {
                        return <Skill iconId={s.iconId} key={index}
                                      title={s.title}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};


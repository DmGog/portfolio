import React from "react";
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import TabMenu from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "./../../../assets/images/proj-1.png"
import timerImg from "./../../../assets/images/proj-2.png"
import {Container} from "../../../components/Container";
import {S} from "./Works_Styled";

const worksItems = [
    "All", "landing page", "React", "spa"
]

const workData = [
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        title: "Timer",
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
]
export const Works:React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    {workData.map((w, index) => {
                        return <Work src={w.src} key={index}
                              title={w.title}
                              text={w.text}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

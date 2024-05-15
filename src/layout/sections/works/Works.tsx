import React, {useState} from "react";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "./../../../assets/images/proj-1.png"
import timerImg from "./../../../assets/images/proj-2.png"
import {Container} from "../../../components/Container";
import {S} from "./Works_Styled";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";

const tabsItems: Array<{ status: TabsStatusType, title: string }> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "landing page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "Spa",
        status: "spa"
    },
]

const workData = [
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa",
    },
    {
        title: "Timer",
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "react",
    },
]
export const Works: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState<TabsStatusType>("all")
    let filterWorks = workData

    if (currentFilterStatus === "landing") {
        filterWorks = workData.filter(work => work.type === "landing")
    }

    if (currentFilterStatus === "react") {
        filterWorks = workData.filter(work => work.type === "react")
    }

    if (currentFilterStatus === "spa") {
        filterWorks = workData.filter(work => work.type === "spa")
    }


    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    {filterWorks.map((w, index) => {
                        return <Work src={w.src} key={index}
                                     title={w.title}
                                     text={w.text}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

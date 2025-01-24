import React, {useState} from "react";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import catchTheOffer from "./../../../assets/images/catch-the-offer.png"
import taskFlow from "./../../../assets/images/taskFlow.png"
import zabota from "./../../../assets/images/zabota.png"
import {Container} from "../../../components/Container";
import {S} from "./Works_Styled";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {AnimatePresence, motion} from "framer-motion"

const tabsItems: Array<{ status: TabsStatusType, title: string }> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "game dev",
        status: "gameDev"
    },
    {
        title: "React",
        status: "react"
    }
]

const workData = [
    {
        title: "Game: 'Catch the Offer', JavaScript (Vanilla)",
        src: catchTheOffer,
        text: "Catch the Offer is an engaging arcade game where players must catch appearing offers while avoiding misses. With customizable settings like grid size and win points, each playthrough offers a unique experience. Quick reflexes and strategy are key to victory, making it fun for all ages. Enjoy hours of entertainment with this dynamic and easy-to-play game!",
        type: "gameDev",
        id: 1,
        urlDemo: "https://dmgog.github.io/Game-Catch-The-Offer/",
        urlCode: "https://github.com/DmGog/Game-Catch-The-Offer",
    },
    {
        title: "Task Flow",
        src: taskFlow,
        text: "Task Flow is an intuitive task management application built with React, designed to optimize your productivity. Users can easily create, organize tasks, ensuring that nothing gets overlooked. With features like the ability to add notes and track task status, Task Flow adapts to your workflow. Boost your efficiency and enjoy a more organized life with Task Flow!",
        type: "react",
        id: 2,
        urlDemo: "https://dmgog.github.io/Mindbox-todo-app/",
        urlCode: "https://github.com/DmGog/Mindbox-todo-app",
    },
    {
        title: "The marketplace \"Care Nearby\"",
        src: zabota,
        text: "The project is a comprehensive marketplace portal designed for submitting applications for charitable assistance. Charitable organizations can create and manage requests for help, allowing users to easily view these requests and participate in various initiatives. This platform not only fosters connections between organizations and individuals but also promotes community involvement and support.",
        type: "react",
        id: 3,
        urlDemo: "https://project-caring-nearby.vercel.app",
        urlCode: "https://github.com/DmGog/project-caring-nearby",
    },
]
export const Works: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState<TabsStatusType>("all")
    let filterWorks = workData

    if (currentFilterStatus === "gameDev") {
        filterWorks = workData.filter(work => work.type === "gameDev")
    }

    if (currentFilterStatus === "react") {
        filterWorks = workData.filter(work => work.type === "react")
    }

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={"works"}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    <AnimatePresence>
                        {filterWorks.map((w) => {
                            return (
                                <motion.div style={{width: "330px", flexGrow: 1, maxWidth: "540px"}}
                                            layout={true}
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            exit={{opacity: 0}}
                                            key={w.id}

                                >
                                    <Work src={w.src}
                                          title={w.title}
                                          text={w.text}
                                          key={w.id}
                                          urlDemo={w.urlDemo}
                                          urlCode={w.urlCode}
                                    />
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

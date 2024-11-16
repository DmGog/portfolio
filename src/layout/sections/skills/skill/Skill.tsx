import React from "react";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Fade} from "react-awesome-reveal";

import {S} from "../Skills_Styles";

type SkillPropsType = {
    iconId: string
    title: string
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <FlexWrapper direction={"column"} align={"center"}>
                <Fade cascade={true} damping={0.2}>
                    <S.IconWrapper>
                        <Icon iconId={props.iconId}/>
                    </S.IconWrapper>
                    <S.SkillTitle>{props.title}</S.SkillTitle>
                </Fade>
            </FlexWrapper>
        </S.Skill>
    );
};

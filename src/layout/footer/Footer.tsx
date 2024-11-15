import React from "react";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Footer_Styles";


const socialItemsData = [
    {
        iconId: "instagram",
        src: "https://www.instagram.com/dmgoglev?igsh=dWlreXNxZnliaGJr"
    },
    {
        iconId: "telegram",
        src: "https://t.me/DmGog_37"
    },
    {
        iconId: "vk",
        src: "https://vk.com/goglev37"
    },
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Dmitriy</S.Name>
                <S.SocialList>
                    {socialItemsData.map((s, index) => {
                        return (
                            <S.SocialItem key={index}>
                                <S.SocialLink href={s.src}>
                                    <Icon height={"21"} width={"21"} viewBox={"0 0 21 21"} iconId={s.iconId}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}
                </S.SocialList>
                <S.Copyright>© 2024 All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

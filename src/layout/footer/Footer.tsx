import React from "react";
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Dmitriy</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink href={"https://www.instagram.com/dmgoglev?igsh=dWlreXNxZnliaGJr"}>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21 21"} iconId={"instagram"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href={"https://t.me/DmGog_37"}>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21 21"} iconId={"telegram"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href={"https://vk.com/goglev37"}>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21 21"} iconId={"vk"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21 21"} iconId={"linkedin"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2024 All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`

const Name = styled.span`
    ${font({family: "\"Josefin Sans\", sans-serif", weight: 700, Fmax: 22, Fmin: 16})}
    letter-spacing: 0.14em;

`
const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 35px;
    height: 35px;


    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.accentColor};

    &:hover {
        background-color: ${theme.colors.accentColor};
        color: ${theme.colors.primaryBg};
        transition: 0.3s;
        transform: translateY(-4px);
    }
`
const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
`


import React from "react";
import {Link} from "../../../../components/Link";
import {Button} from "../../../../components/Button";
import {S} from "../Works_Styled";

type WorkPropsType = {
    title: string
    text: string
    src: string
}


export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt=""/>
                <Button>view project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.TitleWork>{props.title}</S.TitleWork>
                <S.TextWork>{props.text}</S.TextWork>
                <Link active href={"#"}>demo</Link>
                <Link href={"#"}>code</Link>
            </S.Description>
        </S.Work>
    );
};



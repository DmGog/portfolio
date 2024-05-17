import React, {ElementRef, useRef} from "react";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from "./Contacts_Styles";
import emailjs from "@emailjs/browser";

export const Contact: React.FC = () => {

    const form = useRef<ElementRef<"form">>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return

        emailjs
            .sendForm("service_bekv17l", "template_ngedcwn", form.current, {
                publicKey: "0xEoFfhJUKVR0LC_s",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                },
            );
        e.target.reset()
    };

    return (
        <S.Contact id={"contact"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder={"name"} name={"user_name"} type={"text"}/>
                    <S.Field required placeholder={"email"} name={"email"} type={"email"}/>
                    <S.Field required placeholder={"subject"} name={"subject"} type={"text"}/>
                    <S.Field required placeholder={"message"} as={"textarea"} name={"message"}/>
                        <Button type={"submit"}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};



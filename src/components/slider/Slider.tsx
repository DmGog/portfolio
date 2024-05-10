import React from "react";
import {FlexWrapper} from "../FlexWrapper";
import {S} from "./Slider_Styles";

export const Slider: React.FC = () => {
    return (
        <S.Slider>
            <FlexWrapper>
                <S.Slide>
                    <S.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur aut beatae cum
                        deleniti
                        dicta eos esse exercitationem expedita inventore, itaque, iure nisi perspiciatis quis quos
                        tempore
                        unde vel voluptatibus.</S.Text>
                    <S.Name>@ivan ivanow</S.Name>
                </S.Slide>
            </FlexWrapper>

            <S.Pagination>

                <span></span>
                <span className="active"></span>
                <span></span>

            </S.Pagination>
        </S.Slider>
    );
};

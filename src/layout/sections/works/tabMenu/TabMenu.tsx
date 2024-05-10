import React from "react";
import styled from "styled-components";
import {Link} from "../../../../components/Link";

// type MenuPropsType = {
//     menuItems: Array<string>
// }

export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="#">{item}</Link>
                    </ListItem>
                })
                }
            </ul>
        </StyledTabMenu>
    );
};

export default TabMenu;

const StyledTabMenu = styled.nav`
    
    ul {
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 40px;
    }

`

const ListItem = styled.li`
   
`

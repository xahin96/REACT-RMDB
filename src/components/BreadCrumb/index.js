import { specialCharMap } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import {Link} from 'react-router-dom';
//Styles
import { Wrapper, Content } from "./BreadCrumb.styles";

const BreadCrumb = ({movieTitle}) => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Home</span>
            </Link>
            <span>|</span>
            <spean>{movieTitle}</spean>
        </Content>
    </Wrapper>
);

export default BreadCrumb;
import React from 'react';
import styled from 'styled-components';
import Banner from "../../components/Home/Banner/Banner";
import Intro from "../../components/Home/Intro/Intro";
import Goal from "../../components/Home/Goal/Goal";
import Stage from "../../components/Home/Stage/Stage";
import If from "../../components/Home/If/If";

const HomeContainer = styled.div`
    min-height: calc(100vh - 22rem);
    margin-top: 0;

    @media screen and (max-width: 430px) {
        min-height: calc(100vh - 17.659rem);
        margin-top: 7.659rem;
    }
`;

const Home = () => {
    return (
        <HomeContainer>
            <Banner />
            <Intro />
            <Goal />
            <Stage />
            <If />
        </HomeContainer>
    )
}

export default Home;

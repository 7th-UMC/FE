import { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";
import ListTerm from "./Term/list-term";
import ListVacation from "./Vacation/list-vacation";

const ContentContainer = styled.div`
    width: 100%;
    margin-top: 5.3rem;

    @media screen and (max-width: 430px) {
        margin-top: 4rem;
    }
`

const ContentP = styled.p`
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.864rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.8rem;
        line-height: 1.909rem;
    }
`

const Content = ({ data }) => {
    //console.log(data);
    const [term, setTerm] = useState([]);
    const [vacation, setVacation] = useState([]);

    useEffect(() => {
        if (data && data[0].content) {
            setTerm(data[0].content[0].term || []);
            setVacation(data[0].content[0].vacation || []);
        }
    }, [data]);

    return (
        <ContentContainer>
            <ContentP>활동 내용</ContentP>
            <ListTerm data={term} />
            <ListVacation data={vacation} />
        </ContentContainer>
    );
}

export default Content;

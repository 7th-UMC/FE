import { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";
import ListPeople from "./list-people";

const PeopleContainer = styled.div`
    width: 100%;
    margin-top: 5.3rem;

    @media screen and (max-width: 430px) {
        margin-top: 3.19rem;
    }
`;

const PeopleP = styled.p`
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.864rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.8rem;
        line-height: 1.909rem;
    }
`;

const People = ({ data }) => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        if (data && data.length > 0) {
            setPeople(data[0].people);
        }
    }, [data]);

    return (
        <PeopleContainer>
            <PeopleP>지원 대상</PeopleP>
            <ListPeople data={people} />
        </PeopleContainer>
    );
};

export default People;

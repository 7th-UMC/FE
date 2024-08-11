import React from 'react';
import styled from "styled-components";
import colors from "../../../../styles/colors";

const ItemContainer = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 3rem;
    align-items: center;

    @media screen and (max-width: 430px) {
        margin-bottom: 1.6rem;
    }
`;

const PartP = styled.p`
    width: 18.1rem;
    font-weight: 600;
    font-size: 2.8rem;
    line-height: 3.341rem;
    color: ${colors.introColor};

    @media screen and (max-width: 430px) {
        width: 10.2rem;
        font-size: 1.6rem;
        line-height: 1.909rem;
    }
`

const NameList = styled.ul`
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    display:flex;
    gap: 2.8rem;

    @media screen and (max-width: 430px) {
        gap: 1.2rem;
    }
`;

const NameItem = styled.li`
    min-width: 6.3rem;
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 2.864rem;
    color: ${colors.introColor};
    text-align: left;

    @media screen and (max-width: 430px) {
        min-width: 3.7rem;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.671rem;
    }
`;

const ItemPeople = ({ person }) => {
    return (
        <ItemContainer>
            <PartP>{person.part}</PartP>
            <NameList>
                {person.name.map((name, index) => (
                    <NameItem key={index}>{name}</NameItem>
                ))}
            </NameList>
        </ItemContainer>
    );
};

export default ItemPeople;

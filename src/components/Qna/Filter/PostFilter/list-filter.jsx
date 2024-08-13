import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FilterData from "../../../../utils/Qna/filterData2";
import ItemFilter from "./item-filter";

const ListContainer = styled.div`
    margin-top: 4rem;
    width: 100%;
    display: flex;
    gap: 2rem;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    scrollbar-width: none;
    -ms-overflow-style: none;

    @media screen and (max-width: 430px) {
        margin-top: 2rem;
        gap: 0.8rem;
    }
`;

const ListFilter = ({ selectedId, onSelect }) => {
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        setFilterData(FilterData);
    }, []);

    const handleButtonClick = (id) => {
        onSelect(id);
    };

    return (
        <ListContainer>
            {filterData.map((item, index) => (
                <ItemFilter
                    key={index}
                    id={item.id}
                    name={item.name}
                    isSelected={item.id === selectedId}
                    onClick={handleButtonClick}
                />
            ))}
        </ListContainer>
    )
}

export default ListFilter;
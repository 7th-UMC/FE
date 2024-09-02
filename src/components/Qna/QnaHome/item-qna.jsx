import React from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";
import { useNavigate } from "react-router-dom";
import FilterData from "../../../utils/Qna/filterData";

const ItemContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5.05rem;

    @media screen and (max-width: 430px) {
        margin-bottom: 2.55rem;
    }
`

const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%; 
`;

const CategoryTitleContainer = styled.div`
    display: flex;
    align-items: center;
    width: 17rem; 
    gap: 1.8rem;

    @media screen and (max-width: 430px) {
        width: 7.5rem; 
        gap: 0.85rem;
    }
`;

const QP = styled.div`
    display: inline-flex;
    padding: 0.5rem 1.25rem;
    justify-content: center;
    align-items: center;
    border-radius: 31.25rem;
    border: 1px solid #86FFF0;
    font-size: 2.5rem;
    font-weight: 500;
    color: #86FFF0;

    @media screen and (max-width: 430px) {
        font-size: 1rem;
        padding: 0.25rem 0.625rem;
        border-radius: 15.625rem;
    }
`;

const QP2 = styled.p`
    font-size: 2.6rem;
    line-height: 3.103rem;
    font-weight: 500;
    color: ${colors.introColor};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }

    @media screen and (max-width: 430px) {
        font-size: 1.3rem;
        line-height: 1.551rem;
    }
`

const AnswerDiv = styled.div`
    width: 14.3rem;
    height: 4.9rem;
    border: none;
    border-radius: 0.4rem;
    background-color: ${colors.footerColor};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2.4rem;
    font-weight: 600;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        width: 7.15rem;
        height: 2.45rem;
        border-radius: 0.2rem;
        font-size: 1.2rem;
    }
`

const ItemQna = (props) => {
    const { id, title, answered, categoryId } = props;
    const navigate = useNavigate();

    const category = FilterData.find(item => item.id === categoryId);
    const categoryName = category ? category.name : '';

    const handleQnaDetail = () => {
        navigate(`/qna/${id}`);
    }

    return (
        <ItemContainer>
            <LeftContainer>
                <CategoryTitleContainer>
                    <QP>{categoryName}</QP>
                </CategoryTitleContainer>
                <QP2 onClick={handleQnaDetail}>{title}</QP2>
            </LeftContainer>
            {answered && <AnswerDiv>답변완료</AnswerDiv>}
        </ItemContainer>
    )
}

export default ItemQna;

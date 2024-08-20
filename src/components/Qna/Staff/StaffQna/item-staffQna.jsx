import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../../../styles/colors";
import { useNavigate } from "react-router-dom";
import Trash1 from "../../../../assets/images/Qna/trash1.png";
import Trash2 from "../../../../assets/images/Qna/trash2.png";

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
    max-width: 70%;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 1.8rem;

    @media screen and (max-width: 430px) {
        gap: 0.85rem;
    }
`

const QP = styled.p`
    font-size: 3rem;
    font-weight: 600;
    line-height: 3.58rem;
    color: ${colors.introColor};

    @media screen and (max-width: 430px) {
        font-size: 1.5rem;
        line-height: 1.79rem;
    }
`

const QP2 = styled.p`
    font-size: 2.6rem;
    line-height: 3.103rem;
    font-weight: 500;
    color: ${colors.introColor};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media screen and (max-width: 430px) {
        font-size: 1.3rem;
        line-height: 1.551rem;
    }
`

const RightContainer = styled.div`
    display: flex;
    gap: 2.957rem;
    align-items: center;

    @media screen and (max-width: 430px) {
        gap: 1.21rem;
    }
`

const TrashImg = styled.img`
    cursor: pointer;
    width: 3.2rem;

    @media screen and (max-width: 430px) {
        width: 1.6rem;
        content: url(${Trash2});
    }
`

const AnswerDiv = styled.div`
    width: 14.3rem;
    height: 4.9rem;
    border: none;
    border-radius: 0.4rem;
    background-color: ${({ answered }) => (answered === "true" ? colors.footerColor : colors.white)};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2.4rem;
    line-height: 2.864rem;
    font-weight: 600;
    cursor: pointer;
    color: ${({ answered }) => (answered === "true" ? colors.white : colors.footerColor)};

    @media screen and (max-width: 430px) {
        width: 7.15rem;
        height: 2.45rem;
        border-radius: 0.2rem;
        font-size: 1.2rem;
        line-height: 1.432rem;
    }
`

const ItemStaffQna = (props) => {
    const { id, answered, title, onTrashClick } = props;
    const navigate = useNavigate();

    const handleAnswerAction = () => {
        if (answered) {
            navigate(`/staffedit/${id}`);
        } else {
            navigate(`/staffanswer/${id}`);
        }
    };

    const handleTrashClick = () => {
        if (onTrashClick) {
            onTrashClick(id);
        }
    };

    return (
        <ItemContainer>
            <LeftContainer>
                <QP>Q</QP>
                <QP2>{title}</QP2>
            </LeftContainer>
            <RightContainer>
                <TrashImg src={Trash1} alt="trash" onClick={handleTrashClick}/>
                <AnswerDiv answered={answered.toString()} onClick={handleAnswerAction}>
                    {answered ? "답변수정" : "답변하기"}
                </AnswerDiv>
            </RightContainer>
        </ItemContainer>
    )
}

export default ItemStaffQna;
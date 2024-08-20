import React from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";
import ItemQna from "./item-qna";
import Arrow1 from "../../../assets/images/Qna/arrow1.png";
import Arrow2 from "../../../assets/images/Qna/arrow2.png";

const ListContainer = styled.div`
    width: 100%;
    min-height: 81rem;
    margin-top: 6.6rem;

    @media screen and (max-width: 430px) {
        margin-top: 2.525rem;
        min-height: 40.882rem;
    }
`;

const PaginationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16.5rem 0 8rem 0;
    gap: 1rem;

    @media screen and (max-width: 430px) {
        margin: 7.793rem 0 4rem 0;
    }
`;

const PageButton = styled.div`
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 0.6rem;
    background: ${colors.white};
    border: 0.15rem solid ${props => (props.active === "true" ? colors.qnaColor3 : colors.qnaColor2)};
    color: ${props => (props.active === "true" ? colors.qnaColor3 : colors.footerColor)};
    cursor: pointer;
    font-size: 2rem;
    line-height: 2.42rem;
    font-weight: 700;
    font-family: Inter;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 430px) {
        width: 3rem;
        height: 3rem;
        border-radius: 0.4rem;
        border: 0.094rem solid ${props => (props.active === "true" ? colors.qnaColor3 : colors.qnaColor2)};
        font-size: 1.2rem;
        line-height: 1.452rem;
    }
`;

const ButtonContainer = styled.div`
    width: 16.4rem;
    display: flex;
    justify-content: ${props => (props.centered === "true" ? 'center' : 'flex-start')};
    gap: 1rem;

    @media screen and (max-width: 430px) {
        width: 10.25rem;
    }
`;

const ArrowButton = styled.div`
    width: 4.8rem;
    height: 4.8rem;
    background-color: ${colors.white};
    border: 0.15rem solid ${colors.qnaColor2};
    border-radius: 0.6rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 430px) {
        width: 3rem;
        height: 3rem;
        border-radius: 0.4rem;
        border: 0.094rem solid ${colors.qnaColor2};
    }
`;

const ArrowImg = styled.img`
    width: 3.6rem;

    @media screen and (max-width: 430px) {
        width: 2.25rem;
        content: url(${Arrow2});
    }
`;

const ListQna = ({ data, currentPage, currentSet, onPageChange, onSetChange }) => {
    const postsPerPage = 10;
    const maxPagesToShow = 3;

    // Pagination
    const totalPages = Math.ceil(data.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (pageNumber) => {
        onPageChange(pageNumber);
    };

    const handleSetChange = (direction) => {
        onSetChange(direction);
    };

    const renderPagination = () => {
        const buttons = [];
        const startPage = (currentSet - 1) * maxPagesToShow + 1;
        const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <PageButton
                    key={i}
                    active={i === currentPage ? "true" : "false"}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </PageButton>
            );
        }

        return buttons;
    };

    const startPage = (currentSet - 1) * maxPagesToShow + 1;
    const isCentered = startPage === 1;

    return (
        <div>
            <ListContainer>
                {currentPosts.map((item, index) => (
                    <ItemQna
                        key={index}
                        categoryId={item.categoryId}
                        answered={item.answered}
                        id={item.questionId}
                        title={item.title}
                    />
                ))}
            </ListContainer>
            <PaginationContainer>
                <ArrowButton onClick={() => handleSetChange(-1)} disabled={currentSet === 1}>
                    <ArrowImg src={Arrow1} alt="left" style={{ transform: 'rotate(180deg)' }} />
                </ArrowButton>
                <ButtonContainer centered={isCentered.toString()}>
                    {renderPagination()}
                </ButtonContainer>
                <ArrowButton onClick={() => handleSetChange(1)} disabled={currentSet === Math.ceil(totalPages / maxPagesToShow)}>
                    <ArrowImg src={Arrow1} alt="right" />
                </ArrowButton>
            </PaginationContainer>
        </div>
    );
};

export default ListQna;

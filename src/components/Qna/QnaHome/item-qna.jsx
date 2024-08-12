import styled from "styled-components";
import colors from "../../../styles/colors";

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
    font-weight: 600;
    color: ${colors.introColor};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

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
    line-height: 2.864rem;
    font-weight: 600;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        width: 7.15rem;
        height: 2.45rem;
        border-radius: 0.2rem;
        font-size: 1.2rem;
        line-height: 1.432rem;
    }
`

const ItemQna = (props) => {
    const { id, userId, title, body } = props;
    // 나중에 백엔드랑 연결하면, 답변 여부 t/f에 따라 뜨도록 조건부 렌더링 할 것
    const showAnswer = id === userId;

    return (
        <ItemContainer>
            <LeftContainer>
                <QP>Q</QP>
                <QP2>{title}</QP2>
            </LeftContainer>
            {showAnswer && <AnswerDiv>답변완료</AnswerDiv>}
        </ItemContainer>
    )
}

export default ItemQna;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import colors from "../../../styles/colors";

const ItemContainer = styled.div`
    width: 100%;
`

const PartDiv = styled.div`
    width: fit-content;
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 50rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: ${colors.recruitColor6};
    font-size: 2.8rem;
    line-height: 3.341rem;
    font-weight: 600;
    color: ${colors.footerColor};
    margin-bottom: 4rem;

    @media screen and (max-width: 430px) {
        padding: 0.4rem 1rem;
        border-radius: 25rem;
        font-size: 1.4rem;
        line-height: 1.671rem;
        margin-bottom: 2rem;
    }
`

const TitleP = styled.p`
    width: 100%;
    font-size: 3.2rem;
    line-height: 3.819rem;
    font-weight: 600;
    color: ${colors.introColor};
    margin-bottom: 4.8rem;

    @media screen and (max-width: 430px) {
        font-size: 1.8rem;
        line-height: 2.148rem;
        margin-bottom: 2.2rem;
    }
`

const BodyP = styled.p`
    width: 100%;
    max-height: 26.4rem;
    font-size: 2.8rem;
    font-weight: 300;
    line-height: 4.4rem;
    color: ${colors.introColor};
    text-align: Justified;

    @media screen and (max-width: 430px) {
        font-size: 1.4rem;
        line-height: 2.2rem;
        max-height: 13.2rem;
    }
`

const AnswerContainer = styled.div`
    margin-top: 16rem;

    @media screen and (max-width: 430px) {
        margin-top: 8rem;
    }
`

const AnswerP = styled.p`
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 4.296rem;
    color: ${colors.recruitColor6};

    @media screen and (max-width: 430px) {
        font-weight: 600;
        line-height: 2.148rem;
        font-size: 1.8rem;
    }
`

const AnswerTextarea = styled.textarea`
    width: 100%;
    outline: none;
    border: none;
    border-radius: 0.4rem;
    background: ${colors.footerColor};
    font-family: Pretendard;
    min-height: 40rem;
    margin-top: 4.2rem;
    padding: 2rem;
    box-sizing: border-box;
    font-size: 2.8rem;
    line-height: 4.4rem;
    font-weight: 300;
    color: ${colors.qnaColor};
    resize: none;
    cursor: pointer;
    text-align: Justified;

    @media screen and (max-width: 430px) {
        border-radius: 0.2rem;
        min-height: 20rem;
        margin-top: 2.15rem;
        font-size: 1.4rem;
        line-height: 2.2rem;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 12rem 0 8rem 0;

    @media screen and (max-width: 430px) {
        margin-top: 6rem;
    }
`;

const QnaButton = styled.div`
    width: 60rem;
    height: 10rem;
    border: none;
    border-radius: 0.8rem;
    background: ${({ disabled }) => (disabled ? 'rgba(210, 210, 210, 0.2)' : colors.white)};
    color: ${({ disabled }) => (disabled ? 'rgba(255, 255, 255, 0.5)' : colors.footerColor)};
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 3.819rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

    @media screen and (max-width: 430px) {
        width: 20rem;
        height: 4.4rem;
        border-radius: 0.4rem;
        font-size: 1.8rem;
        line-height: 2.148rem;
    }
`

const ItemStaffAnswer = (props) => {
    const { id, userId, title, body, category } = props;
    //console.log(category);

    //const [explain, setExplain] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

/*     useEffect(() => {
        //console.log('ID:', id);
        if (id) {
            const fetchExplain = async () => {
                try {
                    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
                    setExplain(response.data.body);
                } catch (error) {
                    console.error("Error:", error);
                }
            };

            fetchExplain();
        }
    }, [id, userId]); */

    const handleAnswerChange = (event) => {
        setAnswer(event.target.value);
    };

    const handleAnswer = async () => {
        if (answer.trim()) {
            try {
                const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
                    answer
                });
                alert("답변 작성이 완료되었습니다.");
                console.log(response);
                navigate("/staffqna");
            } catch (error) {
                console.error("Error:", error);
            }
        }
    };

    return (
        <ItemContainer>
            <PartDiv>{category}</PartDiv>
            <TitleP>{title}</TitleP>
            <BodyP>{body}</BodyP>

            <AnswerContainer>
                <AnswerP>답변</AnswerP>
                <AnswerTextarea 
                    placeholder="답변 내용을 작성해주세요"
                    value={answer}
                    onChange={handleAnswerChange} 
                />
            </AnswerContainer>

            <ButtonContainer>
                <QnaButton onClick={handleAnswer} disabled={!answer.trim()}>작성 완료</QnaButton>
            </ButtonContainer>
        </ItemContainer>
    )
}

export default ItemStaffAnswer;
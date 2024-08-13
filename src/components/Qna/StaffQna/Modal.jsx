import React from 'react';
import styled from 'styled-components';
import colors from '../../../styles/colors';
import axios from 'axios';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContent = styled.div`
    background: white;
    padding: 3.4rem 0;
    width: 68rem;
    height: 30rem;
    border: none;
    border-radius: 2.023rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 430px) {
        width: 34rem;
        height: 15rem;
        border-radius: 1.011rem;
        padding: 1.7rem 0;
    }
`;

const ModalP = styled.p`
    width: 100%;
    height: 14.3rem;
    font-size: 3.2rem;
    line-height: 3.536rem;
    font-weight: 700;
    color: ${colors.modalColor};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: NanumSquare Neo OTF;

    @media screen and (max-width: 430px) {
        font-size: 1.6rem;
        line-height: 1.768rem;
        height: 7.2rem;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    gap: 2.4rem;
    align-items: center;

    @media screen and (max-width: 430px) {
        gap: 1.2rem;
    }
`

const ButtonDiv = styled.div`
    width: 20rem;
    height: 6.4rem;
    border: none;
    border-radius: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: NanumSquare Neo OTF;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.652rem;
    color: ${colors.modalColor};
    cursor: pointer;
    background: ${colors.modalColor2};

    @media screen and (max-width: 430px) {
        width: 10rem;
        height: 3.2rem;
        border-radius: 0.8rem;
        font-size: 1.2rem;
        line-height: 1.326rem;
    }
`

const ButtonDiv2 = styled(ButtonDiv)`
    background: ${colors.recruitColor6};
`

const Modal = ({ id, onClose }) => {
    //console.log(id);

    const handleConfirmDelete = async () => {
        try {
            const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
            console.log(response);
            alert("질문이 삭제되었습니다.");
            onClose();
        } catch (error) {
            console.error("Error:", error);
        }
    };


    return (
        <Overlay>
            <ModalContent>
                <ModalP>질문을 삭제할까요?</ModalP>
                <ButtonContainer>
                    <ButtonDiv onClick={onClose}>취소</ButtonDiv>
                    <ButtonDiv2 onClick={handleConfirmDelete}>삭제</ButtonDiv2>
                </ButtonContainer>
            </ModalContent>
        </Overlay>
    )
};

export default Modal;

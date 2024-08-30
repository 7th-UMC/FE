import styled from "styled-components";
import colors from "../../../styles/colors";
import { fadeInUp } from "../../../styles/animations";
import useScrollAnimation from "../../../hooks/Home/useScrollAnimation";

const GoalContainer = styled.div`
    width: 100%;
    height: 32rem;
    background: linear-gradient(90deg, ${colors.goalColor} 0%, ${colors.goalColor2} 100%);
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 430px) {
        height: 14rem;
    }
`

const GoalInnerContainer = styled.div`
    width: 76.5rem;
    height: 16.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 430px) {
        width: 35.4rem;
        height: 7.904rem;
    }
`

const GoalP = styled.p`
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 3.819rem;
    letter-spacing: 0.03rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.6rem;
        line-height: 1.909rem;
    }
`

const CircleContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 2.8rem;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 430px) {
        gap: 1rem;
    }

    &.visible > div:nth-child(1) {
        opacity: 0;
        animation: ${fadeInUp} 1s 0.3s ease-out forwards;
    }

    &.visible > div:nth-child(2) {
        opacity: 0;
        animation: ${fadeInUp} 1s 0.6s ease-out forwards;
    }

    &.visible > div:nth-child(3) {
        opacity: 0;
        animation: ${fadeInUp} 1s 0.9s ease-out forwards;
    }

    &.hidden > div {
        opacity: 0;
        transform: translateY(20px);
    }
`

const CircleDiv = styled.div`
    border: 0.1rem solid ${colors.white};
    width: fit-content;
    padding: 2.4rem 4rem;
    border-radius: 5rem;
    font-size: 2.8rem;
    line-height: 1.6rem;
    font-weight: 500;
    color: ${colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 430px) {
        border: 0.055rem solid ${colors.white};
        padding: 0.8rem 1.6rem;
        border-radius: 2.6rem;
        font-size: 1.2rem;
        line-height: 1.751rem;
    }
`

const Goal = () => {
    const { elementRef } = useScrollAnimation(); 

    return (
        <GoalContainer ref={elementRef}>
            <GoalInnerContainer>
                <GoalP>함께 성장하는 UMC의 목표는,</GoalP>
                <CircleContainer className={elementRef.current?.classList.contains('visible') ? 'visible' : 'hidden'}>
                    <CircleDiv>CHALLENGE</CircleDiv>
                    <CircleDiv>EQUALITY</CircleDiv>
                    <CircleDiv>CONFIDENCE</CircleDiv>
                </CircleContainer>
            </GoalInnerContainer>
        </GoalContainer>
    )
}

export default Goal;
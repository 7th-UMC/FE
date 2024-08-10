import styled from "styled-components";
import colors from "../../../styles/colors";
import StageBackground1 from "../../../assets/images/Home/Stage/stageBackground1.png";
import StageBackground2 from "../../../assets/images/Home/Stage/stageBackground2.png";
import StageCharacter1 from "../../../assets/images/Home/Stage/stageCharacter1.png";
import StageCharacter2 from "../../../assets/images/Home/Stage/stageCharacter2.png";
import StageBar from "./StageBar";

const StageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BackgroundContainer = styled.div`
    width: 70%;
    position: relative;

    @media screen and (max-width: 430px) { 
        width: 100%;
    }
`

const BackgroundImg = styled.img`
    width: 36rem;
    position: absolute;
    margin-top: -2rem;
    z-index: -1;

    @media screen and (max-width: 430px) {
        width: 12.2rem;
        margin-top: -7rem;
        content: url(${StageBackground2});
    }
`

const CharacterImg = styled.img`
    margin-top: 10rem;
    width: 12rem;

    @media screen and (max-width: 430px) {
        margin-top: 4.748rem;
        width: 3rem;
        content: url(${StageCharacter2});
    }
`

const StageP = styled.p`
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 4.296rem;
    letter-spacing: 0.06rem;
    color: ${colors.white};
    margin-top: 4rem;

    @media screen and (max-width: 430px) {
        font-size: 2.2rem;
        line-height: 2.625rem;
        margin-top: 0.795rem;
    }
`

const StageP2 = styled.p`
    font-size: 2.8rem;
    font-weight: 400;
    line-height: 4rem;
    text-align: center;
    color: ${colors.introColor2};
    margin-top: 8.2rem;

    @media screen and (max-width: 430px) {
        font-size: 1.2rem;
        line-height: 2.2rem;
        margin-top: 3.915rem;
    }
`


const Stage = () => {
    return (
        <StageContainer>
            <BackgroundContainer>
                <BackgroundImg src={StageBackground1} alt="stage" />
            </BackgroundContainer>
            
            <CharacterImg src={StageCharacter1} alt="character" />
            <StageP>한성대학교 UMC 여정</StageP>

            <StageBar />
            <StageP2>
                한성대학교 UMC는 5기를 시작으로, 기획, 디자인, 서버, 안드로이드, iOS, 웹 등<br/>
                여러 전공의 학생들이 참여하며 창의적인 아이디어를 발전시키는 활동을 했습니다.
            </StageP2>
        </StageContainer>
    )
}

export default Stage;
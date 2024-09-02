import styled from 'styled-components';
import Arrow from '../../../assets/images/Home/Apply/arrow.png'; 
import colors from "../../../styles/colors";
import ApplyBackground from '../../../assets/images/Home/Apply/applybg.png';

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 75rem;
  flex-direction: column;
  text-align: center;

  @media screen and (max-width: 430px) {
    height: 100vh;
    padding: 0 1rem;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 75rem;
  z-index: -2;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(13, 36, 127, 0.00) 3.45%, #00092A 118.96%);
  backdrop-filter: blur(17.5px);
  z-index: -1;
`;

const Title = styled.div`
  color:  ${colors.white};
  font-family: Pretendard;
  font-size: 4.3rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.875rem;
  letter-spacing: -0.07rem;

  @media screen and (max-width: 430px) {
    font-size: 2.5rem;
    line-height: 1.75rem;
  }
`;

const SubTitle = styled.div`
  color: ${colors.white};
  font-family: Pretendard;
  font-size: 2.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.875rem;
  letter-spacing: -0.0675rem;
  margin-top: 3rem;

  @media screen and (max-width: 430px) {
    font-size: 1.5rem;
    margin-top: 2rem;
    line-height: 2rem;
  }
`;

const Button = styled.button`
  width: 27.875rem;
  height: 7.25rem;
  flex-shrink: 0;
  border-radius: 6.25rem;
  background: ${colors.white};
  color:  ${colors.black};
  font-family: Pretendard;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.875rem;
  letter-spacing: -0.075rem;
  margin-top: 7.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 430px) {
    width: 20rem;
    height: 5rem;
    font-size: 1.5rem;
    margin-top: 4rem;
  }
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonText = styled.span`
  margin-right: 1rem; 

  @media screen and (max-width: 430px) {
    margin-right: 0.5rem;
  }
`;

const ButtonImage = styled.img`
  width: 1.8125rem;
  height: 1.8125rem;
  flex-shrink: 0;
  margin-top: 0.1rem;

  @media screen and (max-width: 430px) {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const Apply = () => {

  const handleButtonClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSedke8PH5PUC7_dqcB215X22zqfVdOlREvpk7F6ThmoTuvmwA/closedform", "_blank", "noopener,noreferrer");
  }

  return (
    <SectionContainer>
      <BackgroundImage src={ApplyBackground} alt="Apply Background" />
      <Overlay />
      <Title>UMC와 함께 꿈을 펼쳐 보세요!</Title>
      <SubTitle>새로운 도전과 기회를 UMC 한성대와 함께 경함해보세요</SubTitle>
      <Button onClick={handleButtonClick}>
        <ButtonContent>
          <ButtonText>바로 지원하기</ButtonText>
          <ButtonImage src={Arrow} alt="Arrow" />
        </ButtonContent>
      </Button>
    </SectionContainer>
  );
};

export default Apply;

import styled from 'styled-components';
import Arrow from '../../../assets/images/Home/Apply/Arrow.png'; 
import ApplyBackground from '../../../assets/images/Home/Apply/applybackground.png';

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  text-align: center;
  background: 
    linear-gradient(180deg, rgba(0, 0, 0, 0.00) 33.41%, rgba(0, 0, 0, 0.70) 92.76%),
    linear-gradient(180deg, #112679 0%, rgba(0, 0, 0, 0.00) 100%),
    url(${ApplyBackground}) no-repeat center center;
  background-size: cover;

  @media screen and (max-width: 430px) {
    height: 100vh;
    padding: 0 1rem;
  }
`;

const Title = styled.div`
  color: #FFF;
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
  color: #9EA0A2;
  font-family: Pretendard;
  font-size: 2.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.875rem; /* 127.778% */
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
  background: #000;
  color: #FFF;
  font-family: Pretendard;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.875rem; /* 115% */
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

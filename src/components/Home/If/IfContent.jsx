import styled from "styled-components";
import colors from "../../../styles/colors";
import If1 from "../../../assets/images/Home/If/if1.png";
import If2 from "../../../assets/images/Home/If/if2.png";
import If3 from "../../../assets/images/Home/If/if3.png";
import If4 from "../../../assets/images/Home/If/if4.png";
import If5 from "../../../assets/images/Home/If/if5.png";
import If6 from "../../../assets/images/Home/If/if6.png";
import If7 from "../../../assets/images/Home/If/if7.png";
import If8 from "../../../assets/images/Home/If/if8.png";

const IfContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 6rem;

    @media screen and (max-width: 430px) {
        margin-bottom: 4rem;
    }
`

const IfBox = styled.div`
    height: 8.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 430px) {
        height: 4.917rem;
    }
`

const IfP = styled.p`
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 3.819rem;
    letter-spacing: 0.06rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.5rem;
        line-height: 1.909rem;
    }
`

const IfP2 = styled.p`
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 4.296rem;
    letter-spacing: 0.06rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 2rem;
        line-height: 2.387rem;
    }
`

const IfBox2 = styled.div`
    width: 92.9rem;
    height: 110.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 7.2rem;

    @media screen and (max-width: 430px) {
        width: 36.663rem;
        height: 46.022rem;
        margin-top: 4.164rem;
    }
`

const IfInnerBox = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`

const IfInnerImg1 = styled.img`
    width: 50rem;
    border-radius: 0.6rem;

    @media screen and (max-width: 430px) {
        width: 16rem;
        border-radius: 0.4rem;
        content: url(${If2});
    }
`

const IfInnerImg2 = styled.img`
    width: 50rem;
    border-radius: 0.6rem;

    @media screen and (max-width: 430px) {
        width: 16rem;
        border-radius: 0.4rem;
        content: url(${If4});
    }
`

const IfInnerImg3 = styled.img`
    width: 50rem;
    border-radius: 0.6rem;

    @media screen and (max-width: 430px) {
        width: 16rem;
        border-radius: 0.4rem;
        content: url(${If6});
    }
`

const IfInnerImg4 = styled.img`
    width: 50rem;
    border-radius: 0.6rem;

    @media screen and (max-width: 430px) {
        width: 16rem;
        border-radius: 0.4rem;
        content: url(${If8});
    }
`

const RightContainer = styled.div`
    width: 36.2rem;
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 1.6rem;
    padding-top: 1.1rem;

    @media screen and (max-width: 430px) {
        width: 18.1rem;
        gap: 0.598rem;
        padding-top: 0.422rem;
    }
`   

const IfP3 = styled.p`
    font-size: 2.8rem;
    font-weight: 600;
    line-height: 3.341rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.4rem;
        line-height: 1.671rem;
    }
`

const IfP4 = styled.p`
    font-size: 2.2rem;
    font-weight: 400;
    line-height: 3.5rem;
    text-align: justified;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.1rem;
        line-height: 1.5rem;
    }
`

const IfContent = () => {
    return (
        <IfContainer>
            <IfBox>
                <IfP>HSU UMC</IfP>
                <IfP2>챌린저가 된다면,</IfP2>
            </IfBox>

            <IfBox2>
                <IfInnerBox>
                    <IfInnerImg1 src={If1} alt="if" />
                    <RightContainer>
                        <IfP3>파트별 스터디</IfP3>
                        <IfP4>기획, 디자인, 서버, 안드로이드, 웹, iOS 등 6개의 파트로 주 1회 스터디를 진행합니다.
                        </IfP4>
                    </RightContainer>
                </IfInnerBox>

                <IfInnerBox>
                    <IfInnerImg2 src={If3} alt="if" />
                    <RightContainer>
                        <IfP3>아이디어톤</IfP3>
                        <IfP4>아이디어를 바탕으로 다양한 파트의 팀원이 모여 함께 기획을 발전시킵니다.</IfP4>
                    </RightContainer>
                </IfInnerBox>

                <IfInnerBox>
                    <IfInnerImg3 src={If5} alt="if" />
                    <RightContainer>
                        <IfP3>해커톤</IfP3>
                        <IfP4>주어진 시간에 팀이 모여 새로운 아이디어를 발전시키고, 하나의 프로젝트를 개발합니다.</IfP4>
                    </RightContainer>
                </IfInnerBox>

                <IfInnerBox>
                    <IfInnerImg4 src={If7} alt="if" />
                    <RightContainer>
                        <IfP3>데모데이</IfP3>
                        <IfP4>학생들이 기획 · 디자인 · 개발한 서비스를 동료 학생들 앞에서 시연 및 선보입니다.</IfP4>
                    </RightContainer>
                </IfInnerBox>
            </IfBox2>
        </IfContainer>
    )
}

export default IfContent;
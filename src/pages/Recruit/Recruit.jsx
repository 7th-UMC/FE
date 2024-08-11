import { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import RecruitData from "../../utils/Recruit/recruitData";
import Banner from "../../components/Recruit/Banner/Banner";
import People from "../../components/Recruit/People/People";
import Part from "../../components/Recruit/Part/Part";
import ActiveDate from "../../components/Recruit/ActiveDate/ActiveDate";
import RecruitDate from "../../components/Recruit/RecruitDate/RecruitDate";
import Content from "../../components/Recruit/Content/Content";
import Competency from "../../components/Recruit/Competency/Competency";
import Information from "../../components/Recruit/Information/Information";
import SNS from "../../components/Recruit/SNS/SNS";

const RecruitP = styled.p`
    width: 60%;
    font-size: 3.6rem;
    font-weight: 500;
    line-height: 4.296rem;
    color: ${colors.white};
    margin-top: 3rem;

    @media screen and (max-width: 430px) {
        font-size: 2.8rem;
        line-height: 3.341rem;
        margin-top: 2.441rem;
        width: 92%;
    }
`

const RecruitContainer = styled.div`
    width: 60%;

    @media screen and (max-width: 430px) {
        width: 92%;
    }
`

const RecruitButton = styled.button`
    width: 60rem;
    height: 10rem;
    border: none;
    border-radius: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: Pretendard;
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 3.819rem;
    color: ${colors.footerColor};
    background: ${colors.white};
    margin: 13.898rem 0 8rem 0;
    cursor: pointer;

    @media screen and (max-width: 430px) {
        width: 20rem;
        height: 4.4rem;
        border-radius: 0.4rem;
        font-size: 1.8rem;
        line-height: 2.148rem;
        margin: 6rem 0 4.7rem 0;
    }
`

const Recruit = () => {
    const [recruitData, setRecruitData] = useState(RecruitData);

    useEffect(() => {
        setRecruitData(RecruitData);
    }, []);

    const handleButtonClick = () => {
        window.open("https://github.com/7th-UMC", "_blank", "noopener,noreferrer");
    }

    return (
        <div className="pageContainer" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <RecruitP>Recruit</RecruitP>
            <Banner />

            <RecruitContainer>
                <People data={recruitData} />
                <Part data={recruitData} />
                <ActiveDate data={recruitData} />
            </RecruitContainer>
            
            <RecruitDate data={recruitData} />

            <RecruitContainer>
                <Content data={recruitData} />
                <Competency data={recruitData} />
                <Information data={recruitData} />
                <SNS data={recruitData} />
            </RecruitContainer>

            <RecruitButton onClick={handleButtonClick}>지원하기</RecruitButton>
        </div>
    )
}

export default Recruit;
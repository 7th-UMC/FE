import styled from "styled-components";
import IfBackground1 from "../../../assets/images/Home/If/ifBackground1.png";
import IfBackground2 from "../../../assets/images/Home/If/ifBackground2.png";
import IfContent from "./IfContent";

const IfContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BackgroundContainer = styled.div`
    width: 70%;
    position: relative;
    display: flex;
    justify-content: flex-end;

    @media screen and (max-width: 430px) { 
        width: 100%;
    }
`

const BackgroundImg = styled.img`
    width: 35rem;
    z-index: -1;

    @media screen and (max-width: 430px) {
        width: 12.2rem;
        content: url(${IfBackground2});
    }
`

const If = () => {
    return (
        <IfContainer>
            <BackgroundContainer>
                <BackgroundImg src={IfBackground1} alt="if" />
            </BackgroundContainer>

            <IfContent />
        </IfContainer>
    )
}

export default If;
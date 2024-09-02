import styled from "styled-components";
import colors from "../../../styles/colors";
import Information1 from "../../../assets/images/Recruit/Information/information1.png";
import Information2 from "../../../assets/images/Recruit/Information/information2.png";

const ItemContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 1.2rem;
    align-items: flex-start;
    margin-bottom: 0.8rem;

    @media screen and (max-width: 430px) {
        gap: 0.8rem;
    }
`

const ItemImg = styled.img`
    margin-top: 0.8rem;
    width: 2.4rem;

    @media screen and (max-width: 430px) {
        margin-top: 0;
        width: 1.8rem;
        content: url(${Information2});
    }
`

const ItemP = styled.p`
    font-size: 2rem;
    font-weight: 300;
    line-height: 4rem; /* 줄 간 간격을 넓게 설정 */
    color: ${colors.white};
    margin: 0; /* 텍스트 위아래 여백 제거 */

    @media screen and (max-width: 430px) {
        font-size: 1.2rem;
        line-height: 2rem; /* 모바일에서의 줄 간 간격 조정 */
    }
`

const ItemInformation = ({ explain }) => {
    return (
        <ItemContainer>
            <ItemImg src={Information1} alt="information" />
            <ItemP>{explain}</ItemP>
        </ItemContainer>
    )
}

export default ItemInformation;

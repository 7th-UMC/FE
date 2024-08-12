import styled from "styled-components";
import colors from "../../../styles/colors";
import SNS1 from "../../../assets/images/Recruit/SNS/sns1.png";
import SNS2 from "../../../assets/images/Recruit/SNS/sns2.png";

const ItemContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 430px) {
        gap: 0.8rem;
        margin-bottom: 1.4rem;
    }
`

const ItemImg = styled.img`
    width: 2.4rem;

    @media screen and (max-width: 430px) {
        width: 1.8rem;
        content: url(${SNS2});
    }
`

const ItemP = styled.p`
    font-size: 2rem;
    font-weight: 300;
    line-height: 2.387rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.1rem;
        line-height: 1.313rem;
    }
`

const ItemLink = styled.a`
    text-decoration: underline;
    cursor: pointer;
    font-size: 2rem;
    font-weight: 300;
    line-height: 2.387rem;
    color: ${colors.white};

    &:hover {
        color: ${colors.recruitColor2};
    }

    @media screen and (max-width: 430px) {
        font-size: 1.1rem;
        line-height: 1.313rem;
    }
`

const ItemSNS = (props) => {
    const { name, link } = props;

    return (
        <ItemContainer>
            <ItemImg src={SNS1} alt="sns" />

            <ItemP>{name} : </ItemP>
            <ItemLink href={link} target="_blank" rel="noopener noreferrer">{link}</ItemLink>
        </ItemContainer>
    )
}

export default ItemSNS;

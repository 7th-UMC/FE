import styled from "styled-components";
import colors from "../../../../styles/colors";
import ItemTerm from "./item-term";
import Content3 from "../../../../assets/images/Recruit/Content/content3.png";
import Content4 from "../../../../assets/images/Recruit/Content/content4.png";

const ListContainer = styled.div`
    width: 100%;
    margin-top: 2rem;
`

const ListP = styled.p`
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.387rem;
    color: ${colors.white};
    margin-bottom: 2rem;

    @media screen and (max-width: 430px) {
        font-size: 1.6rem;
        line-height: 1.671rem;
        margin-bottom: 1.4rem;
    }
`

const ItemContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    gap: 1.1rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 430px) {
        gap: 0.8rem;
        margin-bottom: 1.1rem;
    }
`

const ContentImg = styled.img`
    width: 2.4rem;

    @media screen and (max-width: 430px) {
        content: url(${Content4});
        width: 1.8rem;
    }
`

const ContentP = styled.p`
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.387rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.2rem;
        line-height: 1.6rem;
    }
`

const ListTerm = ({ data }) => {
    //console.log(data);
    return (
        <ListContainer>
            <ListP>[학기 중]</ListP>
            {data.map((item, index) => (
                <ItemTerm
                    key={index}
                    explain={item.explain}
                />
            ))}
            <ItemContainer>
                <ContentImg src={Content3} alt="content" />
                <ContentP>가르쳐드리는 것이 아닌 스스로 학습이 필요하기 때문에, 파트 별 기초 지식이 필요합니다.</ContentP>
            </ItemContainer>
        </ListContainer>
    )
}

export default ListTerm;
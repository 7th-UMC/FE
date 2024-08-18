import styled from "styled-components";
import colors from "../../../styles/colors";
import ItemIf from "./item-if";

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

const ListIf = ({ data }) => {
    return (
        <IfContainer>
            <IfBox>
                <IfP>HSU UMC</IfP>
                <IfP2>챌린저가 된다면,</IfP2>
            </IfBox>

            <IfBox2>
                {data.map((item) => (
                    <ItemIf
                        key={item.id}
                        id={item.id}
                        homeWeb={item.homeWeb}
                        homeMobile={item.homeMobile}
                        title={item.title}
                        explain={item.explain}
                    />
                ))}
            </IfBox2>
        </IfContainer>
    )
}

export default ListIf;
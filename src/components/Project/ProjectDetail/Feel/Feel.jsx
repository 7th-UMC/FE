import styled from "styled-components";
import ListFeel from "./list-feel";
import colors from "../../../../styles/colors";

const FeelContainer = styled.div`
    width: 100%;
    margin-top: 14rem;

    @media screen and (max-width: 430px) {
        margin-top: 6rem;
    }
`

const FeelP = styled.p`
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 4.296rem;
    color: ${colors.introColor};

    @media screen and (max-width: 430px) {
        font-size: 2rem;
        font-weight: 600;
        line-height: 2.387rem;
    }
`

const Feel = ({ data }) => {
    return (
        <FeelContainer>
            <FeelP>소감</FeelP>
            <ListFeel data={data} />
        </FeelContainer>
    )
}

export default Feel;
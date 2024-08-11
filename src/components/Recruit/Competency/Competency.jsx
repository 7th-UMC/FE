import { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";
import ListCompetency from "./list-competency";

const CompetencyContainer = styled.div`
    width: 100%;
    margin-top: 6rem;

    @media screen and (max-width: 430px) {
        margin-top: 4.5rem;
    }
`

const CompetencyP = styled.p`
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.864rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.6rem;
        line-height: 1.909rem;
    }
`

const Competency = ({ data }) => {
    const [competency, setCompetency] = useState([]);

    useEffect(() => {
        if (data && data.length > 0) {
            setCompetency(data[0].competency);
        }
    }, [data]);

    return (
        <CompetencyContainer>
            <CompetencyP>파트별 필요한 역량</CompetencyP>
            <ListCompetency data={competency} />
        </CompetencyContainer>
    )
}

export default Competency;
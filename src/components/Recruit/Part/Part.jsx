import { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";
import ListPart from "./list-part";

const PartContainer = styled.div`
    width: 100%;
    margin-top: 9.2rem;

    @media screen and (max-width: 430px) {
        margin-top: 5.55rem;
    }
`

const PartP = styled.p`
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.864rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.6rem;
        line-height: 1.909rem;
    }
`

const Part = ({ data }) => {
    const [part, setPart] = useState([]);

    useEffect(() => {
        if (data && data.length > 0) {
            setPart(data[0].part);
        }
    }, [data]);

    return (
        <PartContainer>
            <PartP>모집 파트</PartP>
            <ListPart data={part}/>
        </PartContainer>
    )
}

export default Part;
import { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";
import ListInformation from "./list-information";

const InformationContainer = styled.div`
    width: 100%;
    margin-top: 8rem;

    @media screen and (max-width: 430px) {
        margin-top: 5.6rem;
    }
`

const InformationP = styled.p`
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.864rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.6rem;
        line-height: 1.909rem;
    }
`

const Information = ({ data }) => {
    const [information, setInformation] = useState([]);

    useEffect(() => {
        if (data && data.length > 0) {
            setInformation(data[0].information);
        }
    }, [data]);

    return (
        <InformationContainer>
            <InformationP>활동 안내</InformationP>
            <ListInformation data={information} />
        </InformationContainer>
    )
}

export default Information;
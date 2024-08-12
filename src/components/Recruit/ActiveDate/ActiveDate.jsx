import { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";

const ActiveContainer = styled.div`
    margin-top: 7.5rem;
    height: 7.3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 430px) {
        height: 5.3rem;
        margin-top: 5.55rem;
    }
`

const ActiveP = styled.p`
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.864rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.8rem;
        line-height: 1.909rem;
    }
`

const ActiveP2 = styled.p`
    font-size: 2.2rem;
    font-weight: 300;
    line-height: 2.387rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.5rem;
        line-height: 1.432rem;
    }
`

const ActiveDate = ({ data }) => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [period, setPeriod] = useState("");

    useEffect(() => {
        if (data && data.length > 0) {
            setStartDate(data[0].activeDate.start);
            setEndDate(data[0].activeDate.end);
            setPeriod(data[0].activeDate.period);
        }
    }, [data]);

    return (
        <ActiveContainer>
            <ActiveP>활동 기간</ActiveP>
            <ActiveP2>{startDate} - {endDate} [{period}]</ActiveP2>

        </ActiveContainer>
    )
}

export default ActiveDate;
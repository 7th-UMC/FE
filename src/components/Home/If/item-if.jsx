import { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";
import { motion } from 'framer-motion';

const IfP = styled.p`
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 3.341rem;
  color: ${colors.white};

  @media screen and (max-width: 430px) {
    font-size: 1.4rem;
    line-height: 1.671rem;
  }
`;

const IfP2 = styled.p`
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 3.5rem;
  text-align: justified;
  color: ${colors.white};

  @media screen and (max-width: 430px) {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }
`;

const IfInnerBox = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const IfInnerImg = styled.img`
  width: 50rem;
  border-radius: 0.6rem;

  @media screen and (max-width: 430px) {
    width: 16rem;
    border-radius: 0.4rem;
  }
`;

const RightContainer = styled.div`
  width: 36.2rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 1.6rem;
  padding-top: 1.1rem;

  @media screen and (max-width: 430px) {
    width: 18.1rem;
    gap: 0.598rem;
    padding-top: 0.422rem;
  }
`;

const ItemIf = ({ id, homeWeb, homeMobile, title, explain }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 430);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <IfInnerBox
      key={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.6 }}
    >
      <IfInnerImg src={isMobile ? homeMobile : homeWeb} alt={title} />
      <RightContainer>
        <IfP>{title}</IfP>
        <IfP2>{explain}</IfP2>
      </RightContainer>
    </IfInnerBox>
  );
};

export default ItemIf;
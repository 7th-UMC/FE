import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import FrameData from '../../utils/Photo/frameData';
import { useLocation } from 'react-router-dom';

const ResultContainer = styled.div`
    width: 60%;

    @media screen and (max-width: 430px) {
        width: 92%;
    }
`;

const ImgContainer = styled.div`
    width: 100%;
    margin-top: 8.678rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;

    @media screen and (max-width: 430px) {
        rotate: 90deg;
    }
`;

const FrameContainer = styled.img`
    width: 100%;
    height: 80%;
    z-index: 999;
`;

const PhotoGallery = styled.div`
    width: 80%;
    background: pink;
    grid-template-columns: repeat(2, 1fr);
    display: grid;
    justify-content: center;
    align-items: flex-end;
    position: absolute;
    margin-top: -2%;
`;

const PhotoImg = styled.img`
    width: 100%;
    height: 100%;
`;

const FrameButtonContainer = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-top: ${({ isselectedframe3 }) => (isselectedframe3 === "true" ? '6.5rem' : '4.841rem')};
    z-index: 9999;

    @media screen and (max-width: 430px) {
        margin-top: ${({ isselectedframe3 }) => (isselectedframe3 === "true" ? '12.5rem' : '12rem')};
        gap: 0.6rem;
    }
`;

const FrameButton = styled.div`
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: 50%;
    background: ${({ isselected }) => (isselected === "true" ? colors.white : colors.photoColor3)};
    cursor: pointer;

    @media screen and (max-width: 430px) {
        width: 1rem;
        height: 1rem;
    }
`;

const SubmitButton = styled.div`
    width: 60rem;
    height: 10rem;
    border: none;
    border-radius: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 3.819rem;
    color: ${colors.footerColor};
    background: ${colors.white};
    margin: 10.246rem 0 8rem 0;

    @media screen and (max-width: 430px) {
        width: 30rem;
        height: 5rem;
        border-radius: 0.4rem;
        font-size: 1.6rem;
        line-height: 1.9rem;
        margin-top: 5rem;;
    }
`

const PhotoResult = () => {
    const location = useLocation();
    const state = location.state || { photos: [] };
    const [selectedFrame, setSelectedFrame] = useState(FrameData[0].frameWeb);
        const isSelectedFrame3 = FrameData.find(frame => frame.frameWeb === selectedFrame)?.id === 3;

    const handleFrameChange = (frame) => {
        setSelectedFrame(frame);
    };

    return (
        <div className="pageContainer" style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
            <ResultContainer>
                <ImgContainer>
                    <FrameContainer src={selectedFrame} alt="Frame" />
                    <PhotoGallery>
                        {state.photos.map((photo, index) => (
                            <PhotoImg key={index} src={photo} alt={`Photo ${index + 1}`} />
                        ))}
                    </PhotoGallery>
                </ImgContainer>
            </ResultContainer>
            
            <FrameButtonContainer isselectedframe3={isSelectedFrame3.toString()}>
                {FrameData.map((frameData) => (
                    <FrameButton key={frameData.id} onClick={() => handleFrameChange(frameData.frameWeb)} isselected={(frameData.frameWeb === selectedFrame).toString()}/>
                ))}
            </FrameButtonContainer>

            <SubmitButton>전송하기</SubmitButton>
        </div>
    );
};

export default PhotoResult;

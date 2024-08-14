import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import FrameData from '../../utils/Photo/frameData';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';

const ResultContainer = styled.div`
    width: 60%;
`;

const ImgContainer = styled.div`
    width: 100%;
    margin-top: 8.678rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FrameContainer = styled.img`
    width: 100%;
`;

const PhotoGallery = styled.div`
    width: 72%;
    grid-template-columns: repeat(2, 1fr);
    display: grid;
    position: absolute;
    z-index: -1;
`;


const PhotoImg = styled.img`
    width: 100%;
    height: 100%;
    transform: scaleX(-1);
`;

const FrameButtonContainer = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-top: ${({ isselectedframe3 }) => (isselectedframe3 === "true" ? '6.5rem' : '4.841rem')};
`;

const FrameButton = styled.div`
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: 50%;
    background: ${({ isselected }) => (isselected === "true" ? colors.white : colors.photoColor3)};
    cursor: pointer;
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
`;

const PhotoResult = () => {
    const location = useLocation();
    const state = location.state || { photos: [] };
    const [selectedFrame, setSelectedFrame] = useState(FrameData[0].frameWeb);
    const [rotate, setRotate] = useState(false);
    const imgContainerRef = useRef(null);
    const isSelectedFrame3 = FrameData.find(frame => frame.frameWeb === selectedFrame)?.id === 3;

    const handleFrameChange = (frame) => {
        setSelectedFrame(frame);
    };

    const handleSubmit = () => {
        if (imgContainerRef.current) {
            html2canvas(imgContainerRef.current).then(canvas => {
                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.download = 'umc-photo.png';
                link.click();
            });
        }
    };

    return (
        <div className="pageContainer" style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
            <ResultContainer>
                <ImgContainer ref={imgContainerRef}>
                    <FrameContainer src={selectedFrame} alt="Frame" />
                    <PhotoGallery>
                        {state.photos.map((photo, index) => (
                                <PhotoImg
                                    key={index}
                                    src={photo}
                                    alt={`Photo ${index + 1}`}
                                    
                                />
                        ))}
                    </PhotoGallery>
                </ImgContainer>
            </ResultContainer>
            
            <FrameButtonContainer isselectedframe3={isSelectedFrame3.toString()}>
                {FrameData.map((frameData) => (
                    <FrameButton
                        key={frameData.id}
                        onClick={() => handleFrameChange(frameData.frameWeb)}
                        isselected={(frameData.frameWeb === selectedFrame).toString()}
                    />
                ))}
            </FrameButtonContainer>

            <SubmitButton onClick={handleSubmit}>전송하기</SubmitButton>
        </div>
    );
};

export default PhotoResult;

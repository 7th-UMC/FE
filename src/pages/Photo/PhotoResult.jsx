import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import FrameData from '../../utils/Photo/frameData';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import SavePhotoModal from '../../components/Photo/SavePhotoModal';
import { API } from '../../api/axios';

const ResultContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    overflow: hidden;
`;

const ImgContainer = styled.div`
    width: 100%;
    margin-top: 8.211rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${(props) => 
        props.isSelectedFrame3 ? `1.85rem solid rgba(255, 255, 255, 0)`: `1.85rem solid ${colors.white}`
    };
`;

const FrameContainer = styled.img`
    width: 100%;
    height: auto;
`;

const PhotoGallery = styled.div`
    width: 72%;
    grid-template-columns: repeat(2, 1fr);
    display: grid;
    position: absolute;
    z-index: -1;
    padding: 0;
    margin: 0;
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
    margin-top: 4.88rem;
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
    margin: 5.255rem 0 8rem 0;
`;

const PhotoResult = () => {
    const location = useLocation();
    const state = location.state || { photos: [] };
    const [selectedFrame, setSelectedFrame] = useState(FrameData[0].frameWeb);
    const imgContainerRef = useRef(null);
    const isSelectedFrame3 = FrameData.find(frame => frame.frameWeb === selectedFrame)?.id === 3;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [photoURL, setPhotoURL] = useState('');

    const handleFrameChange = (frame) => {
        setSelectedFrame(frame);
    };

    const uploadImage = async (imageFile) => {
        const formData = new FormData();
        formData.append('photoPicture', imageFile);

        try {
            const response = await API.post('/api/photo/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data.result.photoUrl;
        } catch (error) {
            console.error('Error during the image upload:', error.response?.data || error.message);
            throw error;
        }
    };

    const handleSubmit = () => {
        if (imgContainerRef.current) {
            const originalBorder = imgContainerRef.current.style.border;
            imgContainerRef.current.style.border = 'none';

            html2canvas(imgContainerRef.current).then(async (canvas) => {
                canvas.toBlob(async (blob) => {
                    //console.log('파일 크기:', blob.size / 1024 / 1024, 'MB');
                    try {
                        const uploadedUrl = await uploadImage(blob);
                        setPhotoURL(uploadedUrl);
                        //console.log(uploadedUrl);
                        const link = document.createElement('a');
                        link.href = canvas.toDataURL('image/png');
                        link.download = 'umc-photo.png';
                        link.click();

                        //imgContainerRef.current.style.border = originalBorder;
                        setIsModalOpen(true);
                    } catch (error) {
                        console.error('Error during the image upload:', error);
                    }
                }, 'image/png');
            }).finally(() => {
                imgContainerRef.current.style.border = originalBorder;
            });
        }
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="pageContainer" style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
            <ResultContainer>
                <ImgContainer ref={imgContainerRef} isSelectedFrame3={isSelectedFrame3}>
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
            
            <FrameButtonContainer>
                {FrameData.map((frameData) => (
                    <FrameButton
                        key={frameData.id}
                        onClick={() => handleFrameChange(frameData.frameWeb)}
                        isselected={(frameData.frameWeb === selectedFrame).toString()}
                    />
                ))}
            </FrameButtonContainer>

            <SubmitButton onClick={handleSubmit}>전송하기</SubmitButton>
        
            {isModalOpen && (
                <SavePhotoModal 
                    onClose={handleModalClose} 
                    photoURL={photoURL}
                />
            )}
        </div>
    );
};

export default PhotoResult;

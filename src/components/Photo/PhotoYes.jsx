import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';
import colors from '../../styles/colors';

const fadein = keyframes`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;

const fadeout = keyframes`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
`;

const PhotoContainer = styled.div`
    width: 100%;
    height: calc(100vh - 6rem);
    display: flex;
    justify-content: center;
    position: relative;
    background: ${colors.photoColor};
`;

const Video = styled.video`
    width: 100%;
    height: 100%;
    transform: scaleX(-1);
    object-fit: cover;
`;

const PhotoNumberDiv = styled.div`
    width: 60%;
    position: absolute;
    z-index: 2;
    display: flex;
    justify-content: flex-end;
    margin-top: 4rem;
`;

const PhotoNumber = styled.div`
    width: 7.6rem;
    height: 4.5rem;
    border: 0.1rem solid ${colors.photoColor2};
    border-radius: 50rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2.4rem;
    line-height: 2.864rem;
    font-weight: 600;
    color: ${colors.photoColor2};
`;

const CaptureButton = styled.div`
    width: 60rem;
    height: 10rem;
    border: none;
    border-radius: 0.8rem;
    background: ${colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    bottom: 8rem;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 3.819rem;
    color: ${colors.footerColor};
`;

const PhotoDiv = styled.div`
    position: absolute;
    display: flex;
    width: 60%;
    justify-content: flex-start;
    animation: ${props => props.fadein === 'true' ? css`${fadein} 0.3s ease-out forwards` : 'none'};
    animation: ${props => props.fadeout === 'true' ? css`${fadeout} 0.3s ease-out forwards` : 'none'};
`;

const PhotoImg = styled.img`
    width: 39.9rem;
    height: auto;
    position: absolute;
    transform: scaleX(-1);
    margin-top: 4rem;
`;

const Photo = () => {
    const videoRef = useRef(null);
    const [photos, setPhotos] = useState([]);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [visiblePhotoIndex, setVisiblePhotoIndex] = useState(null);
    const [clickCount, setClickCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const startVideo = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        startVideo();

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const stream = videoRef.current.srcObject;
                const tracks = stream.getTracks();
                tracks.forEach(track => track.stop());
            }
        };
    }, []);

    useEffect(() => {
        if (clickCount >= 4) {
            navigate('/photoresult', { state: { photos } });
            window.location.reload();
        }
    }, [clickCount, navigate, photos]);

    const capturePhoto = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const video = videoRef.current;

        if (video && context) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const dataURL = canvas.toDataURL('image/png');

            setPhotos(prevPhotos => {
                const newPhotos = [...prevPhotos, dataURL];

                setVisiblePhotoIndex(newPhotos.length - 1);

                if (prevPhotos.length > 0) {
                    setFadeOut(true);
                    setTimeout(() => {
                        setPhotos(newPhotos);
                        setFadeOut(false);
                        setFadeIn(true);
                        setTimeout(() => setFadeIn(false), 500);
                    }, 500);
                } else {
                    setPhotos(newPhotos);
                    setFadeIn(true);
                    setTimeout(() => setFadeIn(false), 500);
                }

                return newPhotos;
            });
            setCurrentPhotoIndex(prevIndex => prevIndex + 1);

            setClickCount(prevCount => prevCount + 1);
        }
    };

    return (
        <PhotoContainer>
            <PhotoNumberDiv>
                <PhotoNumber>{currentPhotoIndex + 1}/4</PhotoNumber>
            </PhotoNumberDiv>
            <Video ref={videoRef} />
            <CaptureButton onClick={capturePhoto} disabled={clickCount >= 4}>
                촬영하기
            </CaptureButton>
            {photos.length > 0 && visiblePhotoIndex !== null && (
                <PhotoDiv fadein={fadeIn.toString()} fadeout={fadeOut.toString()}>
                    <PhotoImg src={photos[visiblePhotoIndex]} alt="Capture" />
                </PhotoDiv>
            )}
        </PhotoContainer>
    );
};

export default Photo;

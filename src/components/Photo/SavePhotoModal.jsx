import styled from "styled-components";
import { QRCodeCanvas } from 'qrcode.react'; 
import { fadeIn } from '../../styles/animations';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const ModalContainer = styled.div`
    width: 115rem;  
    height: 45rem; 
    flex-shrink: 0;
    padding-top: 4.5rem;
    background-color: #fff;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 0.5rem rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    animation: ${fadeIn} 0.3s ease-out forwards;
`;

const ModalP = styled.p`
    width: 100%;
    color: #000629;
    font-family: Pretendard;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const QRcontainer = styled.div`
    width: 15rem;
    height: 15rem;
    flex-shrink: 0;
    background: #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center; 
`;

const ButtonDiv = styled.div`
    width: 25rem;
    height: 5rem;
    flex-shrink: 0;
    border: none;
    border-radius: 0.5rem;
    background: #000629;
    color: #FFF;
    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    cursor: pointer;
    margin-top: 1rem;
`;

const SavePhotoModal = ({ onClose, photoURL }) => {
    return (
        <Overlay onClick={onClose}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalP>사진 저장은 아래 QR을 통해 하실 수 있습니다!</ModalP>
            <QRcontainer>
              <QRCodeCanvas value={photoURL} size={180} level="M" />
            </QRcontainer>
            <ButtonDiv onClick={onClose}>저장 완료</ButtonDiv>
          </ModalContainer>
        </Overlay>
    );
}

export default SavePhotoModal;
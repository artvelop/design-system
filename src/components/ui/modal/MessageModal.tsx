import styled from '@emotion/styled';
import { atomMessageModalInfo } from '@src/recoil/messageModal';
import React, { PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useRecoilValue } from 'recoil';
import { Typography } from '../typography/Typography';
import { useMessageModal } from '@hooks/useMessageModal';

export const MessageModal = () => {
  const modalInfo = useRecoilValue(atomMessageModalInfo);
  const { close } = useMessageModal();

  if (!modalInfo.status) {
    return null;
  }

  return (
    <ModalPortal>
      <OverlayContainer>
        <Container>
          <Body>
            <Typography variant="h4" align="center">
              {modalInfo.message}
            </Typography>
          </Body>
          <ConfirmButton onClick={close}>
            <Typography color="white" variant="button">
              확인
            </Typography>
          </ConfirmButton>
        </Container>
      </OverlayContainer>
    </ModalPortal>
  );
};

const ModalPortal = ({ children }: PropsWithChildren) => {
  const modalRoot = document.getElementById('modal-root');
  const el = document.createElement('div');

  useEffect(() => {
    modalRoot?.appendChild(el);

    return () => {
      modalRoot?.removeChild(el);
    };
  }, [el, modalRoot]);

  return createPortal(children, el);
};

const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: 4px;
  padding: 16px;
  width: 360px;
`;

const Body = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 120px;
`;

const ConfirmButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.palette.black};
  color: ${({ theme }) => theme.palette.white};
  border-radius: 4px;
  padding: 8px 16px;
`;

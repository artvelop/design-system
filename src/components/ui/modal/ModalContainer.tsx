import React, { PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from '@emotion/styled';

interface Props {
  isOpen: boolean;
}

export const ModalContainer = ({ children, isOpen }: PropsWithChildren<Props>) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalPortal>
      <OverlayContainer>
        <Container>{children}</Container>
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
  position: relative;
  display: flex;
  z-index: 1000;
  background-color: transparent;
`;

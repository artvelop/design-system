import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Main = () => {
  return (
    <Container>
      <div>Main</div>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => {
    return css`
      background-color: ${theme.palette.primary};
      display: flex;
      width: 100vw;
      height: 100vh;
      align-items: center;
      justify-content: center;
    `;
  }}
`;

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';

export const Container = ({ children }: PropsWithChildren) => {
  return <TabContainer>{children}</TabContainer>;
};

const TabContainer = styled.div`
  ${({ theme }) => {
    return css`
      background-color: ${theme.palette.white};
      border-radius: 4px;
      display: flex;
      padding: 8px;
      gap: 8px;
    `;
  }}
`;

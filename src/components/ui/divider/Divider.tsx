import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

export const Divider = () => {
  return <Content />;
};

const Content = styled.hr`
  ${({ theme }) => css`
    margin: 0px;
    width: 100%;
    flex-shrink: 0;
    border-width: 0px 0px thin;
    border-style: solid;
    border-color: ${theme.palette.color.gray3};
  `}
`;

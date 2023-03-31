import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';

interface Props {
  description: string;
}

export const Tooltip = ({ description, children }: PropsWithChildren<Props>) => {
  return (
    <Wrapper>
      {children}
      <TooltipWrapper>{description}</TooltipWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const TooltipWrapper = styled.div``;

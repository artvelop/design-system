import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';
import { useRef } from 'react';
import { Typography } from '../typography/Typography';

const TOOLTIP_MARGIN = 4;
interface Props {
  description: string;
}

export const Tooltip = ({ description, children }: PropsWithChildren<Props>) => {
  const tooltipRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const wrapperRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  const handleMouseOver = () => {
    const wrapperHeight = wrapperRef.current.clientHeight;

    tooltipRef.current.style.visibility = 'visible';
    tooltipRef.current.style.top = `${wrapperHeight + TOOLTIP_MARGIN}px`;
  };

  const handleMouseOut = () => {
    tooltipRef.current.style.visibility = 'hidden';
  };

  return (
    <Wrapper ref={wrapperRef} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {children}
      <TooltipWrapper ref={tooltipRef}>
        <Typography variant="caption" color="white">
          {description}
        </Typography>
      </TooltipWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

const TooltipWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      width: max-content;
      height: max-content;
      position: absolute;
      z-index: 100;
      visibility: hidden;
      padding: 6px;
      border-radius: 4px;
      background-color: ${theme.palette.color.gray7};
      color: ${theme.palette.white};
      transform: translate(-50%);
      left: 50%;
    `;
  }}
`;

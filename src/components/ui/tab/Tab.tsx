import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useMemo } from 'react';
import { useContext } from 'react';
import { TabContext } from './TabCompound';

interface Props {
  value: string;
  label: string;
}

interface TabStyleProps {
  select: boolean;
}

export const Tab = ({ value, label }: Props) => {
  const { value: currentValue, onChange } = useContext(TabContext);

  const isSelectTabValue = useMemo(() => value === currentValue, [value, currentValue]);
  const handleClickTabValue = () => onChange(value);

  return (
    <TabWrapper onClick={handleClickTabValue} select={isSelectTabValue}>
      {label}
    </TabWrapper>
  );
};

const TabWrapper = styled.div<TabStyleProps>`
  ${({ theme, select }) => {
    if (select) {
      return css`
        cursor: pointer;
        background-color: ${theme.palette.primary};
        border-radius: 4px;
        padding: 8px 16px;
        color: ${theme.palette.white};
      `;
    } else {
      return css`
        cursor: pointer;
        background-color: transparent;
        border-radius: 4px;
        padding: 8px 16px;
        color: ${theme.palette.color.gray6};
      `;
    }
  }}
`;

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useMemo } from 'react';
import { useContext } from 'react';
import { TabContext } from './Index';

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
    const rootStyle = theme.tab.root;
    const selectStyle = theme.tab.select[select ? 'true' : 'false']();

    return css`
      ${rootStyle}
      ${selectStyle}
    `;
  }}
`;

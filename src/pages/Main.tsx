import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Typography } from '@components/ui/typography/Typography';
import { InputCompound } from '@components/ui/input/InputCompound';
import { useState } from 'react';
import { Button } from '@components/ui/button/Button';
import { TabCompound } from '@components/ui/tab/TabCompound';

type MainTabType = 'all' | 'set' | 'this';

export const Main = () => {
  const [inputValue, setInputValue] = useState('');
  const [tabValue, setTabValue] = useState<MainTabType>('all');

  const handleChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleChangeTabValue = (value: MainTabType) => setTabValue(value);

  return (
    <Container>
      <Typography variant="h1">Hello</Typography>
      <Typography variant="h2">Hello</Typography>
      <Typography variant="h3">Hello</Typography>
      <Typography variant="h4">Hello</Typography>
      <Typography variant="h5">Hello</Typography>
      <Typography variant="h6">Hello</Typography>
      <Typography variant="body1">Hello</Typography>
      <Typography variant="body2">Hello</Typography>
      <Typography variant="button">Hello</Typography>
      <Typography variant="caption">Hello</Typography>
      <Typography variant="subtitle1">Hello</Typography>
      <Typography variant="subtitle2">Hello</Typography>
      <Typography variant="overline">Hello</Typography>
      <InputCompound value={inputValue} type="text" onChange={handleChangeInputValue}>
        <InputCompound.Container>
          <InputCompound.Label>이름</InputCompound.Label>
          <InputCompound.Input />
        </InputCompound.Container>
      </InputCompound>
      <Button size="small">HELLO</Button>
      <Button size="small" variant="contained">
        HELLO
      </Button>
      <Button size="small" variant="outlined">
        HELLO
      </Button>
      <Button size="medium">HELLO</Button>
      <Button size="medium" variant="contained">
        HELLO
      </Button>
      <Button size="medium" variant="outlined">
        HELLO
      </Button>
      <Button size="large">HELLO</Button>
      <Button size="large" variant="contained">
        HELLO
      </Button>
      <Button size="large" variant="outlined">
        HELLO
      </Button>
      <TabCompound value={tabValue} onChange={handleChangeTabValue}>
        <TabCompound.Container>
          <TabCompound.Tab value="all" label="전체" />
          <TabCompound.Tab value="set" label="셋팅" />
          <TabCompound.Tab value="this" label="이것" />
        </TabCompound.Container>
      </TabCompound>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => {
    return css`
      background-color: ${theme.palette.color.gray1};
      display: flex;
      width: 100vw;
      height: 100vh;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    `;
  }}
`;

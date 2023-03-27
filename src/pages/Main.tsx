import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Typography } from '@components/ui/typography/Typography';
import { InputCompound } from '@components/ui/input/InputCompound';
import { useState } from 'react';

export const Main = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

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
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => {
    return css`
      background-color: ${theme.palette.white};
      display: flex;
      width: 100vw;
      height: 100vh;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    `;
  }}
`;

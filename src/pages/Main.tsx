import React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Typography } from '@components/ui/typography/Typography';
import { InputCompound } from '@components/ui/input';
import { Button } from '@components/ui/button/Button';
import { TabCompound } from '@components/ui/tab';
import { Tooltip } from '@components/ui/tooltip/Tooltip';
import { Divider } from '@components/ui/divider/Divider';
import { useMessageModal } from '@hooks/useMessageModal';
import { RadioGroup } from '@components/ui/radio/RadioGroup';
import { RadioButton } from '@components/ui/radio/RadioButton';
import { CheckBox } from '@components/ui/chekbox/CheckBox';

type MainTabType = 'all' | 'set' | 'this';
type SelectOptionType = 'like' | 'hate';

export const Main = () => {
  const [inputValue, setInputValue] = useState('');
  const [tabValue, setTabValue] = useState<MainTabType>('all');
  const [selectOption, setSelectOption] = useState<SelectOptionType>('like');
  const [checkValue, setCheckValue] = useState(false);
  const messageModal = useMessageModal();

  const handleChangeCheckInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckValue(event.target.checked);
  };

  const handleChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleChangeTabValue = (value: MainTabType) => setTabValue(value);

  const handleClickOpenModal = () => {
    messageModal.open({
      message: '테스트',
    });
  };

  return (
    <Container>
      <Tooltip description="이것은 탭 입니다">
        <Typography variant="h1">Hello</Typography>
      </Tooltip>
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
      <Button size="small" onClick={handleClickOpenModal}>
        HELLO
      </Button>
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
      <Tooltip description="이것은 탭 입니다">
        <Button size="large" variant="outlined">
          HELLO
        </Button>
      </Tooltip>
      <Tooltip description="이것은 탭 입니다">
        <TabCompound value={tabValue} onChange={handleChangeTabValue}>
          <TabCompound.Container>
            <TabCompound.Tab value="all" label="전체" />
            <TabCompound.Tab value="set" label="셋팅" />
            <TabCompound.Tab value="this" label="이것" />
          </TabCompound.Container>
        </TabCompound>
      </Tooltip>
      <Divider />
      <RadioGroup>
        <RadioButton
          value="like"
          onChangeState={setSelectOption}
          selectOption={selectOption}
          label="좋다"
        />
        <RadioButton
          value="hate"
          onChangeState={setSelectOption}
          selectOption={selectOption}
          label="싫다"
        />
      </RadioGroup>
      <CheckBox checked={checkValue} onChange={handleChangeCheckInput} label="동의" />
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

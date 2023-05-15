import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface Props {
  onSubmit?: () => void;
}

export const RadioGroup = ({ children, onSubmit }: PropsWithChildren<Props>) => {
  return <Form onSubmit={onSubmit}>{children}</Form>;
};

const Form = styled.form`
  display: flex;
`;

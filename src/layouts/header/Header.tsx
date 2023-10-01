import { FC, PropsWithChildren } from 'react';

import * as Styled from './Header.styled';

export const Header: FC<PropsWithChildren> = ({ children }) => {
  return <Styled.Header>{children}</Styled.Header>;
};

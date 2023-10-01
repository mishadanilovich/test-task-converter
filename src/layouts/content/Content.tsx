import { FC, PropsWithChildren } from 'react';

import * as Styled from './Content.styled';

export const Content: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Styled.MainWrapper>
      <Styled.Content>{children}</Styled.Content>
    </Styled.MainWrapper>
  );
};

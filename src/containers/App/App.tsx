import { Content, Header } from '@/layouts';

import { Converter } from '@/containers/Converter';

import { APP_TITLE } from './constants';
import * as Styled from './App.styled';

export const App = () => {
  return (
    <>
      <Header>
        <Styled.Title>{APP_TITLE}</Styled.Title>
      </Header>
      <Content>
        <Converter />
      </Content>
    </>
  );
};

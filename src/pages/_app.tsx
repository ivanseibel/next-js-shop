import type { AppProps } from 'next/app'

import { globalStyles } from '../styles/global'
import logo from '../assets/logo.svg'
import Image from 'next/image';
import { Container, Header, BagContainer } from '../styles/pages/app';
import { Handbag } from 'phosphor-react';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const numberOfItems = 1;
  return (
    <Container>
      <Header>
        <div>
        <Image src={logo} alt="" />
        <BagContainer>
          <Handbag size={24} color={numberOfItems > 0 ? '#fff' : '#8D8D99'} />
          {numberOfItems > 0 && <span>{numberOfItems}</span>}
        </BagContainer>
        </div>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}

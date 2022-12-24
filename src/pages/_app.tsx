import type { AppProps } from 'next/app'

import { globalStyles } from '../styles/global'
import logo from '../assets/logo.svg'
import Image from 'next/image';
import { Container, Header } from '../styles/pages/app';
import { Cart } from '../components/Cart';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <div>
        <Image src={logo} alt="" />
        <Cart />
        </div>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}

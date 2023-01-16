import type { AppProps } from 'next/app'
import { CartProvider } from 'use-shopping-cart';

import { globalStyles } from '../styles/global'
import logo from '../assets/logo.svg'
import Image from 'next/image';
import { Container, Header } from '../styles/pages/app';
import { Cart } from '../components/Cart';
import { useRouter } from 'next/router';

globalStyles();

const STRIPE_PUBLIC_KEY = process.env.STRIPE_PUBLIC_KEY || '';
const NEXT_URL = process.env.NEXT_URL || '';

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()

  return (
    <CartProvider
      mode="payment"
      cartMode='client-only'
      stripe={STRIPE_PUBLIC_KEY}
      successUrl={`${NEXT_URL}/success`}
      cancelUrl={`${NEXT_URL}/`}
      currency="EUR"
      shouldPersist={true}
    >
      <Container>
        <Header centered={pathname === '/success'} >
          <div>
            <Image src={logo} alt="" />
            <Cart />
          </div>
        </Header>
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}

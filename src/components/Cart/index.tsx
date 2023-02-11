import * as Dialog from '@radix-ui/react-dialog'
import Image from "next/image"
import { BagContainer, CheckoutButton, CloseButton, Content, Description, ImageContainer, Overlay, ProductInfoContainer, ProductListContainer, QuantityContainer, Title, TotalContainer } from './styles'
import { Handbag, X } from 'phosphor-react'
import { useShoppingCart } from 'use-shopping-cart';
import { useState } from 'react';
import axios from 'axios';

export function Cart() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const { cartCount, cartDetails, removeItem, clearCart, redirectToCheckout } = useShoppingCart()
  console.log("Cart Details", cartDetails)

  const numberOfItems = cartCount || 0;

  async function handleRedirectUserToCheckout() {
    try {
      setIsCreatingCheckoutSession(true)

      const cartDetailsKeys = Object.keys(Object(cartDetails));

      console.log("Cart Details Keys", cartDetailsKeys)

      const cartInfo = cartDetailsKeys.map((item) => {
        return {
          price: String(cartDetails?.[item].price_id),
          quantity: Number(cartDetails?.[item].quantity),
        };
      });

      const response = await axios.post('/api/checkout', {
        items: cartInfo
      })

      const { checkoutSessionId } = response.data
      clearCart()

      const checkoutResult = await redirectToCheckout(checkoutSessionId)

      if (checkoutResult.error) {
        alert(checkoutResult.error.message)
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        console.log(error.message);
      } else {
        console.log('Unexpected error', error);
      }
      // TODO: handle error and connect to Sentry or so
      alert('We could not process your buy. Try again later.')
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <BagContainer>
          <Handbag size={24} color={numberOfItems > 0 ? '#fff' : '#8D8D99'} />
          {numberOfItems > 0 && <span>{numberOfItems}</span>}
        </BagContainer>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Title>
            {numberOfItems > 0 
            ? (
              <span>
                Your bag - {cartCount} {cartCount === 1 ? 'item' : 'items'}
              </span>
            )
            : (
              <span>
                Your bag is empty
              </span>
            )}
          </Title>
          <Description>
            <ProductListContainer>
              {cartDetails && Object.keys(cartDetails).map((key) => {
                const price = new Intl.NumberFormat('en-IE', {
                  style: 'currency',
                  currency: 'EUR',
                }).format(cartDetails[key].value * cartDetails[key].quantity)
                return (
                  <div key={key}>
                  <ImageContainer>
                    <Image src={cartDetails[key].image || ''} width={100} height={100} alt="" />
                  </ImageContainer>
                  <ProductInfoContainer>
                    <h3>{cartDetails[key].name} ({cartDetails[key].quantity})</h3>
                    <span>
                      {price}
                    </span>
                    <button
                      onClick={() => removeItem(key)}
                    >
                      Remove
                    </button>
                  </ProductInfoContainer>
                </div>
                )
              })}
            </ProductListContainer>
            <footer>
              <QuantityContainer>
                <span>Quantity</span>
                <span>
                  {numberOfItems} {numberOfItems === 1 ? 'item' : 'items'}
                </span>
              </QuantityContainer>
              <TotalContainer>
                <span>Total</span>
                <span>
                  {
                    (cartDetails && Object.keys(cartDetails).reduce((acc, key) => {
                      return acc + (cartDetails[key].value * cartDetails[key].quantity)
                    }, 0))?.toLocaleString('en-IE', {
                      style: 'currency',
                      currency: 'EUR',
                    })
                  }
                </span>
              </TotalContainer>

              <CheckoutButton 
                disabled={numberOfItems===0 && !isCreatingCheckoutSession}
                onClick={handleRedirectUserToCheckout}
              >
                Checkout
              </CheckoutButton>
            </footer>
          </Description>
          <CloseButton>
            <X size={24} />
          </CloseButton>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
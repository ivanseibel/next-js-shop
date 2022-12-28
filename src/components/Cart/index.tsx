import * as Dialog from '@radix-ui/react-dialog'
import { BagContainer, CloseButton, Content, Description, ImageContainer, Overlay, ProductInfoContainer, ProductListContainer, QuantityContainer, Title, TotalContainer } from './styles'
import { Handbag, X } from 'phosphor-react'

export function Cart() {
  const numberOfItems = 1;

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
            Your bag
          </Title>
          <Description>
            <ProductListContainer>
              <div>
                <ImageContainer>
                  <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=480&q=60" alt="Product" />
                </ImageContainer>
                <ProductInfoContainer>
                  <h3>Product name</h3>
                  <span>EUR 19.90</span>
                  <button>Remove</button>
                </ProductInfoContainer>
              </div>
              <div>
                <ImageContainer>
                  <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=480&q=60" alt="Product" />
                </ImageContainer>
                <ProductInfoContainer>
                  <h3>Product name</h3>
                  <span>EUR 19.90</span>
                  <button>Remove</button>
                </ProductInfoContainer>
              </div>
              <div>
                <ImageContainer>
                  <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=480&q=60" alt="Product" />
                </ImageContainer>
                <ProductInfoContainer>
                  <h3>Product name</h3>
                  <span>EUR 19.90</span>
                  <button>Remove</button>
                </ProductInfoContainer>
              </div>
            </ProductListContainer>
            <footer>
              <QuantityContainer>
                <span>Quantity</span>
                <span>1 item</span>
              </QuantityContainer>
              <TotalContainer>
                <span>Total</span>
                <span>EUR 19.90</span>
              </TotalContainer>

              <button>Checkout</button>
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
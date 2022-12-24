import * as Dialog from '@radix-ui/react-dialog'
import { BagContainer, CloseButton, Content, Overlay } from './styles'
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
          <Dialog.Title>
            Your bag
          </Dialog.Title>
          <Dialog.Description>
          </Dialog.Description>
          <CloseButton>
            <X size={24} />
          </CloseButton>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
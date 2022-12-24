import { keyframes, styled } from "../../styles";
import * as Dialog from '@radix-ui/react-dialog';

export const BagContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 48,
  height: 48,
  borderRadius: 6,
  border: 'none',
  backgroundColor: '$gray800',
  cursor: 'pointer',
  position: 'relative',

  'span': {
    height: 24,
    width: 24,
    padding: '0.675rem',

    position: 'absolute',
    top: -8,
    right: -8,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    fontSize: '0.75rem',
    color: '$white',
    lineHeight: 0,
    fontWeight: 'bold',
    
    backgroundColor: '$green500',
    
    borderRadius: '50%',
    border: '3px solid $gray900',
  },
})

export const Overlay = styled(Dialog.Overlay,{
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
})

const slideLeft = keyframes({
  '0%': { 
    opacity: 0,
    transform: 'translateX(50px)' 
  },
  '100%': { 
    opacity: 1,
    transform: 'translateX(0)' 
  },
});

export const Content = styled(Dialog.Content, {
  minWidth: '30rem',
  height: '100%',
  padding: '2rem 3rem',
  backgroundColor: '$gray800',
  position: 'fixed',
  top: '0',
  right: '0',

  animation: `${slideLeft} 0.3s ease 0s 1 normal forwards`,
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  backgroundColor: 'transparent',
  border: 0,
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: 0,
  cursor: 'pointer',
  color: '$white',
})
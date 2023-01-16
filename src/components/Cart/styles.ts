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
  padding: '4.5rem 3rem 3rem 3rem',
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

export const Description = styled(Dialog.Description, {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  height: '100%',
  justifyContent: 'space-between',

  footer: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: 1.6,
  }
})

export const CheckoutButton = styled('button', {
  marginTop: 57,
  fontSize: '$md',
  fontWeight: 'bold',
  color: '$white',
  backgroundColor: '$green500',
  border: 'none',
  cursor: 'pointer',
  borderRadius: 8,
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    disabled: {
      true: {
        backgroundColor: '$gray500',
        cursor: 'not-allowed',
      },
      false: {
        transition: 'background-color 0.2s',

        '&:hover': {
          backgroundColor: '$green300',
        },
      }
    }
  }
})

export const ProductListContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  gap: '1rem',
  marginTop: '2rem',
  marginBottom: '2rem',

  '> div': {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
  }
})

export const ImageContainer = styled('div', {
  width: 102,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '8px', 
  padding: '0.25rem',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  img: {
    objectFit: 'cover',
    width: '100%',
  }
})

export const ProductInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,

  h3: {
    fontSize: '$md',
    fontWeight: 'normal',
    color: '$gray300',
    lineHeight: 1.6,
  },

  span: {
    fontSize: '$md',
    fontWeight: 'bold',
    lineHeight: 1.6,
    marginBottom: '0.5rem',
  },

  button: {
    fontSize: '$sm',
    fontWeight: 'bold',
    color: '$green500',
    lineHeight: 1.6,
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    width: 'fit-content',

    transition: 'color 0.2s',

    '&:hover': {
      color: '$green300',
    }
  },
})

export const QuantityContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  
  '> span:first-child': {
    fontSize: '$sm',
    color: '$gray100',
  },

  '> span:last-child': {
    fontSize: '$md',
    color: '$gray300',
  }
})

export const TotalContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  
  '> span:first-child': {
    fontSize: '$md',
    color: '$gray100',
    fontWeight: 'bold',
  },

  '> span:last-child': {
    fontSize: '$lg',
    color: '$gray300',
    fontWeight: 'bold',
  }
})

export const Title = styled(Dialog.Title, {
});
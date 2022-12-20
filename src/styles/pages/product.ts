import { styled } from "..";

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
  
  maxWidth: '1200px',
  margin: '0 auto',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: '576px',
  height: '656px',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '8px', 
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  img: {
    objectFit: 'cover',
  }
})

export const ProductDetailsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: '8px',
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    transition: 'background-color 0.2s',

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },

    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.6,
    }
  }

})
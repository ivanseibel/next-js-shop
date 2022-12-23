import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: '100vh',
  justifyContent: 'center',
});

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: '1120px',
  margin: '0 auto',

  '> div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export const BagContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 48,
  height: 48,
  borderRadius: 6,
  backgroundColor: '$gray800',
  border: 'none',
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
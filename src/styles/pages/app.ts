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

  variants: {
    'centered': {
      true: {
        '> div': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          '> button': {
            display: 'none',
          },
        },
      },
      false: {
        '> div': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
      },
    },
  },

  // '> div': {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  // },
});


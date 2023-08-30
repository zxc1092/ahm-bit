import type { Theme } from 'theme-ui';
import { configDefault } from './default';

export const configHonda: Theme = {
  ...configDefault,
  fonts: {
    primary: 'Noto Sans, Arial, sans-serif',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#0077c0',
    primaryLight: '#80ceff',
    primaryDark: '#004f80',
    secondary: '#e42525',
    secondaryLight: '#f18e8e',
    secondaryDark: '#710e0e',
    white: '#fff',
    grey: '#777A7E',
    black: '#000',
  },

  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
      borderRadius: 24,
      px: 16,
      py: 8,
      cursor: 'pointer',
      '&:hover': {
        bg: 'text',
      },
    },
    primaryOutlined: {
      bg: 'white',
      color: 'primary',
      borderRadius: 24,
      border: 'solid 1px',
      borderColor: 'primary',
      cursor: 'pointer',
      px: 16,
      py: 8,
      '&:hover': {
        backgroundColor: 'primary',
        color: 'white',
      },
    },
    secondary: {
      color: 'white',
      fill: 'white',
      bg: 'secondary',
      border: 'solid .0625rem',
      borderColor: 'secondary',
      borderRadius: 24,
      px: 16,
      py: 8,
      cursor: 'pointer',
      '&:hover': {
        bg: 'white',
        color: 'secondary',
        fill: 'secondary',
      },
    },
    secondaryOutlined: {
      bg: 'white',
      color: 'secondary',
      fill: 'secondary',
      borderRadius: 24,
      border: 'solid 1px',
      borderColor: 'secondary',
      cursor: 'pointer',
      px: 16,
      py: 8,
      '&:hover': {
        backgroundColor: 'secondary',
        color: 'white',
        fill: 'white',
      },
    },
    swiperDot: {
      borderRadius: '50%',
      bg: 'secondaryLight',
      height: '.5rem',
      width: '.5rem',
      p: 0,
      cursor: 'pointer',
      '&.active': {
        bg: 'secondary',
        height: '1rem',
        width: '1rem',
      },
      '&:hover': {
        bg: 'secondary',
      },
    },
  },
};

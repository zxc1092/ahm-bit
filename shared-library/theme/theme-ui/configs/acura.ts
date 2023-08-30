import type { Theme } from 'theme-ui';
import { configDefault } from './default';

export const configAcura: Theme = {
  ...configDefault,
  fonts: {
    primary: 'Montserrat, Arial, sans-serif',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#e82c2a',
    primaryDark: '#730e0c',
    primaryLight: '#f38d8c',
    secondary: '#000',
    secondaryLight: '#404040',
    white: '#fff',
    grey: '#cdcdcd',
    black: '#000',
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
      borderRadius: 0,
      px: 16,
      py: 8,
      '&:hover': {
        bg: 'text',
      },
    },
    primaryOutlined: {
      bg: 'white',
      color: 'primary',
      borderRadius: 0,
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
      borderRadius: 0,
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
      borderRadius: 0,
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

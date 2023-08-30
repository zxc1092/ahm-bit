/** @jsxImportSource theme-ui */
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import type { SwiperSlideProps, SwiperProps } from 'swiper/react';

export {};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & SwiperProps,
        HTMLElement
      >;
      'swiper-slide': DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & SwiperSlideProps,
        HTMLElement
      >;
    }
  }
}

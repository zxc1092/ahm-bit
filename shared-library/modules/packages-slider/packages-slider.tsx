/** @jsxImportSource theme-ui */
import { DetailedHTMLProps, HTMLAttributes, useRef, useEffect } from 'react';
import { Box, Flex, Button, IconButton, Heading, Text } from 'theme-ui';
import { SwiperOptions } from 'swiper/types';
import type { SwiperSlideProps, SwiperProps } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const { register } = require('swiper/element/bundle');

register();

export type PackageProps = {
  image: string;
  name: string;
  price: string;
  featureList: string[];
  colors: string[];
};

export type PackagesSliderProps = {
  title: string;
  subtitle: string;
  data: PackageProps[];
};

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

export function PackagesSlider({ title, subtitle, data }: PackagesSliderProps) {
  const swiperElRef = useRef<any>(null);
  const paginationElRef = useRef<HTMLDivElement>(null);
  const nextElRef = useRef<HTMLButtonElement>(null);
  const prevElRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (swiperElRef.current) {
      // swiper parameters
      const swiperParams: SwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
          640: {
            slidesPerView: 2,
            slidesOffsetBefore: 200,
          },
          1024: {
            slidesPerView: 3,
          },
        },
        slideActiveClass: 'active',
        pagination: {
          clickable: true,
          el: paginationElRef.current,
          bulletClass: 'bullet',
          bulletActiveClass: 'active',
        },
        navigation: {
          nextEl: nextElRef.current,
          prevEl: prevElRef.current,
        },
        on: {
          init() {
            // ...
          },
        },
      };

      // now we need to assign all parameters to Swiper element
      Object.assign(swiperElRef.current, swiperParams);

      // and now initialize it
      swiperElRef.current.initialize();
    }
  }, []);

  return (
    <Box>
      <Flex sx={{ flexDirection: 'column', alignItems: 'center', pb: 32 }}>
        <Heading variant="title4" sx={{ mb: 12 }}>
          {title}
        </Heading>
        <Text variant="body2">{subtitle}</Text>
      </Flex>
      <swiper-container ref={swiperElRef} init={false}>
        {data.map(({ image, name, price, featureList, colors }, index) => (
          <swiper-slide key={index}>
            <Flex
              sx={{
                flexDirection: 'column',
                border: '.125rem solid',
                borderColor: 'grey',
                boxShadow: 1,
                py: 10,
                '.active &': {
                  borderColor: 'primary',
                },
              }}
            >
              <img
                alt="vehicle shot"
                src={image}
                sx={{
                  mb: 4,
                  borderBottom: '.0625rem solid',
                  borderBottomColor: 'transparent',
                  '.active &': { borderBottomColor: 'primary' },
                }}
              />
              <Flex sx={{ flexDirection: 'column', px: 16 }}>
                <Text variant="body3">{name}</Text>
                <Text variant="body4" sx={{ mb: 16 }}>
                  Starting at {price}
                </Text>
                <ul sx={{ mx: 0, mb: 16, mt: 0, pl: 16 }}>
                  {featureList.map((feature, featureIndex) => (
                    <Text as="li" variant="body4" key={featureIndex}>
                      {feature}
                    </Text>
                  ))}
                </ul>
                <Flex as="ul" sx={{ gap: 8, p: 0 }}>
                  {colors.map((color, colorIndex) => (
                    <Box
                      key={colorIndex}
                      as="li"
                      sx={{
                        backgroundColor: color,
                        height: 24,
                        width: 24,
                        listStyle: 'none',
                        borderRadius: '50%',
                        border: 'solid 1px',
                        borderColor: 'black',
                      }}
                    />
                  ))}
                </Flex>
              </Flex>
            </Flex>
          </swiper-slide>
        ))}
      </swiper-container>
      <Flex
        sx={{ justifyContent: 'center', alignItems: 'center', gap: 8, py: 16 }}
      >
        <IconButton ref={prevElRef} variant="secondaryOutlined" sx={{ p: 0 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="12"
            viewBox="0 0 17 12"
            sx={{ transform: 'rotate(180deg)' }}
          >
            <path d="M16.0303 6.53033C16.3232 6.23744 16.3232 5.76256 16.0303 5.46967L11.2574 0.696699C10.9645 0.403806 10.4896 0.403806 10.1967 0.696699C9.90381 0.989593 9.90381 1.46447 10.1967 1.75736L14.4393 6L10.1967 10.2426C9.90381 10.5355 9.90381 11.0104 10.1967 11.3033C10.4896 11.5962 10.9645 11.5962 11.2574 11.3033L16.0303 6.53033ZM0.5 6.75H15.5V5.25H0.5V6.75Z" />
          </svg>
        </IconButton>
        <Flex
          ref={paginationElRef}
          sx={{
            width: 'auto',
            alignItems: 'center',
            gap: 8,
            '>.bullet': { variant: 'buttons.swiperDot' },
          }}
        />
        <IconButton ref={nextElRef} variant="secondaryOutlined" sx={{ p: 0 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="12"
            viewBox="0 0 17 12"
          >
            <path d="M16.0303 6.53033C16.3232 6.23744 16.3232 5.76256 16.0303 5.46967L11.2574 0.696699C10.9645 0.403806 10.4896 0.403806 10.1967 0.696699C9.90381 0.989593 9.90381 1.46447 10.1967 1.75736L14.4393 6L10.1967 10.2426C9.90381 10.5355 9.90381 11.0104 10.1967 11.3033C10.4896 11.5962 10.9645 11.5962 11.2574 11.3033L16.0303 6.53033ZM0.5 6.75H15.5V5.25H0.5V6.75Z" />
          </svg>
        </IconButton>
      </Flex>
      <Flex sx={{ gap: 24, justifyContent: 'center' }}>
        <Button variant="primary">Build Your ZDX</Button>
        <Button variant="primaryOutlined">Compare Packages</Button>
      </Flex>
    </Box>
  );
}

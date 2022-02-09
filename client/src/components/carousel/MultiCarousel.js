import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { Box, styled } from '@mui/material'

SwiperCore.use([Navigation, Pagination, Autoplay])

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'relative',
  height: 129,
  [theme.breakpoints.down('sm')]: {
    height: 129,
  },
}))

function MultiCarousel({ slidesPerView, spaceBetween, images, autoplay }) {
  return (
    <Swiper
      navigation={true}
      spaceBetween={spaceBetween}
      autoplay={autoplay}
      breakpoints={{
        1: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        960: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }}
    >
      {images.map((img) => {
        return (
          <SwiperSlide key={img.imageUrl}>
            <StyledBox>
              <Image
                src={img.imageUrl}
                alt='apple-watch-1'
                layout='fill'
                objectFit='contain'
                priority
              />
            </StyledBox>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default MultiCarousel

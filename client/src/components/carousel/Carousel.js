import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { Box, styled } from '@mui/material'

import { images } from '../../data/homeCarousel'

SwiperCore.use([Navigation, Pagination, Autoplay])

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'relative',
  height: 360,
  [theme.breakpoints.down('sm')]: {
    height: 180,
  },
}))

function Carousel({ slidesPerView, spaceBetween }) {
  return (
    <Swiper
      navigation={true}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
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
                className='image'
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

export default Carousel

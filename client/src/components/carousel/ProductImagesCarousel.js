import SwiperCore, { Navigation, FreeMode, Thumbs } from 'swiper'
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { Box, styled, Grid } from '@mui/material'

const imgUrl = [
  'https://img.ksp.co.il/item/189427/b_2.jpg?v=3',
  'https://img.ksp.co.il/item/189427/b_3.jpg?v=3',
  'https://img.ksp.co.il/item/189427/b_4.jpg?v=3',
  'https://img.ksp.co.il/item/189427/b_5.jpg?v=3',
  'https://img.ksp.co.il/item/189427/b_6.jpg?v=3',
  'https://img.ksp.co.il/item/189427/b_7.jpg?v=3',
  'https://img.ksp.co.il/item/189427/b_8.jpg?v=3',
  'https://img.ksp.co.il/item/189427/b_9.jpg?v=3',
]

SwiperCore.use([Navigation])

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'relative',
  height: 360,
}))

const StyledBox2 = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'relative',
  height: 60,
}))

const StyledSwiperThumb = styled(Swiper)(({ theme }) => ({
  boxSizing: 'border-box',
  padding: '10px 0',
  '.swiper-slide': {
    height: '100%',
    padding: '8px',
    marginRight: '4px',
    cursor: 'pointer',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  '.swiper-slide-thumb-active': {
    border: '1px solid',
    borderRadius: '6px',
    borderColor: theme.palette.secondary.light,
  },
  '.swiper-button-prev': {
    color: theme.palette.primary.main,
  },
  '.swiper-button-next': {
    color: theme.palette.primary.main,
  },
}))

function ProductImagesCarousel({
  slidesPerView,
  spaceBetween,
  navigation,
  images,
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          navigation={navigation}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs]}
          loop={true}
        >
          {images.map((img) => {
            return (
              <SwiperSlide key={img}>
                <StyledBox>
                  <Image
                    src={img}
                    alt={img}
                    layout='fill'
                    objectFit='contain'
                    priority
                  />
                </StyledBox>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Grid>
      <Grid item xs={12}>
        <StyledSwiperThumb
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={6}
          watchSlidesProgress={true}
          navigation={true}
          modules={[Thumbs]}
          slidesOffsetAfter={8}
          slidesOffsetBefore={8}
        >
          {images.map((img) => {
            return (
              <SwiperSlide key={img}>
                <StyledBox2>
                  <Image
                    src={img}
                    alt='apple-watch-1'
                    layout='fill'
                    className='image'
                    objectFit='contain'
                    priority
                  />
                </StyledBox2>
              </SwiperSlide>
            )
          })}
          <SwiperSlide>
            <div></div>
          </SwiperSlide>
          <SwiperSlide>
            <div></div>
          </SwiperSlide>
        </StyledSwiperThumb>
      </Grid>
    </Grid>
  )
}

export default ProductImagesCarousel

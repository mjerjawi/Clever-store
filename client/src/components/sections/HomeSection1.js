import Carousel from 'components/carousel/Carousel'
import { Box, styled } from '@mui/material'
import { Fragment } from 'react'
import { images } from '../../data/homeCarousel'

const StyledBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6),
}))

const HomeSection1 = () => {
  return (
    <Fragment>
      <StyledBox>
        <Carousel
          slidesPerView={1}
          spaceBetween={0}
          images={images}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          height='360'
        />
      </StyledBox>
    </Fragment>
  )
}

export default HomeSection1

import MultiCarousel from 'components/carousel/MultiCarousel'
import Box from '@mui/material/Box'
import { styled } from '@mui/material'
import { Fragment } from 'react'
import { H1, H2, H3, H6 } from 'components/Typography'
import { brandImages } from '../../data/homeCarousel'

const StyledBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6),
}))

// Brands
const HomeSection2 = () => {
  return (
    <StyledBox>
      <H3 fontWeight='bold' lineHeight='1'>
        Shop by brand
      </H3>
      <Box>
        <MultiCarousel spaceBetween={10} images={brandImages} />
      </Box>
    </StyledBox>
  )
}

export default HomeSection2

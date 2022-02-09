import CleverAvatar from 'components/CleverAvatar'
import CleverButton from 'components/CleverButton'
import LazyImage from 'components/LazyImage'
import { H1, H2, H3, H6 } from 'components/Typography'
import Add from '@mui/icons-material/Add'
import Remove from '@mui/icons-material/Remove'
import { Box, Grid, Container } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useState } from 'react'
import ImageViewer from 'react-simple-image-viewer'
import FlexBox from '../FlexBox'

import ProductImagesCarousel from 'components/carousel/ProductImagesCarousel'

const images = [
  'https://img.ksp.co.il/item/189427/b_2.jpg?v=3',
  'https://img.ksp.co.il/item/189427/b_3.jpg?v=3',
  'https://img.ksp.co.il/item/189427/b_4.jpg?v=3',
  'https://img.ksp.co.il/item/189427/b_5.jpg?v=3',
  'https://img.ksp.co.il/item/189427/b_6.jpg?v=3',
  'https://img.ksp.co.il/item/189427/b_7.jpg?v=3',
  'https://img.ksp.co.il/item/189427/b_8.jpg?v=3',
  'https://img.ksp.co.il/item/189427/b_9.jpg?v=3',
]

const ProductInfo = ({ imgUrl = [], title, price = 200, id }) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const router = useRouter()
  const routerId = router.query.id

  const handleImageClick = (ind) => () => {
    setSelectedImage(ind)
  }

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }

  return (
    <Box width='100%'>
      <H1 mb={2}>{title}</H1>
      <Grid container spacing={3} justifyContent='space-around'>
        <Grid item md={6} xs={12} alignItems='center'>
          <Box>
            <ProductImagesCarousel
              slidesPerView={1}
              spaceBetween={0}
              navigation={false}
              images={images}
            />
          </Box>
        </Grid>

        <Grid item md={6} xs={12} alignItems='center'>
          <FlexBox alignItems='center' mb={2}>
            <Box>Brand:</Box>
            <H6 ml={1}>Xiaomi</H6>
          </FlexBox>

          <Box mb={3}>
            <H2 color='primary.main' mb={0.5} lineHeight='1'>
              ₪{price.toFixed(2)}
            </H2>
            <Box color='inherit'>Stock Available</Box>
          </Box>
          <CleverButton
            variant='contained'
            color='primary'
            sx={{
              mb: '36px',
              px: '1.75rem',
              height: '40px',
            }}
          >
            Add to Cart
          </CleverButton>

          <FlexBox alignItems='center' mb={4.5}>
            <CleverButton
              sx={{
                p: '9px',
              }}
              variant='outlined'
              size='small'
              color='primary'
            >
              <Remove fontSize='small' />
            </CleverButton>
            <CleverButton
              sx={{
                p: '9px',
              }}
              variant='outlined'
              size='small'
              color='primary'
            >
              <Add fontSize='small' />
            </CleverButton>
          </FlexBox>

          <FlexBox alignItems='center' mb={2}>
            <Box>Sold By:</Box>
            <Link href='/shop/fdfdsa'>
              <a>
                <H6 ml={1}>Mobile Store</H6>
              </a>
            </Link>
          </FlexBox>
        </Grid>
      </Grid>
    </Box>
  )
}

ProductInfo.defaultProps = {
  imgUrl: [
    '/assets/images/products/headphone.png',
    '/assets/images/products/hiclipart.com (16).png',
    '/assets/images/products/hiclipart.com (18).png',
  ],
  title: 'LG 77 Inch OLED 4K Smart webOS 5.0 TV OLED77CX',
  price: 1100,
}
export default ProductInfo

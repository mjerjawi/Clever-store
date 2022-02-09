import NavbarLayout from 'components/layout/NavbarLayout'

import ProductInfo from 'components/products/ProductInfo'

import { Box, Tab, Tabs } from '@mui/material'
import { styled } from '@mui/material/styles'
import React, { useState } from 'react'
const StyledTabs = styled(Tabs)(({ theme }) => ({
  marginTop: 80,
  marginBottom: 24,
  minHeight: 0,
  borderBottom: `1px solid ${theme.palette.text.disabled}`,
  '& .inner-tab': {
    fontWeight: 600,
    minHeight: 40,
    textTransform: 'capitalize',
  },
}))

const ProductDetails = () => {
  const state = {
    title: 'LG 77 Inch OLED 4K Smart webOS 5.0 TV OLED77CX',
    price: 1135,
  }
  const [selectedOption, setSelectedOption] = useState(0) //   const classes = useStyles()

  const handleOptionClick = (_event, newValue) => {
    setSelectedOption(newValue)
  }

  return (
    <NavbarLayout>
      <ProductInfo {...state} />
    </NavbarLayout>
  )
}

export default ProductDetails

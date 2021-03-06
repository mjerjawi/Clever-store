import CleverButton from 'components/CleverButton'
import CleverImage from 'components/CleverImage'
import CategoryMenu from 'components/category-menu/CategoryMenu'
import FlexBox from 'components/FlexBox'
import Category from 'components/icons/Category'
import ShoppingBagOutlined from 'components/icons/ShoppingBagOutlined'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import PersonOutline from '@mui/icons-material/PersonOutline'
import {
  Badge,
  Box,
  Container,
  Dialog,
  Drawer,
  IconButton,
  styled,
  useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { layoutConstant } from 'utils/constants'
import clsx from 'clsx'
import Link from 'next/link'
import React, { useState } from 'react'
import SearchBox from '../search-box/SearchBox' // component props interface

// styled component
export const HeaderWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  height: layoutConstant.headerHeight,
  background: theme.palette.background.paper,
  transition: 'height 250ms ease-in-out',
  [theme.breakpoints.down('sm')]: {
    height: layoutConstant.mobileHeaderHeight,
  },
}))

const Header = ({ isFixed, className }) => {
  const [sidenavOpen, setSidenavOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  const toggleSidenav = () => setSidenavOpen(!sidenavOpen)

  const toggleDialog = () => setDialogOpen(!dialogOpen)

  const cartHandle = (
    <Box
      component={IconButton}
      ml={2.5}
      bgcolor='grey.200'
      p={1.25}
      onClick={toggleSidenav}
    >
      <ShoppingBagOutlined />
    </Box>
  )
  return (
    <HeaderWrapper className={clsx(className)}>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <FlexBox
          alignItems='center'
          mr={2}
          minWidth='170px'
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
            },
          }}
        >
          <Link href='/'>
            <a>
              <CleverImage
                height={28}
                mb={0.5}
                src='/assets/images/logo.svg'
                alt='logo'
              />
            </a>
          </Link>

          {isFixed && (
            <CategoryMenu>
              <FlexBox color='grey.600' alignItems='center' ml={2}>
                <CleverButton color='inherit'>
                  <Category fontSize='small' color='inherit' />
                  <KeyboardArrowDown fontSize='small' color='inherit' />
                </CleverButton>
              </FlexBox>
            </CategoryMenu>
          )}
        </FlexBox>

        <FlexBox justifyContent='center' flex='1 1 0'>
          <SearchBox />
        </FlexBox>

        <FlexBox
          alignItems='center'
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
            },
          }}
        >
          <Box
            component={IconButton}
            ml={2}
            p={1.25}
            bgcolor='grey.200'
            onClick={toggleDialog}
          >
            <PersonOutline />
          </Box>
          {cartHandle}
        </FlexBox>

        <Dialog
          open={dialogOpen}
          fullWidth={isMobile}
          scroll='body'
          onClose={toggleDialog}
        ></Dialog>

        <Drawer
          open={sidenavOpen}
          anchor='right'
          onClose={toggleSidenav}
        ></Drawer>
      </Container>
    </HeaderWrapper>
  )
}

export default Header

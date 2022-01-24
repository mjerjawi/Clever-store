import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
// Application
import Image from 'components/CleverImage'
import CleverMenu from 'components/CleverMenu'
import FlexBox from 'components/FlexBox'
import NavLink from 'components/nav-link/NavLink'
import { Span } from 'components/Typography'

// Mui
import { Container, MenuItem } from '@mui/material'
import TouchRipple from '@mui/material/ButtonBase'
import { styled } from '@mui/material/styles'
import { layoutConstant } from 'utils/constants'
import Link from 'next/link'
// Icons
import CallOutlined from '@mui/icons-material/CallOutlined'
import ExpandMore from '@mui/icons-material/ExpandMore'
import MailOutline from '@mui/icons-material/MailOutline'
import LanguageIcon from '@mui/icons-material/Language'

const TopbarWrapper = styled('div')(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  height: layoutConstant.topbarHeight,
  fontSize: 12,
  '& .topbarLeft': {
    '& .logo': {
      display: 'none',
    },
    '& .title': {
      marginLeft: '10px',
    },
    '@media only screen and (max-width: 900px)': {
      '& .logo': {
        display: 'block',
      },
      '& > *:not(.logo)': {
        display: 'none',
      },
    },
  },
  '& .topbarRight': {
    '& .link': {
      paddingRight: 30,
      color: theme.palette.secondary.contrastText,
    },
    '@media only screen and (max-width: 900px)': {
      '& .link': {
        display: 'none',
      },
    },
  },
  '& .smallRoundedImage': {
    height: 15,
    width: 25,
    borderRadius: 2,
  },
  '& .handler': {
    height: layoutConstant.topbarHeight,
  },
  '& .menuTitle': {
    fontSize: 14,
    marginLeft: '0.5rem',
    fontWeight: 600,
  },
  '& .menuItem': {
    minWidth: 100,
  },
  '& .marginRight': {
    marginRight: '1.25rem',
  },
}))

const Topbar = () => {
  const language = {
    en: 'English',
    ar: 'العربية',
  }
  const router = useRouter()
  // const [currency, setCurrency] = useState(currencyList[0])
  const setLocale = async (locale) => {
    await router.push(router.asPath, router.asPath, { locale: locale })
    router.reload()
  }

  const handleLanguageClick = (locale, lang) => () => {
    setLocale(locale)
  }

  useEffect(() => {
    // // get language from browser
    // console.log(navigator.language)
  }, [])
  return (
    <TopbarWrapper>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <FlexBox className='topbarLeft' alignItems='center'>
          <div className='logo'>
            <Link href='/'>
              <Image
                display='block'
                height='28px'
                src='/assets/images/logo.svg'
                alt='logo'
              />
            </Link>
          </div>

          <FlexBox alignItems='center'>
            <CallOutlined fontSize='small' />
            <Span className='title'>+88012 3456 7894</Span>
          </FlexBox>
          <FlexBox alignItems='center' ml={2.5}>
            <MailOutline fontSize='small' />
            <Span className='title'>support@ui-lib.com</Span>
          </FlexBox>
        </FlexBox>

        <FlexBox className='topbarRight' alignItems='center'>
          <LanguageIcon fontSize='small' />
          <CleverMenu
            handler={
              <TouchRipple className='handler'>
                <Span className='menuTitle'>{language[router.locale]}</Span>
                <ExpandMore fontSize='small' />
              </TouchRipple>
            }
          >
            {languageList.map((item) => (
              <MenuItem
                className='menuItem'
                key={item.id}
                onClick={handleLanguageClick(item.value, item)}
              >
                <Span className='menuTitle'>{item.title}</Span>
              </MenuItem>
            ))}
          </CleverMenu>
        </FlexBox>
      </Container>
    </TopbarWrapper>
  )
}

const languageList = [
  {
    id: 1,
    title: 'English',
    value: 'en',
  },
  {
    id: 2,
    title: 'العربية',
    value: 'ar',
  },
]

export default Topbar

import * as React from 'react'

import MuiTheme from 'theme/MuiTheme'

import PropTypes from 'prop-types'
import Head from 'next/head'

import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'

import createEmotionCache from '../src/createEmotionCache'

import RtlProvider from 'components/RTL/RtlProvider'
import { appWithTranslation } from 'next-i18next'

const clientSideEmotionCache = createEmotionCache()

function _App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <MuiTheme>
        <RtlProvider>
          <div>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </div>
        </RtlProvider>
      </MuiTheme>
    </CacheProvider>
  )
}

_App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}

export default appWithTranslation(_App)

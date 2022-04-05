import * as React from 'react'

// MUI theme
import MuiTheme from 'theme/MuiTheme'
import PropTypes from 'prop-types'

import Head from 'next/head'
// emotion cashe
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '../src/createEmotionCache'
// RTl + i18n provider
import RtlProvider from 'components/RTL/RtlProvider'
import { appWithTranslation } from 'next-i18next'

// Nhost-Auth
import { NhostNextProvider } from '@nhost/nextjs'
import { NhostApolloProvider } from '@nhost/react-apollo'
import { nhost } from '../helpers'

const clientSideEmotionCache = createEmotionCache()

function _App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
        <NhostApolloProvider nhost={nhost}>
          <MuiTheme>
            <RtlProvider>
              <div>
                <CssBaseline />
                <Component {...pageProps} />
              </div>
            </RtlProvider>
          </MuiTheme>
        </NhostApolloProvider>
      </NhostNextProvider>
    </CacheProvider>
  )
}

_App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}

export default appWithTranslation(_App)

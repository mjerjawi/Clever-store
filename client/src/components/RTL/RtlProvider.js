import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import rtl from 'stylis-plugin-rtl'
import { useRouter } from 'next/router'

const options = {
  rtl: { key: 'css-ar', stylisPlugins: [rtl] },
  ltr: { key: 'css-en' },
}

export default function RtlProvider({ children }) {
  const { locale } = useRouter()
  const dir = locale == 'ar' ? 'rtl' : 'ltr'
  const cache = createCache(options[dir])
  return <CacheProvider value={cache} children={children} />
}

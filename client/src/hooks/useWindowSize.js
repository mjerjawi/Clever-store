import { debounce } from '@mui/material/utils'
import { useCallback, useEffect, useState } from 'react'

const useWindowSize = () => {
  const [width, setWidth] = useState(0)

  const windowListener = useCallback(
    debounce(() => {
      if (window) setWidth(window.innerWidth)
    }, 250),
    []
  )

  useEffect(() => {
    if (window) {
      setWidth(window.innerWidth)
      window.addEventListener('resize', windowListener)
    }
    return () => {
      windowListener.clear()
      window && window.removeEventListener('resize', windowListener)
    }
  }, [])

  return width
}

export default useWindowSize

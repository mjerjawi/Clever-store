import SearchOutlined from '@mui/icons-material/SearchOutlined'
import { Box, Card, MenuItem, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import { debounce } from '@mui/material/utils'
import Link from 'next/link'
import React, { useCallback, useEffect, useRef, useState } from 'react'

export const SearchOutlinedIcon = styled(SearchOutlined)(({ theme }) => ({
  color: theme.palette.grey[600],
  marginRight: 6,
}))

export const SearchResultCard = styled(Card)(() => ({
  position: 'absolute',
  top: '100%',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  width: '100%',
  zIndex: 99,
}))

const SearchBox = () => {
  const [resultList, setResultList] = useState([])
  const parentRef = useRef()

  const search = debounce((e) => {
    const value = e.target?.value
    if (!value) setResultList([])
    else setResultList(dummySearchResult)
  }, 10)
  const hanldeSearch = useCallback((event) => {
    event.persist()
    search(event)
  }, [])

  const handleDocumentClick = () => {
    setResultList([])
  }

  useEffect(() => {
    window.addEventListener('click', handleDocumentClick)
    return () => {
      window.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  return (
    <Box
      position='relative'
      flex='1 1 0'
      maxWidth='670px'
      mx='auto'
      {...{
        ref: parentRef,
      }}
    >
      <TextField
        variant='outlined'
        placeholder='Searching for...'
        fullWidth
        onChange={hanldeSearch}
        InputProps={{
          sx: {
            height: 44,
            borderRadius: 300,
            paddingRight: 0,
            color: 'grey.700',
            overflow: 'hidden',
          },
          startAdornment: <SearchOutlinedIcon fontSize='small' />,
        }}
      />

      {!!resultList.length && (
        <SearchResultCard elevation={2}>
          {resultList.map((item) => (
            <Link href={`/product/search/${item}`} key={item}>
              <MenuItem key={item}>{item}</MenuItem>
            </Link>
          ))}
        </SearchResultCard>
      )}
    </Box>
  )
}

const dummySearchResult = [
  'Macbook Air 13',
  'Asus K555LA',
  'Acer Aspire X453',
  'iPad Mini 3',
]
export default SearchBox

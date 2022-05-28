import { useState } from 'react'
import { useNhostClient } from '@nhost/nextjs'

const Products = () => {
  const [image, setImage] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [error, setError] = useState('no errors')

  const nhost = useNhostClient()

  function handleChange(e) {
    setImage(e.target.files[0])
    setImageUrl(URL.createObjectURL(e.target.files[0]))
  }

  const handleUpload = async (e) => {
    e.preventDefault()
    const fileUploadRes = await nhost.storage.upload({ image })
    if (fileUploadRes.error) {
      setError(fileUploadRes.error.toString())
    }
    console.log(image)
    console.log(fileUploadRes)
    console.log(nhost.auth.getUser())
    console.log(typeOf(image))
  }
  return (
    <div>
      <input
        name='file'
        type='file'
        placeholder='Upload your file'
        onChange={handleChange}
      />
      <br />

      <img src={imageUrl} />
      <p>{error}</p>
      <button type='button' onClick={handleUpload}>
        Add Products
      </button>
    </div>
  )
}

export default Products

import React, {useState} from 'react'

const initialProduct = {
  title: "Titulo",
  description: "Description"
}

const ProductApp = () => {
  const [product, setProduct] = useState(initialProduct)

  const updateProduct = (property, value) => {
    setProduct({
      ...product,
      [property]: value
    })
  }

  return (
    <div>
      <h1>ProductApp</h1>
      <button onClick={ () => updateProduct("title", "Nuevo Titulo")} >
        Update
      </button>
      <h1>{product.title}</h1>
      <h1>{product.description}</h1>

    <pre>{JSON.stringify(product, null, 2)}</pre>

    </div>
  )
}

export default ProductApp

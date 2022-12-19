import { useRouter } from 'next/router'
import { ImageContainer, ProductContainer, ProductDetailsContainer } from '../../styles/pages/product'

  const { isFallback } = useRouter();

  // Replace in the future with a loading component (skeleton)
  if (isFallback) {
    return <p>Loading...</p>
  }

  return (
    <ProductContainer>
      <ImageContainer>
      </ImageContainer>
      <ProductDetailsContainer>
        <h1>Product {id}</h1>
        <span>EUR 29.90</span>

        <p>Quis laborum irure minim excepteur culpa qui sunt.</p>

        <button>
          Add to cart
        </button>
      </ProductDetailsContainer>
    </ProductContainer>
  )
}
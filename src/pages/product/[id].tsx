import { useRouter } from 'next/router'
import { ImageContainer, ProductContainer, ProductDetailsContainer } from '../../styles/pages/product'

export default function Product() {
  const router = useRouter()
  const { id } = router.query

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
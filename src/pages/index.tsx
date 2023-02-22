import Stripe from "stripe"
import { useShoppingCart } from "use-shopping-cart"
import { stripe } from "../lib/stripe"
import Head from "next/head"
import Image from "next/image"
import { GetStaticProps } from "next"
import {useKeenSlider} from "keen-slider/react"

import { BagContainer, HomeContainer, Product } from "../styles/pages/home"
import 'keen-slider/keen-slider.min.css'
import Link from "next/link"
import { Handbag } from "phosphor-react"
import { Description } from '../components/Cart/styles';

interface Product {
  id: string
  name: string
  description: string
  imageUrl: string
  price: string
  priceAsNumber: number
  defaultPriceId: string
}

interface HomeProps {
  products: Product[]
}

export default function Home({ products }: HomeProps) {
  const { addItem } = useShoppingCart()

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  function handleAddItem(product: Product) {
    addItem({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.priceAsNumber,
      currency: 'EUR',
      image: product.imageUrl,
      price_id: product.defaultPriceId
    })
  }

  return (
    <>
      <Head>
        <title>Ignite Shop | Home</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => (
          <Link key={product.id} href="#" onClick={() => handleAddItem(product)} >
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />

              <footer>
                <div>
                  <strong>
                    {product.name}
                  </strong>
                  <span>
                    {product.price}
                  </span>
                </div>
                <BagContainer>
                  <Handbag size={32} />
                </BagContainer>
              </footer>
            </Product>
          </Link>
        ))}

      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('en-IE', {
        style: 'currency',
        currency: 'EUR',
      }).format(price.unit_amount! / 100),
      priceAsNumber: price.unit_amount! / 100,
      defaultPriceId: price.id
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}

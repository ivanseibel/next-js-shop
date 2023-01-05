import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, ProductsContainer, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  customerName: string;
  product: {
    name: string;
    pictureUrl: string;
    quantity: number;
  };
}

export default function Success({ customerName, product }: SuccessProps) {
  const textProductsOnTheWay = product.quantity === 1 
    ? `${product.name} is on the way!` 
    : `${product.quantity} t-shirts are on the way!`

  return (
    <>
      <Head>
        <title>Ignite Shop | Your buy was successful</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>

        <ProductsContainer>
          <ImageContainer>
            <Image src={product.pictureUrl} width={120} height={110} alt="" />
          </ImageContainer>
          <ImageContainer>
            <Image src={product.pictureUrl} width={120} height={110} alt="" />
          </ImageContainer>
          <ImageContainer>
            <Image src={product.pictureUrl} width={120} height={110} alt="" />
          </ImageContainer>
        </ProductsContainer>

        <h1>
          Your buy was successful!
        </h1>

        <p>
          Uhuull <strong>{customerName}</strong>, your {textProductsOnTheWay}!
        </p>

        <Link href={"/"}>
          Go back to home
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  
  const sessionId = query.session_id.toString()

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"]
  })

  const customerName = session.customer_details?.name || "Guest"
  const product = session.line_items?.data[0].price?.product as Stripe.Product

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        pictureUrl: product.images[0],
        quantity: session.line_items?.data.length
      }
    }
  }
}
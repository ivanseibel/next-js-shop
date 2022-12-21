import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  customerName: string;
  product: {
    name: string;
    pictureUrl: string;
  };
}

export default function Success({ customerName, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Ignite Shop | Your buy was successful</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>
          Your buy was successful!
        </h1>

        <ImageContainer>
          <Image src={product.pictureUrl} width={120} height={110} alt="" />
        </ImageContainer>

        <p>
          Uhuull <strong>{customerName}</strong>, your <strong>{product.name}</strong> is on the way!
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
        pictureUrl: product.images[0]
      }
    }
  }
}
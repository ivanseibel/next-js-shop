import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { items } = req.body;
  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  if (req.method !== "POST") {
    return res.setHeader("Allow", "POST").status(405).end("Method not allowed");
  }

  if (!items) {
    return res.status(400).json({ message: "Price ID is required" });
  }
  
  const lineItems = items.map((item: { price: string, quantity: number}) => {
    return {
      price: item.price,
      quantity: item.quantity,
    }
  })

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: lineItems,
  })

  return res.status(201).json({
    checkoutSessionId: checkoutSession.id,
  })
}
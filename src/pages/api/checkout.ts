import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { priceId } = req.body;
  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  if (req.method !== "POST") {
    return res.setHeader("Allow", "POST").status(405).end("Method not allowed");
  }

  if (!priceId) {
    return res.status(400).json({ message: "Price ID is required" });
  }
  
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      }
    ],
    success_url: successUrl,
    cancel_url: cancelUrl,
  });

  return res.status(201).json({ checkoutUrl: checkoutSession.url });
}
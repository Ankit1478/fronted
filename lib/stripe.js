
'use server';

import Stripe from 'stripe';

import initializeFirebaseApp from '@/lib/firebase';

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

initializeFirebaseApp();

export const createCheckoutSession = async ({ customer, ...params } = {}, user) => {
  if (!customer) {
    const _customer = await stripe.customers.create({
      name: user.email || user.uid,
      metadata: { uid: user.uid },
    });

    if (!_customer) return {};

    customer = _customer.id;
  }

  const session = await stripe.checkout.sessions.create({
    customer,
    line_items: [
      {
        price: process.env.STRIPE_PRICE_PRO_MONTHLY,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    ...params,
  });

  return session;
};

export const createBillingPortal = async (params) =>
  await stripe.billingPortal.sessions.create(params);
import { loadStripe } from '@stripe/stripe-js';

let StripePromise;

const getStripe = () => {
    if(!StripePromise) {
        StripePromise = loadStripe(process.env.
            NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    }

    return StripePromise;
}

export default getStripe;
import Stripe from 'stripe';
import { StripeOptions } from './../interfaces';
export declare function getStripeClient({ apiKey, apiVersion, typescript, ...options }: StripeOptions): Stripe;

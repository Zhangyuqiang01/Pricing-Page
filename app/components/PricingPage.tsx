'use client';
import { useState } from 'react';
import styles from './pricing.module.css';

export interface PricingTierFrequency {
  id: string;
  value: string;
  label: string;
  priceSuffix: string;
}

export interface PricingTier {
  name: string;
  id: string;
  href: string;
  discountPrice: string | Record<string, string>;
  price: string | Record<string, string>;
  description: string | React.ReactNode;
  features: string[];
  featured?: boolean;
  highlighted?: boolean;
  cta: string;
  soldOut?: boolean;
}

export const frequencies: PricingTierFrequency[] = [
  { id: '1', value: '1', label: 'Quarter', priceSuffix: '/quarter' },
  { id: '2', value: '2', label: 'Annually', priceSuffix: '/year' },
];

export const tiers: PricingTier[] = [
  {
    name: 'Basic',
    id: '0',
    href: '/subscribe',
    price: { '1': '$199', '2': '$699' },
    discountPrice: { '1': '', '2': '' },
    description: 'Ideal for small agencies just starting with influencer marketing',
    features: [
      'Core Tool Access',
      'Basic Analytics',
      'Full Influencer Database',
      'Up to 10 Videos/Month',
      'Basic Customer Support',
    ],
    featured: false,
    highlighted: false,
    soldOut: false,
    cta: 'Get started',
  },
  {
    name: 'Premium',
    id: '1',
    href: '/subscribe',
    price: { '1': '$599', '2': '$1999' },
    discountPrice: { '1': '', '2': '' },
    description: 'Aimed at agencies with moderate influencer.',
    features: [
      'AI-powered Creater Sourcing',
      'Audience Insight Reports',
      'Full Influencer Database',
      'Up to 35 Videos/Month',
      'Priority Customer Support',
    ],
    featured: false,
    highlighted: true,
    soldOut: false,
    cta: 'Get started',
  },
  {
    name: 'Enterprise',
    id: '2',
    href: '/contact-us',
    price: { '1': '$1499', '2': '$4999' },
    discountPrice: { '1': '', '2': '' },
    description: 'Suited for large agencies managing multiple clients and campaigns',
    features: [
      'Customizable Analytics',
      'Integration Support & Training',
      'Full influencer Database',
      'Up to 100 Videos/Month',
      'Dedicated Account Manager',
    ],
    featured: true,
    highlighted: false,
    soldOut: false,
    cta: 'Get started',
  },
];

const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn('w-6 h-6', className)}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const cn = (...args: Array<string | boolean | undefined | null>) =>
  args.filter(Boolean).join(' ');

export default function PricingPage() {
  const [frequency, setFrequency] = useState(frequencies[0]);

  const bannerText = '';

  return (
    <div
      className={cn('flex flex-col w-full items-center', styles.fancyOverlay)}
    >
      <div className="w-full flex flex-col items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
          <div className="w-full lg:w-auto mx-auto max-w-4xl lg:text-center">
            <h1 className="text-black dark:text-white text-4xl font-semibold max-w-xs sm:max-w-none md:text-6xl !leading-tight">
              Pricing
            </h1>
          </div>

          {bannerText ? (
            <div className="w-full lg:w-auto flex justify-center my-4">
              <p className="w-full px-4 py-3 text-xs bg-slate-100 text-black dark:bg-slate-300/30 dark:text-white/80 rounded-xl">
                {bannerText}
              </p>
            </div>
          ) : null}

          {frequencies.length > 1 ? (
            <div className="mt-16 flex justify-center">
              <div
                role="radiogroup"
                className="grid gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 bg-white dark:bg-black ring-1 ring-inset ring-gray-200/30 dark:ring-gray-800"
                style={{
                  gridTemplateColumns: `repeat(${frequencies.length}, minmax(0, 1fr))`,
                }}
              >
                <p className="sr-only">Payment frequency</p>
                {frequencies.map((option) => (
                  <label
                    className={cn(
                      frequency.value === option.value
                        ? 'bg-[#224880] text-white dark:bg-slate-900/70 dark:text-white/70'
                        : 'bg-transparent text-gray-500 hover:bg-slate-500/10',
                      'cursor-pointer rounded-full px-2.5 py-2 transition-all',
                    )}
                    key={option.value}
                    htmlFor={option.value}
                  >
                    {option.label}

                    <button
                      value={option.value}
                      id={option.value}
                      className="hidden"
                      role="radio"
                      aria-checked={frequency.value === option.value}
                      onClick={() => {
                        setFrequency(
                          frequencies.find(
                            (f) => f.value === option.value,
                          ) as PricingTierFrequency,
                        );
                      }}
                    >
                      {option.label}
                    </button>
                  </label>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-12" aria-hidden="true"></div>
          )}

          <div
            className={cn(
              'isolate mx-auto mt-4 mb-28 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none select-none',
              tiers.length === 2 ? 'lg:grid-cols-2' : '',
              tiers.length === 3 ? 'lg:grid-cols-3' : '',
            )}
          >
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={cn(
                  tier.featured
                    ? '!bg-gray-900 ring-gray-900 dark:!bg-gray-100 dark:ring-gray-100'
                    : 'bg-white dark:bg-gray-900/80 ring-gray-300/70 dark:ring-gray-700',
                  'max-w-xs ring-1 rounded-3xl p-8 xl:p-10',
                  tier.highlighted ? styles.fancyGlassContrast : '',
                )}
              >
                <h3
                  id={tier.id}
                  className={cn(
                    tier.featured ? 'text-white dark:text-black' : 'text-black dark:text-white',
                    'text-2xl font-bold tracking-tight',
                  )}
                >
                  {tier.name}
                </h3>
                <p
                  className={cn(
                    tier.featured
                      ? 'text-gray-300 dark:text-gray-500'
                      : 'text-gray-600 dark:text-gray-400',
                    'mt-4 text-sm leading-6',
                  )}
                >
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span
                    className={cn(
                      tier.featured ? 'text-white dark:text-black' : 'text-black dark:text-white',
                      'text-4xl font-bold tracking-tight',
                      tier.discountPrice && typeof tier.discountPrice !== 'string' && tier.discountPrice[frequency.value]
                        ? 'line-through'
                        : '',
                    )}
                  >
                    {typeof tier.price === 'string'
                      ? tier.price
                      : tier.price[frequency.value]
                    }
                  </span>

                  <span
                    className={cn(
                      tier.featured ? 'text-white dark:text-black' : 'text-black dark:text-white',
                    )}
                  >
                    {typeof tier.discountPrice === 'string'
                      ? tier.discountPrice
                      : tier.discountPrice[frequency.value]}
                  </span>

                  {typeof tier.price !== 'string' ? (
                    <span
                      className={cn(
                        tier.featured ? 'text-white dark:text-black' : 'text-black dark:text-white',
                        'text-base font-normal',
                      )}
                    >
                      {frequency.priceSuffix}
                    </span>
                  ) : null}
                </p>
                <ul role="list" className="mt-8 space-y-5 text-sm leading-6 text-gray-500 dark:text-gray-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-[#224880]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  {tier.soldOut ? (
                    <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                      Sold out
                    </div>
                  ) : (
                    <a
                      href={tier.href}
                      className={cn(
                        'w-full inline-flex items-center justify-center rounded-xl border border-transparent bg-[#224880] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#224880]/90 focus:outline-none focus:ring-2 focus:ring-[#224880]/50 focus:ring-offset-2 focus:ring-offset-white dark:bg-slate-900 dark:text-white dark:ring-2 dark:ring-offset-[#101010]',
                        tier.featured && 'dark:bg-white dark:text-black',
                      )}
                    >
                      {tier.cta}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { DefaultSeo } from 'next-seo';
import { getDefaultNextSeo } from '../seo/seo.config';

export default function DefaultSeoComponent() {
  const defaultSeoProps = getDefaultNextSeo();
  
  return (
    <DefaultSeo
      {...defaultSeoProps}
      facebook={{
        appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || undefined,
      }}
      twitter={{
        ...defaultSeoProps.twitter,
        site: defaultSeoProps.twitter?.site || '@BritFintech',
      }}
    />
  );
}
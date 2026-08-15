export default function robots() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adv-p-r-rathy.in';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

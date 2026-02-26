# SEO Implementation for Social Media Sharing

This document explains how the SEO has been implemented for proper social media sharing previews on platforms like WhatsApp, Instagram, Facebook, and Twitter.

## Key Features Implemented

1. **Proper Open Graph Tags**: All pages now include complete Open Graph meta tags for rich previews
2. **Twitter Card Support**: Twitter-specific meta tags for summary cards with large images
3. **Canonical URLs**: Proper canonical URLs to prevent duplicate content issues
4. **Responsive Images**: Optimized images with proper dimensions (1200x630px) for social sharing
5. **Structured Data**: JSON-LD structured data for better search engine understanding

## How It Works

### Server-Side Rendering (SSR)
- Each page includes a `head.js` file that generates meta tags server-side
- Meta tags are injected directly into the HTML for immediate availability
- This ensures social media crawlers get the correct metadata immediately

### Client-Side Updates
- The `RouteSeo` component updates meta tags when users navigate between pages
- This ensures meta tags stay accurate during client-side navigation

## Testing Your Implementation

### Method 1: Social Media Debuggers
1. **Facebook**: Use the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. **Twitter**: Use the [Twitter Card Validator](https://cards-dev.twitter.com/validator)
3. **LinkedIn**: Use the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### Method 2: Manual Testing
1. Deploy your site to a public URL
2. Share the URL on WhatsApp or Instagram
3. Check that:
   - Title appears correctly
   - Description appears correctly
   - Image preview appears correctly

### Method 3: Local Testing with ngrok
1. Install ngrok: `npm install -g ngrok`
2. Run your Next.js app: `npm run dev`
3. Expose your local server: `ngrok http 3000`
4. Use the ngrok URL to test with social media debuggers

## Customizing SEO Per Page

To customize SEO for specific pages:

1. Edit `src/seo/seo.config.js`
2. Add or modify entries in the `seoByPath` object:

```javascript
export const seoByPath = {
  "/custom-page": {
    title: "Custom Page Title",
    description: "Custom page description",
    openGraph: {
      title: "Custom Page Title",
      description: "Custom page description",
      url: `${siteBaseUrl}/custom-page`,
      siteName,
      images: [{ url: "/assets/img/og/custom.jpg", width: 1200, height: 630, alt: "Custom" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Page Title",
      description: "Custom page description",
      images: ["/assets/img/og/custom.jpg"],
    },
  },
  // ... other paths
};
```

## Adding New OG Images

1. Place images in `public/assets/img/og/`
2. Use JPG format with 1200x630px dimensions
3. Reference them in your SEO config:

```javascript
images: [{ url: "/assets/img/og/your-image.jpg", width: 1200, height: 630, alt: "Description" }]
```

## Troubleshooting

### Issue: No Image Preview
1. Check that images exist at the specified URLs
2. Verify image dimensions are 1200x630px
3. Ensure images are publicly accessible

### Issue: Wrong Title/Description
1. Check the `seoByPath` configuration in `seo.config.js`
2. Verify the path matches exactly

### Issue: Changes Not Reflecting
1. Clear cache in social media debuggers
2. Wait 24-48 hours for some platforms to refresh
3. Check that you're testing the deployed version, not localhost

## Best Practices Followed

1. **Image Size**: All OG images are 1200x630px (recommended size)
2. **Absolute URLs**: All image URLs are absolute for proper crawling
3. **Fallback Content**: Default SEO values ensure no missing metadata
4. **Performance**: Minimal JavaScript for SEO updates
5. **Standards Compliant**: Following Open Graph and Twitter Card specifications

## Future Improvements

Consider implementing:
1. Dynamic image generation based on page content
2. Video Open Graph support for pages with video content
3. Article-specific metadata for blog posts
4. Locale-specific metadata for internationalization
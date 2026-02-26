/**
 * Utility functions for SEO testing and validation
 */

/**
 * Validate that all required SEO properties are present
 */
export function validateSeo(seo) {
  const errors = [];
  
  if (!seo.title) {
    errors.push('Missing title');
  }
  
  if (!seo.description) {
    errors.push('Missing description');
  }
  
  if (!seo.openGraph) {
    errors.push('Missing openGraph');
  } else {
    if (!seo.openGraph.title) {
      errors.push('Missing openGraph.title');
    }
    
    if (!seo.openGraph.description) {
      errors.push('Missing openGraph.description');
    }
    
    if (!seo.openGraph.images || !seo.openGraph.images.length) {
      errors.push('Missing openGraph.images');
    } else {
      const image = seo.openGraph.images[0];
      if (!image.url) {
        errors.push('Missing openGraph.images[0].url');
      }
      if (!image.width) {
        errors.push('Missing openGraph.images[0].width');
      }
      if (!image.height) {
        errors.push('Missing openGraph.images[0].height');
      }
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Generate a preview of how the SEO will look on social media
 */
export function generateSocialPreview(seo) {
  return {
    title: seo.title,
    description: seo.description,
    imageUrl: seo.openGraph?.images?.[0]?.url,
    siteName: seo.openGraph?.siteName || 'Website'
  };
}
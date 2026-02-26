// Test file to debug SEO configuration
export async function testSeo() {
  const { getSeoForPath } = await import("../seo/seo.config");
  
  console.log('Testing SEO for "/"');
  console.log(getSeoForPath("/"));
  
  console.log('Testing SEO for "/about"');
  console.log(getSeoForPath("/about"));
  
  console.log('Testing SEO for "/register"');
  console.log(getSeoForPath("/register"));
  
  console.log('Testing SEO for "/contact"');
  console.log(getSeoForPath("/contact"));
}
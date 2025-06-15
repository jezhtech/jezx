import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  children?: React.ReactNode;
}

const SEO = ({
  title = "JezX - Code the Future",
  description = "JezX is a leading software development company specializing in AI-powered solutions, custom software development, and digital transformation services.",
  keywords = "JezX, software development, AI solutions, digital transformation, custom software, web development, mobile apps, enterprise solutions",
  ogImage = "/logo/logo.png",
  ogUrl = "https://jezx.in",
  twitterImage = "/logo/logo.png",
  canonicalUrl = "https://jezx.in",
  children,
}: SEOProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twitterImage} />

      {children}
    </Helmet>
  );
};

export default SEO; 
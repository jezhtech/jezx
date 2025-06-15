import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  noindex?: boolean;
  children?: React.ReactNode;
}

const SEO = ({
  title = "JezX - Code the Future | Enterprise Software Development & AI Solutions",
  description = "JezX specializes in enterprise-grade software development with advanced AI integration. We engineer custom software solutions that transform businesses globally. Code the Future with JezX.",
  keywords = "Software Development, Code the Future, AI Integration, Enterprise Software, Custom Software Engineering, Software Solutions, Advanced Automation, AI-Powered Development",
  canonicalUrl = "https://jezx.in",
  ogTitle = "JezX - Code the Future | Enterprise Software Development & AI Solutions",
  ogDescription = "JezX specializes in enterprise-grade software development with advanced AI integration. We engineer custom software solutions that transform businesses globally. Code the Future with JezX.",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  ogType = "website",
  twitterTitle = "JezX - Code the Future | Enterprise Software Development",
  twitterDescription = "Custom software engineering with advanced AI integration that transforms businesses globally. Code the Future with JezX.",
  twitterImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  noindex = false,
  children,
}: SEOProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="JezX Technologies" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@jezx_dev" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={twitterImage} />
      
      {/* Indexing Control */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}
      
      {children}
    </Helmet>
  );
};

export default SEO; 
import { Helmet } from 'react-helmet-async';

interface OrganizationStructuredDataProps {
  url?: string;
  logo?: string;
  contactPoint?: {
    telephone: string;
    contactType: string;
    email?: string;
    areaServed?: string;
  }[];
}

export const OrganizationStructuredData = ({
  url = "https://jezx.in",
  logo = "https://jezx.in/logo.png",
  contactPoint = [
    {
      telephone: "+919150537718",
      contactType: "customer service",
      email: "info@jezx.in",
      areaServed: "Worldwide"
    }
  ]
}: OrganizationStructuredDataProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JezX Technologies",
    "alternateName": "Jezh Technologies",
    "url": url,
    "logo": logo,
    "sameAs": [
      "https://twitter.com/jezx_dev",
      "https://www.linkedin.com/company/jezx",
      "https://github.com/jezx"
    ],
    "contactPoint": contactPoint,
    "description": "JezX specializes in enterprise-grade software development with advanced AI integration. We engineer custom software solutions that transform businesses globally. Code the Future with JezX."
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

interface ServiceStructuredDataProps {
  name?: string;
  description?: string;
  provider?: {
    name: string;
    url: string;
  };
  areaServed?: string;
  serviceType?: string;
}

export const ServiceStructuredData = ({
  name = "Enterprise Software Development",
  description = "Custom software engineering with advanced AI integration that transforms businesses globally. Code the Future with JezX.",
  provider = {
    name: "JezX Technologies",
    url: "https://jezx.in"
  },
  areaServed = "Worldwide",
  serviceType = "Software Development"
}: ServiceStructuredDataProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": provider,
    "areaServed": areaServed,
    "serviceType": serviceType
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

interface BreadcrumbStructuredDataProps {
  items: {
    name: string;
    item: string;
  }[];
}

export const BreadcrumbStructuredData = ({
  items
}: BreadcrumbStructuredDataProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}; 
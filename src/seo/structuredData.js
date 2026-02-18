import { BUSINESS_INFO } from '../utils/constants';

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": BUSINESS_INFO.name,
  "image": "https://best-repair-service.vercel.app/logo.svg",
  "telephone": BUSINESS_INFO.phone,
  "url": typeof window !== 'undefined' ? window.location.origin : 'https://best-repair-service.vercel.app',
  "email": BUSINESS_INFO.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ramanthapur",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500013",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 17.3850,
    "longitude": 78.4867
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "22:00"
    }
  ],
  "areaServed": BUSINESS_INFO.serviceAreas,
  "priceRange": "₹₹"
});

export const getServiceSchema = (serviceName, description) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceName,
  "provider": {
    "@type": "LocalBusiness",
    "name": BUSINESS_INFO.name,
    "telephone": BUSINESS_INFO.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ramanthapur",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500013",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹"
  },
  "description": description,
  "areaServed": BUSINESS_INFO.serviceAreas.map(area => ({
    "@type": "Place",
    "name": area
  }))
});

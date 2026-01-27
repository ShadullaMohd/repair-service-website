import { BUSINESS_INFO } from '../utils/constants';

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": BUSINESS_INFO.name,
  "image": "/logo.png", 
  "telephone": BUSINESS_INFO.phone,
  "url": typeof window !== 'undefined' ? window.location.origin : 'https://best-repair-service.vercel.app',
  "email": BUSINESS_INFO.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "KCR Nagar, Ramanthapur",
    "addressLocality": "Hyderabad",
    "postalCode": "500013",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 17.3986, 
    "longitude": 78.5206
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "20:00"
  },
  "priceRange": "$$"
});

export const getServiceSchema = (serviceName, description) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceName,
  "provider": {
    "@type": "LocalBusiness",
    "name": BUSINESS_INFO.name
  },
  "description": description,
  "areaServed": {
    "@type": "City",
    "name": "Tech City"
  }
});

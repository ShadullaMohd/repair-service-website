import { Helmet } from 'react-helmet-async';
import { BUSINESS_INFO } from '../utils/constants';

export default function MetaTags({ title, description, schema }) {
    const siteTitle = `${title} | ${BUSINESS_INFO.name}`;
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
    const canonicalUrl = `https://www.hyderabadwashingmachinerepair.in${pathname === '/' ? '' : pathname}`;

    return (
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            {/* Schema.org Structured Data */}
            {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
        </Helmet>
    );
}

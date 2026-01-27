import { Helmet } from 'react-helmet-async';
import { BUSINESS_INFO } from '../utils/constants';

export default function MetaTags({ title, description, schema }) {
    const siteTitle = `${title} | ${BUSINESS_INFO.name}`;

    return (
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
            {/* Schema.org Structured Data */}
            {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
        </Helmet>
    );
}

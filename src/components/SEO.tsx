import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
}

export default function SEO({ title, description, url = "https://organa.global", image = "https://organa.global/og-image.jpg" }: SEOProps) {
  return (
    <Helmet>
      {/* Título */}
      <title>{title}</title>

      {/* Meta description */}
      <meta name="description" content={description} />

      {/* OpenGraph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </Helmet>
  );
}

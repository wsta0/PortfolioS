import { Helmet } from "react-helmet-async";
export default function SEO() {
  return (
    <Helmet>
      <title>John Doe — Full-Stack Developer</title>
      <meta name="description" content="Portfolio of John Doe: React, Node, cloud. Case studies, blog, and contact." />
      <meta property="og:title" content="John Doe — Full-Stack Developer" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/og-image.png" />
      <meta name="theme-color" content="#0fb76c" />
    </Helmet>
  );
}

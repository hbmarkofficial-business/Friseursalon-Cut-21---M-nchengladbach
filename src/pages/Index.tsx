import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Mönchengladbach | Friseursalon Cut 21</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop Friseursalon Cut 21 in Mönchengladbach für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Mönchengladbach"
        />
        <link rel="canonical" href="https://gentlemanscut.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Friseursalon Cut 21 | Premium Barbershop Mönchengladbach" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Mönchengladbach."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gentlemanscut.de" />
        <meta property="og:image" content="https://gentlemanscut.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Friseursalon Cut 21 | Premium Barbershop Mönchengladbach" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://gentlemanscut.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Friseursalon Cut 21",
            "image": "https://gentlemanscut.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Erzbergerstraße 112",
              "addressLocality": "Mönchengladbach",
              "postalCode": "41061",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.1912",
              "longitude": "6.4417"
            },
            "url": "https://gentlemanscut.de",
            "telephone": "+49 1573 2622648",
            "openingHours": "Mo-Sa 09:30-19:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/gentlemanscut",
              "https://www.instagram.com/gentlemanscut"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

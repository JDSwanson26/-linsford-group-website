import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Welcome from '../sections/Welcome';
import AboutQuality from '../sections/AboutQuality';
import Statistics from '../sections/Statistics';
import Gallery from '../sections/Gallery';
import QuoteBanner from '../sections/QuoteBanner';
import ContactForm from '../sections/ContactForm';
import Footer from '../sections/Footer';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Welcome />
      <AboutQuality />
      <Statistics />
      <Gallery />
      <QuoteBanner />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default HomePage;

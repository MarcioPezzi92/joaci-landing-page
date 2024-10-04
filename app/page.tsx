import Header from './components/Header';
import Hero from './components/Hero';
import EbookInfo from './components/EbookInfo';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header
        logoSrc="https://d335luupugsy2.cloudfront.net/cms/files/254679/1706054975/$30d29v5yc3v"
        altText="Logo Argentum Investimentos"
        width={250}
        height={50}
      />
      <Hero />
      <EbookInfo />
      <Footer />
    </main>
  );
}
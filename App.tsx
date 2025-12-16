import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { NewsSection } from './components/NewsSection';
import { ConceptSection } from './components/ConceptSection';
import { OsusumeSection } from './components/OsusumeSection';
import { TakeoutSection } from './components/TakeoutSection';
import { ContactSection } from './components/ContactSection';
import { BlogSection } from './components/BlogSection';
import { SNSSection } from './components/SNSSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-primary bg-white antialiased">
      <Header />
      <main>
        <Hero />
        <NewsSection />
        <OsusumeSection />
        <ConceptSection />
        <TakeoutSection />
        <ContactSection />
        <BlogSection />
        <SNSSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;

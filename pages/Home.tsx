import React from 'react';
import { Hero } from '../components/Hero';
import { NewsSection } from '../components/NewsSection';
import { ConceptSection } from '../components/ConceptSection';
import { Banners } from '../components/Banners';
import { BlogSection } from '../components/BlogSection';
import { SNSSection } from '../components/SNSSection';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <NewsSection />
      <ConceptSection />
      <Banners />
      <BlogSection />
      <SNSSection />
    </>
  );
};

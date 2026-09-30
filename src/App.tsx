/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PhysicalBookDetails } from './components/PhysicalBookDetails';
import { OrdinaryMomentsGenerator } from './components/OrdinaryMomentsGenerator';
import { TableOfContents } from './components/TableOfContents';
import { QuotesGallery } from './components/QuotesGallery';
import { AuthorSection } from './components/AuthorSection';
import { PurchaseSection } from './components/PurchaseSection';
import { Footer } from './components/Footer';
import { InteractiveReader } from './components/InteractiveReader';
import { AutographModal } from './components/AutographModal';
import { CRONICAS } from './data/bookData';

export default function App() {
  const [isReaderOpen, setIsReaderOpen] = useState(false);
  const [currentCronicaId, setCurrentCronicaId] = useState<string>('prefacio');
  const [isAutographOpen, setIsAutographOpen] = useState(false);

  // Handler to open random chronicle directly in reader
  const handleOpenRandom = () => {
    const randomIndex = Math.floor(Math.random() * CRONICAS.length);
    const randomCronica = CRONICAS[randomIndex];
    setCurrentCronicaId(randomCronica.id);
    setIsReaderOpen(true);
  };

  const handleReadSample = () => {
    setCurrentCronicaId('prefacio');
    setIsReaderOpen(true);
  };

  const handleSelectCronica = (id?: string) => {
    setCurrentCronicaId(id || 'prefacio');
    setIsReaderOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#222120] font-sans selection:bg-[#EADBCC] selection:text-[#1F1E1D]">
      {/* Top Bar following contract */}
      <Navbar
        onOpenRandom={handleOpenRandom}
        onOpenReader={handleSelectCronica}
        onOpenAutograph={() => setIsAutographOpen(true)}
      />

      <main className="flex-grow">
        {/* Hero with 3D Book Mockup & Key Citations */}
        <Hero
          onOpenRandom={handleOpenRandom}
          onReadSample={handleReadSample}
          onOpenAutograph={() => setIsAutographOpen(true)}
        />

        {/* Tactile & Editorial Experience (Paper Pólen 80g, UICLAP, Times New Roman) */}
        <PhysicalBookDetails
          onOpenAutograph={() => setIsAutographOpen(true)}
        />

        {/* Interactive "O Lado Aleatório do seu dia" Experience */}
        <OrdinaryMomentsGenerator
          onSelectCronica={handleSelectCronica}
        />

        {/* Comprehensive Table of Contents with Reader access */}
        <TableOfContents
          onSelectCronica={handleSelectCronica}
        />

        {/* Notable Quotations with Copy & Share */}
        <QuotesGallery
          onOpenReader={handleSelectCronica}
        />

        {/* Author Bio & Local Toledo-PR Setting */}
        <AuthorSection
          onOpenAutograph={() => setIsAutographOpen(true)}
        />

        {/* Purchase Module: UICLAP & Autographed Copy */}
        <PurchaseSection
          onOpenAutograph={() => setIsAutographOpen(true)}
          onReadSample={handleReadSample}
        />
      </main>

      {/* Literary Footer */}
      <Footer />

      {/* Interactive In-App Book Reader */}
      <InteractiveReader
        initialCronicaId={currentCronicaId}
        isOpen={isReaderOpen}
        onClose={() => setIsReaderOpen(false)}
        onSelectCronica={(id) => setCurrentCronicaId(id)}
      />

      {/* Autograph Request Modal */}
      <AutographModal
        isOpen={isAutographOpen}
        onClose={() => setIsAutographOpen(false)}
      />
    </div>
  );
}

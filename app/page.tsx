import { Picture } from '@/components/Media';
import { LoopingVideo, SiteHeader, VenueExplorer, ZoomableImage } from '@/components/Interactive';

export default function Home() {
  return (
    <main className="circus-site">
      <SiteHeader />

      <section className="brand-hero" id="top" aria-labelledby="hero-title">
        <div className="brand-hero-glow" aria-hidden="true" />
        <p className="brand-hero-kicker">A Las Vegas icon, reimagined.</p>
        <h1 id="hero-title" className="sr-only">Circus Circus Las Vegas — Coming 2030</h1>
        <Picture assetId="primaryLogo" className="brand-hero-logo" imageClassName="contain-image" eager />
        <a className="brand-hero-enter" href="#vision">Discover <span aria-hidden="true">↓</span></a>
        <p className="brand-hero-date">Coming Summer 2030</p>
      </section>

      <section className="announcement" id="vision" aria-labelledby="announcement-title">
        <p className="section-index">01 / The announcement</p>
        <div>
          <p className="eyebrow">A landmark transformation is envisioned.</p>
          <h2 id="announcement-title">A new act<br />is about to begin.</h2>
          <p>Beginning in 2027, Circus Circus Las Vegas is undergoing a comprehensive, property-wide reinvention, with the new experience proposed to debut in <strong>Summer 2030.</strong></p>
        </div>
      </section>

      <section className="transformation" aria-labelledby="transformation-title">
        <div className="transformation-heading">
          <p className="section-index light">02 / Every detail, reimagined</p>
          <div><p className="eyebrow">One complete expression</p><h2 id="transformation-title">From arrival<br />to after dark.</h2></div>
          <p>Architecture, identity, staff wardrobe, and guest touchpoints come together as one theatrical hospitality experience.</p>
        </div>
        <figure className="exterior-reveal">
          <LoopingVideo assetId="resortExterior" className="cover-image" />
          <figcaption><span>The new arrival</span><p>Circus tradition, recast in oxblood, ivory, and champagne light.</p></figcaption>
        </figure>
        <div className="identity-mosaic">
          <Picture assetId="champagneMonogram" className="monogram-detail" imageClassName="cover-image" />
          <Picture assetId="roomKey" className="key-detail" imageClassName="cover-image" />
          <Picture assetId="heritageLogo" className="heritage-detail" imageClassName="contain-image" />
          <Picture assetId="tentIcon" className="tent-detail" imageClassName="contain-image" />
        </div>
        <div className="uniform-story">
          <div className="uniform-copy"><p className="eyebrow">The people behind the experience</p><h3>Service becomes part of the show.</h3><p>Every role carries the identity without turning hospitality into costume.</p></div>
          <ZoomableImage assetId="uniformsOne" caption="Uniform concepts · Collection one" />
          <ZoomableImage assetId="uniformsTwo" caption="Uniform concepts · Collection two" />
        </div>
      </section>

      <section className="worlds" id="worlds" aria-labelledby="worlds-title">
        <header className="worlds-intro">
          <p className="section-index">03 / One legend · Two worlds</p>
          <h2 id="worlds-title">One icon.<br />Two distinct worlds.</h2>
          <p>Two distinct hotel experiences meet at The Grand Midway—the shared heart of the new resort.</p>
        </header>
        <div className="worlds-grid">
          <article className="world-card world-card-night">
            <LoopingVideo assetId="circusCircusTower" className="cover-image" />
            <div className="world-card-shade" />
            <div className="world-card-copy"><p>01 / After dark</p><h3>Circus Circus</h3><span>Tailored luxury, destination dining, nightlife, and spectacle.</span></div>
            <ZoomableImage assetId="masterBrandBoard" className="world-brand-board" caption="Explore the Circus Circus identity" />
          </article>
          <article className="world-card world-card-classic">
            <LoopingVideo assetId="circusClassicTower" className="cover-image" />
            <div className="world-card-shade" />
            <div className="world-card-copy"><p>02 / Wonder preserved</p><h3>Circus Classic</h3><span>Bright nostalgia, playful architecture, and family discovery.</span></div>
            <ZoomableImage assetId="circusClassicBranding" className="world-brand-board" caption="Explore the Circus Classic identity" />
          </article>
        </div>
      </section>

      <section className="map-section" id="map" aria-labelledby="map-title">
        <div className="map-heading"><p className="section-index light">04 / The complete resort</p><div><p className="eyebrow">Two experiences · One destination</p><h2 id="map-title">See how it<br />all connects.</h2></div><p>Hotels, venues, attractions, and performance are joined as one walkable world.</p></div>
        <ZoomableImage assetId="masterplan" className="masterplan-view" caption="Open the complete resort map" />
      </section>

      <VenueExplorer />

      <section className="campaign-footer" aria-labelledby="campaign-title">
        <div className="campaign-heading"><p className="eyebrow">The invitation</p><h2 id="campaign-title">Public disbelief<br />is the campaign.</h2></div>
        <Picture assetId="seriouslyCampaign" className="campaign-billboard" imageClassName="cover-image" />
        <p className="campaign-signoff"><span>Seriously, Circus Circus?</span><i /><strong>Seriously, Circus Circus.</strong></p>
      </section>

      <section className="finale" aria-labelledby="finale-title">
        <Picture assetId="monogram" className="finale-monogram" imageClassName="contain-image" />
        <h2 id="finale-title">Coming 2030</h2>
        <p>A Las Vegas icon, reimagined.</p>
        <a href="#top">Return to the beginning <span aria-hidden="true">↑</span></a>
      </section>

      <footer className="site-footer">
        <p>Conceptual design presentation. Dates, programming, and imagery are proposed and subject to change.</p>
        <p>Las Vegas · 2030</p>
      </footer>
    </main>
  );
}

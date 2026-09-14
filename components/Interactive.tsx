'use client';

import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { assetSource, assets, publicAssetPath, type AssetId } from '@/data/assets';
import { Picture } from './Media';

const navigation = [
  { label: 'The vision', href: '#vision' },
  { label: 'Two worlds', href: '#worlds' },
  { label: 'Resort map', href: '#map' },
  { label: 'Explore', href: '#explore' },
] as const;

export function LoopingVideo({ assetId, className = '' }: { assetId: AssetId; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const asset = assets[assetId];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      setShouldLoad(true);
      observer.disconnect();
    }, { rootMargin: '320px 0px' });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad || !videoRef.current) return;
    videoRef.current.load();
    void videoRef.current.play().catch(() => undefined);
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload={shouldLoad ? 'metadata' : 'none'}
      poster={assetSource(asset, 'lg')}
      aria-label={asset.alt}
    >
      {shouldLoad && <source src={publicAssetPath(`media/${asset.slug}.webm`)} type="video/webm" />}
    </video>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(total > 0 ? window.scrollY / total : 0);
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  return (
    <>
      <header className="site-header">
        <a className="header-wordmark" href="#top" aria-label="Circus Circus — return to top" onClick={() => setOpen(false)}>
          <span>Circus Circus</span><small>Las Vegas</small>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen((value) => !value)}>
          <span>{open ? 'Close' : 'Menu'}</span><i aria-hidden="true">{open ? '×' : '+'}</i>
        </button>
        <span className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      </header>
      <div className={`site-menu ${open ? 'is-open' : ''}`} id="site-menu" aria-hidden={!open}>
        <p className="menu-kicker">A Las Vegas icon, reimagined.</p>
        <nav aria-label="Primary navigation">
          {navigation.map((item, index) => (
            <a key={item.href} href={item.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>{item.label}
            </a>
          ))}
        </nav>
        <a className="menu-explore" href="#explore" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>Hotel · Eat · Drink · Play · Family</a>
      </div>
    </>
  );
}

export function ZoomableImage({ assetId, className = '', caption }: { assetId: AssetId; className?: string; caption?: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const asset = assets[assetId];

  useEffect(() => {
    if (isOpen && dialogRef.current && !dialogRef.current.open) dialogRef.current.showModal();
  }, [isOpen]);

  const close = () => {
    dialogRef.current?.close();
    setIsOpen(false);
  };

  return (
    <>
      <button className={`zoomable ${className}`} type="button" onClick={() => setIsOpen(true)} aria-label={`View full screen: ${caption ?? asset.alt}`}>
        <Picture assetId={assetId} imageClassName="zoomable-image" />
        <span className="zoom-cue">View full screen <b aria-hidden="true">↗</b></span>
        {caption && <span className="zoom-caption">{caption}</span>}
      </button>
      <dialog className="image-dialog" ref={dialogRef} onClose={() => setIsOpen(false)} onClick={(event) => { if (event.target === dialogRef.current) close(); }}>
        <button className="dialog-close" type="button" onClick={close}>Close <span aria-hidden="true">×</span></button>
        {isOpen && (
          // The optimized large derivative mounts only when the viewer opens.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={assetSource(asset, 'lg')} alt={asset.alt} width={asset.width} height={asset.height} />
        )}
        <p><span>{asset.section}</span>{asset.original}</p>
      </dialog>
    </>
  );
}

function Venue({
  number,
  title,
  eyebrow,
  copy,
  hero,
  brand,
  secondary,
  extra,
  partner,
  overlapSupport = false,
  tone = 'dark',
  children,
}: {
  number: string;
  title: string;
  eyebrow: string;
  copy: string;
  hero: AssetId;
  brand?: AssetId;
  secondary?: AssetId;
  extra?: AssetId;
  partner?: AssetId;
  overlapSupport?: boolean;
  tone?: 'dark' | 'light' | 'red' | 'space' | 'solar' | 'violet' | 'classic';
  children?: React.ReactNode;
}) {
  return (
    <article className={`venue venue-${tone}${overlapSupport ? ' venue-overlap-card' : ''}`}>
      <div className="venue-copy">
        <p className="venue-number">{number}</p>
        <div><p className="eyebrow">{eyebrow}</p><h3>{title}</h3><p>{copy}</p>{children}</div>
      </div>
      <Picture assetId={hero} className="venue-hero" imageClassName="cover-image" />
      {(secondary || extra || brand || partner) && (
        <div className={`venue-support venue-support-${[secondary, extra, brand, partner].filter(Boolean).length}`}>
          {secondary && <Picture assetId={secondary} imageClassName="cover-image" />}
          {extra && <Picture assetId={extra} imageClassName="cover-image" />}
          {brand && <ZoomableImage assetId={brand} className="brand-board" caption="Explore the identity" />}
          {partner && <Picture assetId={partner} className="partner-tile" imageClassName="contain-image" />}
        </div>
      )}
    </article>
  );
}

const categories = ['hotel', 'eat', 'drink', 'play', 'family'] as const;
type Category = (typeof categories)[number];

export function VenueExplorer() {
  const [active, setActive] = useState<Category>('hotel');
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const selectFromHash = () => {
      const id = window.location.hash.replace('#explore-', '') as Category;
      if (categories.includes(id)) setActive(id);
    };
    window.addEventListener('hashchange', selectFromHash);
    queueMicrotask(selectFromHash);
    return () => window.removeEventListener('hashchange', selectFromHash);
  }, []);

  const choose = (category: Category) => {
    const snapToCategoryStart = () => {
      const anchor = document.getElementById('explore-categories-anchor');
      if (!anchor) return;
      const headerHeight = window.innerWidth <= 720 ? 66 : 74;
      const top = anchor.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: Math.max(0, top), behavior: 'auto' });
    };

    snapToCategoryStart();
    setActive(category);
    window.history.replaceState(null, '', `#explore-${category}`);
    requestAnimationFrame(() => {
      snapToCategoryStart();
      requestAnimationFrame(snapToCategoryStart);
    });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % categories.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + categories.length) % categories.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = categories.length - 1;
    choose(categories[next]);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="explorer" id="explore" aria-labelledby="explorer-title">
      <div className="explorer-heading">
        <p className="eyebrow">Discover the new resort</p>
        <h2 id="explorer-title">Choose your experience.</h2>
      </div>
      <span className="category-anchor" id="explore-categories-anchor" aria-hidden="true" />
      <div className="category-nav" id="explore-categories">
        <p>Explore by category</p>
        <div className="category-tabs" role="tablist" aria-label="Explore Circus Circus">
          {categories.map((category, index) => (
            <button
              key={category}
              ref={(node) => { tabRefs.current[index] = node; }}
              type="button"
              role="tab"
              aria-selected={active === category}
              aria-controls={`panel-${category}`}
              id={`tab-${category}`}
              tabIndex={active === category ? 0 : -1}
              onClick={() => choose(category)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              <span>0{index + 1}</span>{category}
            </button>
          ))}
        </div>
      </div>

      <div className="category-panel" id={`panel-${active}`} role="tabpanel" aria-labelledby={`tab-${active}`} tabIndex={0}>
        {active === 'hotel' && <HotelPanel />}
        {active === 'eat' && <EatPanel />}
        {active === 'drink' && <DrinkPanel />}
        {active === 'play' && <PlayPanel />}
        {active === 'family' && <FamilyPanel />}
      </div>
    </section>
  );
}

function CategoryIntro({ index, title, copy }: { index: string; title: string; copy: string }) {
  return <header className="category-intro"><p>{index} / The collection</p><h2>{title}</h2><p>{copy}</p></header>;
}

const signatureSuites = [
  { assetId: 'angryClownSuite', title: 'The Angry Clown' },
  { assetId: 'freakshowSuite', title: 'The Freak Show' },
  { assetId: 'funHouseSuite', title: 'The Fun House' },
] satisfies Array<{ assetId: AssetId; title: string }>;

function SuiteCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>('figure');
    if (!track || !card) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' });
  };

  return (
    <div className="suite-carousel">
      <div className="suite-controls" aria-label="Browse signature suites">
        <button type="button" onClick={() => move(-1)} aria-label="Previous suite"><span aria-hidden="true">←</span></button>
        <button type="button" onClick={() => move(1)} aria-label="Next suite"><span aria-hidden="true">→</span></button>
      </div>
      <div className="suite-grid" ref={trackRef}>
        {signatureSuites.map((suite) => (
          <figure key={suite.assetId}>
            <Picture assetId={suite.assetId} imageClassName="cover-image" />
            <figcaption>{suite.title}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function HotelPanel() {
  return (
    <>
      <CategoryIntro index="01" title="Stay inside the story." copy="Two hotel worlds, expressive rooms, and one private address hidden inside the spectacle." />
      <section className="rooms-block">
        <div className="subheading"><p className="eyebrow">Rooms &amp; suites</p><h3>Luxury first.<br />Then look up.</h3></div>
        <div className="rooms-grid"><Picture assetId="standardRoom" imageClassName="cover-image" /><LoopingVideo assetId="standardSuite" className="cover-image" /></div>
      </section>
      <section className="signature-block">
        <div className="subheading"><p className="eyebrow">Signature suites</p><h3>Three rooms.<br />No restraint.</h3></div>
        <SuiteCarousel />
      </section>
      <Venue number="04" title="The Royal Box" eyebrow="A hotel within the hotel" copy="Private arrival, quiet service, and a world of its own for the guests who prefer the spectacle at a distance." hero="royalBoxHero" secondary="royalBoxHardware" brand="royalBoxBranding" />
    </>
  );
}

function EatPanel() {
  return (
    <>
      <CategoryIntro index="02" title="Dinner becomes the main event." copy="One flagship restaurant. A room engineered around precision, performance, and anticipation." />
      <Venue number="01" title="Acrobat" eyebrow="Signature dining" copy="Aerial movement becomes architecture while the table remains the center of the experience." hero="acrobatHero" secondary="acrobatTable" brand="acrobatBranding" tone="light" />
    </>
  );
}

function DrinkPanel() {
  return (
    <>
      <CategoryIntro index="03" title="Three rooms. Three different acts." copy="From the monumental center of the casino to two intimate rooms built for after dark." />
      <Venue number="01" title="The Grand Ring" eyebrow="The social heart" copy="Gaming, cocktails, and aerial performance inhabit one monumental circular room." hero="grandRingAtrium" />
      <Venue number="02" title="Clown Bar" eyebrow="Couture cocktails" copy="Yes, really. A clown bar. Beautiful cocktails, oxblood velvet, and live entertainment unlike anything else on the Strip." hero="clownBarHero" secondary="clownBarEnvironment" extra="clownBarCocktail" brand="clownBarBranding" tone="red" />
      <Venue number="03" title="The Bearded Lady" eyebrow="Cocktail salon" copy="An intimate room about transformation, portraiture, and the delicious instability of appearances." hero="beardedLadyHero" secondary="beardedLadyEnvironment" brand="beardedLadyBranding" />
    </>
  );
}

function PlayPanel() {
  return (
    <>
      <CategoryIntro index="04" title="The resort changes acts after dark." copy="Resident spectacle, serious dancefloor culture, sunlit ritual, and an immersive world with no fixed edge." />
      <Venue number="01" title="The Grand Cirque" eyebrow="In partnership with Cirque du Soleil" copy="A large-scale mechanical circus where human performance and impossible engineering share the stage." hero="grandCirqueHero" secondary="automatedPerformerStudy" brand="grandCirqueBranding" partner="cirquePartnerLogo" />
      <Venue number="02" title="Space Vegas" eyebrow="Nightlife without gravity" copy="A futuristic event destination built around portals, orbit, and the hours most of Las Vegas gives away." hero="spaceVegasNightclub" secondary="carlCoxCampaign" brand="spaceVegasBranding" tone="space" />
      <Venue number="03" title="SÕL" eyebrow="Dayclub by Space Vegas" copy="A sunlit pool experience balancing desert warmth, champagne service, and the moment daylight becomes nightlife." hero="oasisHero" secondary="solChampagneService" brand="solBranding" tone="solar" />
      <Venue number="04" title="The Dome" eyebrow="Immersive district" copy="A flexible world of projection, kinetic environments, and celestial architecture that never has to stay the same." hero="domeHero" brand="domeBranding" tone="violet" />
    </>
  );
}

function FamilyPanel() {
  return (
    <>
      <CategoryIntro index="05" title="Wonder, rebuilt." copy="A family-friendly nod to the original resort opens into games, rides, discovery, and a promenade that performs around you." />
      <section className="classic-family-feature">
        <div className="venue-copy"><p className="venue-number">01</p><div><p className="eyebrow">The family-facing world</p><h3>Circus Classic</h3><p>A family-friendly nod to the original resort—preserving its color, optimism, and sense of wonder for a new generation.</p></div></div>
        <div className="classic-family-media">
          <Picture assetId="classicHeritageSignage" imageClassName="cover-image" />
          <Picture assetId="classicFlyer" imageClassName="cover-image" />
        </div>
      </section>
      <Venue number="02" title="The Grand Midway" eyebrow="Where both worlds meet" copy="A polished new expression of games, prizes, color, and shared discovery at the center of the resort." hero="grandMidwayHero" secondary="midwayPrizeCounter" overlapSupport tone="classic" />
      <Venue number="03" title="Family Attractions" eyebrow="Play at every level" copy="A bright, multi-level world of rides, kinetic play, and live circus discovery." hero="familyAttractionsHero" tone="classic" />
      <Venue number="04" title="The Grand Parade" eyebrow="The ceremonial spine" copy="Envisioned in collaboration with Universal Studios and Cirque du Soleil, where luxury hospitality and family-friendly spectacle meet." hero="grandParadeHero" brand="grandParadeBranding" tone="red" />
    </>
  );
}

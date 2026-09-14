import type { AssetId } from './assets';

export const navigation = [
  { label: 'Transformation', href: '#vision' },
  { label: 'Two Worlds', href: '#two-worlds' },
  { label: 'Resort Map', href: '#masterplan' },
  { label: 'Circus Classic', href: '#classic' },
  { label: 'Experiences', href: '#grand-ring' },
  { label: 'Stay', href: '#stay' },
  { label: 'Brand', href: '#people' },
] as const;

export const masterplanStops = [
  {
    label: 'The Grand Ring',
    kicker: 'The social heart',
    detail: 'Casino, bars, restaurants and performance inhabit one monumental circular room.',
    x: 51,
    y: 55,
  },
  {
    label: 'The Grand Cirque',
    kicker: 'The theatrical complex',
    detail: 'A flagship resident production where the resort’s two worlds meet.',
    x: 51,
    y: 30,
  },
  {
    label: 'The Dome',
    kicker: 'Immersive district',
    detail: 'A flexible world of projection, kinetic environments and experimental performance.',
    x: 51,
    y: 13,
  },
  {
    label: 'Circus Classic',
    kicker: 'Wonder, preserved',
    detail: 'A premium family resort built around the midway, live circus and shared traditions.',
    x: 52,
    y: 5,
  },
  {
    label: 'SPACE VEGAS',
    kicker: 'After hours',
    detail: 'Long-form dancefloor culture occupies its own independent universe inside the resort.',
    x: 27,
    y: 60,
  },
  {
    label: 'The Oasis + SÕL',
    kicker: 'Day into night',
    detail: 'The adult pool landscape shifts from resort calm to a sunset dayclub ritual.',
    x: 35,
    y: 44,
  },
] as const;

export const archiveEntries: Array<{
  number: string;
  title: string;
  asset: AssetId;
  note: string;
}> = [
  {
    number: 'Archive 01',
    title: 'Mechanical Thinking Machine',
    asset: 'mechanicalThinkingMachine',
    note: 'A machine designed to keep a struggling circus alive.',
  },
  {
    number: 'Archive 02',
    title: 'Automated Performer Study',
    asset: 'automatedPerformerStudy',
    note: 'Precision promised to expand what performers could do.',
  },
  {
    number: 'Archive 03',
    title: 'Aerial Balance Calculation',
    asset: 'aerialBalanceCalculation',
    note: 'Human instinct, translated into impossible geometry.',
  },
  {
    number: 'Archive 04',
    title: 'Analytical Engine',
    asset: 'analyticalEngine',
    note: 'The invention eventually found humanity inefficient.',
  },
];

export const dayCycle: Array<{
  time: string;
  title: string;
  note: string;
  asset: AssetId;
  tone: 'morning' | 'afternoon' | 'evening' | 'late';
}> = [
  {
    time: '09:00',
    title: 'Wonder wakes up.',
    note: 'Circus Classic, pools and family attractions begin the first act.',
    asset: 'familyAttractionsHero',
    tone: 'morning',
  },
  {
    time: '15:00',
    title: 'The Oasis peaks.',
    note: 'The midway hums. SÕL turns the afternoon toward sunset.',
    asset: 'oasisHero',
    tone: 'afternoon',
  },
  {
    time: '21:00',
    title: 'The circus after dark.',
    note: 'The Grand Ring intensifies. Curtains lift. Cocktails arrive.',
    asset: 'grandRingAtrium',
    tone: 'evening',
  },
  {
    time: '04:30',
    title: 'The last act is sunrise.',
    note: 'SPACE VEGAS owns the hours the rest of Las Vegas gives away.',
    asset: 'spaceVegasNightclub',
    tone: 'late',
  },
];

export type AssetRecord = {
  id: string;
  original: string;
  width: number;
  height: number;
  section: string;
  alt: string;
  slug: string;
};

const slugify = (filename: string) => filename
  .replace(/\.[^.]+$/, '')
  .normalize('NFKD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');

const record = (id: string, original: string, width: number, height: number, section: string, alt: string): AssetRecord => ({
  id, original, width, height, section, alt, slug: slugify(original),
});

export const assets = {
  mechanicalThinkingMachine: record('mechanicalThinkingMachine', '01-mechanical-thinking-machine.png', 2400, 1350, 'Archive', 'Mechanical thinking machine concept study'),
  aerialBalanceCalculation: record('aerialBalanceCalculation', '03-aerial-balance-calculation.png', 2400, 1350, 'Archive', 'Aerial balance calculation concept study'),
  analyticalEngine: record('analyticalEngine', '04-analytical-engine.png', 2400, 1350, 'Archive', 'Analytical engine concept study'),
  cirquePartnerLogo: record('cirquePartnerLogo', 'Cirque_du_Soleil_logo_PNG2.png', 1200, 1200, 'The Grand Cirque', 'Cirque du Soleil partner logo'),
  grandRingAtrium: record('grandRingAtrium', 'The Grand Ring Casino Atrium.png', 1672, 941, 'The Grand Ring', 'The monumental circular Grand Ring casino atrium'),
  acrobatTable: record('acrobatTable', 'acrobat-table-setting.png', 1672, 941, 'Acrobat', 'A refined place setting inside Acrobat'),
  acrobatHero: record('acrobatHero', 'acrobat_hero.png', 1672, 941, 'Acrobat', 'An aerial performer suspended above the dining room at Acrobat'),
  beardedLadyHero: record('beardedLadyHero', 'bearded-lady_hero.png', 3840, 2160, 'The Bearded Lady', 'The intimate cocktail salon of The Bearded Lady'),
  acrobatBranding: record('acrobatBranding', 'brandingacrobat.png', 1448, 1086, 'Acrobat', 'Acrobat identity and application board'),
  beardedLadyBranding: record('beardedLadyBranding', 'brandingbeardlady.png', 1672, 941, 'The Bearded Lady', 'The Bearded Lady identity and application board'),
  circusClassicBranding: record('circusClassicBranding', 'brandingcircusclassic.png', 1536, 1024, 'Circus Classic', 'Circus Classic identity and application board'),
  clownBarBranding: record('clownBarBranding', 'brandingclownbar.png', 1448, 1086, 'Clown Bar', 'Clown Bar identity and application board'),
  grandCirqueBranding: record('grandCirqueBranding', 'brandinggrandcirque.png', 1672, 941, 'The Grand Cirque', 'The Grand Cirque identity and application board'),
  grandParadeBranding: record('grandParadeBranding', 'brandinggrandparade.png', 1536, 1024, 'The Grand Parade', 'The Grand Parade identity and application board'),
  solBranding: record('solBranding', 'brandingsol.png', 1672, 940, 'SÕL Dayclub', 'SÕL Dayclub identity and application board'),
  spaceVegasBranding: record('spaceVegasBranding', 'brandingspacevegas.png', 1448, 1086, 'Space Vegas', 'Space Vegas identity and application board'),
  champagneMonogram: record('champagneMonogram', 'cc-monogram-champagne-metal.png', 3840, 2160, 'Master Brand', 'The CC monogram applied in champagne-toned metal'),
  roomKey: record('roomKey', 'circus-circus-room-key-oxblood-velvet.png', 3840, 2160, 'Master Brand', 'A Circus Circus room key resting on oxblood velvet'),
  classicHeritageSignage: record('classicHeritageSignage', 'circus-classic-heritage-signage.png', 3840, 2160, 'Circus Classic', 'Illuminated Circus Classic heritage signage at dusk'),
  angryClownSuite: record('angryClownSuite', 'circuscircus-angryclownsuite.png', 1536, 1024, 'Signature Suites', 'The theatrical Angry Clown Suite'),
  freakshowSuite: record('freakshowSuite', 'circuscircus-freakshowsuite.png', 1536, 1024, 'Signature Suites', 'The maximalist Freak Show Suite'),
  funHouseSuite: record('funHouseSuite', 'circuscircus-funhousesuite.png', 1536, 1024, 'Signature Suites', 'The playful Fun House Suite'),
  heritageLogo: record('heritageLogo', 'circuscircus-hertiagelogo.png', 1774, 887, 'Master Brand', 'Modernized Circus Circus heritage logo'),
  circusCircusTower: record('circusCircusTower', 'circuscircus-mainhoteltower.png', 1448, 1086, 'Hotel', 'The reimagined Circus Circus hotel tower at dusk'),
  monogram: record('monogram', 'circuscircus-monogram.png', 1254, 1254, 'Master Brand', 'Champagne CC monogram on black'),
  primaryLogo: record('primaryLogo', 'circuscircus-primarylogo.png', 1672, 941, 'Master Brand', 'Primary Circus Circus Las Vegas wordmark'),
  standardRoom: record('standardRoom', 'circuscircus-room.png', 1447, 1087, 'Hotel', 'A Circus Circus guest room with a tent-inspired ceiling'),
  masterplan: record('masterplan', 'circuscircus-schematic.png', 1448, 1086, 'Resort Map', 'Conceptual master plan of the two-world Circus Circus resort'),
  standardSuite: record('standardSuite', 'circuscircus-suite.png', 1448, 1086, 'Hotel', 'A refined Circus Circus suite in ivory and oxblood'),
  tentIcon: record('tentIcon', 'circuscircus-tenticon.png', 1774, 887, 'Master Brand', 'Circus Circus tent icon on black'),
  masterBrandBoard: record('masterBrandBoard', 'circuscirus-brandassets.png', 1448, 1086, 'Master Brand', 'Complete Circus Circus identity and application board'),
  ceilingPattern: record('ceilingPattern', 'circuscirus-ceilingpattern.png', 442, 259, 'Master Brand', 'Oxblood and ivory radial circus-tent pattern'),
  resortExterior: record('resortExterior', 'circuscirus-front.png', 1672, 941, 'Master Brand', 'The reimagined Circus Circus entrance and hotel at night'),
  uniformsOne: record('uniformsOne', 'circuscirus-uniforms1.png', 1491, 1055, 'Master Brand', 'Circus Circus hospitality uniform system, board one'),
  uniformsTwo: record('uniformsTwo', 'circuscirus-uniforms2.png', 1491, 1055, 'Master Brand', 'Circus Circus hospitality uniform system, board two'),
  classicFlyer: record('classicFlyer', 'circusclassicflyer.png', 1024, 1536, 'Circus Classic', 'Vintage-inspired Circus Classic campaign poster'),
  circusClassicTower: record('circusClassicTower', 'circusclassic-mainhoteltower.png', 1448, 1086, 'Hotel', 'The Circus Classic hotel tower at sunset'),
  classicLogo: record('classicLogo', 'circusclasslogo.png', 1448, 1086, 'Circus Classic', 'Circus Classic primary logo presentation'),
  clownBarCocktail: record('clownBarCocktail', 'clown-bar-cocktail-black-marble.png', 3840, 2160, 'Clown Bar', 'A Clown Bar cocktail on black marble'),
  clownBarHero: record('clownBarHero', 'clown-bar_hero.png', 3840, 2160, 'Clown Bar', 'The polished oxblood and black interior of Clown Bar'),
  clownBarEnvironment: record('clownBarEnvironment', 'clownbar.png', 1672, 941, 'Clown Bar', 'The Clown Bar serving an elegant evening crowd'),
  domeHero: record('domeHero', 'dome_hero.png', 3840, 2160, 'The Dome', 'The Dome immersive district with monumental digital environments'),
  familyAttractionsHero: record('familyAttractionsHero', 'family-attractions_hero.png', 3840, 2160, 'Family Attractions', 'A multilevel family attraction hall with rides and kinetic sculpture'),
  grandCirqueHero: record('grandCirqueHero', 'grand-cirque_hero.png', 3840, 2160, 'The Grand Cirque', 'The Grand Cirque stage alive with aerialists and impossible machinery'),
  midwayPrizeCounter: record('midwayPrizeCounter', 'grand-midway-premium-prize-counter.png', 3840, 2160, 'The Grand Midway', 'The Grand Midway premium prize counter'),
  grandMidwayHero: record('grandMidwayHero', 'grand-midway_hero.png', 3840, 2160, 'The Grand Midway', 'Families beneath the illuminated Grand Midway marquee'),
  grandParadeHero: record('grandParadeHero', 'grand-parade_hero.png', 3840, 2160, 'The Grand Parade', 'The Grand Parade promenade with performers and evening guests'),
  oasisHero: record('oasisHero', 'oasis-sol_hero.png', 3840, 2160, 'SÕL Dayclub', 'The sunlit resort pool and SÕL Dayclub'),
  royalBoxHardware: record('royalBoxHardware', 'royal-box-private-entrance-hardware.png', 3840, 2160, 'The Royal Box', 'Champagne metal hardware at the private Royal Box entrance'),
  royalBoxHero: record('royalBoxHero', 'royal-box_hero.png', 3840, 2160, 'The Royal Box', 'Guests arriving at the private Royal Box lobby'),
  seriouslyCampaign: record('seriouslyCampaign', 'seriouslycircuscircusbillboard.png', 1672, 941, 'Campaign', 'Seriously, Circus Circus campaign billboard on the Las Vegas Strip'),
  solChampagneService: record('solChampagneService', 'sol-champagne-service-poolside.png', 3840, 2160, 'SÕL Dayclub', 'Champagne service beside the SÕL pool'),
  carlCoxCampaign: record('carlCoxCampaign', 'spacevegascarlcoxbillboard.png', 1697, 927, 'Space Vegas', 'Carl Cox opening-night billboard for Space Vegas'),
  spaceVegasNightclub: record('spaceVegasNightclub', 'spacevegasnightclub.png', 1672, 941, 'Space Vegas', 'The futuristic portal entrance to Space Vegas'),
  grandRingLandscape: record('grandRingLandscape', 'the_grand_ring_landscape.png', 1536, 512, 'The Grand Ring', 'A panoramic view of The Grand Ring casino floor'),
  beardedLadyEnvironment: record('beardedLadyEnvironment', 'thebeardedlady.png', 1672, 941, 'The Bearded Lady', 'A second view of The Bearded Lady cocktail salon'),
  domeBranding: record('domeBranding', 'thedomebranding.png', 1672, 941, 'The Dome', 'The Dome identity and application board'),
  automatedPerformerStudy: record('automatedPerformerStudy', 'thegrandcirque_automated-circus-performer-study.png', 3840, 1951, 'The Grand Cirque', 'A technical study of a brass-and-ivory automated aerial performer'),
  royalBoxBranding: record('royalBoxBranding', 'theroyalboxbranding.png', 1448, 1086, 'The Royal Box', 'The Royal Box identity and application board'),
} satisfies Record<string, AssetRecord>;

export type AssetId = keyof typeof assets;

const publicBasePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/$/, '');

export const publicAssetPath = (path: string) =>
  `${publicBasePath}/${path.replace(/^\//, '')}`;

export const assetSource = (asset: AssetRecord, size: 'sm' | 'lg' = 'lg') =>
  publicAssetPath(`media/${asset.slug}-${size}.webp`);

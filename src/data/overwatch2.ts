import type { FaqItem } from './faq';
import type { Feature } from './features';

export const ow2Hero = {
  eyebrow: 'Overwatch 2',
  title: 'Overwatch 2 FACEIT Cheat',
  description:
    'This Overwatch 2 FACEIT cheat is the OW2 product page for FACEIT team fights and for regular role-queue. Overwatch 2 is the game; FACEIT is only the competitive layer around it. Hero kits, projectile travel, and target priority are documented here — not on the CS2 or Valorant routes.',
} as const;

export const ow2Steps = [
  {
    id: 'configure',
    title: 'Choose an OW2 profile',
    text: 'Set hitscan, projectile, and role preferences before a FACEIT or regular queue — tank, damage, and support do not share one slider.',
  },
  {
    id: 'status',
    title: 'Check reported status',
    text: 'OW2 is configured as undetected and running. Confirm that row on the status board rather than treating this page as a live lab.',
  },
  {
    id: 'access',
    title: 'Continue to access',
    text: 'Access buttons on this URL read the site’s centralized destination. The homepage never starts checkout.',
  },
  {
    id: 'support',
    title: 'Use support',
    text: 'Hero- and role-specific questions stay here. Platform questions go to the site FAQ; support uses the same configured action as other game pages.',
  },
] as const;

export const ow2Features: Feature[] = [
  {
    id: 'aimbot',
    title: 'Aimbot for hitscan and projectiles',
    description:
      'Overwatch 2 FACEIT aimbot is split by hero family: hitscan lock for Soldier, Cassidy, and Ashe; lead on moving targets for projectile kits. Target priority can prefer supports in a stacked team fight or the tank eating space.',
  },
  {
    id: 'aim-assist',
    title: 'Aim assist',
    description:
      'Overwatch 2 FACEIT aim assist is the lighter pull for players who want help tracking without a hard snap. It is a separate strength from full aimbot so you can keep ability timing in your hands.',
  },
  {
    id: 'hero-esp',
    title: 'Hero ESP',
    description:
      'Overwatch 2 FACEIT hero ESP names who is around the corner — Ana, Genji, Reinhardt — so you are reading kits, not anonymous boxes. Role colors stay optional when the fight is noisy.',
  },
  {
    id: 'esp',
    title: 'ESP and wallhack visibility',
    description:
      'Overwatch 2 FACEIT ESP and an Overwatch 2 FACEIT wallhack view show enemy and ally positions through geometry so you can time a blade, a grav, or a beat. It is built for OW2 sightlines, not a CS2 or Valorant overlay copy.',
  },
  {
    id: 'triggerbot',
    title: 'Triggerbot',
    description:
      'Overwatch 2 FACEIT triggerbot is for Widow and other hold-angle picks. It fires when a valid hero crosses the reticle so you are not forced to run aimbot on every role.',
  },
  {
    id: 'prediction',
    title: 'Projectile prediction',
    description:
      'Prediction leads Hanzo, Pharah, and Zen orbs on strafing targets. Travel time is a slider, not a promise that every hero shares one curve.',
  },
  {
    id: 'spread',
    title: 'No-spread rifles',
    description:
      'No-spread control tightens hitscan patterns on the heroes that actually bloom. It sits next to aim assist rather than replacing hero ESP.',
  },
  {
    id: 'abilities',
    title: 'Ability information',
    description:
      'High-level cooldown and ult-status reads for the fight you are walking into. This is awareness copy, not a claim about reading Battle.net internals.',
  },
  {
    id: 'profiles',
    title: 'Configuration profiles',
    description:
      'Save a FACEIT six-stack profile and a casual role-queue profile. Tank, damage, and support each keep their own aim and ESP mix on this OW2 FACEIT cheat listing.',
  },
];

export const ow2Shots = [
  {
    src: '/images/overwatch-2/ow2-preview-01.webp',
    alt: 'Overwatch 2 preview: hero ESP during a team fight',
    caption: 'Hero ESP in a team fight',
  },
  {
    src: '/images/overwatch-2/ow2-preview-02.webp',
    alt: 'Overwatch 2 preview: hitscan and projectile aim profiles',
    caption: 'Hitscan vs projectile profiles',
  },
  {
    src: '/images/overwatch-2/ow2-preview-03.webp',
    alt: 'Overwatch 2 preview: ability and role information overlay',
    caption: 'Ability and role read',
  },
] as const;

export const ow2Faqs: FaqItem[] = [
  {
    id: 'what-ow2-faceit-means',
    question: 'What does Overwatch 2 FACEIT mean?',
    answer:
      'Overwatch 2 FACEIT means Blizzard’s Overwatch 2 played through FACEIT’s competitive ecosystem. An OW2 FACEIT cheat on this page is for that layer and for ordinary role-queue — the hero roster is still Overwatch 2.',
  },
  {
    id: 'separate-version',
    question: 'Is FACEIT Overwatch 2 a separate version of OW2?',
    answer:
      'No. FACEIT does not ship another Overwatch 2 client. You launch OW2 as usual; FACEIT is the ranking and community layer around those matches.',
  },
  {
    id: 'what-features',
    question: 'What features are available?',
    answer:
      'This Overwatch 2 FACEIT hack listing covers aimbot, aim assist, hero ESP, ESP/wallhack visibility, triggerbot, projectile prediction, no-spread, ability information, and configuration profiles. The cards on this page are the list — not the Valorant or CS2 blocks.',
  },
  {
    id: 'aim-assist-hero-esp',
    question: 'Does the page cover aim assist and hero ESP?',
    answer:
      'Yes. Aim assist is the lighter tracking option; hero ESP is the named-hero visibility module. Both are described in the OW2 feature grid below the hero.',
  },
  {
    id: 'where-status',
    question: 'Where can current status be checked?',
    answer:
      'The configured OW2 row — currently undetected and running — lives on the status page. This commercial URL only repeats that snapshot. Guaranteed-undetected, zero-bans, and ban-proof wording should be confirmed there, not treated as a generated lab clock.',
  },
  {
    id: 'other-titles',
    question: 'Does faceitcheats.net also cover CS2 and Valorant?',
    answer:
      'Yes. CS2 and Valorant have their own product pages. This route stays on Overwatch 2 so role-queue copy is not mixed with rifle or agent listings.',
  },
  {
    id: 'where-access',
    question: 'Where does purchasing and access take place?',
    answer:
      'From this OW2 page’s access buttons, which use the site’s centralized destination. The homepage only points you here.',
  },
  {
    id: 'where-support',
    question: 'Where can support be found?',
    answer:
      'Use the support action on this product page, or the site-wide FAQ for questions that are about FACEIT as a platform rather than OW2 heroes.',
  },
];

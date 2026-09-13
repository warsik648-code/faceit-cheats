import type { FaqItem } from './faq';
import type { Feature } from './features';

export const r6Hero = {
  eyebrow: 'Rainbow Six Siege',
  title: 'Rainbow Six Siege FACEIT Cheat',
  description:
    'This Rainbow Six Siege FACEIT cheat — also searched as an R6 FACEIT cheat or R6S FACEIT cheat — is the Siege product page. Operators, gadgets, and destructible sites stay Ubisoft’s game; FACEIT is only the competitive layer around them.',
} as const;

export const r6Steps = [
  {
    id: 'configure',
    title: 'Choose configuration',
    text: 'Set attack and defense profiles — entry, support, roam, or anchor — before you queue FACEIT or a regular Siege playlist.',
  },
  {
    id: 'status',
    title: 'Check reported status',
    text: 'Siege is configured as undetected and running. Confirm that row on the status board instead of treating this page as a live detection log.',
  },
  {
    id: 'access',
    title: 'Continue to access',
    text: 'Access on this URL uses the site’s centralized destination. The homepage never starts checkout.',
  },
  {
    id: 'support',
    title: 'Use support',
    text: 'Operator and gadget questions stay here. Platform questions go to the site FAQ; support uses the same configured action as the other game pages.',
  },
] as const;

export const r6Features: Feature[] = [
  {
    id: 'aimbot',
    title: 'Aimbot for operator angles',
    description:
      'Rainbow Six Siege FACEIT aimbot is built for pixel-wide holds and peek duels, not OW2 team-fight tracking. Silent aim is a quieter camera mode on the same module when you want less visible snap through a doorway.',
  },
  {
    id: 'esp',
    title: 'ESP and wallhack',
    description:
      'Rainbow Six Siege FACEIT ESP and a Rainbow Six Siege FACEIT wallhack view mark operators through reinforced walls and hatches so you can read site setup before you drone.',
  },
  {
    id: 'operator-esp',
    title: 'Operator ESP',
    description:
      'Operator ESP names who is holding the angle — Jäger, Ash, Solis — so you are planning a plant around kits, not anonymous boxes.',
  },
  {
    id: 'radar',
    title: 'Radar',
    description:
      'Rainbow Six Siege FACEIT radar keeps roams and default plants on a compact map while drones and cameras do the close work. It is Siege information, not a CS2 mid-rotate overlay.',
  },
  {
    id: 'recoil',
    title: 'No recoil',
    description:
      'Rainbow Six Siege FACEIT no recoil is per-weapon: R4-C, AK-12, MP5. It sits beside aimbot so you are not forced to run both on every operator.',
  },
  {
    id: 'triggerbot',
    title: 'Triggerbot',
    description:
      'Rainbow Six Siege FACEIT triggerbot is for tight Mira windows and hold angles. It fires when a valid operator crosses the reticle.',
  },
  {
    id: 'cameras',
    title: 'Camera ESP',
    description:
      'Camera ESP highlights default cams, Valkyrie Black Eyes, and Maestro Evil Eyes so information gathering is visible before you swing a site.',
  },
  {
    id: 'gadgets',
    title: 'Gadget ESP',
    description:
      'Gadget ESP marks deployables — ADS, shields, claymores, Mag-NETs — that change how a site is actually held. Utility reads stay high-level; this is not a claim about reading Ubisoft servers.',
  },
  {
    id: 'profiles',
    title: 'Configuration profiles',
    description:
      'Save an attack execute and a defense roam. This Rainbow Six Siege FACEIT private cheat keeps those mixes on the Siege listing instead of borrowing Valorant or CS2 sliders.',
  },
];

export const r6Shots = [
  {
    src: '/images/rainbow-six-siege/r6-preview-01.webp',
    alt: 'Rainbow Six Siege preview: operator ESP on a bomb site',
    caption: 'Operator ESP on site',
  },
  {
    src: '/images/rainbow-six-siege/r6-preview-02.webp',
    alt: 'Rainbow Six Siege preview: camera and gadget information',
    caption: 'Camera and gadget read',
  },
  {
    src: '/images/rainbow-six-siege/r6-preview-03.webp',
    alt: 'Rainbow Six Siege preview: aim and recoil profiles',
    caption: 'Aim and recoil profiles',
  },
] as const;

export const r6Faqs: FaqItem[] = [
  {
    id: 'what-r6-faceit-means',
    question: 'What does Rainbow Six Siege FACEIT mean?',
    answer:
      'Rainbow Six Siege FACEIT means Ubisoft’s Siege played in FACEIT’s competitive ecosystem. An R6S FACEIT cheat on this page is for that layer and for ordinary matchmaking — the operators are still Rainbow Six Siege.',
  },
  {
    id: 'separate-game',
    question: 'Is FACEIT Siege a separate game?',
    answer:
      'No. FACEIT does not ship another Siege client. You launch Rainbow Six Siege as usual; FACEIT is the ranking and community layer around those rounds.',
  },
  {
    id: 'what-features',
    question: 'What features are available?',
    answer:
      'This Rainbow Six Siege FACEIT hack listing covers aimbot, ESP, wallhack, operator ESP, radar, no recoil, triggerbot, camera ESP, gadget ESP, silent aim, and configuration profiles. The cards on this page are the list.',
  },
  {
    id: 'operator-esp',
    question: 'Does the page include operator ESP?',
    answer:
      'Yes. Operator ESP is a named module in the feature grid. It is separate from generic wallhack boxes so you can see which defender is holding the rotate.',
  },
  {
    id: 'camera-gadget',
    question: 'Does it include camera or gadget information?',
    answer:
      'Yes. Camera ESP and gadget ESP are described on this route for default cams, deployable cameras, and site utility. Those modules do not appear on the CS2 or Valorant pages.',
  },
  {
    id: 'where-status',
    question: 'Where can I check current status?',
    answer:
      'The configured Siege row — currently undetected and running — lives on the status page. Undetected claims and “little to no bans reported” language should be confirmed there, not treated as a generated test clock on this URL.',
  },
  {
    id: 'where-access',
    question: 'Where does access and purchasing happen?',
    answer:
      'From this Siege page’s access buttons, which read the site’s centralized destination. The homepage only routes you here.',
  },
  {
    id: 'where-support',
    question: 'Where can I get support?',
    answer:
      'Use the support action on this product page, or the site-wide FAQ for questions about FACEIT as a platform rather than operators and gadgets.',
  },
];

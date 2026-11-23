export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  startingPrice: string;
  priceUnit: string;
  summary: string;
  deliverables: string[];
  featured?: boolean;
  inquiryValue: string;
}

export interface PortfolioProject {
  id: string;
  index: string;
  title: string;
  category: string;
  filterKey: 'product' | 'fashion' | 'character' | 'video' | 'social';
  concept: string;
  deliverables: string[];
  creativeStyle: string;
  image: string;
  imageAlt: string;
  aspectClass: string;
  featured?: boolean;
}

export interface PackagePlan {
  id: string;
  name: string;
  price: string;
  cadence: string;
  audience: string;
  delivery: string;
  features: string[];
  highlighted?: boolean;
  inquiryService: string;
  inquiryBudget: string;
}

export interface MonthlyPlan {
  id: string;
  name: string;
  price: string;
  deliverablesSummary: string;
  features: string[];
  highlighted?: boolean;
  inquiryBudget: string;
}

export interface IndividualRate {
  service: string;
  startingPrice: string;
  notes: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ValueItem {
  number: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface OperatingHour {
  day: string;
  hours: string;
  closed?: boolean;
}

export const CORE_VALUES: ValueItem[] = [
  {
    number: '01',
    title: 'Innovation',
    description: 'Constantly exploring new AI technologies and creative possibilities.',
  },
  {
    number: '02',
    title: 'Creativity',
    description: 'Turning ordinary concepts into extraordinary visual experiences.',
  },
  {
    number: '03',
    title: 'Quality',
    description: 'Delivering polished, professional, and visually compelling results.',
  },
  {
    number: '04',
    title: 'Efficiency',
    description: 'Making content production faster and more accessible.',
  },
  {
    number: '05',
    title: 'Collaboration',
    description: 'Working closely with clients to understand their vision.',
  },
  {
    number: '06',
    title: 'Excellence',
    description: 'Maintaining high creative standards in every project.',
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: 'Creative Innovation',
    description: 'We combine advanced AI technology with human creative direction.',
  },
  {
    title: 'Professional Quality',
    description: 'Every project receives attention to detail, visual consistency, and refinement.',
  },
  {
    title: 'Efficient Production',
    description: 'AI-assisted workflows help streamline the creative process.',
  },
  {
    title: 'Flexible Solutions',
    description: 'From individual content creators to established businesses, our services adapt to your needs.',
  },
  {
    title: 'Global Accessibility',
    description: 'Our remote creative studio works with clients across international markets.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'video-production',
    index: '01',
    title: 'AI-Generated Video Production',
    startingPrice: '$99',
    priceUnit: 'per project',
    summary:
      'Visually captivating AI-powered videos for brands, businesses, and digital creators without the overhead of traditional film shoots.',
    deliverables: [
      'Cinematic AI video production',
      'AI-generated storytelling videos',
      'Realistic AI video scenes & motion',
      'Promotional, commercial & short-form clips',
    ],
    featured: true,
    inquiryValue: 'AI Video Production',
  },
  {
    id: 'image-generation',
    index: '02',
    title: 'AI Image Generation',
    startingPrice: '$25',
    priceUnit: 'per project',
    summary:
      'Transform creative concepts into photorealistic commercial photography, editorial campaigns, and custom digital visuals.',
    deliverables: [
      'Photorealistic AI images & campaign art',
      'Commercial product & lifestyle photography',
      'Editorial visuals & concept illustrations',
      'Custom AI-generated environments',
    ],
    inquiryValue: 'AI Image Generation',
  },
  {
    id: 'advertisement-creation',
    index: '03',
    title: 'AI Advertisement Creation',
    startingPrice: '$149',
    priceUnit: 'per campaign',
    summary:
      'Attention-grabbing video and static advertisements engineered to communicate your brand message and convert audiences.',
    deliverables: [
      'AI-generated video advertisements',
      'Social media ad creatives & graphics',
      'Brand storytelling ad campaigns',
      'Commercial campaign concepts',
    ],
    inquiryValue: 'AI Advertisement Creation',
  },
  {
    id: 'character-creation',
    index: '04',
    title: 'AI Character Creation',
    startingPrice: '$79',
    priceUnit: 'per character',
    summary:
      'Distinctive digital personalities and consistent virtual brand ambassadors tailored for entertainment and marketing.',
    deliverables: [
      'Custom AI characters & virtual ambassadors',
      'Consistent multi-pose character design',
      'AI influencer concepts & portraits',
      'Character-based promotional assets',
    ],
    inquiryValue: 'AI Character Creation',
  },
  {
    id: 'product-promotional',
    index: '05',
    title: 'Product Promotional Videos',
    startingPrice: '$129',
    priceUnit: 'per video',
    summary:
      'Showcase physical and digital products through dramatic lighting, bespoke AI environments, and cinematic motion.',
    deliverables: [
      'Luxury product showcases & launches',
      'Cinematic product advertisements',
      'AI-generated product environments',
      'E-commerce & lifestyle product clips',
    ],
    featured: true,
    inquiryValue: 'Product Promotional Videos',
  },
  {
    id: 'social-media',
    index: '06',
    title: 'Social Media Content Creation',
    startingPrice: '$199',
    priceUnit: 'per month',
    summary:
      'Build a recognizable digital presence with platform-native reels, shorts, and visual campaign series.',
    deliverables: [
      'Instagram Reels, TikTok & YouTube Shorts',
      'Facebook & multi-channel ad graphics',
      'Consistent brand visual planning',
      'Recurring monthly content packages',
    ],
    inquiryValue: 'Social Media Content Creation',
  },
];

export const ADDITIONAL_CAPABILITIES = [
  'AI Logo Concepts & Brand Visuals',
  'YouTube Thumbnails',
  'Digital Campaign Design',
  'Creative Direction & Concept Development',
  'AI-Assisted Scriptwriting',
  'Visual Storytelling',
  'Custom AI Content Workflows',
];

export const PORTFOLIO_FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'product', label: 'Product Campaigns' },
  { id: 'fashion', label: 'Fashion & Lifestyle' },
  { id: 'character', label: 'AI Characters' },
  { id: 'video', label: 'Commercial Video' },
  { id: 'social', label: 'Social Media' },
] as const;

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'luxury-product-campaign',
    index: '01',
    title: 'Luxury Product Campaign',
    category: 'AI Product Advertisement',
    filterKey: 'product',
    concept:
      'A premium fragrance bottle presented in a cinematic golden environment with dramatic lighting, elegant reflections, and luxurious visual details.',
    deliverables: [
      '5 promotional product images',
      '1 cinematic 20-second video',
      '3 social media advertising formats',
    ],
    creativeStyle: 'Luxury · Cinematic · Premium',
    image: 'src/assets/images/portfolio_future_fashion_1795415108085.jpg',
    imageAlt: 'Faceted dark amber and champagne-gold perfume bottle on basalt stone',
    aspectClass: 'aspect-[4/3]',
    featured: true,
  },
  {
    id: 'future-fashion',
    index: '02',
    title: 'Future Fashion',
    category: 'AI Fashion & Lifestyle',
    filterKey: 'fashion',
    concept:
      'A futuristic fashion campaign featuring AI-generated models, contemporary outfits, editorial lighting, and high-fashion environments.',
    deliverables: [
      '10 fashion campaign images',
      '2 promotional video clips',
      'Social media campaign visuals',
    ],
    creativeStyle: 'Editorial · Futuristic · High-Fashion',
    image: 'src/assets/images/portfolio_virtual_ambassador_1795415106439.jpg',
    imageAlt: 'High-fashion model in tailored charcoal and champagne-gold avant-garde outerwear',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'virtual-brand-ambassador',
    index: '03',
    title: 'Virtual Brand Ambassador',
    category: 'AI Character Creation',
    filterKey: 'character',
    concept:
      'A consistent virtual personality designed to represent a modern technology brand across digital marketing platforms.',
    deliverables: [
      'Custom character identity',
      'Multiple character expressions',
      'Lifestyle and professional portraits',
      'Promotional content concepts',
    ],
    creativeStyle: 'Photorealistic · Modern · Approachable',
    image: 'https://drive.google.com/file/d/1MGw4ggr---NqgMq8su9DywQMTNlMZnY0/preview?pli=1',
    imageAlt: 'Photorealistic studio portrait of a virtual brand ambassador in a dark blazer',
    aspectClass: 'aspect-square',
  },
  {
    id: 'smart-technology-ad',
    index: '04',
    title: 'Smart Technology Ad',
    category: 'AI Commercial Video',
    filterKey: 'video',
    concept:
      'A futuristic advertisement showcasing innovative technology products through cinematic environments, dynamic camera movements, and dramatic visual storytelling.',
    deliverables: [
      '30-second commercial concept',
      'Product-focused visuals',
      'Social media cutdowns',
    ],
    creativeStyle: 'Futuristic · Cinematic · Technology-Driven',
    image: 'https://drive.google.com/file/d/1hgIAu8EAHMZZFLifPwqYNoykzyIVj3KM/preview',
    imageAlt: 'Anodized black and brushed gold smart audio device floating with subtle cyan beam',
    aspectClass: 'aspect-video',
    featured: true,
  },
  {
    id: 'social-media-content-system',
    index: '05',
    title: 'Social Media Content System',
    category: 'Social Media Content Creation',
    filterKey: 'social',
    concept:
      'A complete visual content system for a lifestyle brand looking to establish a recognizable social media identity.',
    deliverables: [
      '12 social media graphics',
      '4 short-form videos',
      '1 consistent visual direction',
    ],
    creativeStyle: 'Minimalist · Engaging · Contemporary',
    image: 'https://drive.google.com/file/d/1onsvRaJC_ZfLMJa6RWradJgMBFiPzHCU/preview',
    imageAlt: 'Minimalist matte black vessels and brushed gold geometric props on dark stone',
    aspectClass: 'aspect-[4/3]',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We discuss your ideas, objectives, target audience, and creative requirements.',
  },
  {
    number: '02',
    title: 'Creative Planning',
    description: 'Our team develops the visual direction, concepts, references, and production strategy.',
  },
  {
    number: '03',
    title: 'AI Production',
    description: 'We use AI-powered creative tools and professional editing techniques to develop your content.',
  },
  {
    number: '04',
    title: 'Review & Refinement',
    description: 'You review the initial results and provide feedback for the included revision rounds.',
  },
  {
    number: '05',
    title: 'Final Delivery',
    description: 'Your approved content is delivered in high-quality digital formats, ready for your intended platforms.',
  },
];

export const PROJECT_PACKAGES: PackagePlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$149',
    cadence: '/ project',
    audience: 'Perfect for individuals, startups, and small businesses exploring AI-powered content.',
    delivery: '3–5 business days',
    features: [
      '5 AI-generated images',
      '1 short AI video (up to 15 seconds)',
      'Basic creative direction',
      '1 revision round',
      'Standard digital delivery',
    ],
    inquiryService: 'AI Video Production',
    inquiryBudget: '$149 – $349 (Starter / Custom)',
  },
  {
    id: 'creator',
    name: 'Creator',
    price: '$349',
    cadence: '/ project',
    audience: 'Designed for content creators and growing brands that need more engaging visual content.',
    delivery: '5–7 business days',
    features: [
      '10 AI-generated images',
      '2 AI-generated videos (up to 20s each)',
      '1 custom AI character concept',
      'Social media-ready formats',
      '2 revision rounds',
      'Priority production',
    ],
    inquiryService: 'Social Media Content Creation',
    inquiryBudget: '$349 – $699 (Creator)',
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$699',
    cadence: '/ project',
    audience: 'A comprehensive creative solution for established businesses and marketing campaigns.',
    delivery: '7–12 business days',
    highlighted: true,
    features: [
      '20 AI-generated images',
      '3 premium AI promotional videos (up to 30s)',
      '2 AI character concepts',
      '2 advertising creative concepts',
      'Brand-aligned visual direction',
      '3 revision rounds & commercial license',
      'Priority support',
    ],
    inquiryService: 'AI Advertisement Creation',
    inquiryBudget: '$699 – $1,499 (Professional)',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$1,499+',
    cadence: '/ starting',
    audience: 'A tailored creative production solution for brands, agencies, and larger organizations.',
    delivery: 'Based on project scope',
    features: [
      'Custom AI content production',
      'Advanced video advertising & product campaigns',
      'AI brand ambassadors',
      'Large-scale visual asset creation',
      'Custom creative direction & dedicated PM',
      'Extended commercial licensing options',
    ],
    inquiryService: 'Custom AI Creative Campaign',
    inquiryBudget: '$1,500+ (Enterprise)',
  },
];

export const MONTHLY_PLANS: MonthlyPlan[] = [
  {
    id: 'basic-monthly',
    name: 'Basic',
    price: '$299',
    deliverablesSummary: '8 images + 2 short videos',
    features: [
      '8 custom AI-generated images per month',
      '2 short-form AI videos per month',
      'Content planning & consistent branding',
      'Platform-ready aspect ratios',
    ],
    inquiryBudget: '$299/mo (Basic Subscription)',
  },
  {
    id: 'growth-monthly',
    name: 'Growth',
    price: '$599',
    deliverablesSummary: '15 images + 5 short videos',
    highlighted: true,
    features: [
      '15 custom AI-generated images per month',
      '5 short-form AI videos per month',
      'Dedicated monthly creative calendar',
      'Consistent visual identity across channels',
    ],
    inquiryBudget: '$599/mo (Growth Subscription)',
  },
  {
    id: 'premium-monthly',
    name: 'Premium',
    price: '$999',
    deliverablesSummary: '25 images + 10 short videos',
    features: [
      '25 custom AI-generated images per month',
      '10 short-form AI videos per month',
      'Full campaign art direction & priority turnaround',
      'Usage rights defined in subscription agreement',
    ],
    inquiryBudget: '$999/mo (Premium Subscription)',
  },
];

export const INDIVIDUAL_RATES: IndividualRate[] = [
  { service: 'AI Image Generation', startingPrice: '$25', notes: 'Per project · Photorealistic or editorial' },
  { service: 'AI Product Photography', startingPrice: '$49', notes: 'Bespoke studio scenes & lighting' },
  { service: 'AI Character Creation', startingPrice: '$79', notes: 'Per character · Identity & variations' },
  { service: 'AI Video Production', startingPrice: '$99', notes: 'Per project · Cinematic scenes & motion' },
  { service: 'AI Product Promotional Video', startingPrice: '$129', notes: 'Per video · Commercial product storytelling' },
  { service: 'AI Advertisement Creation', startingPrice: '$149', notes: 'Per campaign · Multi-format ad creatives' },
  { service: 'Social Media Content Package', startingPrice: '$199/mo', notes: 'Reels, TikTok, Shorts & graphics' },
  { service: 'Custom AI Creative Campaign', startingPrice: 'Custom Quote', notes: 'Tailored scope & licensing' },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'sarah-mitchell',
    name: 'Sarah Mitchell',
    role: 'Small Business Owner',
    quote:
      'AIMADEIT transformed our product ideas into beautiful advertising visuals. The creative quality exceeded our expectations, and the entire process was smooth and professional.',
  },
  {
    id: 'daniel-carter',
    name: 'Daniel Carter',
    role: 'Digital Marketing Consultant',
    quote:
      'The AI promotional videos gave our campaigns a completely new visual direction. I especially appreciated the creativity, communication, and attention to detail.',
  },
  {
    id: 'emily-rodriguez',
    name: 'Emily Rodriguez',
    role: 'Content Creator',
    quote:
      'I needed fresh content for my social media platforms, and AIMADEIT delivered exactly what I was looking for. The visuals were modern, engaging, and professionally produced.',
  },
  {
    id: 'michael-anderson',
    name: 'Michael Anderson',
    role: 'E-commerce Entrepreneur',
    quote:
      'The product promotional videos helped us present our products in a more premium and visually appealing way. Highly recommended for businesses looking for creative content solutions.',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What types of businesses do you work with?',
    answer:
      'We work with startups, entrepreneurs, e-commerce brands, marketing agencies, content creators, and established businesses.',
  },
  {
    id: 'faq-2',
    question: 'Do you create custom AI-generated content?',
    answer:
      'Yes. Our projects are developed according to each client’s creative brief, visual preferences, and business objectives.',
  },
  {
    id: 'faq-3',
    question: 'Can I request revisions?',
    answer:
      'Yes. Each package includes a specified number of revision rounds. Additional revisions may incur extra charges ($25–$75 depending on complexity).',
  },
  {
    id: 'faq-4',
    question: 'How long does production take?',
    answer:
      'Production generally takes between 3 and 12 business days, depending on project complexity and package selection. Express delivery is available for an additional 25%–50% fee.',
  },
  {
    id: 'faq-5',
    question: 'Do you offer commercial usage rights?',
    answer:
      'Commercial licensing is available according to the selected package and individual project agreement. Rights and restrictions are confirmed before production.',
  },
  {
    id: 'faq-6',
    question: 'Can you create content for Instagram, TikTok, and YouTube?',
    answer:
      'Absolutely. We create content in formats suitable for different social media platforms, including Instagram Reels, TikTok videos, YouTube Shorts, and Facebook campaigns.',
  },
  {
    id: 'faq-7',
    question: 'Do I need to provide my own images or videos?',
    answer:
      'Not necessarily. We can develop creative concepts from written descriptions, references, or existing brand materials.',
  },
  {
    id: 'faq-8',
    question: 'Do you accept international clients?',
    answer:
      'Yes. AIMADEIT operates remotely as an online worldwide creative studio and is designed to serve clients across international markets.',
  },
];

export const OPERATING_HOURS: OperatingHour[] = [
  { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM ET' },
  { day: 'Saturday', hours: '10:00 AM – 2:00 PM ET' },
  { day: 'Sunday', hours: 'Closed', closed: true },
];

export const CONTACT_EMAILS = [
  { label: 'General Inquiries', email: 'aimadeit@gmail.com' },
  { label: 'Project Inquiries', email: 'projects@aimadeit.example' },
  { label: 'Business Partnerships', email: 'partnerships@aimadeit.example' },
  { label: 'Customer Support', email: 'support@aimadeit.example' },
];

export const SOCIAL_HANDLES = [
  { platform: 'Instagram', handle: '@aimadeit' },
  { platform: 'TikTok', handle: '@aimadeit.creative' },
  { platform: 'YouTube', handle: '@aimadeitcreativelab' },
  { platform: 'Facebook', handle: 'AIMADEIT AI Creative Lab' },
  { platform: 'LinkedIn', handle: 'AIMADEIT Creative Lab' },
];

export const SERVICE_OPTIONS = [
  'AI Video Production',
  'AI Image Generation',
  'AI Advertisement Creation',
  'AI Character Creation',
  'Product Promotional Videos',
  'Social Media Content Creation',
  'Custom AI Creative Campaign',
];

export const BUDGET_OPTIONS = [
  'Under $150 (Single Image / Micro Project)',
  '$149 – $349 (Starter / Custom)',
  '$349 – $699 (Creator)',
  '$699 – $1,499 (Professional)',
  '$1,500+ (Enterprise)',
  '$299/mo (Basic Subscription)',
  '$599/mo (Growth Subscription)',
  '$999/mo (Premium Subscription)',
];

export const POLICY_CONTENT: Record<'privacy' | 'terms' | 'refund', { title: string; body: string[] }> = {
  privacy: {
    title: 'Privacy Policy',
    body: [
      'AIMADEIT AI Creative Lab respects client confidentiality and collects only the project details, contact information, and creative references voluntarily submitted through our inquiry forms.',
      'Submitted materials and reference assets are used strictly to scope, produce, and deliver requested creative projects. We do not sell or distribute client data to third parties.',
      'This website uses demonstration contact domains (.example) and sample portfolio entries to illustrate agency capabilities.',
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    body: [
      'All creative engagements begin with a defined project brief, deliverable schedule, and confirmed commercial usage agreement prior to production.',
      'Standard payment terms are 50% deposit prior to production and 50% upon final asset approval. Monthly subscription plans are billed in advance.',
      'Included revision rounds vary by selected package (1 to 3 rounds). Additional revisions or express turnaround requests are scoped transparently before work proceeds.',
    ],
  },
  refund: {
    title: 'Refund Policy',
    body: [
      'Because AI creative direction and custom visual production involve dedicated studio hours upon commencement, initial project deposits become non-refundable once Step 2 (Creative Planning) begins.',
      'If a project is cancelled prior to creative planning kickoff, deposits are refunded in full. Monthly subscriptions may be paused or cancelled prior to the next billing cycle.',
    ],
  },
};

/**
 * Clean-Promac Mock Data Schemas
 * This module exports structured mock data for Products and Industries,
 * demonstrating how dynamic data will feed into the UI components.
 */

// 1. Products Schema
export const productsData = [
  {
    id: 'prod-001',
    category: 'Scrubber Dryers',
    name: 'KLENCO Rider Scrubber',
    description: 'High-productivity for large commercial areas.',
    imageUrl: '/assets/product_1.png',
    features: ['High capacity tank', 'Ergonomic steering', 'Long battery life'],
    isFeatured: true
  },
  {
    id: 'prod-002',
    category: 'Vacuum Cleaners',
    name: 'KLENCO TYPHOON 578',
    description: 'Powerful dual motor wet & dry vacuum.',
    imageUrl: '/assets/product_2.png',
    features: ['Dual motor', 'Wet & Dry capability', 'Stainless steel tank'],
    isFeatured: true
  },
  {
    id: 'prod-003',
    category: 'Scrubber Dryers',
    name: 'TRUVOX Multiwash PRO',
    description: 'Compact, versatile and highly productive floor scrubber dryer.',
    imageUrl: '/assets/product_3.png',
    features: ['Multi-surface cleaning', 'Compact design', 'Excellent maneuverability'],
    isFeatured: true
  },
  {
    id: 'prod-004',
    category: 'High Pressure Washers',
    name: 'KLENCO K-1700',
    description: 'Powerful & reliable for tough cleaning tasks.',
    imageUrl: '/assets/product_4.png',
    features: ['High PSI', 'Durable pump', 'Multiple nozzles'],
    isFeatured: true
  },
  {
    id: 'prod-005',
    category: 'Single Disc Machines',
    name: 'KLENCO Single Disc Machine',
    description: 'Perfect for scrubbing, polishing & restoration.',
    imageUrl: '/assets/product_5.png',
    features: ['Heavy-duty motor', 'Versatile attachments', 'Easy operation'],
    isFeatured: true
  }
];

// Product Categories for the Horizontal Slider
export const productCategories = [
  { id: 'cat-001', name: 'Scrubber Dryers', imageUrl: '/assets/product_1.png' },
  { id: 'cat-002', name: 'Vacuum Cleaners', imageUrl: '/assets/product_2.png' },
  { id: 'cat-003', name: 'Sweepers', imageUrl: '/assets/product_3.png' },
  { id: 'cat-004', name: 'Single Disc Machines', imageUrl: '/assets/product_5.png' },
  { id: 'cat-005', name: 'High Pressure Washers', imageUrl: '/assets/product_4.png' },
  { id: 'cat-006', name: 'Carpet & Upholstery Machines', imageUrl: '/assets/product_2.png' },
  { id: 'cat-007', name: 'Steam Cleaners', imageUrl: '/assets/product_4.png' },
  { id: 'cat-008', name: 'Chemicals & Accessories', imageUrl: '/assets/product_1.png' }
];

// 2. Industries Schema
export const industriesData = [
  {
    id: 'ind-001',
    name: 'Healthcare',
    imageUrl: '/assets/healthcare.png',
    description: 'Hygienic solutions for hospitals and clinics.',
    gridSpan: 1
  },
  {
    id: 'ind-002',
    name: 'Hospitality',
    imageUrl: '/assets/hospitality.png',
    description: 'Immaculate presentation for hotels and resorts.',
    gridSpan: 1
  },
  {
    id: 'ind-003',
    name: 'Manufacturing',
    imageUrl: '/assets/manufacturing.png',
    description: 'Heavy-duty equipment for factories and plants.',
    gridSpan: 1
  },
  {
    id: 'ind-004',
    name: 'Corporate Offices',
    imageUrl: '/assets/corporate.png',
    description: 'Efficient cleaning for professional environments.',
    gridSpan: 1
  },
  {
    id: 'ind-005',
    name: 'Educational Institutions',
    imageUrl: '/assets/education.png',
    description: 'Safe and clean spaces for students and staff.',
    gridSpan: 1
  },
  {
    id: 'ind-006',
    name: 'Retail & Commercial',
    imageUrl: '/assets/retail.png',
    description: 'Inviting environments for shoppers and clients.',
    gridSpan: 1
  },
  {
    id: 'ind-007',
    name: 'Transportation & Infrastructure',
    imageUrl: '/assets/transport.png',
    description: 'High-traffic area maintenance solutions.',
    gridSpan: 1
  },
  {
    id: 'ind-008',
    name: 'Facility Management Companies',
    imageUrl: '/assets/facility.png',
    description: 'Comprehensive equipment ranges for FMC partners.',
    gridSpan: 1
  }
];

// 3. Brands Logo Data (For the "Trusted Global Brands" strip)
export const brandsData = [
  { id: 'brand-1', name: 'KLENCO', logoUrl: '/assets/klenco-logo.png' },
  { id: 'brand-2', name: 'TRUVOX', logoUrl: '/assets/truvox-logo-v2.svg' },
  { id: 'brand-3', name: 'PROMAC', logoUrl: '/assets/promac-logo.png' }
];

export const truvoxData = {
  id: 'truvox',
  name: 'TRUVOX',
  logo: '/assets/truvox-logo-v2.svg',
  tagline: 'Global Floorcare Solutions',
  description: 'Truvox International is a leading global manufacturer and supplier of commercial and industrial floorcare machines, based in Southampton, England. With a history dating back to 1960, Truvox has earned a strong reputation for producing innovative and reliable cleaning solutions, becoming the first choice in floorcare equipment in over 70 countries worldwide. Proudly part of the Tacony Corporation, they provide efficient and effective solutions to meet cleaning needs across a wide range of sectors, including facilities management, healthcare, education, retail, and leisure.',
  categories: [
    {
      id: 'scrubber-dryers',
      name: 'Scrubber Dryers',
      shortDesc: 'Efficient, deep cleaning for all hard floors.',
      image: '/assets/product_4.png',
      icon: '✨',
      products: [
        {
          id: 'multiwash-pro',
          name: 'Multiwash™ PRO',
          image: '/assets/product_4.png',
          description: 'The Multiwash PRO is a versatile multi-purpose floor cleaner that washes, scrubs and dries in a single pass on both hard and soft floors. Features a new sleek design and improved performance.',
          features: ['Washes, scrubs and dries in one pass', 'Effective on all floor types', 'Excellent maneuverability', 'Quiet operation'],
          specs: {
            'Motor Power': '400W - 1000W',
            'Cleaning Width': '340mm',
            'Solution Tank': '4 Litres',
            'Weight': '25 kg'
          }
        },
        {
          id: 'orbis-battery-scrubber',
          name: 'Orbis Battery Scrubber',
          image: '/assets/product_1.png',
          description: 'A compact and highly maneuverable battery powered scrubber dryer designed to clean small to medium-sized areas quickly and efficiently without the restriction of a trailing cable.',
          features: ['Battery operated for flexibility', 'Compact design', 'Easy to empty and clean', 'Adjustable handle'],
          specs: {
            'Run Time': 'Up to 80 mins',
            'Cleaning Width': '380mm',
            'Solution Tank': '17 Litres',
            'Weight': '60 kg'
          }
        }
      ]
    },
    {
      id: 'single-disc',
      name: 'Single Disc',
      shortDesc: 'Rotary machines for scrubbing, polishing and buffing.',
      image: '/assets/product_2.png',
      icon: '🔄',
      products: [
        {
          id: 'orbis-eco',
          name: 'Orbis Eco',
          image: '/assets/product_2.png',
          description: 'The Orbis Eco single disc rotary offers exceptional handling and cost-effective performance for stripping, scrubbing and polishing hard floors.',
          features: ['Ergonomic handle', 'High pad pressure', 'Low vibration', 'Optional solution tank'],
          specs: {
            'Motor': '1100W',
            'Pad Size': '430mm (17 inch)',
            'Speed': '200 rpm',
            'Weight': '32 kg'
          }
        }
      ]
    },
    {
      id: 'dry-vacuums',
      name: 'Dry Vacuums',
      shortDesc: 'Powerful, commercial-grade dry vacuum cleaners.',
      image: '/assets/product_3.png',
      icon: '🌪️',
      products: [
        {
          id: 'vtve',
          name: 'VTVe',
          image: '/assets/product_3.png',
          description: 'A high-performance, compact tub vacuum with an exceptional energy rating. Designed for daily commercial cleaning with a highly efficient HEPA 13 filter system.',
          features: ['A-class energy rating', 'HEPA 13 filtration', 'Cable storage', 'Lightweight'],
          specs: {
            'Motor Power': '800W',
            'Capacity': '11.5 Litres',
            'Cable Length': '11.5m',
            'Weight': '6 kg'
          }
        }
      ]
    },
    {
      id: 'wet-and-dry-vacuums',
      name: 'Wet and Dry Vacuums',
      shortDesc: 'Versatile vacuums for both liquid spills and dry debris.',
      image: '/assets/product_4.png',
      icon: '💧',
      products: [
        {
          id: 'hydrolite',
          name: 'Hydrolite',
          image: '/assets/product_4.png',
          description: 'A robust and high-capacity wet and dry vacuum, perfect for demanding industrial and commercial environments where heavy-duty suction is required.',
          features: ['High suction power', 'Durable polyethylene body', 'Easy emptying', 'Comprehensive tool kit'],
          specs: {
            'Motor Power': '1200W',
            'Capacity': '40 Litres',
            'Airflow': '60 L/sec',
            'Weight': '13 kg'
          }
        }
      ]
    },
    {
      id: 'carpet-cleaners',
      name: 'Carpet Cleaners',
      shortDesc: 'Deep extraction machines for professional carpet care.',
      image: '/assets/product_1.png',
      icon: '🧵',
      products: [
        {
          id: 'hydromist-compact',
          name: 'Hydromist Compact',
          image: '/assets/product_1.png',
          description: 'An all-in-one spray extraction machine for carpet and upholstery cleaning. Features a built-in rotary brush that lifts dirt from deep within the carpet pile.',
          features: ['Built-in rotary brush', 'High pressure spray', 'Powerful vacuum', 'Compact design'],
          specs: {
            'Pump Pressure': '1.5 bar',
            'Cleaning Width': '250mm',
            'Solution Tank': '14 Litres',
            'Weight': '22 kg'
          }
        }
      ]
    },
    {
      id: 'cimex-three-brush',
      name: 'Cimex Three Brush',
      shortDesc: 'Unique 3-brush system for uneven floors and deep scarifying.',
      image: '/assets/product_2.png',
      icon: '⚙️',
      products: [
        {
          id: 'cimex-cyclone',
          name: 'Cimex Cyclone',
          image: '/assets/product_2.png',
          description: 'The Cimex Cyclone features a unique three-brush counter-rotating system that prevents cable snagging and provides incredibly even scrubbing on uneven surfaces.',
          features: ['Three-brush action', 'No cable snagging', 'Floating brush heads', 'Reversible rotation'],
          specs: {
            'Motor': '370W',
            'Working Width': '380mm',
            'Brush Speed': '400 rpm',
            'Weight': '38 kg'
          }
        }
      ]
    },
    {
      id: 'escalator-sweepers',
      name: 'Escalator Sweepers',
      shortDesc: 'Specialized sweepers for fast and efficient escalator cleaning.',
      image: '/assets/product_3.png',
      icon: '🪜',
      products: [
        {
          id: 'tread-cleaner',
          name: 'Escalator Tread Cleaner',
          image: '/assets/product_3.png',
          description: 'A specialized machine designed to quickly and safely clean the treads of escalators and moving walkways without requiring them to be stopped.',
          features: ['Cleans while in motion', 'Powerful vacuum', 'Dual brushes', 'Edge-to-edge cleaning'],
          specs: {
            'Motor Power': '900W',
            'Cleaning Width': '450mm',
            'Bag Capacity': '10 Litres',
            'Weight': '24 kg'
          }
        }
      ]
    },
    {
      id: 'air-movers',
      name: 'Air Movers',
      shortDesc: 'High-velocity fans for rapid drying of carpets and floors.',
      image: '/assets/product_4.png',
      icon: '💨',
      products: [
        {
          id: 'air-mover-3000',
          name: 'Air Mover 3000',
          image: '/assets/product_4.png',
          description: 'A powerful 3-speed air mover designed to significantly reduce the drying time of carpets, hard floors, and freshly painted areas. Features a robust housing.',
          features: ['3 speed settings', 'Multi-angle positioning', 'High airflow', 'Stackable design'],
          specs: {
            'Motor Power': '500W',
            'Airflow': '3000 m³/hr',
            'Speeds': '3',
            'Weight': '11 kg'
          }
        }
      ]
    }
  ]
};

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
      shortDesc: 'Wash, scrub and dry in one single pass on hard floors and carpets.',
      image: '/assets/product_4.png',
      icon: '✨',
      products: [
        {
          id: 'multiwash-pro-steam',
          name: 'Multiwash™ PRO Steam',
          modelCode: 'MWPROSTEAM',
          image: '/assets/truvox-mwpro-steam.png',
          tagline: 'Wash, scrub, dry — and sanitise. All in one pass.',
          heroDescription: 'The Multiwash™ PRO Steam not only provides exceptional cleaning results due to its counter-rotating brushes, but with the additional steam function will sanitise floors, killing up to 99.99% of bacteria.',
          description: 'The Multiwash™ PRO Steam not only provides exceptional cleaning results due to its counter-rotating brushes, but with the additional steam function will sanitise floors, killing up to 99.99% of bacteria. Tested in a certified lab to remove >99.99% of S. aureus, E. coli, P. aeruginosa and B. subtilis bacteria — making it the ideal machine for healthcare, education, leisure, and any environment where hygiene is critical.',
          idealFor: ['Education', 'Healthcare', 'Hire', 'Leisure', 'Retail', 'Veterinary'],
          floorTypes: ['Carpet', 'Concrete', 'Hard Floors', 'Entrance Matting', 'Studded Rubber', 'Non-Slip Safety Floors', 'Tiles'],
          features: [
            { label: 'HYGIENIC', desc: 'Tested in a certified lab to remove >99.99% of S. aureus, E. coli, P. aeruginosa and B. subtilis bacteria', image: '/assets/MWPRO-Steam-Hygienic.jpg' },
            { label: 'INFECTION CONTROL', desc: 'With the addition of the steam, dirt and grime will be removed easier than traditional cleaning methods', image: '/assets/MWPRO-Steam-Infection-control.jpg' },
            { label: 'SIMPLE', desc: 'Easy to use, manoeuvre and maintain', image: '/assets/MWPRO-Steam-Simple.jpg' },
            { label: 'POWERFUL', desc: 'Counter-rotating cylindrical brushes scrub and lift dirt, giving a more hygienic and deeper clean', image: '/assets/Feature-images3.jpg' },
            { label: 'EFFICIENT', desc: 'Wash, scrub and dry in just one pass, leaving floors ready to walk on in seconds', image: '/assets/MWPRO-Steam-Efficient.jpg' },
            { label: 'PRODUCTIVE', desc: 'Giving a quicker and more effective clean than traditional cleaning methods, saving you time and money', image: '/assets/MWPRO-Steam-Productive.jpg' },
            { label: 'VERSATILE', desc: 'Effective on all floors with brushes available for carpets, hard floors and entrance matting', image: '/assets/MWPRO-Steam-Versatile.jpg' },
            { label: 'ACCESSORIES', desc: 'Optional accessories available for all your cleaning needs', image: '/assets/MWPRO-Features-Accessories-2.jpg' },
          ],
          gallery: [
            '/assets/truvox-mwpro-steam.png',
            '/assets/MWPRO-Steam-in-use-1-1.jpg',
            '/assets/MWPRO-Steam-in-use-2-1.jpg',
            '/assets/MWPRO-Steam-in-use-3-1.jpg',
          ],
          accessories: [
            { code: '90-0728-0000', name: 'MWPRO340 Standard brush – black (Pack of 2)', type: 'Standard', image: '/assets/90-0728-0000.png' },
            { code: '90-0731-0000', name: 'MWPRO340 Soft brush – grey (Pack of 2)', type: 'Optional', image: '/assets/90-0731-0000.png' },
            { code: '90-0734-0000', name: 'MWPRO340 Hard brush – blue (Pack of 2)', type: 'Optional', image: '/assets/90-0734-0000.png' },
            { code: '90-1020-0000', name: 'MWPRO340 Escalator brush – blue (Pack of 2)', type: 'Optional', image: '/assets/90-0737-0000.png' },
            { code: '90-0723-0000', name: 'MWPRO340 Side brush – standard', type: 'Optional', image: '/assets/90-0723-0000.png' },
            { code: '90-0845-0000', name: 'MWPRO340 Side brush – soft', type: 'Optional', image: '/assets/90-0845-0000.png' },
            { code: '90-0846-0000', name: 'MWPRO340 Side brush – hard', type: 'Optional', image: '/assets/90-0846-0000.png' },
            { code: '05-4781-0500', name: 'Trolley', type: 'Optional', image: '/assets/05-4781-0000.png' },
            { code: '90-0826-0000', name: '7 litre tank', type: 'Optional', image: '/assets/05-4781-0000-2.png' },
          ],
          videoUrl: 'https://www.youtube.com/embed/il2yFHMtVY4',
          supportVideos: [
            { url: 'https://www.youtube.com/embed/JB8iZT9RlJg', title: 'How to use the Multiwash PRO Steam' },
            { url: 'https://www.youtube.com/embed/ZznmtU3z5PM', title: 'Multiwash PRO Steam — Support Guide' },
          ],
          specs: {
            'Voltage / Frequency': '230 V AC (~) / 50 Hz',
            'Motor Power': '950 W',
            'Steam Generator Power': '1250 W',
            'Brush Width': '34 cm',
            'Steam Jet Width': '340 mm',
            'Brush Speed': '650 rpm',
            'Brush Pressure': '190 g/cm²',
            'Productivity Rate': '350 m²/h',
            'Solution Tank Capacity': '4 Litres',
            'Recovery Tank Capacity': '3 Litres',
            'Sound Pressure Level': '69 dB(A)',
            'Dimensions (L × W × H)': '39 × 45 × 111 cm',
            'Cable Length': '12 m',
            'Weight': '31 kg',
            'Warranty': '1 year*',
          }
        },

        {
          id: 'multiwash-pro-440',
          name: 'Multiwash™ PRO 440',
          modelCode: 'MWPRO440',
          image: '/assets/truvox-mwpro-440.png',
          tagline: 'Exceptional cleaning results after just one pass.',
          description: 'The Multiwash™ PRO 440 is an effective scrubber dryer that is simple to use, cost-effective and provides exceptional cleaning results after just one pass. With its wide 44 cm cleaning width it covers more floor area in less time, while the powerful contra-rotating cylindrical brushes scrub and lift dirt for a more hygienic and deeper clean — leaving floors ready to walk on in seconds.',
          idealFor: ['Education', 'Healthcare', 'Hire', 'Leisure', 'Retail', 'Veterinary'],
          floorTypes: ['Carpet', 'Concrete', 'Escalator', 'Hard Floors', 'Entrance Matting', 'Studded Rubber', 'Non-Slip Safety Floors', 'Tiles'],
          features: [
            'SIMPLE — Easy to use, manoeuvre and maintain',
            'POWERFUL — Contra-rotating cylindrical brushes scrub and lift dirt for a deeper clean',
            'EFFICIENT — Wash, scrub and dry in one pass, leaving floors ready to walk on in seconds',
            'PRODUCTIVE — Quicker and more effective than traditional cleaning methods',
            'VERSATILE — Effective on all floors with brushes for carpets, hard floors, escalators and entrance matting',
            'ACCESSORIES — Side brush allows you to clean right up to the edge',
          ],
          accessories: [
            { code: '90-0729-0000', name: 'MWPRO440 Standard brush – black (Pack of 2)', type: 'Standard' },
            { code: '90-0732-0000', name: 'MWPRO440 Soft brush – grey (Pack of 2)', type: 'Optional' },
            { code: '90-0735-0000', name: 'MWPRO440 Hard brush – blue (Pack of 2)', type: 'Optional' },
            { code: '90-1021-0000', name: 'MWPRO440 Escalator brush – blue (Pack of 2)', type: 'Optional' },
            { code: '90-0724-0000', name: 'MWPRO440 Side brush – standard', type: 'Optional' },
            { code: '90-0848-0000', name: 'MWPRO440 Side brush – soft', type: 'Optional' },
            { code: '90-0849-0000', name: 'MWPRO440 Side brush – hard', type: 'Optional' },
            { code: '05-4781-0500', name: 'Trolley', type: 'Optional' },
            { code: '90-0826-0000', name: '7 litre tank', type: 'Optional' },
          ],
          videoUrl: 'https://www.youtube.com/embed/B_mQkJr2au8',
          testimonial: {
            quote: 'The Multiwash gives us great results at a good price and with excellent back-up service... it also helps us clean hygienically in quick time—something that is essential in the very busy labour ward birthing rooms!',
            source: 'Glasgow Royal Infirmary'
          },
          specs: {
            'Voltage / Frequency': '230 V AC / 50 Hz',
            'Motor Power': '1150 W',
            'Brush Width': '44 cm',
            'Brush Speed': '650 rpm',
            'Brush Pressure': '170 g/cm²',
            'Productivity Rate': '450 m²/h',
            'Solution Tank': '4 Litres',
            'Recovery Tank': '4 Litres',
            'Sound Pressure Level': '71 dB(A)',
            'Dimensions (L×W×H)': '39 × 55 × 111 cm',
            'Cable Length': '12 m',
            'Weight': '31 kg',
            'Warranty': '1 year',
          }
        },
        {
          id: 'multiwash-pro-340',
          name: 'Multiwash™ PRO 340',
          modelCode: 'MWPRO340',
          image: '/assets/truvox-mwpro-340.png',
          tagline: 'Exceptional cleaning results after just one pass.',
          description: 'The Multiwash™ PRO 340 is an effective scrubber dryer that is simple to use, cost-effective and provides exceptional cleaning results after just one pass. Its contra-rotating cylindrical brushes scrub and lift dirt for a more hygienic and deeper clean. Suitable for carpets, hard floors, escalators and entrance matting — wash, scrub and dry in one pass leaving floors ready to walk on in seconds.',
          idealFor: ['Education', 'Healthcare', 'Hire', 'Leisure', 'Retail', 'Veterinary'],
          floorTypes: ['Carpet', 'Concrete', 'Escalator', 'Hard Floors', 'Entrance Matting', 'Studded Rubber', 'Non-Slip Safety Floors', 'Tiles'],
          features: [
            'SIMPLE — Easy to use, manoeuvre and maintain',
            'POWERFUL — Contra-rotating cylindrical brushes scrub and lift dirt for a deeper clean',
            'EFFICIENT — Wash, scrub and dry in one pass, leaving floors ready to walk on in seconds',
            'PRODUCTIVE — Quicker and more effective than traditional cleaning methods',
            'VERSATILE — Effective on all floors with brushes for carpets, hard floors, escalators and entrance matting',
            'ACCESSORIES — Side brush allows you to clean right up to the edge',
          ],
          accessories: [
            { code: '90-0728-0000', name: 'MWPRO340 Standard brush – black (Pack of 2)', type: 'Standard' },
            { code: '90-0731-0000', name: 'MWPRO340 Soft brush – grey (Pack of 2)', type: 'Optional' },
            { code: '90-0734-0000', name: 'MWPRO340 Hard brush – blue (Pack of 2)', type: 'Optional' },
            { code: '90-1020-0000', name: 'MWPRO340 Escalator brush – blue (Pack of 2)', type: 'Optional' },
            { code: '90-0723-0000', name: 'MWPRO340 Side brush – standard', type: 'Optional' },
            { code: '90-0845-0000', name: 'MWPRO340 Side brush – soft', type: 'Optional' },
            { code: '90-0846-0000', name: 'MWPRO340 Side brush – hard', type: 'Optional' },
            { code: '05-4781-0500', name: 'Trolley', type: 'Optional' },
            { code: '90-0826-0000', name: '7 litre tank', type: 'Optional' },
          ],
          videoUrl: 'https://www.youtube.com/embed/B_mQkJr2au8',
          testimonial: {
            quote: 'Gym cleaning AND sanitising in one, using a great tool to deep clean the rubberised flooring, easy!',
            source: 'Rue Paul'
          },
          specs: {
            'Voltage / Frequency': '230 V AC / 50 Hz',
            'Motor Power': '950 W',
            'Brush Width': '34 cm',
            'Brush Speed': '650 rpm',
            'Brush Pressure': '190 g/cm²',
            'Productivity Rate': '350 m²/h',
            'Solution Tank': '4 Litres',
            'Recovery Tank': '3 Litres',
            'Sound Pressure Level': '69 dB(A)',
            'Dimensions (L×W×H)': '39 × 45 × 111 cm',
            'Cable Length': '12 m',
            'Weight': '26.5 kg',
            'Warranty': '1 year',
          }
        },
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

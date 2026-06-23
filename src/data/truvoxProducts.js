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
          tagline: 'An effective scrubber dryer that is simple to use, cost-effective and provides exceptional cleaning results after just one pass.',
          heroDescription: 'An effective scrubber dryer that is simple to use, cost-effective and provides exceptional cleaning results after just one pass.',
          description: 'The Multiwash™ PRO 440 is an effective scrubber dryer that is simple to use, cost-effective and provides exceptional cleaning results after just one pass. With its wide 44 cm cleaning width it covers more floor area in less time, while the powerful contra-rotating cylindrical brushes scrub and lift dirt for a more hygienic and deeper clean — leaving floors ready to walk on in seconds.',
          idealFor: ['Education', 'Healthcare', 'Hire', 'Leisure', 'Retail', 'Veterinary'],
          floorTypes: ['Carpet', 'Concrete', 'Escalator', 'Hard Floors', 'Entrance Matting', 'Studded Rubber', 'Non-Slip Safety Floors', 'Tiles'],
          features: [
            { label: 'SIMPLE', desc: 'Easy to use, manoeuvre and maintain', image: '/assets/Feature-images.jpg' },
            { label: 'POWERFUL', desc: 'Contra-rotating cylindrical brushes scrub and lift dirt, giving a more hygienic and deeper clean', image: '/assets/Feature-images3.jpg' },
            { label: 'EFFICIENT', desc: 'Wash, scrub and dry in just one pass, leaving floors ready to walk on in seconds', image: '/assets/Feature-images5.jpg' },
            { label: 'PRODUCTIVE', desc: 'Giving a quicker and more effective clean than traditional cleaning methods, saving you time and money', image: '/assets/Feature-images6.jpg' },
            { label: 'VERSATILE', desc: 'Effective on all floors with brushes available for carpets, hard floors, escalators and entrance matting', image: '/assets/Feature-images7.jpg' },
            { label: 'ACCESSORIES', desc: 'Side brush allows you to clean right up to the edge', image: '/assets/Feature-images4.jpg' },
          ],
          gallery: [
            '/assets/truvox-mwpro-440.png',
            '/assets/MWPRO440.jpg',
            '/assets/MWPRO4402.jpg',
            '/assets/MWPRO4403.jpg',
          ],
          accessories: [
            { code: '90-0729-0000', name: 'MWPRO440 Standard brush – black (pack of 2)', type: 'Standard', image: '/assets/90-0729-0000.png' },
            { code: '90-0732-0000', name: 'MWPRO440 Soft brush – grey (pack of 2)', type: 'Optional', image: '/assets/90-0732-0000.png' },
            { code: '90-0735-0000', name: 'MWPRO440 Hard brush – blue (pack of 2)', type: 'Optional', image: '/assets/90-0735-0000.png' },
            { code: '90-1021-0000', name: 'MWPRO440 Escalator brush – blue (pack of 2)', type: 'Optional', image: '/assets/90-1021-0000.png' },
            { code: '90-0724-0000', name: 'MWPRO440 Side brush – standard', type: 'Optional', image: '/assets/90-0724-0000.png' },
            { code: '90-0848-0000', name: 'MWPRO440 Side brush – soft', type: 'Optional', image: '/assets/90-0848-0000.png' },
            { code: '90-0849-0000', name: 'MWPRO440 Side brush – hard', type: 'Optional', image: '/assets/90-0849-0000.png' },
            { code: '05-4781-0500', name: 'Trolley', type: 'Optional', image: '/assets/05-4781-0000.png' },
            { code: '90-0826-0000', name: '7 litre tank', type: 'Optional', image: '/assets/05-4781-0000-2.png' },
          ],
          videoUrl: 'https://www.youtube.com/embed/B_mQkJr2au8',
          supportVideos: [
            { url: 'https://www.youtube.com/embed/Dbga5xDdsSs', title: 'Multiwash PRO — Support Guide' },
          ],
          testimonial: {
            quote: 'The Multiwash gives us great results at a good price and with excellent back-up service... it also helps us clean hygienically in quick time—something that is essential in the very busy labour ward birthing rooms!',
            source: 'Glasgow Royal Infirmary'
          },
          specs: {
            'Voltage AC (~) / Frequency': '230 V / 50 Hz',
            'Motor Power': '1150 W',
            'Brush Width': '44 cm',
            'Brush Speed': '650 rpm',
            'Brush Pressure': '170 g/cm²',
            'Productivity Rate': '450 m²/h',
            'Sound Pressure Level': '71 dB(A)',
            'Solution Tank Capacity': '4 Litres',
            'Recovery Tank Capacity': '4 Litres',
            'Dimensions (L × W × H)': '39 × 55 × 111 cm',
            'Weight': '31 kg',
            'Cable Length': '12 m',
            'Warranty': '1 year*',
          }
        },
        {
          id: 'multiwash-pro-340',
          name: 'Multiwash™ PRO 340',
          modelCode: 'MWPRO340',
          image: '/assets/truvox-mwpro-340.png',
          tagline: 'An effective scrubber dryer that is simple to use, cost-effective and provides exceptional cleaning results after just one pass.',
          heroDescription: 'An effective scrubber dryer that is simple to use, cost-effective and provides exceptional cleaning results after just one pass.',
          description: 'The Multiwash™ PRO 340 is an effective scrubber dryer that is simple to use, cost-effective and provides exceptional cleaning results after just one pass. Its contra-rotating cylindrical brushes scrub and lift dirt for a more hygienic and deeper clean. Suitable for carpets, hard floors, escalators and entrance matting — wash, scrub and dry in one pass leaving floors ready to walk on in seconds.',
          idealFor: ['Education', 'Healthcare', 'Hire', 'Leisure', 'Retail', 'Veterinary'],
          floorTypes: ['Carpet', 'Concrete', 'Escalator', 'Hard Floors', 'Entrance Matting', 'Studded Rubber', 'Non-Slip Safety Floors', 'Tiles'],
          features: [
            { label: 'SIMPLE', desc: 'Easy to use, manoeuvre and maintain', image: '/assets/Feature-images.jpg' },
            { label: 'POWERFUL', desc: 'Contra-rotating cylindrical brushes scrub and lift dirt, giving a more hygienic and deeper clean', image: '/assets/Feature-images3.jpg' },
            { label: 'EFFICIENT', desc: 'Wash, scrub and dry in just one pass, leaving floors ready to walk on in seconds', image: '/assets/Feature-images5.jpg' },
            { label: 'PRODUCTIVE', desc: 'Giving a quicker and more effective clean than traditional cleaning methods, saving you time and money', image: '/assets/Feature-images6.jpg' },
            { label: 'VERSATILE', desc: 'Effective on all floors with brushes available for carpets, hard floors, escalators and entrance matting', image: '/assets/Feature-images7.jpg' },
            { label: 'ACCESSORIES', desc: 'Side brush allows you to clean right up to the edge', image: '/assets/Feature-images4.jpg' },
          ],
          gallery: [
            '/assets/truvox-mwpro-340.png',
            '/assets/Multiwash-PRO-340-in-use-1-1.jpg',
          ],
          accessories: [
            { code: '90-0728-0000', name: 'MWPRO340 Standard brush - black (Pack of 2)', type: 'Standard', image: '/assets/90-0728-0000.png' },
            { code: '90-0731-0000', name: 'MWPRO340 Soft brush - Grey (Pack of 2)', type: 'Optional', image: '/assets/90-0731-0000.png' },
            { code: '90-0734-0000', name: 'MWPRO340 Hard brush - blue (Pack of 2)', type: 'Optional', image: '/assets/90-0734-0000.png' },
            { code: '90-1020-0000', name: 'MWPRO340 Escalator brush - blue (Pack of 2)', type: 'Optional', image: '/assets/90-0737-0000.png' },
            { code: '90-0723-0000', name: 'MWPRO340 Side brush - standard', type: 'Optional', image: '/assets/90-0723-0000.png' },
            { code: '90-0845-0000', name: 'MWPRO340 Side brush - soft', type: 'Optional', image: '/assets/90-0845-0000.png' },
            { code: '90-0846-0000', name: 'MWPRO340 Side brush - hard', type: 'Optional', image: '/assets/90-0846-0000.png' },
            { code: '05-4781-0500', name: 'Trolley', type: 'Optional', image: '/assets/05-4781-0000.png' },
            { code: '90-0826-0000', name: '7 litre tank', type: 'Optional', image: '/assets/05-4781-0000-2.png' },
          ],
          videoUrl: 'https://www.youtube.com/embed/B_mQkJr2au8',
          supportVideos: [
            { url: 'https://www.youtube.com/embed/77VEbD_MPHs', title: 'Multiwash PRO 340' },
            { url: 'https://www.youtube.com/embed/Dbga5xDdsSs', title: 'Multiwash PRO — Support Guide' },
          ],
          testimonial: {
            quote: 'Gym cleaning AND sanitising in one, using a great tool to deep clean the rubberised flooring, easy!',
            source: 'Rue Paul'
          },
          specs: {
            'Voltage AC (~) / Frequency': '230 V / 50 Hz',
            'Motor Power': '950 W',
            'Brush Width': '34 cm',
            'Brush Speed': '650 rpm',
            'Brush Pressure': '190 g/cm²',
            'Productivity Rate': '350 m²/h',
            'Sound Pressure Level': '69 dB(A)',
            'Solution Tank Capacity': '4 Litres',
            'Recovery Tank Capacity': '3 Litres',
            'Dimensions (L × W × H)': '39 × 45 × 111 cm',
            'Weight': '26.5 kg',
            'Cable Length': '12 m',
            'Warranty': '1 year*',
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
          id: 'orbis-200-43',
          name: 'Orbis® 200 (43cm)',
          modelCode: 'ORBIS 200',
          image: '/assets/Orbis-200-Website.png',
          tagline: 'A powerful range of single disc machines, that offer exceptional handling and productivity for cleaning and polishing hard floors.',
          heroDescription: 'A powerful range of single disc machines, that offer exceptional handling and productivity for cleaning and polishing hard floors.',
          description: 'A powerful range of single disc machines, that offer exceptional handling and productivity for cleaning and polishing hard floors. Ideal for healthcare, leisure, and retail.',
          idealFor: ['Healthcare', 'Leisure', 'Retail'],
          floorTypes: ['Carpet', 'Concrete', 'Hard Floors', 'Marble', 'Studded Rubber', 'Non-Slip Safety Floors', 'Tarrazzo', 'Tiles'],
          features: [
            { label: 'EFFECTIVE', desc: 'High pad / brush pressure for effective cleaning', image: '/assets/Orbis-Features-Effective.jpg' },
            { label: 'EFFICIENT', desc: 'Large wheels for easy transportation. Plus, low motor height gives access under low furniture', image: '/assets/Orbis-Features-Efficcient.jpg' },
            { label: 'ERGONOMIC', desc: 'Soft start motor system, low vibration levels and adjustable handle for operator comfort and ease of use', image: '/assets/Orbis-features-ergonomic.jpg' },
            { label: 'VERSATILE', desc: 'Available in 15 inch (38cm) & 17 inch (43cm)', image: '/assets/Orbis-Features-Versatile.jpg' },
            { label: 'SAFETY', desc: 'High visibility power cord and dead man’s switch for increased safety', image: '/assets/Orbis-Features-Safety.jpg' },
            { label: 'ACCESSORIES', desc: 'Comprehensive range of accessories to suit all cleaning needs, including optional solution tank for wet scrubbing', image: '/assets/Orbis-Features-accessories.jpg' },
          ],
          gallery: [
            '/assets/Orbis-200-Website.png',
            '/assets/Orbis-in-use.jpg',
            '/assets/Orbis-in-use-1.jpg',
            '/assets/Orbis-in-use2.jpg',
            '/assets/Orbis-in-use3.jpg'
          ],
          accessories: [
            { code: '05-4714-0000', name: 'Eco Lok drive board', type: 'Standard', image: '/assets/05-4714-0000-200-38-_-200-110V-43.png' },
            { code: '05-4673-0500', name: 'Flexi Drive Disc', type: 'Optional', image: '/assets/05-4673-0500-200-38-_-400-38.png' },
            { code: '05-4674-0000', name: 'Palmyra floor brush (dry use only)', type: 'Optional', image: '/assets/05-4674-0000-200-38-_-400-38.png' },
            { code: '05-4524-0500', name: 'Polypropylene scrubbing brush', type: 'Optional', image: '/assets/05-4524-0500-200-38.png' },
            { code: '03-8122-0000', name: 'Furniture guard', type: 'Optional', image: '/assets/03-8122-0000-200-38cm-_-400-38cm.png' },
            { code: '05-3468-0000', name: 'Solution Tank (12 litres)', type: 'Optional', image: '/assets/05-3468-0000-200-38cm-_-200-110V-43cm-_-200-HD-43cm-_-Duo-43cm.png' },
            { code: '05-4156-0000', name: 'Spray system kit', type: 'Optional', image: '/assets/05-4156-0000-all.png' },
          ],
          specs: {
            'Voltage AC (~) / Frequency': '220 - 240 V / 50 - 60 Hz',
            'Motor Power': '1100 W',
            'Pad / brush diameter': '43 cm',
            'Pad / brush speed': '190 rpm',
            'Pad / brush pressure': '28 g/cm²',
            'Productivity rate': '475 m²/h',
            'Sound pressure level': '53 dB(A)',
            'Dimensions (L x W x H)': '62 x 43 x 121 cm',
            'Weight': '32 kg',
            'Cable length': '15 m',
            'Warranty': '2 years*',
          }
        },
        {
          id: 'orbis-400-43',
          name: 'Orbis® 400 (43cm)',
          modelCode: 'ORBIS 400',
          image: '/assets/Orbis-400-Website.png',
          tagline: 'A powerful single disc machine offering exceptional handling for polishing hard floors.',
          heroDescription: 'A powerful single disc machine offering exceptional handling for polishing hard floors.',
          description: 'A powerful single disc machine offering exceptional handling for polishing hard floors. With a 400 rpm pad speed, it is ideal for high-speed buffing and polishing in retail, healthcare, and leisure environments.',
          idealFor: ['Healthcare', 'Leisure', 'Retail'],
          floorTypes: ['Concrete', 'Hard Floors', 'Marble', 'Tarrazzo', 'Tiles'],
          features: [
            { label: 'EFFECTIVE', desc: 'High pad pressure for effective polishing', image: '/assets/Orbis-Features-Effective.jpg' },
            { label: 'EFFICIENT', desc: 'Large wheels for easy transportation. Plus, low motor height gives access under low furniture', image: '/assets/Orbis-Features-Efficcient.jpg' },
            { label: 'ERGONOMIC', desc: 'Soft start motor system, low vibration levels and adjustable handle for operator comfort', image: '/assets/Orbis-features-ergonomic.jpg' },
            { label: 'SAFETY', desc: 'High visibility power cord and dead man’s switch for increased safety', image: '/assets/Orbis-Features-Safety.jpg' },
            { label: 'ACCESSORIES', desc: 'Comprehensive range of accessories to suit all cleaning needs', image: '/assets/Orbis-Features-accessories.jpg' },
          ],
          gallery: [
            '/assets/Orbis-400-Website.png',
            '/assets/Orbis-in-use.jpg',
            '/assets/Orbis-in-use-1.jpg',
            '/assets/Orbis-in-use2.jpg',
            '/assets/Orbis-in-use3.jpg'
          ],
          accessories: [
            { code: '05-3437-0500', name: 'Flexi Drive Disc', type: 'Standard', image: '/assets/05-3437-0500.png' },
            { code: '05-3434-0500', name: 'Bassine polishing brush (wet or dry use)', type: 'Optional', image: '/assets/05-3434-0500-200-110v-43cm-_-200-HD-43cm-_-400-43cm-_-Duo-43cm.png' },
            { code: '03-6111-0000', name: 'Furniture guard', type: 'Optional', image: '/assets/03-6111-0000-200-110V-43cm-_-200-HD-43cm-_-400-43cm-_-Duo-43cm.png' },
            { code: '05-3151-0000', name: 'Anti-splash skirt', type: 'Optional', image: '/assets/05-3151-0000-200-110V-43cm-_-200-HD-43cm-_-400-43cm-_-Duo-43cm.png' },
            { code: '05-4156-0000', name: 'Spray system kit', type: 'Optional', image: '/assets/05-4156-0000-all.png' },
          ],
          specs: {
            'Voltage AC (~) / Frequency': '220 - 240 V / 50 - 60 Hz',
            'Motor Power': '1100 W',
            'Pad / brush diameter': '43 cm',
            'Pad / brush speed': '380 rpm',
            'Pad / brush pressure': '22 g/cm²',
            'Productivity rate': '475 m²/h',
            'Sound pressure level': '53 dB(A)',
            'Dimensions (L x W x H)': '62 x 43 x 121 cm',
            'Weight': '32 kg',
            'Cable length': '15 m',
            'Warranty': '2 years*',
          }
        },
        {
          id: 'orbis-duo',
          name: 'Orbis® Duo (43cm)',
          modelCode: 'ORBIS DUO',
          image: '/assets/Orbis-Duo-website.png',
          tagline: 'Offering two machines in one, the Orbis Duo offers a highly cost-effective solution for cleaning & polishing hard floors.',
          heroDescription: 'Offering two machines in one, the Orbis Duo offers a highly cost-effective solution for cleaning & polishing hard floors.',
          description: 'Offering two machines in one, the Orbis Duo offers a highly cost-effective solution for cleaning & polishing hard floors. Combining 154 rpm for scrubbing and 309 rpm for polishing in one machine.',
          idealFor: ['Healthcare', 'Leisure', 'Retail'],
          floorTypes: ['Carpet', 'Concrete', 'Hard Floors', 'Marble', 'Studded Rubber', 'Non-Slip Safety Floors', 'Tarrazzo', 'Tiles'],
          features: [
            { label: 'DUAL SPEED', desc: 'Offering two machines in one for cleaning & polishing', image: '/assets/Orbis-Features-dual-speed.jpg' },
            { label: 'EFFECTIVE', desc: 'High pad / brush pressure for effective cleaning', image: '/assets/Orbis-Features-Effective.jpg' },
            { label: 'EFFICIENT', desc: 'Large wheels for easy transportation', image: '/assets/Orbis-Features-Efficcient.jpg' },
            { label: 'ERGONOMIC', desc: 'Soft start motor system, low vibration levels and adjustable handle', image: '/assets/Orbis-features-ergonomic.jpg' },
            { label: 'SAFETY', desc: 'High visibility power cord and dead man’s switch for increased safety', image: '/assets/Orbis-Features-Safety.jpg' },
            { label: 'ACCESSORIES', desc: 'Comprehensive range of accessories to suit all cleaning needs', image: '/assets/Orbis-Features-accessories.jpg' },
          ],
          gallery: [
            '/assets/Orbis-Duo-website.png',
            '/assets/Orbis-in-use.jpg',
            '/assets/Orbis-in-use-1.jpg',
            '/assets/Orbis-in-use2.jpg',
            '/assets/Orbis-in-use3.jpg'
          ],
          accessories: [
            { code: '05-3437-0500', name: 'Flexi Drive Disc', type: 'Standard', image: '/assets/05-3437-0500.png' },
            { code: '05-3435-0500', name: 'Palmyra floor brush (dry use only)', type: 'Optional', image: '/assets/05-3435-0500-200-43-_-200HD-43-_-400-43cm-_-Duo-43cm.png' },
            { code: '05-3469-0500', name: 'Polypropylene scrubbing brush', type: 'Optional', image: '/assets/05-3469-0500-400-43cm-_-Duo-43cm.png' },
            { code: '05-3433-0000', name: 'Carpet shampoo brush', type: 'Optional', image: '/assets/05-3433-0000-200-110V-43cm-_-200-HD-43cm-_-Duo-43cm.png' },
            { code: '05-3434-0500', name: 'Bassine polishing brush (wet or dry use)', type: 'Optional', image: '/assets/05-3434-0500-200-110v-43cm-_-200-HD-43cm-_-400-43cm-_-Duo-43cm.png' },
            { code: '03-6111-0000', name: 'Furniture guard', type: 'Optional', image: '/assets/03-6111-0000-200-110V-43cm-_-200-HD-43cm-_-400-43cm-_-Duo-43cm.png' },
            { code: '05-3151-0000', name: 'Anti-splash skirt', type: 'Optional', image: '/assets/05-3151-0000-200-110V-43cm-_-200-HD-43cm-_-400-43cm-_-Duo-43cm.png' },
            { code: '05-3468-0000', name: 'Solution Tank (12 litres)', type: 'Optional', image: '/assets/05-3468-0000-200-38cm-_-200-110V-43cm-_-200-HD-43cm-_-Duo-43cm.png' },
            { code: '05-4156-0000', name: 'Spray system kit', type: 'Optional', image: '/assets/05-4156-0000-all.png' },
          ],
          specs: {
            'Voltage AC (~) / Frequency': '220 - 240 V / 50 - 60 Hz',
            'Motor Power': '1100 / 550 W',
            'Pad / brush diameter': '43 cm',
            'Pad / brush speed': '154 / 309 rpm',
            'Pad / brush pressure': '27 g/cm²',
            'Productivity rate': '475 m²/h',
            'Sound pressure level': '53 dB(A)',
            'Dimensions (L x W x H)': '62 x 43 x 121 cm',
            'Weight': '36 kg',
            'Cable length': '15 m',
            'Warranty': '2 years*',
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
          id: 'vtve-compact',
          name: 'VTVe Compact',
          modelCode: 'VTVE COMPACT',
          image: '/assets/VTVe-Compact-website.png',
          tagline: 'A high-performance, compact tub vacuum that has a A-class energy rating.',
          heroDescription: 'A high-performance, compact tub vacuum that has a A-class energy rating.',
          description: 'A high-performance, compact tub vacuum that has a A-class energy rating. Designed for daily commercial cleaning with an 11.5 litre capacity and A-class efficiency.',
          idealFor: ['Education', 'Healthcare', 'Leisure', 'Retail'],
          floorTypes: ['Carpet', 'Hard Floors'],
          features: [
            { label: 'LIGHTWEIGHT', desc: 'At only 6kg, it is light enough to be easily manoeuvred', image: '/assets/VTVe-Compact-features-Lightweight.jpg' },
            { label: 'SIMPLE', desc: 'Cable wrap for tidy storage', image: '/assets/VTVe-Compact-features-Simple.jpg' },
            { label: 'EFFICIENT', desc: 'A-class energy rating', image: '/assets/VTVe-Compact-features-Efficient.jpg' },
            { label: 'EASY', desc: 'Quick and easy to replace cord system', image: '/assets/VTVe-Compact-features-Easy.jpg' },
            { label: 'EFFECTIVE', desc: 'Great suction and 11.5L capacity', image: '/assets/VTVe-Compact-features-Effective.jpg' },
            { label: 'ACCESSORIES', desc: 'Wand, hose, crevice tool, dusting brush & combi tool', image: '/assets/VTVe-Compact-features-Accessories.jpg' },
          ],
          gallery: [
            '/assets/VTVe-Compact-website.png',
            '/assets/VTVe-Compact-Accessories.png'
          ],
          accessories: [
            { code: '87-0026-0000', name: '2m vacuum hose', type: 'Standard', image: '/assets/87-0026-0000-2.png' },
            { code: '87-0044-0000', name: 'Extension tube', type: 'Standard', image: '/assets/87-0044-0000.png' },
            { code: 'FB6A', name: 'Pack of 10 fleece bags', type: 'Standard', image: '/assets/FB6A.png' },
            { code: '87-0029-0000', name: 'Combi tool', type: 'Standard', image: '/assets/87-0029-0000-1.png' },
            { code: '05-4739-0000', name: 'Crevice tool', type: 'Standard', image: '/assets/05-4739-0000-1.png' },
            { code: '87-0027-0000', name: 'Dusting brush', type: 'Standard', image: '/assets/87-0027-0000.png' },
          ],
          specs: {
            'Voltage AC (~) / Frequency': '220 - 240 V / 50 - 60 Hz',
            'Motor Power': '800 W',
            'Capacity': '11.5 Litres',
            'Airflow rate': '30.5 l/s',
            'Vacuum / water lift': '22 / 2200 kPa / mmwg',
            'Filtration': 'HEPA 13 filter',
            'Sound pressure level': '60.1 dB(A)',
            'Sound power level': '72 dB(A)',
            'Dimensions (L x W x H)': '34 x 33 x 37 cm',
            'Weight': '6 kg',
            'Hose length': '2 m',
            'Cable length': '11.5 m',
            'Warranty': '1 year*',
          }
        },
        {
          id: 'vbpiie',
          name: 'VBPIIe',
          modelCode: 'VBPIIE',
          image: '/assets/vbpiie_main.png',
          tagline: 'A compact and lightweight backpack vacuum that is ideal for working in confined areas.',
          heroDescription: 'A compact and lightweight backpack vacuum that is ideal for working in confined areas.',
          description: 'A compact and lightweight backpack vacuum that is ideal for working in confined areas. Features a 4-stage HEPA 10 filtration system and ergonomic back support.',
          idealFor: ['Education', 'Facilities Management', 'Leisure', 'Retail'],
          floorTypes: ['Carpet', 'Hard Floors'],
          features: [
            { label: 'LIGHTWEIGHT', desc: 'Lightweight, at only 5kg, for operator comfort and reduces fatigue', image: '/assets/VBUII-features-lightweight.jpg' },
            { label: 'COMFORTABLE', desc: 'Adjustable harness and waist straps. Plus, ergonomic back support allowing for comfort, support and airflow', image: '/assets/vbpiie_main.png' },
            { label: 'POWERFUL', desc: '850W powerful motor', image: '/assets/vbpiie_main.png' },
            { label: 'SIMPLE', desc: 'Single handed tool operation allows for simultaneous surface dusting and litter collection', image: '/assets/VBUII-features-Simple.jpg' },
            { label: 'EFFECTIVE', desc: '4-stage filtration for exceptional filtration performance', image: '/assets/VBUII-features-Effective.jpg' },
            { label: 'EASY', desc: 'Quick and easy to replace the power cord', image: '/assets/VBUII-features-Easy.jpg' },
            { label: 'ACCESSORIES', desc: 'Inclusive of on boarding tools for detailed cleaning and hard to reach areas', image: '/assets/vbpiie_accessory_kit.png' },
          ],
          gallery: [
            '/assets/vbpiie_main.png'
          ],
          accessories: [
            { code: 'U2-U11-085', name: 'Hose', type: 'Standard', image: '/assets/vbpiie_hose.png' },
            { code: '89-0010-0000', name: 'Telescopic wand', type: 'Standard', image: '/assets/vbpiie_wand.png' },
            { code: 'HB15C', name: 'ECO floor tool', type: 'Standard', image: '/assets/vbpiie_floor_tool.png' },
            { code: '89-0016-0000', name: 'Small accessory tool set', type: 'Standard', image: '/assets/vbpiie_accessory_kit.png' },
            { code: 'U2-U11-078', name: 'Pack of 10 paper dust bags', type: 'Standard', image: '/assets/vbpiie_paper_bags.png' },
            { code: '89-0037-0000', name: 'Pack of 10 microfibre dust bags', type: 'Optional', image: '/assets/vbpiie_microfibre_bags.png' },
          ],
          specs: {
            'Voltage AC (~) / Frequency': '230 V / 50 Hz',
            'Vacuum Motor power': '850 W',
            'Capacity': '5 Litres',
            'Filtration': '4-stage HEPA 10',
            'Airflow rate': '40 l/s',
            'Productivity rate': '676 m²/h',
            'Vacuum / water lift': '20 / 2040 kPa / mmwg',
            'Sound pressure level': '68 dB(A)',
            'Sound power level': '76 dB(A)',
            'Dimensions (L x W x H)': '25 x 30 x 60 cm',
            'Weight': '5 kg',
            'Wand length': '563 / 943 mm',
            'Hose length': '1.5 m',
            'Cable length': '15 m',
          }
        },
        {
          id: 'valet-dual-motor-upright',
          name: 'Valet Dual Motor Upright',
          modelCode: 'VDMU',
          image: '/assets/VDMU-Website.png',
          tagline: 'A powerful and robust, dual motor upright vacuum cleaner, providing effective cleaning by removing dust particles down to 0.3 microns.',
          heroDescription: 'A powerful and robust, dual motor upright vacuum cleaner, providing effective cleaning by removing dust particles down to 0.3 microns.',
          description: 'A powerful and robust, dual motor upright vacuum cleaner, providing effective cleaning by removing dust particles down to 0.3 microns. Features a self-adjusting brush head and 3-stage HEPA filtration.',
          idealFor: ['Education', 'Facilities Management', 'Healthcare', 'Leisure', 'Retail'],
          floorTypes: ['Carpet', 'Hard Floors'],
          features: [
            { label: 'PRODUCTIVE', desc: 'Two motors give greater pick-up and improved carpet appearance', image: '/assets/VDMU-features-Productive.jpg' },
            { label: 'EFFECTIVE', desc: 'High filtration of all particles of 0.3 microns and larger, with 3-stage filtration including HEPA 12 filter', image: '/assets/VDMU-features-Effective.jpg' },
            { label: 'VERSATILE', desc: 'Self-adjusting brush head instantly adjusts to the carpet pile height', image: '/assets/VDMU-features-Versatile.jpg' },
            { label: 'EFFICIENT', desc: 'Three cleaning positions – upright when using accessories, standard working position & low for cleaning under furniture', image: '/assets/VDMU-features-Efficient.jpg' },
            { label: 'EASY', desc: 'Easy to change dust bag', image: '/assets/VDMU-features-Easy.jpg' },
            { label: 'ACCESSORIES', desc: 'Removable, extendable wand & on board cleaning tools for convenience and ease of use', image: '/assets/VDMU-features-accessories-2.jpg' },
          ],
          gallery: [
            '/assets/VDMU-Website.png',
            '/assets/VDMU-in-use4.jpg',
            '/assets/VDMU-in-use5.jpg',
            '/assets/VDMU-in-use6.jpg'
          ],
          accessories: [
            { code: '89-0052-0000', name: 'Pack of 10 paper dust bags', type: 'Standard', image: '/assets/89-0052-0000.png' },
            { code: '89-0053-0000', name: 'Round brush', type: 'Standard', image: '/assets/89-0053-0000.png' },
            { code: '89-0054-0000', name: 'Crevice tool', type: 'Standard', image: '/assets/89-0054-0000.png' },
          ],
          videos: [
            { url: 'https://www.youtube.com/embed/l5-Ec5pftsg', title: 'Valet Dual Motor Upright' },
            { url: 'https://www.youtube.com/embed/WneJYGJ_3hI', title: 'VDMU - Support Video' },
            { url: 'https://www.youtube.com/embed/eHgztPS7XaY', title: 'VDMU - User Guide' }
          ],
          specs: {
            'Voltage AC (~) / Frequency': '220 - 240 V / 50 Hz',
            'Number of motors': '2',
            'Vacuum motor power': '800 W',
            'Brush motor power': '50 W',
            'Capacity': '3.6 Litres',
            'Brush width': '30 cm',
            'Filtration': '3-stage HEPA filter',
            'Airflow rate': '25 m/s',
            'Productivity rate': '208 m²/h',
            'Vacuum / water lift': '24.8 / 2529 kPa / mmwg',
            'Sound pressure level': '65.9 dB(A)',
            'Sound power level': '79.9 dB(A)',
            'Dimensions (L x W x H)': '37 x 35 x 118 cm',
            'Weight': '10.6 kg',
            'Wand length': '580 / 860 mm',
            'Hose length': '1 m',
            'Cable length': '15 m',
            'Warranty': '1 year*',
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

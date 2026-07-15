export default function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Mock product database
  const products = [
    {
      id: 'prod_1',
      brand: 'Klenco',
      name: 'Typhoon Hardy',
      type: 'Vacuum Cleaner',
      description: 'Heavy duty commercial vacuum cleaner.',
      image: '/assets/klenco-typhoon-hardy.png'
    },
    {
      id: 'prod_2',
      brand: 'Truvox',
      name: 'Valet Aqua',
      type: 'Wet/Dry Vacuum',
      description: 'Versatile wet and dry vacuum for all surfaces.',
      image: '/assets/VA20-Website.png'
    },
    {
      id: 'prod_3',
      brand: 'Klenco',
      name: 'Cyclone G680',
      type: 'Floor Scrubber',
      description: 'Powerful floor scrubbing machine.',
      image: '/assets/klenco-cyclone-g680-0.png'
    }
  ];

  // Return the products as JSON
  return res.status(200).json({
    success: true,
    data: products
  });
}

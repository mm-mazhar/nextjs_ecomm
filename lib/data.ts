import { Data, IProductInput, IUserInput } from '@/types'
import bcrypt from 'bcryptjs'
import { toSlug } from './utils'

const users: IUserInput[] = [
  {
    name: 'John',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'Admin',
    address: {
      fullName: 'John Doe',
      street: '111 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10001',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'Jane',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'Admin',
    address: {
      fullName: 'Jane Harris',
      street: '222 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '1002',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'Jack',
    email: 'jack@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Jack Ryan',
      street: '333 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '1003',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'Sarah',
    email: 'sarah@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Sarah Smith',
      street: '444 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '1005',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'Michael',
    email: 'michael@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'John Alexander',
      street: '555 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '1006',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'Emily',
    email: 'emily@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Emily Johnson',
      street: '666 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10001',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
]

const products: IProductInput[] = [
  // T-Shirts
  {
    name: 'Black and Gold Stone Wash Basin',
    slug: toSlug('marble marblewashbasin stoneskin washbasindesign vanitydecor marblepillars marblewashbasin marblefountain pillardesign fountaindesign vanitybowl handicrafts marbleart fountainforyourhome artist gardendecor fountainlovers buyfast buynow #decoryourhome'),
    category: 'Marbles',
    images: ['/images/m11-1.jpg', '/images/m11-2.jpg'],
    tags: ['new-arrival'],
    isPublished: true,
    price: 199.99,
    listPrice: 0,
    brand: 'craftsHub',
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 9,
    countInStock: 11,
    description:
      'Black and gold stone wash basin hand carving black stone sink, luxury design sink Wash basain We will make marble pillars, fountains, wash basin and handicrafts in any stone and pattern as per your order',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    // colors: ['Green', 'Red', 'Black'],
    // colors empty because colors is optional
    colors: [],
    weight: [],
    dimensions: [],
    reviews: [],
  },
  {
    name: 'Black Zebra Marble Bowl 4"',
    slug: toSlug('stonedesires blackzebra handcravedbowl servingbowl marblebowllovers jewelrydish stonedish saucedish homedecoration diningtabledecoration'),
    category: 'Marbles',
    images: [
      '/images/m12-1.jpg',
      '/images/m12-2.jpg',
      '/images/m12-3.jpg',
    ],
    tags: ['featured'],
    isPublished: true,
    price: 49.99,
    listPrice: 0,
    brand: 'craftsHub',
    avgRating: 4.2,
    numReviews: 10,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 29,
    countInStock: 12,
    description:
      'Black Zebra Marble Bowl 4" Hand-carved Stone Bowl | Serving bowl | Marble Bowl | Jewelry Dish | Carved Stone Sauce Dish | Vanity Dish | Home ecorative Bowl | Dining Table Decor',

    sizes: ['4 Inch'],
    colors: ['Black Zebra White'],
    weight: [],
    dimensions: [],
    reviews: [],
  },
  {
    name: "Marble Chess Set",
    slug: toSlug('stonedesires chessgame chessplayer chesslover chesspiece uniquechessset marblehandicrafts marblechessboard marbleart #artandcraft'),
    category: 'Marbles',
    brand: 'craftsHub',
    images: ['/images/m13-1.jpg', '/images/m13-2.jpg'],
    tags: ['best-seller'],
    isPublished: true,
    price: 99.99,
    listPrice: 16.03,
    avgRating: 4,
    numReviews: 12,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 2 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 55,
    countInStock: 13,
    description:
      'Vintage Marble Chess Set with Intricately Carved Chess Pieces Available',
    sizes: ['L', 'XL'],
    colors: ['Green', 'White'],
    weight: [],
    dimensions: [],
    reviews: [],
  },
  {
    name: 'Banded Green Onyx Vases',
    slug: toSlug(
      'Banded Green Onyx Vases'
    ),
    category: 'Marbles',
    brand: 'craftsHub',
    images: ['/images/m14-1.jpg', '/images/m14-2.jpg'],
    tags: ['todays-deal'],
    isPublished: true,
    price: 26.95,
    listPrice: 46.03,
    avgRating: 3.85,
    numReviews: 14,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 54,
    countInStock: 14,
    description:
      'Customized Banded Green Onyx Vases, Beautiful Flower Vases, Crystal Center Piece, Decoration Vase',
    sizes: ['12 Inches'],
    colors: [],
    weight: [],
    dimensions: [],
    reviews: [],
  },
  {
    name: "Vintage Marble Chess Set",
    slug: toSlug(
      "Vintage Marble Chess Set"
    ),
    category: 'Marbles',
    brand: 'craftsHub',
    images: ['/images/m15-1.jpg', '/images/m15-2.jpg'],
    tags: ['new-arrival', 'featured'],
    isPublished: true,
    price: 29.99,
    listPrice: 35.99,
    avgRating: 3.66,
    numReviews: 15,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 54,
    countInStock: 15,
    description:
      'Vintage Marble Chess Set with Intricately Carved Chess Pieces Available\n' + 
      'SIZE INCH: 16x16\n' + 
      'CENTIMETER: 40x40\n' +
      'WEIGHT: 17.60 pound or 8Kg\n',
    sizes: [],
    colors: [],
    weight: ['8Kg'],
    dimensions: ['16x16 Inches'],
    reviews: [],
  },
  {
    name: 'Onyx apple paper weight',
    slug: toSlug('Onyx apple paper weight'),
    category: 'Marbles',
    brand: 'craftsHub',
    images: ['/images/m16-1.jpg', '/images/m16-2.jpg'],
    tags: ['best-seller', 'todays-deal'],
    isPublished: true,
    price: 25.3,
    listPrice: 32.99,
    avgRating: 3.46,
    numReviews: 13,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 3 },
    ],
    countInStock: 16,
    numSales: 56,
    description:
      'Onyx apple paper weight best for your office and home table decor available in 2 to 3 sizes',
    sizes: ['S', 'M', 'L'],
    colors: [],
    weight: [],
    dimensions: [],
    reviews: [],
  },
  // Jeans
  {
    name: 'Zahriya زهرية Handi',
    slug: toSlug('Zahriya زهرية Handi'),
    category: 'Pottery',
    brand: 'craftsHub',
    images: ['/images/p21-1.jpg', '/images/p21-2.jpg', '/images/p21-3.jpg', '/images/p21-4.jpg'],
    tags: ['new-arrival'],
    isPublished: true,
    price: 95.34,
    listPrice: 0,
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    countInStock: 54,
    numSales: 21,
    description:
      'Serving just got more beautiful with our handcrafted blue pottery cover pots. Designed for elegant presentation, these food-safe, heat-resistant handies bring both tradition and convenience to your kitchen.\n' +
      '✔ Handmade & hand-glazed – Unique, timeless craftsmanship\n' +
      '✔ Locks in flavors – Perfect for curries & traditional dishes\n' +
      '✔ Secure packaging',
    sizes: [],
    colors: ['Dark Blue', 'Light Blue'],
    weight: [],
    dimensions: [],
    reviews: [],
  },
  {
    name: "Antique Design Blue Pottery Dinner Set | 8 Persons Serving With Tea Set",
    slug: toSlug(
      "Antique Design Blue Pottery Dinner Set | 8 Persons Serving With Tea Set"
    ),
    category: 'Pottery',
    brand: "craftsHub",
    images: ['/images/p22-1.jpg', '/images/p22-2.jpg'],
    tags: ['featured'],
    isPublished: true,
    price: 2169.99,
    listPrice: 2169.99,
    avgRating: 4.2,
    numReviews: 10,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 22,
    numSales: 54,
    description:
      'The Elegant Blue Pottery Dinner Set - 8 Persons Serving is a stunning addition to your dining collection, available exclusively on Arraish. Crafted by skilled artisans, this set features unique, hand-painted designs and guarantees the highest quality glaze and paint. The set is both microwave and dishwasher-safe for your convenience, blending beauty with practicality.\n' +
      'This master set includes:\n' +
      '8 Dinner Plates\n' +
      '8 Quarter Plates' +
      '8 Small Bowls\n' +
      '1 Large Bowl\n' +
      '2 Cover Pots\n' +
      '1 Large Rice Dish\n' +
      '1 Tea Set (8 Persons Serving)\n' +
      '1 Large Handi\n' +
      '1 Small Handi\n' +
      '2 Raita Pots\n' +
      'Each piece is handmade with care, offering timeless elegance to enhance your dining experience.\n' +
      'Please note that due to the handmade nature, delivery takes approximately 10-20 days\n' + 
      'As part of our policy, all dinner sets require pre-payment, and COD is not available.\n',
    sizes: [],
    colors: ['Blue'],
    weight: [],
    dimensions: [],
    reviews: [],
  },
  {
    name: 'Azahir Tea Set for 6 person',
    slug: toSlug('Azahir Tea Set for 6 person'),
    category: 'Pottery',
    brand: 'craftsHub',
    images: ['/images/p23-1.jpg', '/images/p23-2.jpg'],
    tags: ['best-seller'],
    isPublished: true,
    price: 238.9,
    listPrice: 45,
    avgRating: 4,
    numReviews: 12,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 2 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 23,
    numSales: 54,
    description:
      'Brighten your tea time with our unique Azahir Tea Set, adorned with an elegant elephant motif against a serene ocean blue base. This exquisite set, handcrafted and painted by city of Multan skilled artisans, promises a charming and culturally rich tea experience.\n' +
    'Specifications:\n' +
    'Material: High-quality ceramic\n' +
    'Composition: Includes 1 tea pot, 1 sugar pot, 1 milk pot, 6 cups, and 6 saucers, serving up to 6 persons.\n' +
    'Features: Hand-glazed, hand-painted, lead-free, and individually sold.\n' +
    'Durability and Safety: Food-safe, and suitable for use in ovens, microwaves, and dishwashers.\n' +
    'Shipping:\n' +
    'Fast and reliable delivery within 10-15 business\n' +
    'Embrace the art of tea serving with this beautifully designed set that blends functionality with aesthetic appeal. Perfect for any occasion, from morning refreshments to evening gatherings.\n' +
    'Since its hand-made, each item may vary slightly, with potential brushstrokes visible on the back, adding to the individuality and authentic charm of the product.',
    sizes: [],
    colors: [],
    weight: [],
    dimensions: [],
    reviews: [],
  },
  {
    name: "Zahriya زهرية Serving Plate",
    slug: toSlug(
      "Zahriya زهرية Serving Plate"
    ),
    category: 'Pottery',
    brand: 'craftsHub',
    images: ['/images/p24-1.jpg', '/images/p24-2.jpg'],
    tags: ['todays-deal'],
    isPublished: true,
    price: 69.99,
    listPrice: 100,
    avgRating: 3.85,
    numReviews: 14,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 24,
    numSales: 53,
    description:
      'Add warmth and elegance to every meal with our Zahriya Collection Ceramic Plate. The handcrafted stoneware, glazed and painted by skilled artisans from Multan, features a natural blue undertone, reflecting the finest craftsmanship. Perfect for everyday use or special occasions, this plate brings an appetizing ambiance to your dining experience.\n' +
      'Specifications:\n' +
      'Material: High-quality ceramic\n' +
      'Composition: Includes 1 dinner plate and 1 quarter plate\n' +
      'Features: Hand-glazed, hand-painted, lead-free\n' +
      'Safety: Suitable for food, oven, microwave, and dishwasher use\n' +
      'Shipping: Delivered within 10-15 business days.\n' +
      'Since its hand-made, each item may vary slightly, with potential brushstrokes visible on the back, adding to the individuality and authentic charm of the product.',
    sizes: ['Dinner Plate - 10 Inches', 'Quarter Plate - 8 Inches'],
    colors: ['Blue', 'Grey'],
    weight: [],
    dimensions: [],
    reviews: [],
  },
  {
    name: 'Sama سماء Tea Set for 6 Persons | Handcrafted Blue Pottery Elegance',
    slug: toSlug('Sama سماء Tea Set for 6 Persons | Handcrafted Blue Pottery Elegance'),
    category: 'Pottery',
    brand: 'craftsHub',
    images: ['/images/p25-1.jpg', '/images/p25-2.jpg'],
    tags: ['new-arrival', 'featured'],
    isPublished: true,
    price: 295.34,
    listPrice: 0,
    avgRating: 3.66,
    numReviews: 15,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 25,
    numSales: 48,
    description:
      'The Sama سماء Tea Set for 6 Persons is a stunning example of handcrafted artistry. Featuring intricate white floral patterns on a deep blue background, this tea set blends timeless tradition with modern functionality. The set includes a teapot, cups, a creamer, and a sugar pot, each meticulously hand-painted and glazed. Designed to serve six people, it’s perfect for hosting elegant tea parties or enjoying daily tea rituals with style.\n' +
      'Each piece is crafted with care, showcasing slight variations that highlight its handmade charm and individuality.',
    sizes: [],
    colors: [],
    weight: [],
    dimensions: [],
    reviews: [],
  },
  {
    name: 'Arjwan أرجوان Blue Pottery Dessert/Cereal Bowls | SET OF 2',
    slug: toSlug(
      'Arjwan أرجوان Blue Pottery Dessert/Cereal Bowls | SET OF 2'
    ),
    category: 'Pottery',
    brand: 'craftsHub',
    images: ['/images/p26-1.jpg', '/images/p26-2.jpg'],
    tags: ['best-seller', 'todays-deal'],
    isPublished: true,
    price: 81.78,
    listPrice: 149.99,
    avgRating: 3.46,
    numReviews: 13,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 3 },
    ],
    countInStock: 26,
    numSales: 48,
    description:
      'These beautiful small bowls come from our Arjwan Collection. Each bowl is hand-painted and crafted by skilled artisans, featuring an elegant glaze applied by hand for an artisan-made look. Perfect for serving desserts, soups, or raitas with style.\n' +
      'Specifications:\n' +
      'Material: Ceramic\n' +
      'Dimensions: 5 Inches Diameter x 3 Inches Depth\n' +
      'Features: Hand-glazed, hand-painted, lead-free\n' +
      'Serving Set: Sold as a set of 2\n' +
      'Safety: Food-safe, suitable for use in ovens, microwaves, and dishwashers\n' +
      'Shipping: Fast and reliable delivery within 10-15 business days.\n' +
      'Since its hand-made, each item may vary slightly, with potential brushstrokes visible on the back, adding to the individuality and authentic charm of the product.',
    sizes: [],
    colors: [],
    weight: [],
    dimensions: [],
    reviews: [],
  },
  // Watches
  {
    name: "Pashmina Stole | Aari Border Embroidery 4 Side Border Perfect Gift",
    slug: toSlug("Pashmina Stole | Aari Border Embroidery 4 Side Border Perfect Gift"),
    category: 'Hand Crafts',
    brand: 'craftsHub',
    images: ['/images/h31-1.jpg', '/images/h31-2.jpg'],
    tags: ['new-arrival'],
    isPublished: true,
    price: 30.0,
    listPrice: 0,
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    countInStock: 31,
    numSales: 48,
    description:
      'Fine and Soft Pashmina Stole.\n' +
      'Aari Border 4 Side Embroidery.\n' +
      '80*30 inches Standard Stole Size.\n' +
      'Code STB107',
    sizes: [],
    colors: [],
    weight: [],
    dimensions: [],
    reviews: [],
  },
  {
    name: 'Silk Handmade Potli Bag | Purple',
    slug: toSlug(
      'Silk Handmade Potli Bag | Purple'
    ),
    category: 'Hand Crafts',
    brand: 'craftsHub',
    images: ['/images/h32-1.jpg', '/images/h32-2.jpg'],
    tags: ['featured'],
    isPublished: true,
    price: 375.83,
    listPrice: 400,
    avgRating: 4.2,
    numReviews: 10,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 32,
    numSales: 48,
    description:
      'Handmade Silk Potli Bag\n' +
      '7 inches Size Bag – Standard hand potli bag with Shoulder Strap\n' +
      'Free Delivery\n' +
      '100% Authentic product',
    sizes: [],
    colors: [],
    weight: [],
    dimensions: [],
    reviews: [],
  },
  {
    name: "Coffee Table | Naqshi | Blue",
    slug: toSlug(
      "Coffee Table | Naqshi | Blue"
    ),
    category: 'Hand Crafts',
    brand: 'craftsHub',
    images: ['/images/h33-1.jpg', '/images/h33-2.jpg'],
    tags: ['best-seller'],
    isPublished: true,
    price: 60.78,
    listPrice: 0,
    avgRating: 4,
    numReviews: 12,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 2 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 33,
    numSales: 48,
    description:
      'Size:\n' +
      'Top: 18 Inches\n' +
      'Support: 18 Inches\n' +
      'Base: 8 Inches\n' +
      'SPECIFICATIONS:\n' +
      'Material: Pressed MDF\n' +
      'Beautiful Naqshi design\n' +
      'Compact Size\n' +
      'Blue & Gold Naqshi on Top, Support, Base',
    sizes: [],
    colors: [],
    weight: [],
    dimensions: [],
    reviews: [],
  },
  {
    name: 'Kitchen Must Haves',
    slug: toSlug(
      'Kitchen Must Haves'
    ),
    category: 'Hand Crafts',
    brand: 'craftsHub',
    images: ['/images/h34-1.jpg', '/images/h34-2.jpg', '/images/h34-3.jpg', '/images/h34-4.jpg', '/images/h34-5.jpg','/images/h34-6.jpg',],
    tags: ['todays-deal'],
    isPublished: true,
    price: 34.22,
    listPrice: 54.99,
    avgRating: 3.85,
    numReviews: 14,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 34,
    numSales: 48,
    description:
      '✅ Premium Finished Wood.\n' +
      '✅ 5 sets of Spoons\n' +
      '✅ Spoon Stand\n' +
      '✅ Carving Hotpot\n' +
      '✅ Very Strong Handcrafted wood.\n',
    sizes: [],
    colors: [],
    weight: [],
    dimensions: [],
    reviews: [],
  },
  {
    name: "Wooden Serving basket",
    slug: toSlug(
      "Wooden Serving basket"
    ),
    category: 'Hand Crafts',
    brand: 'craftsHub',
    images: ['/images/h35-1.jpg', '/images/h35-2.jpg'],
    tags: ['new-arrival', 'featured'],
    isPublished: true,
    price: 171.22,
    listPrice: 225,
    avgRating: 3.66,
    numReviews: 15,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 35,
    numSales: 48,
    description:
      'SPECIFICATIONS:\n' +
      'Wooden Serving Tray\n' +
      'Made up of pure Sheesham Wood\n' +
      'Compact Design',
    sizes: [],
    colors: [],
    weight: [],
    dimensions: [],
    reviews: [],
  },
  // Add More Products
]

const reviews = [
  {
    rating: 1,
    title: 'Poor quality',
    comment:
      'Very disappointed. The item broke after just a few uses. Not worth the money.',
  },
  {
    rating: 2,
    title: 'Disappointed',
    comment:
      "Not as expected. The material feels cheap, and it didn't fit well. Wouldn't buy again.",
  },
  {
    rating: 2,
    title: 'Needs improvement',
    comment:
      "It looks nice but doesn't perform as expected. Wouldn't recommend without upgrades.",
  },
  {
    rating: 3,
    title: 'not bad',
    comment:
      'This product is decent, the quality is good but it could use some improvements in the details.',
  },
  {
    rating: 3,
    title: 'Okay, not great',
    comment:
      'It works, but not as well as I hoped. Quality is average and lacks some finishing.',
  },
  {
    rating: 3,
    title: 'Good product',
    comment:
      'This product is amazing, I love it! The quality is top notch, the material is comfortable and breathable.',
  },
  {
    rating: 4,
    title: 'Pretty good',
    comment:
      "Solid product! Great value for the price, but there's room for minor improvements.",
  },
  {
    rating: 4,
    title: 'Very satisfied',
    comment:
      'Good product! High quality and worth the price. Would consider buying again.',
  },
  {
    rating: 4,
    title: 'Absolutely love it!',
    comment:
      'Perfect in every way! The quality, design, and comfort exceeded all my expectations.',
  },
  {
    rating: 4,
    title: 'Exceeded expectations!',
    comment:
      'Fantastic product! High quality, feels durable, and performs well. Highly recommend!',
  },
  {
    rating: 5,
    title: 'Perfect purchase!',
    comment:
      "Couldn't be happier with this product. The quality is excellent, and it works flawlessly!",
  },
  {
    rating: 5,
    title: 'Highly recommend',
    comment:
      "Amazing product! Worth every penny, great design, and feels premium. I'm very satisfied.",
  },
  {
    rating: 5,
    title: 'Just what I needed',
    comment:
      'Exactly as described! Quality exceeded my expectations, and it arrived quickly.',
  },
  {
    rating: 5,
    title: 'Excellent choice!',
    comment:
      'This product is outstanding! Everything about it feels top-notch, from material to functionality.',
  },
  {
    rating: 5,
    title: "Couldn't ask for more!",
    comment:
      "Love this product! It's durable, stylish, and works great. Would buy again without hesitation.",
  },
]

const data: Data = {
    headerMenus: [
      {
        name: "Today's Deal",
        href: '/search?tag=todays-deal',
      },
      {
        name: 'New Arrivals',
        href: '/search?tag=new-arrival',
      },
      {
        name: 'Featured Products',
        href: '/search?tag=featured',
      },
      {
        name: 'Best Sellers',
        href: '/search?tag=best-seller',
      },
      {
        name: 'Browsing History',
        href: '/#browsing-history',
      },
      {
        name: 'Customer Service',
        href: '/page/customer-service',
      },
      {
        name: 'About Us',
        href: '/page/about-us',
      },
      {
        name: 'Help',
        href: '/page/help',
      },
    ],
    //Image Carousel
    carousels: [
      // {
      //   title: 'Most Popular Shoes For Sale',
      //   buttonCaption: 'Shop Now',
      //   image: '/images/banner3.jpg',
      //   url: '/search?category=Shoes',
      //   isPublished: true,
      // },
      // {
      //   title: 'Best Sellers in T-Shirts',
      //   buttonCaption: 'Shop Now',
      //   image: '/images/banner1.jpg',
      //   url: '/search?category=T-Shirts',
      //   isPublished: true,
      // },
      // {
      //   title: 'Best Deals on Wrist Watches',
      //   buttonCaption: 'See More',
      //   image: '/images/banner2.jpg',
      //   url: '/search?category=Wrist Watches',
      //   isPublished: true,
      // },
      {
        title: 'Most Popular in Pottery',
        buttonCaption: 'Shop Now',
        image: '/images/pottery_02.png',
        url: '/search?category=Pottery',
        isPublished: true,
      },
      {
        title: 'Best Sellers in Hand Crafts',
        buttonCaption: 'Shop Now',
        image: '/images/handicrafts_01.png',
        url: '/search?category=Hand Crafts',
        isPublished: true,
      },
      // {
      //   title: 'Best Deals in Wools',
      //   buttonCaption: 'See More',
      //   image: '/images/banner7.png',
      //   url: '/search?category=Wools',
      //   isPublished: true,
      // },
      {
        title: 'Best Deals in Marble',
        buttonCaption: 'See More',
        image: '/images/banner9.png',
        url: '/search?category=Marbles',
        isPublished: true,
      },
    ],
    products,
    users,
    reviews
  }
  
  export default data
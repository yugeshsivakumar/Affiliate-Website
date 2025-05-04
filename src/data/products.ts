import { Product } from '../types';

export const products: Product[] = [
  //books

  {
    id: 1,
    name: 'Ikigai by Francesc Miralles and Hector Garcia',
    category: 'books',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:602/format:webp/0*inzhpcIAm80HnDes',
    review:
      'Explores the Japanese concept of ikigai (reason for being) and provides insights on finding purpose, happiness, and longevity in life.',
    downloads: '5M+',
    rating: 4,
    amazonLink: 'https://amzn.in/d/hkkDIqD',
    pros: ['Simple and Inspiring', 'Easy to Read', 'Practical Insights'],
    cons: ['Lacks Scientific Depth', 'Generalized Advice'],
    userRatings: [5, 4, 5, 4, 4],
  },
  {
    id: 2,
    name: 'Psychology of Money by Morgan Housel',
    category: 'books',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:594/format:webp/0*gY2eJBwLWqAxt1Ja',
    review:
      'Explores how personal behaviors and emotions influence financial decisions, emphasizing that managing money is more about psychology than math.',
    downloads: '2M+',
    rating: 5,
    amazonLink: 'https://amzn.in/d/1jsQHqo',
    pros: ['Practical, Engaging', 'Relatable Stories'],
    cons: ['Lacks Technical Depth'],
    userRatings: [5, 4, 5, 5, 4],
  },
  {
    id: 3,
    name: 'Dopamine Detox by Thibaut Meurisse',
    category: 'books',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:720/format:webp/0*gmMH6nthyy7dge6o.jpeg',
    review:
      "Offers strategies to reduce overstimulation from modern technology, aiming to reset the brain's reward system for improved focus and well-being",
    downloads: '600k+',
    rating: 4,
    amazonLink: 'https://amzn.in/d/fOXiU9Q',
    pros: ['Practical, actionable advice', 'Concise and Direct'],
    cons: ['Over-Simplification', 'Generic Advice'],
    userRatings: [5, 4, 5, 5, 4],
  },
  {
    id: 4,
    name: 'The 5 AM Club by Robin Sharma',
    category: 'books',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:640/format:webp/0*w7aTdlTPwqRcrK6i.jpeg',
    review:
      'Advocates for a morning routine starting at 5 AM to boost productivity, health, and happiness.',
    downloads: '1M+',
    rating: 4.5,
    amazonLink: 'https://amzn.in/d/0KdQLV4',
    pros: ['Motivational', 'Structured Routine', 'Inspirational Storytelling'],
    cons: ['Fictional Format', 'Practicality Concerns'],
    userRatings: [5, 4, 5, 5, 4],
  },
  {
    id: 5,
    name: 'Atomic Habits by James Clear',
    category: 'books',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:640/format:webp/0*oXxCli_uOxT5l7g-.jpeg',
    review:
      'Explores how small, consistent actions can lead to significant personal and professional transformations.',
    downloads: '10M+',
    rating: 5,
    amazonLink: 'https://amzn.in/d/6Jp3qzK',
    pros: ['Practical Framework', 'Research-Based', 'Clear Writing'],
    cons: ['Basic Principles', 'Limited Novelty'],
    userRatings: [5, 4, 5, 5, 4],
  },

  // Software

  {
    id: 6,
    name: 'Notion',
    category: 'software',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:640/format:webp/0*2F6Ajm7eHqicjW-P',
    review:
      'Notion is an all-in-one productivity tool that allows users to manage notes, tasks, and projects in a customizable workspace. Its flexibility and collaborative features make it suitable for both personal and team use.',
    downloads: '50M+',
    rating: 5,
    amazonLink: 'https://www.notion.so/product',
    pros: [
      'All-in-one workspace',
      'Highly customizable',
      'Great collaboration features',
    ],
    cons: [
      'Requires internet connection for full functionality',
      'Can be slow with large databases',
    ],
    userRatings: [5, 4, 5, 5, 5],
    platformLinks: {
      windows: 'https://www.notion.so/desktop/windows',
      mac: 'https://www.notion.so/desktop/mac',
      android: 'https://play.google.com/store/apps/details?id=notion.id',
      ios: 'https://apps.apple.com/app/notion-notes-docs-tasks/id1232780281',
    },
  },
  {
    id: 7,
    name: 'Obsidian',
    category: 'software',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:594/format:webp/0*WHiEM-csTEwO791Y',
    review:
      "Obsidian is a powerful knowledge base that works on top of a local folder of plain text Markdown files. It's designed for users who prefer a more technical approach to note-taking, offering extensive customization and a robust plugin ecosystem.",
    downloads: '5M+',
    rating: 4,
    amazonLink: 'https://obsidian.md/download',
    pros: [
      'Fully customizable',
      'Extensive community plugins',
      'Offline functionality',
    ],
    cons: ['Steeper learning curve for beginners'],
    userRatings: [4, 5, 4, 3, 4],
    platformLinks: {
      windows: 'https://obsidian.md/download',
      mac: 'https://obsidian.md/download',
      linux: 'https://obsidian.md/download',
      android: 'https://play.google.com/store/apps/details?id=md.obsidian',
      ios: 'https://apps.apple.com/app/obsidian-connected-notes/id1557175442',
    },
  },
  {
    id: 8,
    name: 'Speechify',
    category: 'software',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:640/format:webp/0*9phkqEwWPxIFdpwy',
    review:
      "Speechify is a text-to-speech application that converts written text into spoken words, making it easier for users to consume content on the go. It's especially beneficial for individuals with reading difficulties or those who prefer auditory learning.",
    downloads: '10M+',
    rating: 4,
    amazonLink: 'https://www.speechify.com/download',
    pros: [
      'High-quality voices',
      'Cross-platform support',
      'Enhances accessibility',
    ],
    cons: ['Premium features can be expensive'],
    userRatings: [4, 5, 4, 4, 3],
    platformLinks: {
      android:
        'https://play.google.com/store/apps/details?id=com.cliffweitzman.speechify2&pcampaignid=web_share',
      ios: 'https://apps.apple.com/app/speechify-text-to-speech-audio/id1209815023',
    },
  },
  {
    id: 9,
    name: 'Grammarly',
    category: 'software',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:720/format:webp/0*HzMsnoqBznH9Su9A.png',
    review:
      "Grammarly is a writing assistant that offers real-time grammar, punctuation, and style suggestions to help users improve their writing. It's widely used by professionals, students, and anyone looking to enhance their written communication.",
    downloads: '30M+',
    rating: 4,
    amazonLink: 'https://app.grammarly.com/apps',
    pros: [
      'Advanced grammar checking',
      'AI-powered writing suggestions',
      'Cross-platform availability',
    ],
    cons: ['Premium version is relatively expensive'],
    userRatings: [5, 4, 5, 5, 4],
    platformLinks: {
      windows: 'https://www.grammarly.com/native/windows',
      mac: 'https://www.grammarly.com/native/mac',
      android:
        'https://play.google.com/store/apps/details?id=com.grammarly.android.keyboard',
      ios: 'https://apps.apple.com/app/grammarly-keyboard/id1158877342',
    },
  },
  {
    id: 10,
    name: 'NewPipe',
    category: 'software',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:558/format:webp/0*dE3QBQmVYehLHiJ8',
    review:
      "NewPipe is a free and open-source streaming client for Android that provides a privacy-friendly way to access YouTube content. It allows users to watch videos without ads, download content for offline viewing, and play audio in the background. Notably, NewPipe doesn't require Google Play Services, enhancing user privacy.",
    downloads: '1M+',
    rating: 3,
    amazonLink: 'https://newpipe.net/#download',
    pros: [
      'Ad-free experience',
      'Background playback',
      'Video and audio downloads',
      'Privacy-focused; no Google Play Services required',
    ],
    cons: [
      'Not available on official app stores; requires manual installation',
      'May occasionally face compatibility issues with YouTube updates',
    ],
    userRatings: [5, 4, 5, 4, 5],
    platformLinks: {
      android: 'https://newpipe.net/#download',
    },
  },
  {
    id: 11,
    name: 'Regain: Study Timer for Focus',
    category: 'software',
    imageUrl:
      'https://miro.medium.com/v2/format:webp/1*ppkZTcse5-eA01IlVwOgYw.png',
    review:
      'Regain is a productivity app designed to block distracting content like reels and YouTube shorts, helping users maintain focus and manage their screen time effectively. The app provides customizable blocking settings and a minimalist design to minimize distractions.',
    downloads: '100K+',
    rating: 5,
    amazonLink:
      'https://play.google.com/store/apps/details?id=ai.regainapp&pcampaignid=web_share',
    pros: [
      'Effectively blocks distracting content',
      'Enhances productivity and focus',
      'Customizable settings',
    ],
    cons: ['Available only on Android'],
    userRatings: [4, 4, 5, 3, 4],
    platformLinks: {
      android:
        'https://play.google.com/store/apps/details?id=ai.regainapp&pcampaignid=web_share',
    },
  },
  {
    id: 12,
    name: 'Brilliant',
    category: 'software',
    imageUrl:
      'https://miro.medium.com/v2/format:webp/1*ZT4p5VzR7gjlcOJ8sSvczw.png',
    review:
      'Brilliant offers interactive lessons in math, science, and computer science through problem-solving and hands-on learning. With courses designed by experts, Brilliant helps learners build foundational knowledge and practical skills.',
    downloads: '10M+',
    rating: 5,
    amazonLink: 'https://brilliant.org/',
    pros: [
      'Interactive and engaging lessons',
      'Wide variety of topics',
      'Suitable for learners of all levels',
    ],
    cons: ['Full access requires a subscription'],
    userRatings: [5, 5, 4, 5, 4],
    platformLinks: {
      android:
        'https://play.google.com/store/apps/details?id=org.brilliant.android&pcampaignid=web_share',
      ios: 'https://apps.apple.com/app/brilliant/id913335252',
      mac: 'https://brilliant.org/',
      linux: 'https://brilliant.org/',
      windows: 'https://brilliant.org/',
    },
  },
  {
    id: 13,
    name: 'Loop Habit Tracker',
    category: 'software',
    imageUrl:
      'https://miro.medium.com/v2/format:webp/1*I2aLnwkPca2ld6JAyPWWuw.png',
    review:
      'Loop Habit Tracker helps users build and maintain good habits through detailed graphs and statistics. The app is open-source, ad-free, and designed with a minimalistic and user-friendly interface.',
    downloads: '5M+',
    rating: 3,
    amazonLink:
      'https://play.google.com/store/apps/details?id=org.isoron.uhabits',
    pros: [
      'Ad-free and open-source',
      'Detailed statistics and graphs',
      'Flexible habit schedules',
      'Works offline',
    ],
    cons: ['No cloud synchronization', 'Limited to Android'],
    userRatings: [5, 4, 5, 5, 4],
    platformLinks: {
      android:
        'https://play.google.com/store/apps/details?id=org.isoron.uhabits',
    },
  },
  {
  "id": 13,
  "name": "Buyhatke",
  "category": "software",
  "imageUrl": "https://miro.medium.com/v2/resize:fit:600/format:webp/0*zI8bj-moBHpksc5G.jpg", 
  "review": "Buyhatke is a price comparison and coupon aggregator tool that helps users find the best prices, offers, and deals across major e-commerce sites. It also provides alerts on price drops and cashback opportunities.",
  "downloads": "10M+",
  "rating": 4,
  "amazonLink": "https://www.buyhatke.com/",
  "pros": [
    "Tracks price history and alerts for price drops",
    "Aggregates best coupons and deals",
    "Browser extension support for automatic coupon application"
  ],
  "cons": [
    "Interface can feel cluttered at times",
    "Occasional outdated offers"
  ],
  "userRatings": [4, 5, 4, 3, 5],
  "platformLinks": {
    "android": "https://play.google.com/store/apps/details?id=com.buyhatke.assistant&pcampaignid=web_share",
    "ios" : "https://apps.apple.com/us/app/buyhatke-best-price-shopping/id895452619",
    "mac": "https://compare.buyhatke.com/extension_referral/redirect?refID=yug5703007",
    "linux": "https://compare.buyhatke.com/extension_referral/redirect?refID=yug5703007",
    "windows": "https://compare.buyhatke.com/extension_referral/redirect?refID=yug5703007"
  }
}, 
  //gadgets
  {
    id: 14,
    name: 'boAt Airdopes 300',
    category: 'gadgets',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:640/format:webp/0*cidX_F9UEHp0Ukhr.png',
    review:
      'boAt Airdopes 300 are true wireless earbuds offering immersive audio experience with Bluetooth connectivity and long battery life.',
    downloads: '10k+',
    rating: 3,
    amazonLink: 'https://amzn.in/d/a42kaNV',
    pros: ['True wireless design', 'Long battery life', 'Affordable price'],
    cons: ['Limited noise cancellation'],
    userRatings: [4, 5, 4, 3, 4],
  },
  {
    id: 15,
    name: 'Cosmic Byte Artemis RGB Wired Mechanical Keyboard',
    category: 'gadgets',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:640/format:webp/0*Oioo95bWOTdUuzln.jpg',
    review:
      'The Cosmic Byte CB-GK-36 Artemis is a compact 68-key mechanical keyboard featuring per-key RGB lighting and swappable Outemu Blue switches for a customizable typing experience.',
    downloads: '3k+',
    rating: 4,
    amazonLink: 'https://amzn.in/d/hqRE7cM',
    pros: [
      'Compact design with 68 keys',
      'Per-key RGB lighting',
      'Swappable mechanical switches',
    ],
    cons: ['Fixed 3° tilt without extra lifting options'],
    userRatings: [5, 4, 5, 4, 4],
  },
  {
    id: 16,
    name: 'AERYS Digital Alarm Clock Table Clock',
    category: 'gadgets',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:750/format:webp/0*8oEbKLTb2BkrooDx.jpg',
    review:
      'The AERYS Digital Alarm Clock is a sleek table clock featuring a clear LED display, multiple alarm settings, and modern design suitable for any bedroom or office.',
    downloads: '15k+',
    rating: 4.0,
    amazonLink: 'https://amzn.in/d/82EjC1K',
    pros: ['Clear LED display', 'Multiple alarm settings', 'Modern design'],
    cons: ['No battery backup'],
    userRatings: [4, 4, 4, 3, 5],
  },
  {
    id: 17,
    name: 'XP-PEN Deco Mini 7 Graphics Tablet',
    category: 'gadgets',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:640/format:webp/1*k2van5vLUegBBSp8YiR5uQ.png',
    review:
      'The XP-PEN Deco Mini 7 is a portable graphics tablet with a 7-inch working area, battery-free stylus, and compatibility with various operating systems, ideal for digital artists and designers.',
    downloads: '2k+',
    rating: 5,
    amazonLink: 'https://amzn.in/d/60bVF9c',
    pros: ['Portable and compact', 'Battery-free stylus', 'Wide compatibility'],
    cons: ['Limited active area size', 'Price to high'],
    userRatings: [5, 4, 4, 4, 4],
  },
  //others
  {
    id: 18,
    name: "Fastrack Analog Men's Watch",
    category: 'others',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:640/format:webp/0*Gn8hsZtAIjfX1h9e.jpg',
    review:
      "The Fastrack Analog Men's Watch features a vibrant dial with a matching colored strap, offering a youthful and stylish look. Its quartz movement ensures accurate timekeeping, and the durable build makes it suitable for daily wear.",
    downloads: '1k+',
    rating: 4.2,
    amazonLink: 'https://amzn.in/d/cmyQGct',
    pros: ['Stylish design', 'Long Life', 'Durable build'],
    cons: ['Silicone Strap', 'Strap material may wear over time'],
    userRatings: [4, 5, 4, 3, 5],
  },
  // Stationery
  {
    id: 19,
    name: 'Flash Cards with Storage Box',
    category: 'stationery',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:640/format:webp/0*AX8jtSqLGmJeOVTd.jpg',
    review:
      'Suvigya offers unruled index flash cards measuring 2x3.5 inches, made from 200 GSM ivory cardstock. The pack includes 200 white sheets and comes with a storage box, making it ideal for note-taking, study aids, and organizing information.',
    downloads: '1k+',
    rating: 4,
    amazonLink: 'https://amzn.in/d/6N12GF5',
    pros: [
      'High-quality 200 GSM ivory cardstock',
      'Compact size suitable for portability',
      'Includes a storage box for organization',
    ],
    cons: [
      'Small size may not be suitable for extensive notes',
      "Unruled format may not suit everyone's preferences",
    ],
    userRatings: [5, 4, 4, 4, 4],
  },
];

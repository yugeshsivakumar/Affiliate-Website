import { Product } from '../types';

export const products: Product[] = [
  //books

  {
    id: 1,
    name: 'Ikigai by Francesc Miralles and Hector Garcia',
    category: 'books',
    imageUrl:
      'https://images.unsplash.com/photo-1625022653882-42eede1f1c52?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCjm7N7QPodguag90ceEO1ojU0EoMqRdrIxQ&s',
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
      'https://whatsinyourstory.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-09-08-at-4.17.05-PM.jpeg',
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
      'https://miro.medium.com/v2/resize:fit:1400/1*YdGqkz_Z9NTgmMwpS0x_Vw.jpeg',
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
      'https://miro.medium.com/v2/resize:fit:2000/1*IirUWdu5_jw10pEb1oaLtg.jpeg',
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
      'https://images.unsplash.com/photo-1683114010575-3ead4403180e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_tkeZh7LrdIQ_ZXxwL8USLLRqvFFck1oLT-P1MIHr9totdSGNf3zXWspouznjf44cnY&usqp=CAU',
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
      'https://play-lh.googleusercontent.com/W0GcGHbSPEA2VBf8CM-SoRG9yYS2RwxgPM9Q25MmhmU6YzJ2t8lHIAnejL0nL9LvYwMx=w480-h960-rw',
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
      'https://images.ctfassets.net/1e6ajr2k4140/59BCuroQxv6HsFY1t0LYx6/964f8dd29e89eb079a2737f7e7254c11/Frame_31613445.png',
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTg6S4B_sMLjAasfuP-8nDyDp2nf18U34tFg&s',
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
      'https://cdn-images-1.medium.com/v2/resize:fit:1000/1*ppkZTcse5-eA01IlVwOgYw.png',
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
      'https://cdn-images-1.medium.com/v2/resize:fit:1000/1*ZT4p5VzR7gjlcOJ8sSvczw.png',
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
      'https://cdn-images-1.medium.com/v2/resize:fit:1000/1*I2aLnwkPca2ld6JAyPWWuw.png',
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
  //gadgets
  {
    id: 14,
    name: 'boAt Airdopes 300',
    category: 'gadgets',
    imageUrl: 'https://www.addmecart.com/wp-content/uploads/2024/06/123-25.png',
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
    imageUrl: 'https://m.media-amazon.com/images/I/51WDeYbZ38L._SX679_.jpg',
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
    imageUrl: 'https://m.media-amazon.com/images/I/51U8fQGT2SL.jpg',
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
      'https://www.pchouse.com.bd/image/cache/catalog/0%20AA/Rashed/New%20Year%202023/March/04-03-23/3-600x500h.jpg.webp',
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
    imageUrl: 'https://m.media-amazon.com/images/I/51ShDfPKAjL._SX679_.jpg',
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
      'https://m.media-amazon.com/images/I/51s8R3VY+oL._AC_UF350,350_QL80_.jpg',
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

import { Product } from "../types";

export const products: Product[] = [
  // Books
  {
    id: 1,
    name: "Ikigai by Francesc Miralles and Hector Garcia",
    category: "books",
    imageUrl:
      "https://images.unsplash.com/photo-1625022653882-42eede1f1c52?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      'Explores the Japanese concept of ikigai (reason for being) and provides insights on finding purpose, happiness, and longevity in life.',
    downloads: "5M+",
    rating: 4,
    amazonLink: "https://amzn.in/d/hkkDIqD",
    pros: ["Simple and Inspiring", "Easy to Read", "Practical Insights"],
    cons: ["Lacks Scientific Depth", "Generalized Advice"],
    userRatings: [5, 4, 5, 4, 4],
  },
  {
    id: 2,
    name: "Psychology of Money by Morgan Housel",
    category: "books",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCjm7N7QPodguag90ceEO1ojU0EoMqRdrIxQ&s",
    review:
      "Explores how personal behaviors and emotions influence financial decisions, emphasizing that managing money is more about psychology than math.",
    downloads: "2M+",
    rating: 5,
    amazonLink: "https://amzn.in/d/1jsQHqo",
    pros: ["Practical, Engaging", "Relatable Stories"],
    cons: ["Lacks Technical Depth"],
    userRatings: [5, 4, 5, 5, 4],
  },
  {
  id: 3,
  name: "Dopamine Detox by Thibaut Meurisse",
  category: "books",
  imageUrl: "https://whatsinyourstory.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-09-08-at-4.17.05-PM.jpeg",
  review: "Offers strategies to reduce overstimulation from modern technology, aiming to reset the brain's reward system for improved focus and well-being",
  downloads: "600k+",
  rating: 4,
  amazonLink: "https://amzn.in/d/fOXiU9Q",
  pros: ["Practical, actionable advice", "Concise and Direct"],
  cons: ["Over-Simplification", "Generic Advice"],
  userRatings: [5, 4, 5, 5, 4]
  },
  {
  id: 4,
  name: "The 5 AM Club by Robin Sharma",
  category: "books",
  imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*YdGqkz_Z9NTgmMwpS0x_Vw.jpeg",
  review: "Advocates for a morning routine starting at 5 AM to boost productivity, health, and happiness.",
  downloads: "1M+",
  rating: 4.5,
  amazonLink: "https://amzn.in/d/0KdQLV4",
  pros: ["Motivational", "Structured Routine", "Inspirational Storytelling"],
  cons: ["Fictional Format", "Practicality Concerns"],
  userRatings: [5, 4, 5, 5, 4]
  },
  {
  id: 5,
  name: "Atomic Habits by James Clear",
  category: "books",
  imageUrl: "https://miro.medium.com/v2/resize:fit:2000/1*IirUWdu5_jw10pEb1oaLtg.jpeg",
  review: "Explores how small, consistent actions can lead to significant personal and professional transformations.",
  downloads: "10M+",
  rating: 5,
  amazonLink: "https://amzn.in/d/6Jp3qzK",
  pros: ["Practical Framework", "Research-Based", "Clear Writing"],
  cons: ["Basic Principles", "Limited Novelty"],
  userRatings: [5, 4, 5, 5, 4]
  },

  // Gadgets
  {
    id: 4,
    name: "Sony WH-1000XM4 Headphones",
    category: "gadgets",
    imageUrl:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    review:
      "The noise cancellation is unmatched. I use these daily for work calls and focus sessions. Battery life is impressive at 30+ hours, and the sound quality is rich and balanced. Worth every penny.",
    downloads: 45000,
    rating: 5,
    amazonLink:
      "https://www.amazon.com/Sony-WH-1000XM4-Canceling-Headphones-phone-call/dp/B0863TXGM3",
    pros: [
      "Industry-leading noise cancellation",
      "Exceptional battery life",
      "Comfortable for all-day wear",
    ],
    cons: ["Expensive", "Touch controls can be finicky"],
    userRatings: [5, 5, 4, 5, 5],
  },
  {
    id: 5,
    name: "Kindle Paperwhite",
    category: "gadgets",
    imageUrl:
      "https://images.unsplash.com/photo-1592890288564-76628a30a657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    review:
      "The perfect e-reader. Waterproof, weeks of battery life, and the adjustable warm light is easy on the eyes for night reading. I've read twice as many books since getting this.",
    downloads: 78000,
    rating: 4,
    amazonLink:
      "https://www.amazon.com/Kindle-Paperwhite-adjustable-Ad-Supported/dp/B08KTZ8249",
    pros: [
      "Waterproof design",
      "Adjustable warm light",
      "Weeks of battery life",
    ],
    cons: ["No USB-C charging", "Amazon ecosystem lock-in"],
    userRatings: [4, 5, 4, 4, 3],
  },
  {
    id: 6,
    name: "Anker PowerCore 26800",
    category: "gadgets",
    imageUrl:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    review:
      "This power bank has saved me countless times while traveling. It can charge my phone 7+ times and even handles my laptop in emergencies. Fast charging and surprisingly compact for its capacity.",
    downloads: 62000,
    rating: 4,
    amazonLink:
      "https://www.amazon.com/Anker-PowerCore-Portable-Capacity-PowerPort/dp/B01K6TA748",
    pros: [
      "Massive capacity",
      "Multiple device charging",
      "Reliable build quality",
    ],
    cons: ["Heavy compared to smaller options", "Charging time is lengthy"],
    userRatings: [4, 4, 5, 3, 4],
  },

  // Software
  {
    id: 7,
    name: "Notion",
    category: "software",
    imageUrl:
      "https://images.unsplash.com/photo-1683114010575-3ead4403180e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "The ultimate productivity tool. I've consolidated notes, project management, and personal wikis into one flexible workspace. The templates save hours of setup time, and the collaboration features are seamless.",
    downloads: 215000,
    rating: 5,
    amazonLink: "https://www.notion.so/product",
    pros: [
      "All-in-one workspace",
      "Highly customizable",
      "Great collaboration features",
    ],
    cons: ["Learning curve for new users", "Can be slow with large databases"],
    userRatings: [5, 4, 5, 5, 5],
  },
  {
    id: 8,
    name: "Adobe Lightroom",
    category: "software",
    imageUrl:
      "https://images.unsplash.com/photo-1516131206008-dd041a9764fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    review:
      "Transformed my photography workflow. The presets and batch editing save hours, while the mobile sync lets me edit on the go. Even as an amateur photographer, I found it intuitive to learn.",
    downloads: 145000,
    rating: 4,
    amazonLink: "https://www.adobe.com/products/photoshop-lightroom.html",
    pros: [
      "Professional-grade editing tools",
      "Excellent mobile app",
      "Seamless cloud syncing",
    ],
    cons: [
      "Subscription model is expensive",
      "Resource-intensive on older computers",
    ],
    userRatings: [4, 5, 4, 3, 4],
  },
  {
    id: 9,
    name: "NordVPN",
    category: "software",
    imageUrl:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    review:
      "Reliable security with impressive speeds. I use it daily for both work and personal browsing. The interface is clean and user-friendly, with servers in 60+ countries. Great value for the peace of mind it provides.",
    downloads: 320000,
    rating: 4,
    amazonLink: "https://nordvpn.com/",
    pros: ["Strong encryption", "No-logs policy", "Large server network"],
    cons: [
      "Occasional connection drops",
      "Advanced features require technical knowledge",
    ],
    userRatings: [4, 5, 3, 4, 4],
  },

  {
    id: 10,
    name: "Victorinox Swiss Army Knife",
    category: "others",
    imageUrl:
      "https://images.unsplash.com/photo-1551845728-6820a30c64e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    review:
      "The ultimate everyday carry tool. I've used mine for everything from opening packages to emergency repairs. The build quality is exceptional—mine has lasted 5+ years of daily use without issues.",
    downloads: 42000,
    rating: 5,
    amazonLink:
      "https://www.amazon.com/Victorinox-Swiss-Huntsman-Pocket-Knife/dp/B0001P151W",
    pros: [
      "Exceptional build quality",
      "Versatile tool selection",
      "Compact and portable",
    ],
    cons: ["Can be bulky in pocket", "Some tools rarely used"],
    userRatings: [5, 5, 4, 5, 5],
  },
  {
    id: 11,
    name: "Bosch Power Drill",
    category: "others",
    imageUrl:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    review:
      "Perfect balance of power and precision for home projects. The battery life is impressive, lasting through multiple furniture assemblies. The ergonomic grip reduces hand fatigue during extended use.",
    downloads: 38000,
    rating: 4,
    amazonLink:
      "https://www.amazon.com/Bosch-PS31-2A-12-Volt-Lithium-Ion-Batteries/dp/B003BEE2LU",
    pros: ["Long battery life", "Ergonomic design", "Powerful for its size"],
    cons: ["Chuck could be more durable", "No battery level indicator"],
    userRatings: [4, 5, 3, 4, 4],
  },
  {
    id: 12,
    name: "Moleskine Classic Notebook",
    category: "stationery",
    imageUrl:
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    review:
      "My analog productivity tool of choice. The paper quality is exceptional—no bleeding or ghosting with fountain pens. The binding has survived years in my bag, and the pocket in the back is perfect for receipts and cards.",
    downloads: 85000,
    rating: 5,
    amazonLink:
      "https://www.amazon.com/Moleskine-Classic-Notebook-Large-Notebooks/dp/8883701127",
    pros: ["Premium paper quality", "Durable binding", "Elegant design"],
    cons: ["Expensive compared to regular notebooks", "Limited paper options"],
    userRatings: [5, 4, 5, 5, 4],
  },

  // Stationery
  {
    id: 13,
    name: "LEUCHTTURM1917 Notebook",
    category: "stationery",
    imageUrl:
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    review:
      "The perfect companion for bullet journaling and note-taking. The paper quality is exceptional with minimal ghosting, and the index system helps keep everything organized.",
    downloads: 45000,
    rating: 5,
    amazonLink:
      "https://www.amazon.com/LEUCHTTURM1917-Medium-Dotted-Hardcover-Notebook/dp/B002TSIMW4",
    pros: [
      "Premium paper quality",
      "Built-in index and numbering",
      "Lies flat when open",
    ],
    cons: ["Premium price point", "Limited color options"],
    userRatings: [5, 5, 4, 5, 5],
  },
  {
    id: 14,
    name: "Pilot G2 Gel Pens",
    category: "stationery",
    imageUrl:
      "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    review:
      "The smoothest writing experience I've had. These pens glide effortlessly and don't skip or blob. Perfect for long writing sessions.",
    downloads: 78000,
    rating: 4,
    amazonLink:
      "https://www.amazon.com/Pilot-Retractable-Premium-Smooth-31277/dp/B001GAOTSW",
    pros: ["Smooth writing", "Comfortable grip", "Long-lasting ink"],
    cons: ["Can smudge if you're left-handed", "Clip can break easily"],
    userRatings: [4, 5, 4, 4, 5],
  },

  // Others
  {
    id: 15,
    name: "Ember Temperature Control Smart Mug",
    category: "others",
    imageUrl:
      "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    review:
      "Game-changer for coffee and tea lovers. Keeps your drink at the perfect temperature for hours. The app control is intuitive and the battery life is impressive.",
    downloads: 32000,
    rating: 4,
    amazonLink:
      "https://www.amazon.com/Ember-Temperature-Control-Smart-Mug/dp/B0773WG6NK",
    pros: [
      "Maintains perfect temperature",
      "Long battery life",
      "Sleek design",
    ],
    cons: ["Expensive", "Hand wash only"],
    userRatings: [4, 5, 4, 4, 3],
  },
  {
    id: 16,
    name: "Blue Light Blocking Glasses",
    category: "others",
    imageUrl:
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    review:
      "Essential for long hours in front of screens. Noticeably reduced eye strain and improved sleep quality. Stylish enough to wear all day.",
    downloads: 65000,
    rating: 4,
    amazonLink:
      "https://www.amazon.com/Blue-Light-Blocking-Glasses/dp/B08CNN9H7B",
    pros: ["Reduces eye strain", "Stylish design", "Lightweight frame"],
    cons: ["Slight color distortion", "May need adjustment period"],
    userRatings: [4, 4, 5, 4, 4],
  },
];

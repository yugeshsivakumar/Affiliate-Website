import { Product } from '../types';

export const products: Product[] = [
  // Books
  {
    id: 1,
    name: "Atomic Habits",
    category: "books",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    review: "This book transformed my daily routines. James Clear breaks down complex behavioral science into practical strategies that actually work. I've built several positive habits using his framework.",
    downloads: "125000+",
    rating: 5,
    amazonLink: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299",
    pros: ["Practical, actionable advice", "Easy to understand framework", "Backed by scientific research"],
    cons: ["Some concepts are repetitive", "Advanced readers might find it basic"],
    userRatings: [5, 4, 5, 5, 4]
  },
  {
    id: 2,
    name: "Deep Work",
    category: "books",
    imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    review: "Cal Newport's insights on focused work in a distracted world are invaluable. This book helped me restructure my workday to achieve more meaningful results with less time and stress.",
    downloads: 87500,
    rating: 4,
    amazonLink: "https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692",
    pros: ["Compelling case for focused work", "Practical strategies for implementation", "Well-researched"],
    cons: ["Some strategies require significant lifestyle changes", "Not all advice applies to every profession"],
    userRatings: [4, 5, 3, 4, 4]
  },
  {
    id: 3,
    name: "The Psychology of Money",
    category: "books",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    review: "Morgan Housel delivers profound financial wisdom through engaging stories. This isn't just another money book—it's about how we think about wealth, risk, and happiness. Changed my perspective on investing.",
    downloads: 95000,
    rating: 5,
    amazonLink: "https://www.amazon.com/Psychology-Money-Timeless-lessons-happiness/dp/0857197681",
    pros: ["Engaging storytelling approach", "Accessible financial concepts", "Timeless principles"],
    cons: ["Light on specific investment strategies", "Some stories are US-centric"],
    userRatings: [5, 5, 4, 5, 5]
  },
  
  // Gadgets
  {
    id: 4,
    name: "Sony WH-1000XM4 Headphones",
    category: "gadgets",
    imageUrl: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    review: "The noise cancellation is unmatched. I use these daily for work calls and focus sessions. Battery life is impressive at 30+ hours, and the sound quality is rich and balanced. Worth every penny.",
    downloads: 45000,
    rating: 5,
    amazonLink: "https://www.amazon.com/Sony-WH-1000XM4-Canceling-Headphones-phone-call/dp/B0863TXGM3",
    pros: ["Industry-leading noise cancellation", "Exceptional battery life", "Comfortable for all-day wear"],
    cons: ["Expensive", "Touch controls can be finicky"],
    userRatings: [5, 5, 4, 5, 5]
  },
  {
    id: 5,
    name: "Kindle Paperwhite",
    category: "gadgets",
    imageUrl: "https://images.unsplash.com/photo-1592890288564-76628a30a657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    review: "The perfect e-reader. Waterproof, weeks of battery life, and the adjustable warm light is easy on the eyes for night reading. I've read twice as many books since getting this.",
    downloads: 78000,
    rating: 4,
    amazonLink: "https://www.amazon.com/Kindle-Paperwhite-adjustable-Ad-Supported/dp/B08KTZ8249",
    pros: ["Waterproof design", "Adjustable warm light", "Weeks of battery life"],
    cons: ["No USB-C charging", "Amazon ecosystem lock-in"],
    userRatings: [4, 5, 4, 4, 3]
  },
  {
    id: 6,
    name: "Anker PowerCore 26800",
    category: "gadgets",
    imageUrl: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    review: "This power bank has saved me countless times while traveling. It can charge my phone 7+ times and even handles my laptop in emergencies. Fast charging and surprisingly compact for its capacity.",
    downloads: 62000,
    rating: 4,
    amazonLink: "https://www.amazon.com/Anker-PowerCore-Portable-Capacity-PowerPort/dp/B01K6TA748",
    pros: ["Massive capacity", "Multiple device charging", "Reliable build quality"],
    cons: ["Heavy compared to smaller options", "Charging time is lengthy"],
    userRatings: [4, 4, 5, 3, 4]
  },
  
  // Software
  {
    id: 7,
    name: "Notion",
    category: "software",
    imageUrl: "https://images.unsplash.com/photo-1683114010575-3ead4403180e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review: "The ultimate productivity tool. I've consolidated notes, project management, and personal wikis into one flexible workspace. The templates save hours of setup time, and the collaboration features are seamless.",
    downloads: 215000,
    rating: 5,
    amazonLink: "https://www.notion.so/product",
    pros: ["All-in-one workspace", "Highly customizable", "Great collaboration features"],
    cons: ["Learning curve for new users", "Can be slow with large databases"],
    userRatings: [5, 4, 5, 5, 5]
  },
  {
    id: 8,
    name: "Adobe Lightroom",
    category: "software",
    imageUrl: "https://images.unsplash.com/photo-1516131206008-dd041a9764fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    review: "Transformed my photography workflow. The presets and batch editing save hours, while the mobile sync lets me edit on the go. Even as an amateur photographer, I found it intuitive to learn.",
    downloads: 145000,
    rating: 4,
    amazonLink: "https://www.adobe.com/products/photoshop-lightroom.html",
    pros: ["Professional-grade editing tools", "Excellent mobile app", "Seamless cloud syncing"],
    cons: ["Subscription model is expensive", "Resource-intensive on older computers"],
    userRatings: [4, 5, 4, 3, 4]
  },
  {
    id: 9,
    name: "NordVPN",
    category: "software",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    review: "Reliable security with impressive speeds. I use it daily for both work and personal browsing. The interface is clean and user-friendly, with servers in 60+ countries. Great value for the peace of mind it provides.",
    downloads: 320000,
    rating: 4,
    amazonLink: "https://nordvpn.com/",
    pros: ["Strong encryption", "No-logs policy", "Large server network"],
    cons: ["Occasional connection drops", "Advanced features require technical knowledge"],
    userRatings: [4, 5, 3, 4, 4]
  },

  {
    id: 10,
    name: "Victorinox Swiss Army Knife",
    category: "others",
    imageUrl: "https://images.unsplash.com/photo-1551845728-6820a30c64e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    review: "The ultimate everyday carry tool. I've used mine for everything from opening packages to emergency repairs. The build quality is exceptional—mine has lasted 5+ years of daily use without issues.",
    downloads: 42000,
    rating: 5,
    amazonLink: "https://www.amazon.com/Victorinox-Swiss-Huntsman-Pocket-Knife/dp/B0001P151W",
    pros: ["Exceptional build quality", "Versatile tool selection", "Compact and portable"],
    cons: ["Can be bulky in pocket", "Some tools rarely used"],
    userRatings: [5, 5, 4, 5, 5]
  },
  {
    id: 11,
    name: "Bosch Power Drill",
    category: "others",
    imageUrl: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    review: "Perfect balance of power and precision for home projects. The battery life is impressive, lasting through multiple furniture assemblies. The ergonomic grip reduces hand fatigue during extended use.",
    downloads: 38000,
    rating: 4,
    amazonLink: "https://www.amazon.com/Bosch-PS31-2A-12-Volt-Lithium-Ion-Batteries/dp/B003BEE2LU",
    pros: ["Long battery life", "Ergonomic design", "Powerful for its size"],
    cons: ["Chuck could be more durable", "No battery level indicator"],
    userRatings: [4, 5, 3, 4, 4]
  },
  {
    id: 12,
    name: "Moleskine Classic Notebook",
    category: "stationery",
    imageUrl: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    review: "My analog productivity tool of choice. The paper quality is exceptional—no bleeding or ghosting with fountain pens. The binding has survived years in my bag, and the pocket in the back is perfect for receipts and cards.",
    downloads: 85000,
    rating: 5,
    amazonLink: "https://www.amazon.com/Moleskine-Classic-Notebook-Large-Notebooks/dp/8883701127",
    pros: ["Premium paper quality", "Durable binding", "Elegant design"],
    cons: ["Expensive compared to regular notebooks", "Limited paper options"],
    userRatings: [5, 4, 5, 5, 4]
  },
  
  // Stationery
  {
    id: 13,
    name: "LEUCHTTURM1917 Notebook",
    category: "stationery",
    imageUrl: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    review: "The perfect companion for bullet journaling and note-taking. The paper quality is exceptional with minimal ghosting, and the index system helps keep everything organized.",
    downloads: 45000,
    rating: 5,
    amazonLink: "https://www.amazon.com/LEUCHTTURM1917-Medium-Dotted-Hardcover-Notebook/dp/B002TSIMW4",
    pros: ["Premium paper quality", "Built-in index and numbering", "Lies flat when open"],
    cons: ["Premium price point", "Limited color options"],
    userRatings: [5, 5, 4, 5, 5]
  },
  {
    id: 14,
    name: "Pilot G2 Gel Pens",
    category: "stationery",
    imageUrl: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    review: "The smoothest writing experience I've had. These pens glide effortlessly and don't skip or blob. Perfect for long writing sessions.",
    downloads: 78000,
    rating: 4,
    amazonLink: "https://www.amazon.com/Pilot-Retractable-Premium-Smooth-31277/dp/B001GAOTSW",
    pros: ["Smooth writing", "Comfortable grip", "Long-lasting ink"],
    cons: ["Can smudge if you're left-handed", "Clip can break easily"],
    userRatings: [4, 5, 4, 4, 5]
  },
  
  // Others
  {
    id: 15,
    name: "Ember Temperature Control Smart Mug",
    category: "others",
    imageUrl: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    review: "Game-changer for coffee and tea lovers. Keeps your drink at the perfect temperature for hours. The app control is intuitive and the battery life is impressive.",
    downloads: 32000,
    rating: 4,
    amazonLink: "https://www.amazon.com/Ember-Temperature-Control-Smart-Mug/dp/B0773WG6NK",
    pros: ["Maintains perfect temperature", "Long battery life", "Sleek design"],
    cons: ["Expensive", "Hand wash only"],
    userRatings: [4, 5, 4, 4, 3]
  },
  {
    id: 16,
    name: "Blue Light Blocking Glasses",
    category: "others",
    imageUrl: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    review: "Essential for long hours in front of screens. Noticeably reduced eye strain and improved sleep quality. Stylish enough to wear all day.",
    downloads: 65000,
    rating: 4,
    amazonLink: "https://www.amazon.com/Blue-Light-Blocking-Glasses/dp/B08CNN9H7B",
    pros: ["Reduces eye strain", "Stylish design", "Lightweight frame"],
    cons: ["Slight color distortion", "May need adjustment period"],
    userRatings: [4, 4, 5, 4, 4]
  }
];
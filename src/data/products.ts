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
  // Software
  {
    id: 6,
    name: "Notion",
    category: "software",
    imageUrl:
      "https://images.unsplash.com/photo-1683114010575-3ead4403180e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "The ultimate productivity tool. I've consolidated notes, project management, and personal wikis into one flexible workspace. The templates save hours of setup time, and the collaboration features are seamless.",
    downloads: "100M+",
    rating: 5,
    amazonLink: "https://www.notion.so/product",
    pros: [
      "All-in-one workspace",
      "Highly customizable",
      "Great collaboration features",
    ],
    cons: ["Internet Compulsory", "Slow with large databases"],
    userRatings: [5, 4, 5, 5, 5],
  },
  {
    id: 7,
    name: "Obsidian",
    category: "software",
    imageUrl:
      "src/images/obsidian.webp",
    review:
      "Obsidian is a powerful, markdown-based note-taking app designed for linking and organizing knowledge like a personal knowledge graph.",
    downloads: "1M+",
    rating: 4,
    amazonLink: "https://obsidian.md/download",
    pros: [
      "Fully Customizable",
      "Community Plugins",
      "Offline",
    ],
    cons: [
      "Hard to use for beginners"
    ],
    userRatings: [4, 5, 4, 3, 4],
  },
    {
      "id": 8,
      "name": "Speechify",
      "category": "software",
      "imageUrl":
        "https://play-lh.googleusercontent.com/W0GcGHbSPEA2VBf8CM-SoRG9yYS2RwxgPM9Q25MmhmU6YzJ2t8lHIAnejL0nL9LvYwMx=w480-h960-rw",
      "review":
        "Speechify is a text-to-speech tool that converts written text into natural-sounding audio, making reading more accessible and convenient.",
      "downloads": "5M+",
      "rating": 4,
      "amazonLink": "https://www.speechify.com/download",
      "pros": [
        "High-quality voices",
        "Works across devices",
        "Helps with accessibility"
      ],
      "cons": [
        "Expensive premium version"
      ],
      "userRatings": [4, 5, 4, 4, 3]
    },
  {
    "id": 9,
    "name": "Grammarly",
    "category": "software",
    "imageUrl":
      "src/images/grammarly.png",
    "review":
      "Grammarly is a writing assistant that helps users improve their grammar, clarity, and style with real-time AI-powered suggestions.",
    "downloads": "50M+",
    "rating": 4,
    "amazonLink": "https://app.grammarly.com/apps",
    "pros": [
      "Advanced grammar checking",
      "AI-powered suggestions",
      "Works across multiple platforms"
    ],
    "cons": [
      "Premium version is expensive"
    ],
    "userRatings": [5, 4, 5, 5, 4]
  },
    {
      "id": 10,
      "name": "Quizlet",
      "category": "software",
      "imageUrl":
        "src/images/quizlet.png",
      "review":
        "Quizlet is a learning tool that helps students study with flashcards, quizzes, and games, making memorization more engaging and effective.",
      "downloads": "10M+",
      "rating": 4,
      "amazonLink": "https://www.quizlet.com/download",
      "pros": [
        "Effective for memorization",
        "User-friendly interface",
        "Large community content"
      ],
      "cons": [
        "Some features require a subscription"
      ],
      "userRatings": [5, 4, 5, 4, 4]
    },

];

export const templates = [
  {
    id: 1,
    name: 'Aura Studio',
    category: 'Minimal',
    tags: ['Agency', 'Minimal'],
    featured: true,
    color: '#d4c5b0',
    emoji: '🏛️',
    description: 'Clean and minimal layout for agencies and studios.',
  },
  {
    id: 2,
    name: 'Chroma Grid',
    category: 'Creative',
    tags: ['Photography', 'Creative'],
    featured: false,
    color: '#b5c4d4',
    emoji: '📸',
    description: 'Bold grid layout perfect for photographers.',
  },
  {
    id: 3,
    name: 'Executive Flow',
    category: 'Corporate',
    tags: ['Consultant', 'Corporate'],
    featured: false,
    color: '#2a2a2a',
    emoji: '💼',
    description: 'Professional dark theme for consultants and executives.',
  },
  {
    id: 4,
    name: 'Blank Canvas',
    category: 'Minimal',
    tags: ['Designer', 'Minimal'],
    featured: false,
    color: '#f5f5f5',
    emoji: '✏️',
    description: 'Start fresh with a completely blank canvas template.',
  },
  {
    id: 5,
    name: 'Syntax',
    category: 'Corporate',
    tags: ['Developer', 'Corporate'],
    featured: false,
    color: '#1e1e2e',
    emoji: '💻',
    description: 'Dark developer portfolio with code-style aesthetics.',
  },
  {
    id: 6,
    name: 'Bloom',
    category: 'Creative',
    tags: ['Illustrator', 'Creative'],
    featured: false,
    color: '#e8c4b8',
    emoji: '🎨',
    description: 'Soft, artistic layout for illustrators and painters.',
  },
]

export const myPortfolios = [
  {
    id: 1,
    title: 'Urban Brutalism Collection',
    description: 'A study of raw concrete structures in modern cityscapes.',
    category: 'Architecture',
    status: 'published',
    views: 12405,
    lastEdited: '2 days ago',
    coverColor: '#8a7a6a',
    emoji: '🏗️',
    projects: [
      {
        id: 'p1',
        title: 'Concrete Dreams',
        tags: ['Architecture', 'Photography'],
        description: 'Exploring brutalist architecture in Eastern European cities.',
        coverColor: '#6b6b6b',
        emoji: '🏢',
      },
      {
        id: 'p2',
        title: 'Steel & Sky',
        tags: ['Urban', 'Design'],
        description: 'Industrial skylines photographed at golden hour.',
        coverColor: '#4a5568',
        emoji: '🌆',
      },
      {
        id: 'p3',
        title: 'Texture Studies',
        tags: ['Minimal', 'Art'],
        description: 'Close-up studies of raw concrete and metal surfaces.',
        coverColor: '#718096',
        emoji: '🔲',
      },
    ],
  },
  {
    id: 2,
    title: 'Industrial Objects \'24',
    description: 'Recent industrial design concepts and prototyping case studies.',
    category: 'Product Design',
    status: 'draft',
    views: 0,
    lastEdited: '5 hours ago',
    coverColor: '#3a3a3a',
    emoji: '⚙️',
    projects: [
      {
        id: 'p4',
        title: 'Modular Desk Lamp',
        tags: ['Product Design', 'Industrial'],
        description: 'A fully modular desk lamp with magnetic connectors.',
        coverColor: '#2d3748',
        emoji: '💡',
      },
      {
        id: 'p5',
        title: 'Ceramic Speaker',
        tags: ['Design', 'Audio'],
        description: 'Hand-thrown ceramic Bluetooth speaker design.',
        coverColor: '#4a4a4a',
        emoji: '🔊',
      },
    ],
  },
]

export const dashboardStats = {
  totalViews: '12,405',
  published: 1,
  storageUsed: '45%',
}

export const sidebarLinks = [
  { label: 'Dashboard', icon: '⊞', path: '/dashboard' },
  { label: 'Templates', icon: '⊡', path: '/gallery' },
  { label: 'Analytics', icon: '↗', path: '#' },
  { label: 'Settings', icon: '⚙', path: '#' },
  { label: 'Help', icon: '?', path: '#' },
]

export const howItWorksSteps = [
  {
    step: '1',
    title: 'Select a Template',
    description:
      'Choose from our curated collection of architectural, minimalist layouts designed specifically to let your work take center stage.',
  },
  {
    step: '2',
    title: 'Upload Your Work',
    description:
      'Drag and drop your high-resolution images, videos, and project files. Our system automatically optimizes them for fast, crisp delivery.',
  },
  {
    step: '3',
    title: 'Publish & Share',
    description:
      'Connect your custom domain and hit publish. Your digital gallery is immediately live, responsive, and ready for clients to view.',
  },
]

export const featuredPortfolios = [
  {
    id: 1,
    name: 'Jane Doe',
    tagline: 'UI/UX Designer',
    coverColor: '#c4b5a0',
    emoji: '✦',
  },
  {
    id: 2,
    name: 'Alex Mercer',
    tagline: 'Photographer',
    coverColor: '#8faec4',
    emoji: '◎',
  },
  {
    id: 3,
    name: 'Priya Shah',
    tagline: 'Product Designer',
    coverColor: '#c4a08f',
    emoji: '◈',
  },
]

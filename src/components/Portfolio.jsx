import { useState } from 'react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'webapp', name: 'Web Apps' },
    { id: 'blockchain', name: 'Blockchain' },
    { id: 'mobile', name: 'Mobile Apps' },
  ];

  const projects = [
    // Blockchain Projects
    {
      id: 1,
      title: 'Fizen Super App',
      category: 'blockchain',
      description: 'Comprehensive cryptocurrency card platform enabling users to pay, travel, send money across borders, and manage crypto seamlessly with secure pool-based funding architecture.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
      video: null,
      technologies: ['NestJS', 'Rust', 'Solana', 'MongoDB', 'Redis', 'BullMQ'],
      link: '#',
      details: {
        fullDescription: 'Fizen helps users pay like a local, travel smoothly, send money across borders, and manage their crypto - all in one simple app. Built with secure pool-based funding system using Rust smart contracts on Solana.',
        highlights: [
          'Secure pool-based funding system using Rust smart contracts on Solana',
          'Real-time transaction processing with comprehensive error handling',
          'Multi-currency balance management supporting USDT, USDC with automatic USD conversion',
          'Monthly maintenance fee system with debt tracking and automatic settlement',
          'Robust double-spending prevention using atomic database transactions'
        ]
      }
    },
    {
      id: 2,
      title: 'Dex3.ai',
      category: 'blockchain',
      description: 'Next-generation DEX focused on meme coin trading on Solana. Combines AI-driven analytics with trader-centric design for smarter trading decisions.',
      image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&h=600&fit=crop',
      video: null,
      technologies: ['Rust', 'Anchor', 'Go', 'NestJS', 'PostgreSQL', 'Kafka', 'Redis'],
      link: '#',
      details: {
        fullDescription: 'dex3.ai is a next-generation decentralized exchange (DEX) focused on enhancing meme coin trading on the Solana blockchain. Combines AI-driven analytics with a trader-centric design to provide tools for smarter trading decisions.',
        highlights: [
          'Trading programs for multiple DEXes using Rust and Anchor framework',
          'Reduced transaction confirmation time from 3 seconds to under 1 second',
          'Sub-1 second copy and snipe execution times',
          'Fast and reliable trigger-based limit orders and trailing stop mechanisms',
          'Top Wallet feature tracking all buy/sell activities across Solana network'
        ]
      }
    },
    {
      id: 3,
      title: 'Blocklens Analytics',
      category: 'blockchain',
      description: 'On-chain data analytics platform allowing users to query human-readable blockchain data and generate dashboards for DeFi, NFT, and platform performance metrics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      video: null,
      technologies: ['NestJS', 'MongoDB', 'PostgreSQL', 'Redis', 'Kafka'],
      link: '#',
      details: {
        fullDescription: 'Blocklens is a data analyzing platform that allows users to query human-readable on-chain data, generate dashboards for DeFi, NFT, platform performance as well as provide advanced APIs.',
        highlights: [
          'Insights module in microservices system aggregating real-time on-chain data',
          'Database schema and APIs for dashboard based on aggregated blockchain data',
          'Migrated communication from HTTP to Kafka for better scalability',
          'Real-time data processing from latest blocks on-chain'
        ]
      }
    },
    {
      id: 4,
      title: 'Lagom AMM',
      category: 'blockchain',
      description: 'Automated market maker supporting services for users to earn interest or transact using cryptocurrencies on EVM platforms.',
      image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&h=600&fit=crop',
      video: null,
      technologies: ['NestJS', 'Java/Spring Boot', 'MongoDB', 'PostgreSQL', 'Redis', 'Kafka', 'Websocket'],
      link: '#',
      details: {
        fullDescription: 'Lagom creates an automated market maker, supports services for users to earn interest or transact using cryptocurrencies. Supports EVM networks with pairs like ETH/USDT, BTC/USDT, BNB/USDT.',
        highlights: [
          'Trading bot based on real-time price fluctuations',
          'Redis-based configuration system eliminating server restarts',
          'Detailed server logs sent to Telegram for production monitoring',
          'Optimized database design and code refactoring'
        ]
      }
    },
    {
      id: 5,
      title: 'Avabot Trading Bot',
      category: 'blockchain',
      description: 'Telegram trading bot that automatically buys and sells tokens on supported chains as soon as liquidity is added and trade is enabled.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
      video: null,
      technologies: ['NestJS', 'Rust', 'Solidity', 'MongoDB', 'Redis', 'Kafka', 'Telegram API'],
      link: '#',
      details: {
        fullDescription: 'Avabot is a telegram trading bot that helps users to automatically buy and sell tokens on supported chains as soon as liquidity is added and trade is enabled.',
        highlights: [
          'Scanner module scanning tokens from Telegram channels of famous KOLs',
          'Token property analysis using Telegram bot',
          'Token simulation using Hardhat for property extraction',
          'Comment module for simulated token properties on Pinksale platform'
        ]
      }
    },
    // Web App Projects
    {
      id: 6,
      title: 'E-Commerce Platform',
      category: 'webapp',
      description: 'Full-featured online marketplace with payment integration, inventory management, and real-time order tracking.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      video: null,
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      link: '#',
      details: {
        fullDescription: 'Modern e-commerce platform with comprehensive features for online businesses.',
        highlights: [
          'Secure payment processing with Stripe integration',
          'Real-time inventory management',
          'Order tracking and fulfillment system',
          'Admin dashboard for business analytics'
        ]
      }
    },
    {
      id: 7,
      title: 'Healthcare Management System',
      category: 'webapp',
      description: 'Comprehensive patient management system with appointment scheduling, medical records, and telemedicine capabilities.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      video: null,
      technologies: ['Next.js', 'PostgreSQL', 'AWS', 'Docker', 'WebRTC'],
      link: '#',
      details: {
        fullDescription: 'Complete healthcare management solution for modern medical practices.',
        highlights: [
          'Patient appointment scheduling and management',
          'Electronic health records (EHR) system',
          'Telemedicine video consultations',
          'HIPAA-compliant data security'
        ]
      }
    },
    {
      id: 8,
      title: 'Real Estate Portal',
      category: 'webapp',
      description: 'Property listing platform with virtual tours, advanced search, and mortgage calculator features.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      video: null,
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Google Maps API', 'AWS S3'],
      link: '#',
      details: {
        fullDescription: 'Modern real estate platform connecting buyers, sellers, and agents.',
        highlights: [
          'Advanced property search with filters',
          'Virtual property tours',
          'Mortgage calculator and financing tools',
          'Agent dashboard for listing management'
        ]
      }
    },
    // Mobile App Projects
    {
      id: 9,
      title: 'Fitness Tracking App',
      category: 'mobile',
      description: 'Comprehensive mobile app for tracking workouts, nutrition, sleep, and overall health metrics with AI-powered insights.',
      image: 'https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?w=800&h=600&fit=crop',
      video: null,
      technologies: ['React Native', 'Firebase', 'Redux', 'HealthKit', 'Google Fit API'],
      link: '#',
      details: {
        fullDescription: 'Complete fitness and health tracking solution for iOS and Android.',
        highlights: [
          'Workout tracking with exercise library',
          'Nutrition logging and meal planning',
          'Sleep and recovery monitoring',
          'AI-powered personalized recommendations'
        ]
      }
    },
    {
      id: 10,
      title: 'Crypto Wallet App',
      category: 'mobile',
      description: 'Secure mobile cryptocurrency wallet with multi-chain support, DeFi integration, and biometric authentication.',
      image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&h=600&fit=crop',
      video: null,
      technologies: ['React Native', 'Web3', 'Biometric Auth', 'Push Notifications', 'Blockchain APIs'],
      link: '#',
      details: {
        fullDescription: 'Non-custodial mobile wallet for secure cryptocurrency management.',
        highlights: [
          'Multi-chain support (Ethereum, Solana, BSC)',
          'Built-in DeFi swap and staking',
          'Biometric authentication for security',
          'NFT gallery and management'
        ]
      }
    }
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest projects and see how we bring ideas to life
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image/Video */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                {project.video ? (
                  <video
                    src={project.video}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => {
                      e.target.pause();
                      e.target.currentTime = 0;
                    }}
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-black rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <button className="text-black font-semibold flex items-center hover:gap-2 transition-all">
                  View Details
                  <svg
                    className="w-5 h-5 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
          >
            Start Your Project
          </a>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between z-10">
              <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Project Media */}
              <div className="mb-6 rounded-xl overflow-hidden">
                {selectedProject.video ? (
                  <video
                    src={selectedProject.video}
                    className="w-full"
                    controls
                    autoPlay
                    loop
                  />
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full"
                  />
                )}
              </div>

              {/* Project Description */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 text-xl">About This Project</h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {selectedProject.details?.fullDescription || selectedProject.description}
                </p>
              </div>

              {/* Key Highlights */}
              {selectedProject.details?.highlights && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-xl">Key Features & Highlights</h4>
                  <ul className="space-y-3">
                    {selectedProject.details.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-600 leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 text-xl">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-blue-100 text-black rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className="block w-full bg-black text-white px-6 py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-all"
                onClick={() => setSelectedProject(null)}
              >
                Request Similar Project
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;

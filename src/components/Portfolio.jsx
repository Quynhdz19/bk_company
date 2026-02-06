import { useState } from 'react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'webapp', name: 'Web Apps' },
    { id: 'blockchain', name: 'Blockchain' },
    { id: 'mobile', name: 'Mobile Apps' },
  ];

  const projects = [
    // Web App Projects
    {
      id: 1,
      title: 'Gaming ERP SaaS Platform',
      category: 'webapp',
      description: 'Comprehensive ERP SaaS platform for managing gaming facilities, machines, events, subscriptions, and business intelligence across thousands of locations.',
      image: '/img/webapp/image_original1.png',
      images: [
        '/img/webapp/image_original1.png',
        '/img/webapp/image_original2.png',
        '/img/webapp/image_original3.png',
        '/img/webapp/image_original4.png'
      ],
      video: null,
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Payment Integration', 'Mobile SDK'],
      link: '#',
      details: {
        fullDescription: 'Enterprise-grade ERP SaaS platform designed to manage gaming facilities at scale. The platform provides comprehensive management tools for game machines, events, subscriptions, and financial operations across thousands of facilities and owners.',
        highlights: [
          'Manage game machines across thousands of facilities and multiple owners',
          'Create and manage game events, leaderboards, and parties',
          'Gaming subscription and payment management system',
          'Integration with mobile apps and wallet pass',
          'Financial status tracking and reporting for facilities',
          'Business intelligence dashboard with real-time analytics',
          'Multi-tenant architecture supporting multiple organizations'
        ]
      }
    },
    // Blockchain Projects
    {
      id: 2,
      title: 'Solana DEX Trading Platform',
      category: 'blockchain',
      description: 'Advanced DEX Trading Platform with Social Sentiment Integration on Solana blockchain, featuring automated trading, real-time token data, and copy trading capabilities.',
      image: '/img/solanaDEX/image_original1.png',
      images: [
        '/img/solanaDEX/image_original1.png',
        '/img/solanaDEX/image_original2.png',
        '/img/solanaDEX/image_original3.png',
        '/img/solanaDEX/image_original4.png'
      ],
      video: null,
      technologies: ['Rust', 'Solana', 'MongoDB', 'RESTful API', 'Pump.fun API', 'Auto Trading'],
      link: '#',
      details: {
        fullDescription: 'The DEX Trading Platform with Social Sentiment Integration optimizes trading on the Solana blockchain using Solana\'s Rust-based framework. It automates wallet creation, integrates real-time token data from Pump.fun, and provides features like auto trading, one-click buy/sell, and copy trading. With API development using RESTful API, the platform supports real-time execution with MongoDB for user data management. This blockchain-based solution empowers users to make efficient crypto trades using Solana and other tools.',
        highlights: [
          'Built on Solana blockchain using Rust-based framework for high performance',
          'Automated wallet creation and management system',
          'Real-time token data integration from Pump.fun',
          'Advanced features: Auto trading, one-click buy/sell, copy trading',
          'RESTful API development for seamless platform integration',
          'MongoDB integration for efficient user data management',
          'Social sentiment analysis for informed trading decisions'
        ]
      }
    },
    {
      id: 3,
      title: 'Bitcoin Price Prediction Game',
      category: 'blockchain',
      description: 'Blockchain-based prediction game built on Base Chain where players compete by predicting Bitcoin price movements in real-time.',
      image: '/img/Bitcoin/image_original1.png',
      images: [
        '/img/Bitcoin/image_original1.png',
        '/img/Bitcoin/image_original2.png',
        '/img/Bitcoin/image_original3.png',
        '/img/Bitcoin/image_original4.png',
        '/img/Bitcoin/image_original5.png',
        '/img/Bitcoin/image_original6.png',
        '/img/Bitcoin/image_original7.png',
        '/img/Bitcoin/image_original9.png',
        '/img/Bitcoin/image_original10.png'
      ],
      video: null,
      technologies: ['Base Chain', 'Smart Contracts', 'Web3', 'React', 'Bitcoin Price Oracle'],
      link: '#',
      details: {
        fullDescription: 'Bitcoin blockchain based game built on Base Chain. Compete against players by choosing if Bitcoin will go up or down. This innovative prediction game leverages blockchain technology to create a transparent, fair, and exciting gaming experience where players can test their market prediction skills.',
        highlights: [
          'Built on Base Chain for fast and low-cost transactions',
          'Real-time Bitcoin price integration',
          'Compete against other players in prediction rounds',
          'Transparent and verifiable on-chain results',
          'Smart contract-based reward distribution',
          'User-friendly interface for seamless gaming experience',
          'Secure wallet integration for crypto payments'
        ]
      }
    },
    {
      id: 4,
      title: 'Swisscheese - Multi-Chain Tokenized Stocks',
      category: 'blockchain',
      description: 'Revolutionary platform for trading tokenized stocks across multiple blockchains. Fully decentralized with support for all EVM chains.',
      image: '/img/Swisscheese/image_original.png',
      images: [
        '/img/Swisscheese/image_original.png',
        '/img/Swisscheese/image_original2.png',
        '/img/Swisscheese/image_original3.png'
      ],
      video: null,
      technologies: ['Solidity', 'EVM', 'Multi-Chain', 'Smart Contracts', 'DeFi', 'Tokenization'],
      link: '#',
      details: {
        fullDescription: 'Swisscheese is the home to multi-chain tokenized stocks. The platform supports all EVM chains. The development process took a couple months as it required multiple smart contracts for the tokenization of the stocks on multiple blockchains. The platform is fully decentralized.',
        highlights: [
          'Multi-chain support across all EVM-compatible blockchains',
          'Tokenization of traditional stocks on blockchain',
          'Fully decentralized platform architecture',
          'Multiple smart contracts for cross-chain functionality',
          'Secure and transparent stock trading',
          'Fractional ownership of tokenized stocks',
          'Interoperability between different blockchain networks'
        ]
      }
    },
    // Web App Projects
    {
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
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
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
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
              {/* Project Media Gallery */}
              <div className="mb-6">
                {selectedProject.video ? (
                  <div className="rounded-xl overflow-hidden">
                    <video
                      src={selectedProject.video}
                      className="w-full"
                      controls
                      autoPlay
                      loop
                    />
                  </div>
                ) : selectedProject.images && selectedProject.images.length > 1 ? (
                  // Multiple Images - Gallery with Navigation
                  <div className="relative">
                    <div className="rounded-xl overflow-hidden bg-gray-100">
                      <img
                        src={selectedProject.images[currentImageIndex]}
                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-[400px] object-contain"
                      />
                    </div>
                    
                    {/* Navigation Arrows */}
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex((prev) => 
                              prev === 0 ? selectedProject.images.length - 1 : prev - 1
                            );
                          }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center transition-all"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex((prev) => 
                              prev === selectedProject.images.length - 1 ? 0 : prev + 1
                            );
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center transition-all"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                    
                    {/* Image Counter & Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                      <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                        {currentImageIndex + 1} / {selectedProject.images.length}
                      </div>
                      <div className="flex gap-2">
                        {selectedProject.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(idx);
                            }}
                            className={`h-2 rounded-full transition-all ${
                              idx === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Single Image
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full"
                    />
                  </div>
                )}
                
                {/* Thumbnail Gallery for multiple images */}
                {selectedProject.images && selectedProject.images.length > 1 && (
                  <div className="grid grid-cols-4 md:grid-cols-6 gap-2 mt-4">
                    {selectedProject.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(idx);
                        }}
                        className={`rounded-lg overflow-hidden border-2 transition-all ${
                          idx === currentImageIndex ? 'border-black' : 'border-transparent hover:border-gray-400'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-16 object-cover"
                        />
                      </button>
                    ))}
                  </div>
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
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium"
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

import { 
  SiReact, 
  SiNextdotjs, 
  SiVuedotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiSolidity,
  SiRust,
  SiFlutter,
  SiApple,
  SiAndroid,
  SiDocker,
  SiKubernetes,
  SiNginx,
  SiGit,
  SiFigma,
  SiPostman,
  SiRedis,
  SiGraphql
} from 'react-icons/si';
import { 
  FaBolt, 
  FaEthereum, 
  FaServer, 
  FaAws,
  FaCode,
  FaTasks,
  FaRocket
} from 'react-icons/fa';

const Technologies = () => {
  const techCategories = [
    {
      name: 'Frontend',
      technologies: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      ],
    },
    {
      name: 'Backend',
      technologies: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'NestJS', icon: FaServer, color: '#E0234E' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Redis', icon: SiRedis, color: '#DC382D' },
        { name: 'Kafka', icon: FaServer, color: '#231F20' },
        { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
      ],
    },
    {
      name: 'Blockchain',
      technologies: [
        { name: 'Rust', icon: SiRust, color: '#CE422B' },
        { name: 'Solana', icon: FaRocket, color: '#14F195' },
        { name: 'Solidity', icon: SiSolidity, color: '#363636' },
        { name: 'Ethereum', icon: FaEthereum, color: '#627EEA' },
        { name: 'Anchor', icon: SiRust, color: '#FF6B6B' },
      ],
    },
    {
      name: 'Mobile',
      technologies: [
        { name: 'React Native', icon: SiReact, color: '#61DAFB' },
        { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
        { name: 'iOS', icon: SiApple, color: '#000000' },
        { name: 'Android', icon: SiAndroid, color: '#3DDC84' },
        { name: 'Expo', icon: FaBolt, color: '#000020' },
      ],
    },
    {
      name: 'Cloud & DevOps',
      technologies: [
        { name: 'AWS', icon: FaAws, color: '#FF9900' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
        { name: 'CI/CD', icon: FaRocket, color: '#00ADD8' },
        { name: 'Nginx', icon: SiNginx, color: '#009639' },
      ],
    },
    {
      name: 'Tools',
      technologies: [
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
        { name: 'Jira', icon: FaTasks, color: '#0052CC' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'VS Code', icon: FaCode, color: '#007ACC' },
      ],
    },
  ];

  return (
    <section id="technologies" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-black font-bold">Technology Stack</span>
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We use cutting-edge technologies to build robust and scalable solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-black transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                <span className="w-2 h-8 bg-black rounded-full mr-3"></span>
                {category.name}
              </h3>
              <div className="space-y-3">
                {category.technologies.map((tech, idx) => {
                  const IconComponent = tech.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center p-3 bg-gray-100/30 rounded-lg hover:bg-gray-100/50 transition-colors group"
                    >
                      <div 
                        className="text-3xl mr-3 group-hover:scale-125 transition-transform"
                        style={{ color: tech.color }}
                      >
                        <IconComponent />
                      </div>
                      <span className="text-gray-700 font-medium">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 text-lg mb-6">
            Always exploring and adopting new technologies to stay ahead of the curve
          </p>
        
        </div>
      </div>
    </section>
  );
};

export default Technologies;

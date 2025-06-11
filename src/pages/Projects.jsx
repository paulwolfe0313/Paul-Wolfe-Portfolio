import ProjectCard from '../components/ProjectCard';
//import project1 from '../assets/project1.jpg';
//import project2 from '../assets/project2.jpg';
//import project3 from '../assets/project3.jpg';

export default function Projects() {
  const projects = [
    {
      title: 'AI Trading Bot',
      description: 'Built a reinforcement-learning-based crypto bot with real-time market data analysis.',
      tech: ['Python', 'Pandas', 'TensorFlow'],
      //image: project1,
      github: 'https://github.com/yourname/ai-trading-bot',
      demo: ''
    },
    {
      title: 'Snowflake + Tableau Dashboard',
      description: 'Enterprise-grade visualization pipeline using Snowflake, Fivetran, and Tableau.',
      tech: ['SQL', 'Snowflake', 'Tableau'],
      //image: project2,
      github: '',
      demo: ''
    },
    {
      title: 'ML Model @ United Way',
      description: 'Used classification models to predict campaign response outcomes from big datasets.',
      tech: ['R', 'Python', 'Jupyter'],
      //image: project3,
      github: '',
      demo: ''
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
}

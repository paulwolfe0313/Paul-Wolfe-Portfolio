import ProjectCard from '../components/ProjectCard';
//import project1 from '../assets/project1.jpg';
//import project2 from '../assets/project2.jpg';
//import project3 from '../assets/project3.jpg';

export default function Projects() {
  const projects = [
  {
    title: 'Data Crumbs (Chrome Extension)',
    description: 'AI-powered Chrome extension that classifies cookies, summarizes privacy policies, and calculates trust scores.',
    tech: ['React', 'Vite', 'Tailwind', 'Hugging Face', 'Replicate', 'FastAPI', 'Python'],
    github: 'https://github.com/paulwolfe0313/data-crumbs',
    demo: ''
  },
  {
    title: 'Reel Meals',
    description: 'Movie and dinner pairing web app using TMDB and recipe APIs with Firebase authentication.',
    tech: ['React', 'Tailwind', 'Firebase', 'TMDB API'],
    github: 'https://github.com/paulwolfe0313/reel-meals',
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

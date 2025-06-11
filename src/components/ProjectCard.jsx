export default function ProjectCard({ title, description, tech, image, github, demo }) {
  return (
    <div className="bg-gray-800 text-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((tag, index) => (
            <span key={index} className="bg-teal-600 text-white text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-sm text-teal-400 hover:underline">
              GitHub
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="text-sm text-teal-400 hover:underline">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

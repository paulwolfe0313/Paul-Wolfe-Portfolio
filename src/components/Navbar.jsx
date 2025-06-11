import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Paul Wolfe</h1>
        <ul className="flex gap-6 text-xl">
          <li><Link to="/" className="hover:text-teal-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-teal-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-teal-400">Projects</Link></li>
          <li><Link to="/case-studies" className="hover:text-teal-400">Case Studies</Link></li>
          <li><Link to="/contact" className="hover:text-teal-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

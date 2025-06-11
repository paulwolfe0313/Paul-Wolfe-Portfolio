import profile from '../assets/profile.jpg';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-purple-900 to-black text-white min-h-screen flex flex-col justify-center items-center px-4 text-center">
      
      {/* Profile Image */}
      <div className="w-59 h-59 mb-8 relative"> {/* Increased size */}
        <img
          src={profile}
          alt="Paul Wolfe"
          className="w-full h-full object-cover rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-2xl border-4 border-teal-400"
        />
      </div>

      {/* Text Content */}
      <h1 className="text-6xl font-extrabold mb-6 leading-tight">Hi, I'm Paul Wolfe</h1>
      <p className="text-2xl max-w-3xl mb-8">
        Software Engineer & AI Engineer passionate about building intelligent, scalable, and user-friendly systems.
      </p>

      {/* Call to Action Button */}
      <a
        href="/projects"
        className="bg-teal-500 hover:bg-teal-400 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md transition-transform duration-200 hover:scale-105"
      >
        View My Work
      </a>
    </div>
  );
}
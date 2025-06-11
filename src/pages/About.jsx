import profile from '../assets/profile.jpg';

export default function About() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen py-20 px-6 flex flex-col items-center">
      <div className="max-w-4xl text-center">
        <h2 className="text-5xl font-extrabold mb-10">About Me</h2>

        <p className="text-2xl leading-relaxed mb-8">
          I'm <strong>Paul Wolfe</strong>, a Software Engineer and AI Engineer passionate about building intelligent, scalable, and user-friendly systems.
          With a background in both industry and academia, I bring a unique perspective to solving real-world problems with elegant code and cutting-edge machine learning.
        </p>

        <p className="text-2xl leading-relaxed mb-8">
          Currently, I serve as an Associate Professor at the University of Mary Hardin-Baylor, where I teach Computer Information Systems and help shape the next generation of developers.
          I also hold two Master’s degrees in Computer Science and Information Systems, and I’m actively pursuing certification as a professional AI engineer.
        </p>

        <p className="text-2xl leading-relaxed mb-8">
          My experience spans <strong>data analytics</strong>, <strong>AI modeling</strong>, <strong>web and systems development</strong>, and cloud-native architecture.
          I've collaborated with organizations like United Way and Integrous Marketing to build systems powered by Snowflake, Tableau, Python, and machine learning frameworks.
        </p>

        <p className="text-2xl leading-relaxed mb-12">
          Whether it's designing full-stack applications, deploying intelligent systems, or teaching core computing skills, I thrive at the intersection of innovation and impact.
        </p>

        {/* Profile Picture at Bottom */}
        <div className="w-80 h-80 mt-4 mx-auto mb-12">
          <img
            src={profile}
            alt="Paul Wolfe"
            className="w-full h-full object-cover rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-2xl border-4 border-teal-400"
          />
        </div>

        {/* Skills Section */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6">Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            {[
              'Python', 'JavaScript', 'React', 'Tailwind CSS', 'TensorFlow', 'Pandas', 'R', 'SQL',
              'Snowflake', 'Tableau', 'Docker', 'Fivetran', 'Git', 'Java', 'C++', 'Linux', 'LLMs', 'Vector Databases', 
              'CI/CD', 'LangChain', 'RAG'
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-teal-600 px-4 py-2 rounded-full text-white shadow-md hover:bg-teal-500 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
<div className="text-center mt-20">
  <h3 className="text-4xl font-bold mb-6">Certifications</h3>

  <div className="space-y-6 max-w-3xl mx-auto">
    {/* Data Analytics */}
    <div className="bg-gray-800 p-6 rounded-xl shadow-md text-left">
      <h4 className="text-2xl font-semibold mb-2">Data Analytics</h4>
      <p className="text-lg mb-1">University of Mary Hardin-Baylor · <span className="text-teal-400">Issued Dec 2023</span></p>
      <p className="text-gray-300 text-base">
        Skills: Data Analytics · Algorithm Design · Python · Machine Learning · Artificial Intelligence (AI)
      </p>
    </div>

    {/* Tableau Desktop Specialist */}
    <div className="bg-gray-800 p-6 rounded-xl shadow-md text-left">
      <h4 className="text-2xl font-semibold mb-2">Tableau Desktop Specialist</h4>
      <p className="text-lg mb-1">Tableau · <span className="text-teal-400">Issued Oct 2022</span></p>
      <a
        href="https://www.credly.com/badges/a3d2d6f7-6989-4063-a64e-020b7eb56fd2/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-teal-400 underline text-base"
      >
        Show Credential
      </a>
      <p className="text-gray-300 text-base mt-1">
        Skills: Analytics · Analytical Skills
      </p>
    </div>

    {/* CAIE – In Progress */}
    <div className="bg-gray-800 p-6 rounded-xl shadow-md text-left">
      <h4 className="text-2xl font-semibold mb-2">Certified Artificial Intelligence Engineer (CAIE™)</h4>
      <p className="text-lg mb-1">United States Artificial Intelligence Institute · <span className="italic text-yellow-400">In Progress</span></p>
      <p className="text-gray-300 text-base">
        Aiming to earn professional certification in AI engineering, covering deep learning, model deployment, ethics, and explainable AI.
      </p>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

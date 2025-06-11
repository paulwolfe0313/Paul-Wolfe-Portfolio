export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-xl text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch 📬</h2>
        <p className="text-lg text-gray-300 mb-8">
          Not into chatbots? No problem! Feel free to reach out directly using any of the methods below.
        </p>

        <div className="space-y-6">
          <div>
            <p className="text-xl font-semibold">Email</p>
            <a href="mailto:paulwolfe0313@gmail.com" className="text-teal-400 hover:underline">
              paulwolfe0313@gmail.com
            </a>
          </div>

          <div>
            <p className="text-xl font-semibold">GitHub</p>
            <a href="https://github.com/paulwolfe0313" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
              github.com/paulwolfe0313
            </a>
          </div>

          <div>
            <p className="text-xl font-semibold">LinkedIn</p>
            <a href="https://www.linkedin.com/in/paul-wolfe-083365160/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
              linkedin.com/in/paul-wolfe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

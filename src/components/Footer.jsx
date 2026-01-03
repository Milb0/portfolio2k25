const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Ilyes. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/Milb0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mohamedilyesbennacer/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:mohamedilyes.bennacer@univ-constantine2.dz"
            className="text-gray-500 hover:text-blue-600 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

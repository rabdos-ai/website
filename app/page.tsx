import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Rabdos AI
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                About
              </a>
              <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Features
              </a>
              <a href="#examples" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Examples
              </a>
              <a href="#team" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Team
              </a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
            <div>
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Frontier-Level Math
            <br />
            Problem Generation
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Advanced mathematical challenges designed to train and evaluate the next generation of AI models.
            Problems harder than IMO, constructed at scale with precise difficulty control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
            <a
              href="#about"
              className="bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 text-gray-900 dark:text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Rabdos
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Pushing the boundaries of AI evaluation with mathematically rigorous, scalable problem generation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Controllable Difficulty</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Precisely tune problem complexity to challenge models at any capability level, from basic to frontier.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Beyond IMO Complexity</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Problems substantially harder than International Math Olympiad, synthesizing concepts across diverse mathematical domains.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Scalable Generation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Human-AI collaboration enables rapid creation of challenging problems at scale for training and evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Advancing AI Through Mathematical Rigor
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Rabdos is a specialized system for generating exceptionally challenging mathematical problems at scale. 
                Our platform is designed specifically for training and evaluating frontier AI models, pushing the boundaries 
                of what&apos;s possible in machine reasoning.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                The problems we create go far beyond traditional benchmarks like the International Math Olympiad. 
                By synthesizing concepts from diverse mathematical disciplines with precise difficulty calibration, 
                we produce challenges that require not just conceptual knowledge, but sophisticated reasoning about 
                when and how to apply mathematical techniques.
              </p>
              <a
                href="#team"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all"
              >
                Meet the Team
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-20 blur-3xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-700 dark:text-gray-300">Problem Generation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-700 dark:text-gray-300">Difficulty Calibration</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-700 dark:text-gray-300">Model Evaluation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Problems Section */}
      <section id="examples" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Example Problems
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Explore a curated collection of challenging mathematical problems generated by Rabdos. 
            These examples demonstrate the complexity and diversity of problems our system can create 
            for training and evaluating frontier AI models.
          </p>
          <a
            href="/RabdosAI-Sample-Math-Problems.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View Sample Problems (PDF)
          </a>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Founding Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Expert mathematicians and technologists pioneering the future of AI evaluation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Founder 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <a href="https://www2.math.upenn.edu/~ghrist/" target="_blank" rel="noopener noreferrer" className="block">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden ring-4 ring-purple-500/20 hover:ring-purple-500/40 transition-all">
                  <Image
                    src="/team/robert-ghrist.jpeg"
                    alt="Robert Ghrist"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Robert Ghrist</h3>
              </a>
              <p className="text-purple-600 dark:text-purple-400 font-semibold mb-3">Co-CEO</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Driving mathematical rigor and problem architecture
              </p>
            </div>

            {/* Founder 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <a href="https://www.cis.upenn.edu/~mhnaik/" target="_blank" rel="noopener noreferrer" className="block">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden ring-4 ring-blue-500/20 hover:ring-blue-500/40 transition-all">
                  <Image
                    src="/team/mayur-naik.png"
                    alt="Mayur Naik"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Mayur Naik</h3>
              </a>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">Co-CEO</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Leading vision and strategy for frontier model evaluation
              </p>
            </div>

            {/* Founder 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <a href="https://oscarxzq.github.io/" target="_blank" rel="noopener noreferrer" className="block">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden ring-4 ring-pink-500/20 hover:ring-pink-500/40 transition-all">
                  <Image
                    src="/team/oscar-xu.jpeg"
                    alt="Oscar Xu"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Oscar Xu</h3>
              </a>
              <p className="text-pink-600 dark:text-pink-400 font-semibold mb-3">CTO</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Building scalable infrastructure for problem generation
              </p>
            </div>

            {/* Founder 4 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <a href="https://shreyaarya.github.io/minimal/" target="_blank" rel="noopener noreferrer" className="block">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden ring-4 ring-cyan-500/20 hover:ring-cyan-500/40 transition-all">
                  <Image
                    src="/team/shreya-arya.jpeg"
                    alt="Shreya Arya"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Shreya Arya</h3>
              </a>
              <p className="text-cyan-600 dark:text-cyan-400 font-semibold mb-3">CRO</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Expanding research partnerships and impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Interested in Rabdos?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Connect with us to learn more about frontier-level mathematical problem generation for AI evaluation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@rabdos.ai"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="#about"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Rabdos AI
              </span>
              <p className="mt-4 text-sm">
                Frontier-level mathematical problem generation for training and evaluating 
                the next generation of AI models.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#examples" className="hover:text-white transition-colors">Examples</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:contact@rabdos.ai" className="hover:text-white transition-colors">Email</a></li>
                <li><a href="https://twitter.com/rabdosai" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="https://linkedin.com/company/rabdos-ai" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Rabdos AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


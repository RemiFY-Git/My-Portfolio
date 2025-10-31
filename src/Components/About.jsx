import { Code, Bug, Palette } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-glow text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE TEXT */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Web Developer & Technologist</h3>

            <p className="text-muted-foreground">
              I’m a passionate developer with over 1 years of experience creating
              modern, responsive, and user-friendly websites. I focus on
              building interfaces that are both beautiful and functional.
            </p>

            <p>
              Over the years, I’ve built and maintained everything from landing
              pages to SaaS platforms. I value accessibility, attention to detail,
              and continuous learning to stay ahead in the fast-evolving world
              of web development.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-2 rounded-full bg-primary text-primary-foreground 
                font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,93,246,0.5)]
                hover:scale-105 active:scale-95"
              >
                Contact Me
              </a>
              <a
                href="/raymond_web_Resume.pdf" target='_blank' rel='noopener noreferrer'
                className="px-6 py-2 rounded-full border border-primary text-primary 
                hover:bg-primary/50 transition-colors duration-300 hover:shadow-[0_0_10px_rgba(139,93,246,0.5)]"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group prospective w-full h-48">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl flex flex-col justify-center items-center px-4 backface-hidden">
                  <Code className="h-8 w-8 mb-2" />
                  <h4 className="text-lg font-bold">Web Development</h4>
                </div>
              </div>
            </div>

            <div className="group prospective w-full h-48">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl flex flex-col justify-center items-center px-4 backface-hidden">
                  <Bug className="h-8 w-8 mb-2" />
                  <h4 className="text-lg font-bold">Solve Bugs</h4>
                </div>
              </div>
            </div>

            <div className="group prospective w-full h-48">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl flex flex-col justify-center items-center px-4 backface-hidden">
                  <Palette className="h-8 w-8 mb-2" />
                  <h4 className="text-lg font-bold">UI Design</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

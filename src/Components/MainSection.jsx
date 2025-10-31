import { ArrowDown } from "lucide-react";

export const MainSection = () => {
  return (
    <section
      id="main"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="block opacity-0 animate-fade-in">Hi, I’m</span>
            <span className="block text-primary opacity-0 animate-fade-in-delay-1">
              RAYMOND
            </span>
            <span className="block text-gradient opacity-0 animate-fade-in-delay-2">
             Frontend Developer
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I’m a web developer with 1 years of experience building modern,
            responsive, and functional websites. I create beautiful user
            interfaces that deliver smooth and engaging experiences.
          </p>
        </div>

        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
          <a
            href="#projects"
            className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,93,246,0.5)] hover:scale-105 active:scale-95 inline-block"
          >
            View My Projects
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground">Scroll</span>
        <ArrowDown className="h-6 w-6 text-primary mt-1" />
      </div>
    </section>
  );
};

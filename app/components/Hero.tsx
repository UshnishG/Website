import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-4 p-4 opacity-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-full w-full bg-primary/20 rounded-lg"></div>
        ))}
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-6">
          Futurix Association
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Shaping tomorrow's leaders through innovation, creativity, and technology
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Join Us <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="#team"
            className="inline-flex items-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
          >
            Meet the Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
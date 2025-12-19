import heroImage from "@/assets/hero-image.jpg";
import { ArrowDown } from "lucide-react";
import heroImage2 from "@/assets/hero-image2.jpg";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left - Text */}
      <div className="flex flex-col justify-between p-6 md:p-12 pt-24 lg:pt-12">
        <div className="flex-1 flex flex-col justify-center">
          <div className="overflow-hidden mb-4">
            <p 
              className="text-muted-foreground text-sm tracking-widest uppercase opacity-0 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Photographer & Visual Artist
            </p>
          </div>
          
          <div className="overflow-hidden">
            <h1 
              className="font-serif text-[clamp(3rem,12vw,8rem)] leading-[0.9] tracking-tight opacity-0 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              Moments
              <br />
              <span className="font-serif italic">in stillness</span>
            </h1>
          </div>

          <div className="overflow-hidden mt-8">
            <p 
              className="text-muted-foreground max-w-md text-lg opacity-0 animate-fade-up"
              style={{ animationDelay: "0.6s" }}
            >
              A freelance wedding and event photographer, creating honest, emotional stories from real moments.
              Based in India, I turn celebrations and everyday gatherings into timeless visual memories.
            </p>
          </div>
        </div>

        <div 
          className="flex items-center gap-4 text-muted-foreground opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
          <span className="text-sm tracking-widest uppercase">Scroll to explore</span>
        </div>
      </div>

      {/* Right - Image */}
      <div className="relative h-[60vh] lg:h-screen overflow-hidden">
        <img
          src={heroImage}
          alt="Featured photography work"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-sm px-4 py-2">
          <span className="text-sm font-medium">01 / Golden Hour</span>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;

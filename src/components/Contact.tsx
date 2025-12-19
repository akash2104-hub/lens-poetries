import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-foreground text-background"
    >
      <div className="px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <p className="text-background/80 text-sm tracking-widest uppercase mb-4">
            Let&apos;s Connect
          </p>

          <h2 className="font-akash2 text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-12">
            Your best moments deserve beautiful photos. 
            <br />
            <span className="font-akash italic ">get in touch today.</span>
          </h2>

          <button
            onClick={() => (window.location.href = "/getintouch")}
            className="inline-flex items-center gap-3 px-8 py-3 bg-accent text-foreground text-sm md:text-base font-medium tracking-[0.18em] uppercase rounded-none hover:bg-accent/90 transition-colors"
          >
            Get in touch
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        {/* Marquee */}
        <div className="mt-24 overflow-hidden border-t border-background/20 pt-8">
          <div className="marquee whitespace-nowrap">
            <span className="inline-block font-serif text-8xl md:text-[12rem] text-background/10 pr-8">
              Available for work • Available for work • Available for work •
            </span>
            <span className="inline-block font-serif text-8xl md:text-[12rem] text-background/10 pr-8">
              Available for work • Available for work • Available for work •
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="px-6 md:px-12 py-6 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="font-serif text-4xl text-primary-foreground tracking-tight"
          >
            Akash Parmar
          </button>

          <button
            onClick={() => setIsOpen(true)}
            className="text-primary-foreground hover:opacity-60 transition-opacity"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Full screen menu */}
      <div
        className={`fixed inset-0 z-[100] bg-foreground transition-all duration-700 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="px-6 md:px-12 py-6 flex items-center justify-between">
            <span className="font-serif text-4xl text-background">Akash Parmar</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-background hover:opacity-60 transition-opacity"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              {["Work", "About", "Contact"].map((item, i) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="font-serif text-6xl md:text-8xl text-background hover:text-stroke hover:text-background transition-all duration-300"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="px-6 md:px-12 py-6 flex items-center justify-between text-background/60 text-sm">
            <span>Based in India </span>
            <span>akashparmar0104@gmail.com</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;

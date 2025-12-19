import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [showNav, setShowNav] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // clear previous timer
      if (scrollTimeout) {
        window.clearTimeout(scrollTimeout);
      }

      // hide when scrolling down
      if (currentY > lastY && currentY > 80) {
        setShowNav(false);
      } else {
        // show when scrolling up / near top
        setShowNav(true);
      }

      // show again shortly after scrolling stops
      const timeoutId = window.setTimeout(() => {
        setShowNav(true);
      }, 200);

      setScrollTimeout(timeoutId);
      setLastY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        window.clearTimeout(scrollTimeout);
      }
    };
  }, [lastY, scrollTimeout]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-6 md:px-12 py-6 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center"
          >
            <img
              src="/logo-01.png"
              alt="Lens Poetries logo"
              className="h-12 w-auto"
            />
          </button>

          <button
            onClick={() => setIsOpen(true)}
            className="text-black hover:text-white transition-colors"
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
      <button
        onClick={() => scrollTo("hero")}
        className="flex items-center"
      >
      <img
        src="/logo-01-01.png"            // file in public/logo-01.png
        alt="Lens Poetries logo"
        className="h-12 w-auto"
      />
      </button>

      <button
        onClick={() => setIsOpen(false)}
        className="text-white hover:text-black transition-colors"
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
                  className="font-serif text-6xl md:text-8xl text-background hover:text-background/80 transition-colors duration-300"
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

 {/* <button
            onClick={() => scrollTo("hero")}
            className="font-akash text-4xl text-primary-foreground tracking-tight"
          >
            lens Poetries
          </button> */} 
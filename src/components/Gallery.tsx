import { useRef } from "react";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";

const images = [
  { src: gallery2,  title: "Geometric Silence", year: "2024" },
  { src: gallery6,  title: "Golden Hour",       year: "2024" },
  { src: gallery7,  title: "Above the Clouds",  year: "2023" },
  { src: gallery8,  title: "Neon Dreams",       year: "2023" },
  { src: gallery9,  title: "Still Life",        year: "2024", horizontal: true }, // <- only this
  { src: gallery10, title: "Coastal Serenity",  year: "2023" },
];

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="work" className="py-24 md:py-32">
      {/* header removed for brevity */}

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-6 md:px-12 pb-8 scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {images.map((image, index) => {
          const isHorizontal = image.horizontal;

          return (
            <div
              key={index}
              className="flex-shrink-0 group cursor-pointer"
              style={{ scrollSnapAlign: "start" }}
            >
              <div
                className={
                  "relative overflow-hidden bg-muted " +
                  (isHorizontal
                    ? "w-[350px] md:w-[500px] aspect-[4/3]" // horizontal for gallery-9
                    : "w-[300px] md:w-[400px] aspect-[3/4]") // vertical for others
                }
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover image-parallax"
                />

                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500" />

                <div className="absolute top-4 left-4">
                  <span className="text-background font-serif text-6xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <h3 className="font-serif text-xl">{image.title}</h3>
                <span className="text-muted-foreground text-sm">
                  {image.year}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;

// FOR TEXT
// import gallery2 from "@/assets/gallery-2.jpg";
// import gallery3 from "@/assets/hero-image2.jpg";

// const About = () => {
//   return (
//     <section id="about" className="py-24 md:py-32 border-t border-border">
//       <div className="px-6 md:px-12">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
//           {/* Right column on desktop - Text */}
//           <div className="lg:col-span-5 lg:order-2">
//             <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
//               About
//             </p>
//             <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
//               Capturing life&apos;s
//               <br />
//               <span className="italic">quiet poetry</span>
//             </h2>

//               <div className="space-y-6 text-muted-foreground text-xl md:text-2xl">
//               <p>
//                 I&apos;m Akash Parmar, a photographer and visual storyteller from
//                 India. My work explores the emotion and detail hidden in
//                 everyday moments, from intimate portraits to vibrant
//                 celebrations.
//               </p>
//               <p>
//                 Blending documentary style with fine‑art sensibility, I focus on
//                 natural light, honest expressions, and carefully composed frames
//                 to preserve memories that feel timeless and real.
//               </p>
//             </div>

//             {/* Centered line instead of stats */}
//             <div className="mt-12 pt-8 border-t border-border">
//               <p className="text-center text-base md:text-lg text-muted-foreground tracking-wide">
//                 Based in India, crafting honest stories through portraits,
//                 weddings, and everyday moments.
//               </p>
//             </div>
//           </div>

//           {/* Left column on desktop - Image */}
//           <div className="lg:col-span-7 lg:order-1">
//             <div className="relative aspect-[4/5] overflow-hidden">
//               <img
//                 src={gallery3}
//                 alt="Akash Parmar portrait"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import gallery2 from "@/assets/gallery-2.jpg";
const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Right column on desktop - Text (vertically centered) */}
          <div className="lg:col-span-5 lg:order-2 flex items-center">
            <div>
              <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
                About
              </p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
                Capturing life&apos;s
                <br />
                <span className="italic">quiet poetry</span>
              </h2>

              <div className="space-y-6 text-muted-foreground text-xl md:text-2xl">
                <p>
                  I&apos;m Akash Parmar, a photographer and visual storyteller
                  from India. My work explores the emotion and detail hidden in
                  everyday moments, from intimate portraits to vibrant
                  celebrations.
                </p>
                <p>
                  Blending documentary style with fine‑art sensibility, I focus
                  on natural light, honest expressions, and carefully composed
                  frames to preserve memories that feel timeless and real.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-center text-lg md:text-xl text-muted-foreground tracking-wide">
                  Based in India, crafting honest stories through portraits,
                  weddings, and everyday moments.
                </p>
              </div>
            </div>
          </div>

          {/* Left column on desktop - Image */}
          <div className="lg:col-span-7 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={gallery2}
                alt="Akash Parmar portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

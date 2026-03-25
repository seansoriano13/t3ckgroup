import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function PageTransition({ children }) {
  const pageRef = useRef(null);
  const curtainRef = useRef(null);
  
  useGSAP(() => {
    // The mask covers EVERYTHING (including navbar) and fades away slowly
    gsap.to(curtainRef.current, {
      opacity: 0,
      duration: 0.3,
      delay: 0.2, // Added more delay as requested
      ease: "power2.out",
      onComplete: () => {
        gsap.set(curtainRef.current, { display: "none" });
      }
    });

    // The page payload fades in behind the mask
    gsap.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, delay: 0.2, ease: "power2.inOut" }
    );
  }, []);

  return (
    <div className="w-full relative">
      {/* Full screen solid black cover that guarantees the Navbar hides too */}
      <div 
        ref={curtainRef} 
        className="fixed inset-0 z-[9999] bg-[#030508] pointer-events-none"
      ></div>
      
      <div ref={pageRef} className="w-full relative opacity-0">
        {children}
      </div>
    </div>
  );
}

export default PageTransition;

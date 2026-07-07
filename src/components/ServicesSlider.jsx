import { Link } from "react-router";
import { ArrowRight, FerrisWheel, Zap, Building2, Truck, Box } from "lucide-react";
import Overlay from "./filters/Overlay.jsx";

function ServicesSlider({ data = [] }) {
  return (
    <section className="w-full relative py-12 bg-black">
      <div className="wrapper grid gap-8">
        <h2 className="text-center text-3xl md:text-4xl text-white tracking-widest uppercase">
          CORE CAPABILITIES
        </h2>

        {/* Carousel Container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar border border-gray-a6">
          {data.map((service) => (
            <div
              key={service.id}
              className="group relative w-[85%] sm:w-[50%] lg:w-[25%] flex-none shrink-0 border-r border-gray-a6 p-8 lg:p-10 overflow-hidden snap-center cursor-pointer bg-gray-1"
            >
              {/* Absolute Link covers entire card for optimal Mobile UX */}
              <Link to={service.link} className="absolute inset-0 z-50 block" aria-label={`View details for ${service.title}`}></Link>

              {/* Default State Content */}
              <div className="relative z-10 grid gap-6 transition-transform duration-500 group-hover:-translate-y-4">
                <div className="w-full h-20 flex items-center justify-center text-gray-11 group-hover:text-red-9 transition-colors">
                  {service.id === 'classic-rides' && <Box size={56} strokeWidth={1} />}
                  {service.id === 'extreme-thrill' && <Zap size={56} strokeWidth={1} />}
                  {service.id === 'resort-infrastructure' && <Building2 size={56} strokeWidth={1} />}
                  {service.id === 'deployment-logistics' && <Truck size={56} strokeWidth={1} />}
                  {!['classic-rides', 'extreme-thrill', 'resort-infrastructure', 'deployment-logistics'].includes(service.id) && <Box size={56} strokeWidth={1} />}
                </div>
                <h3 className="text-xl text-center uppercase tracking-wider text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-center text-gray-a7 leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              {/* Hover Reveal Image */}
              <div className="absolute inset-0 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                <img
                  className="mt-5 w-full h-full object-cover scale-110 group-hover:scale-100 group-hover:mt-0 transition-transform duration-700"
                  src={service.hoverImage}
                  alt={service.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end p-8">
                  <div className="translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <h4 className="text-lg font-semibold text-white mb-3 uppercase">{service.title}</h4>
                    <span
                      className="text-red-9 uppercase font-bold text-xs tracking-widest flex items-center gap-2 group-hover:text-white transition-colors"
                    >
                      VIEW DETAILS <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Overlay src="/overlay/strategic-acquisition.png" />
    </section>
  );
}

export default ServicesSlider;

import { companyBranches } from "../data/companyBranches.js";
import TacticalText from "./filters/TacticalText.jsx";

function OurCompany() {
  return (
    <section className="grid grid-cols-2 h-screen overflow-hidden">
      <div>
        {companyBranches.map((branch) => (
          <div key={branch.id} className="relative">
            <img
              className="min-h-screen object-cover opacity-80"
              src={branch.mainImage}
              alt={branch.title}
            />
            <div className="absolute bottom-0 p-8">
              <p className="= text-gray-6 text-4xl">EST. 2015</p>
              <div className="text-8xl ">
                <TacticalText className="text-red-9">T3CK</TacticalText>
                <TacticalText className="text-gray-12">GROUP</TacticalText>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <ol className="h-screen flex flex-col justify-center ">
          {companyBranches.map((branch, i) => (
            <li key={i} className="p-8 flex h-17 overflow-hidden first:h-auto">
              {/* first:h-auto */}
              <div className="right flex gap-4 border-t border-gray-a6 pt-3">
                <div className="pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{branch.number}</span>
                    <div className="h-1 w-1 bg-red-9"></div>
                  </div>
                </div>
                <div className="grid gap-1">
                  <div className="text-xl">{branch.title}</div>
                  <p className="text-gray-a7 text-sm">{branch.subtitle}</p>
                  <p className="text-description">{branch.description}</p>
                  <img
                    className="h-40 w-auto"
                    src={branch.contentImage}
                    alt=""
                  />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default OurCompany;

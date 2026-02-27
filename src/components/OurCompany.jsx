import { companyBranches } from "../../data/companyBranches.js";
import TacticalText from "./filters/TacticalText.jsx";

function OurCompany() {
  return (
    <section className="grid grid-cols-2 min-h-screen">
      <div>
        {companyBranches.map((branch) => (
          <div className="relative">
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
      <div className="flex-center">
        <ol>
          {companyBranches.map((branch) => (
            <li key={branch.id} className="p-8 flex-center">
              <div className="right flex gap-4 border-t border-gray-a6 pt-3">
                <div className="pt-1">
                  <div className="flex items-center gap-2">
                    <span>{branch.number}</span>
                    <div className="h-2 w-2 bg-red-9"></div>
                  </div>
                </div>
                <div className="">
                  <div className="text-2xl">{branch.title}</div>
                  <p className="text-gray-a7 text-sm">{branch.subtitle}</p>
                  <p className="text-description">{branch.description}</p>
                  <img src={branch.contentImage} alt="" />
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

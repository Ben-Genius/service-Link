// src/components/ServiceCategories.tsx
import plumber from "../assets/plumber.png";
import electrician from "../assets/electrician.png";
import acRepair from "../assets/ac-repair.png";
import fridgeRepair from "../assets/fridge.png";
import carpenter from "../assets/carpenter.png";
import locksmith from "../assets/locksmith.png";
import Image from "next/image";

const categories = [
  { icon: plumber, name: "Plumber", description: "Expert plumbing services for installations, repairs, and maintenance of water systems." },
  { icon: electrician, name: "Electrician", description: "Professional electrical solutions, from wiring to troubleshooting power issues." },
  { icon: acRepair, name: "AC Repair", description: "Reliable air conditioning repairs to keep your space cool and comfortable." },
  { icon: fridgeRepair, name: "Fridge Repair", description: "Fast and efficient fridge repairs to keep your food fresh and appliances running." },
  { icon: carpenter, name: "Carpenter", description: "Quality carpentry services for furniture, fittings, and home improvements." },
  { icon: locksmith, name: "Locksmith", description: "24/7 locksmith services for lock repairs, installations, and emergency access." },
];

export const ServiceCategories = () => {
  return (
    <section className="py-8 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-[56px] leading-[1.1] font-[family-name:var(--font-poppins)]  font-semibold text-center mb-2 max-w-[38rem] mx-auto">
          Browse Services by <span className="text-[#6D32CF]">Category</span>
        </h2>
        <p className="text-gray-500 text-center mb-8 leading-[1.3] max-w-[34rem] py-4 mx-auto text-md font-[family-name:var(--font-poppins)] font-thin">
          Explore popular and niche services tailored to your needs, including 24/7 emergency support
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-[#FAFAFA] border rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 hover:bg-purple-800 group  mx-auto hover:cursor-pointer"
            >
              <div className="flex flex-col items-start">
                <div className="bg-white rounded-full p-3 mb-4 border group-hover:bg-transparent">
                  <Image src={category.icon} alt={category.name} className="w-10 h-10" />
                </div>
                <h3 className=" mb-2 text-[1.4rem] group-hover:text-white transition-colors duration-300 font-[family-name:var(--font-inter)] font-semibold">
                  {category.name}
                </h3>
                <p className="text-gray-500 group-hover:text-white transition-colors duration-300 max-w-[20rem] mx-auto font-[family-name:var(--font-inter)] font-light text-[0.93rem]">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

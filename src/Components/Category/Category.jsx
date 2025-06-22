import React from "react";
import { Paintbrush, Car, Watch, Shirt } from "lucide-react";

const categories = [
  {
    icon: <Paintbrush className="w-6 h-6 text-[#003EA4]" />,
    title: "Art",
    description: "Paintings, sculptures, and unique handmade pieces.",
  },
  {
    icon: <Car className="w-6 h-6 text-[#003EA4]" />,
    title: "Vehicles",
    description: "Cars, motorcycles, and collectibles on wheels.",
  },
  {
    icon: <Watch className="w-6 h-6 text-[#003EA4]" />,
    title: "Luxury Watches",
    description: "Timeless pieces from top global brands.",
  },
  {
    icon: <Shirt className="w-6 h-6 text-[#003EA4]" />,
    title: "Fashion",
    description: "Designer clothing, shoes, and accessories.",
  },
];

const Category = () => {
  return (
    <section id="categories" className="py-16 px-6 bg-[#F9FAFB] text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Browse by Category
        </h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          Explore our curated collection of categories to find your next great
          auction item.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white group rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 duration-200 text-left"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#E7F0FB] rounded-full mb-4 group-hover:bg-[#003EA4] transition">
                {React.cloneElement(cat.icon, {
                  className:
                    "w-6 h-6 transition text-[#003EA4] group-hover:text-white",
                })}
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-[#003EA4] transition-colors">
                {cat.title}
              </h3>
              <p className="text-sm text-gray-600">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;

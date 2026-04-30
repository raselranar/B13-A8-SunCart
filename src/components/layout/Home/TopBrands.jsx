import SectionComponent from "@/components/UI/SectionComponent";
import { Card } from "@heroui/react";
const brands = [
  {
    name: "SunShade",
    tagline: "UV Protection Experts",
    color: "bg-orange-50 border-orange-200",
  },
  {
    name: "CoralWave",
    tagline: "Beach Fashion Leaders",
    color: "bg-amber-50 border-amber-200",
  },
  {
    name: "GlowGuard",
    tagline: "Skincare Specialists",
    color: "bg-rose-50 border-rose-200",
  },
  {
    name: "HydroPlus",
    tagline: "Hydration Innovation",
    color: "bg-sky-50 border-sky-200",
  },
];

const TopBrands = () => {
  return (
    <SectionComponent
      topTitle="Trusted Partners"
      title="🏆 Top Brands"
      description="We carry only the best summer brands">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {brands.map((item, id) => {
          return (
            <Card key={id} className={`border-2 items-center ${item.color}`}>
              <div className="font-bold text-2xl text-white bg-linear-to-b from-red-400 to-red-300 px-6 py-4 rounded-2xl">
                {item.name.charAt(0).toUpperCase()}
              </div>
              <Card.Header className="text-center">
                <Card.Title className="text-lg mb-1">{item.name}</Card.Title>
                <Card.Description>{item.tagline}</Card.Description>
              </Card.Header>
            </Card>
          );
        })}
      </div>
    </SectionComponent>
  );
};
export default TopBrands;

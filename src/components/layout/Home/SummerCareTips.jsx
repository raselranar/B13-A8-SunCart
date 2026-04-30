import SectionComponent from "@/components/UI/SectionComponent";
import { Card } from "@heroui/react";
import { LuDroplets, LuShield, LuThermometer, LuZap } from "react-icons/lu";

const careTips = [
  {
    icon: LuShield,
    title: "Apply Sunscreen Daily",
    desc: "Use SPF 30+ at least 15 minutes before sun exposure and reapply every 2 hours.",
    color: "text-orange-500 bg-orange-50",
  },
  {
    icon: LuDroplets,
    title: "Stay Hydrated",
    desc: "Drink at least 8–10 glasses of water daily in summer. Carry a water bottle everywhere.",
    color: "text-sky-500 bg-sky-50",
  },
  {
    icon: LuThermometer,
    title: "Avoid Peak Hours",
    desc: "Stay indoors between 10 AM – 4 PM when UV rays are the strongest.",
    color: "text-rose-500 bg-rose-50",
  },
  {
    icon: LuZap,
    title: "Wear Light Fabrics",
    desc: "Choose breathable, loose-fitting cotton or linen clothing to stay cool and comfortable.",
    color: "text-amber-500 bg-amber-50",
  },
];

const SummerCareTips = () => {
  return (
    <SectionComponent
      topTitle="Stay Safe"
      title="☀️ Summer Care Tips"
      description="Simple habits to keep you healthy and glowing this summer">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {careTips.map((item, id) => {
          const Icon = item.icon;
          return (
            <Card key={id} className="items-center">
              <Icon className={`${item.color} `} size={40} />
              <Card.Header className="text-center">
                <Card.Title>{item.title}</Card.Title>
                <Card.Description>{item.desc}</Card.Description>
              </Card.Header>
            </Card>
          );
        })}
      </div>
    </SectionComponent>
  );
};
export default SummerCareTips;

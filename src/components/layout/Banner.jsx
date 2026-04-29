import { ChevronLeft, ChevronRight } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="max-w-400 relative w-full min-h-[70vh] mx-auto flex items-center justify-center">
      <div className="ab">
        <Image
          src="/slide1.jpg"
          className="object-cover"
          fill={true}
          alt="a green background"
        />
      </div>
      <div className="absolute bg-backdrop w-full h-full flex  items-center ">
        <div className="text-white container mx-auto flex flex-col gap-4">
          <h2 className="text-base uppercase text-yellow-400">Summer Sale</h2>
          <h3 className="text-6xl font-bold">50% OFF</h3>
          <p className="text-lg">
            Shop the hottest summer deals on sunglasses, outfits & more!
          </p>
          <Button className="rounded-lg" size="lg">
            Explore
          </Button>
        </div>
        {/* arrows */}
        <div className="rounded-full p-3 text-white ml-3 absolute bg-white/20">
          <ChevronLeft />
        </div>
        <div className="rounded-full p-3 text-white mr-3 right-0 absolute bg-white/20">
          <ChevronRight />
        </div>
      </div>
    </section>
  );
};
export default Banner;

import Banner from "@/components/layout/Home/Banner";
import PopularProducts from "@/components/layout/Home/PopularProducts";
import SummerCareTips from "@/components/layout/Home/SummerCareTips";
import TopBrands from "@/components/layout/Home/TopBrands";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <PopularProducts />
      <SummerCareTips />
      <TopBrands />
    </>
  );
}

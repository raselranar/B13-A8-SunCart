import { getProductsData } from "@/lib/fetchProducts";
import ProductCard from "../../UI/ProductCard";
import SectionComponent from "../../UI/SectionComponent";
import { Button } from "@heroui/react";
import Link from "next/link";

const PopularProducts = async () => {
  const allProducts = await getProductsData();
  const topProducts = allProducts.slice(0, 3);
  console.log(topProducts.length);
  return (
    <SectionComponent
      topTitle="Trending Now"
      title="🔥 Popular Products"
      description="Our top picks for this summer season">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link href="/products">
          <Button
            variant="outline"
            className="text-accent border-2 border-accent hover:bg-accent hover:text-white"
            size="lg">
            View All Products
          </Button>
        </Link>
      </div>
    </SectionComponent>
  );
};
export default PopularProducts;

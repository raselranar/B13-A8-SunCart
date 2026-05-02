import { Card, CloseButton, Button, Chip } from "@heroui/react";
import Link from "next/link";
import { ArrowLeft, CircleCheck, StarFill } from "@gravity-ui/icons";
import Image from "next/image";
import { LuCircleCheckBig, LuPackage } from "react-icons/lu";

const getProductById = async (productId) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  try {
    const res = await fetch(`${baseUrl}/products.json`);
    if (!res.ok) throw new Error("Failed to fetch");
    const AllProducts = await res.json();
    const product = AllProducts.find(
      (item) => Number(item.id) === Number(productId),
    );
    return product;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};
export async function generateMetadata({ params }) {
  const { productId } = await params;
  const product = await getProductById(productId);

  return {
    title: product.name,
    description: product.description,
  };
}

const ProductDetails = async ({ params }) => {
  const { productId } = await params;
  const product = await getProductById(productId);
  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-gray-700 mb-2 text-5xl">Product not found</h2>
          <Link
            href="/products"
            className="text-accent text-2xl  hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const {
    name,
    brand,
    price,
    originalPrice,
    rating,
    image,
    category,
    stock,
    description,
    features,
  } = product;

  return (
    <section className="bg-background py-16">
      {/* container */}
      <div className="container mx-auto px-4">
        <Card className="w-full relative">
          <Link
            href="/products"
            className="flex gap-2 items-center text-gray-500 hover:text-accent">
            <ArrowLeft /> Back to Products
          </Link>
          <div className="flex items-stretch flex-col xl:flex-row">
            <div className="relative">
              {/* top overlay */}
              <div className="absolute px-2 lg:px-0 top-3 flex justify-between w-full">
                <Chip className="bg-accent text-base text-white">
                  -{Math.floor(((originalPrice - price) / originalPrice) * 100)}
                  % OFF
                </Chip>
              </div>
              <Image
                src={image}
                className="h-[calc(100%+16px)] w-full object-cover xl:-ml-4 xl:-mb-4 rounded-xl xl:rounded-r-none xl:rounded-l-3xl"
                width={400}
                height={400}
                alt={name}
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 mt-8">
              {/* Header */}
              <Card.Header className="text-white px-4 flex flex-col gap-4">
                <Chip className="text-accent uppercase text-xs tracking-widest font-semibold w-fit">
                  {brand}
                </Chip>
                <p className="text-gray-500">{category}</p>
                <Card.Title className="font-semibold tracking-wide text-black/70  text-2xl/snug sm:text-3xl/">
                  {name}
                </Card.Title>
                {/* ratings */}
                <div className="flex flex-1 gap-4 items-center">
                  <div className="flex gap-1">
                    <StarFill className="text-yellow-400" />
                    <StarFill className="text-yellow-400" />
                    <StarFill className="text-yellow-400" />
                    <StarFill className="text-yellow-400" />
                    <StarFill className="text-gray-300" />
                  </div>
                  <div className="text-xs text-gray-500 font-semibold">
                    {rating}
                  </div>
                </div>
                {/* price */}
                <div className="flex gap-2 items-center">
                  <p className="text-accent text-3xl font-bold">${price}</p>
                  <p className="text-gray-400 text-xl line-through">
                    ${originalPrice}
                  </p>
                </div>
                <Card.Description className="text-gray-500 text-base">
                  {description}
                </Card.Description>
              </Card.Header>
              <Card.Footer className="px-4 flex mb-2 flex-col items-start gap-2">
                {/* features */}
                <ul className="flex flex-col gap-1">
                  <li>
                    <h3 className="font-bold text-lg text-gray-800">
                      Key Features
                    </h3>
                  </li>
                  {features.map((item, id) => (
                    <li
                      key={id}
                      className="text-sm text-gray-500 flex gap-2 items-center ">
                      <LuCircleCheckBig size={16} className="text-green-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                {/* stock  */}
                <div className="flex gap-1 items-center">
                  <LuPackage />
                  <span className="text-green-600 text-sm">
                    In Stock ({stock} left)
                  </span>
                </div>
                {/* buttons */}
                <div className="mt-2 flex gap-4 w-full">
                  <Button className="" size="lg" fullWidth>
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-accent border-2 text-accent hover:opacity-70"
                    fullWidth>
                    Buy Now
                  </Button>
                </div>
              </Card.Footer>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProductDetails;

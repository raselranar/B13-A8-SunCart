import ProductCard from "@/components/UI/ProductCard";

const getProductsData = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  try {
    const res = await fetch(`${baseUrl}/products.json`);
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};

const ProductsPage = async () => {
  const allProducts = await getProductsData();

  return (
    <section className="bg-background">
      {/* banner */}
      <div className="bg-linear-to-r from-red-300 to-red-200 mb-12">
        <div className="max-w-md  mx-auto px-6 py-20">
          <h2 className="text-4xl text-white font-bold">Summer Products 🌊</h2>
          <p className="text-white mt-4">
            Browse our full collection of summer essentials
          </p>
        </div>
      </div>
      {/* products card */}
      <div className="container mx-auto py-12">
        <p className="mb-4 text-gray-500 text-sm">
          Showing <span className="text-accent">{allProducts.length}</span>{" "}
          products
        </p>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductsPage;

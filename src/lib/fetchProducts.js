export const getProductsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products.json`);
  return res.json();
};

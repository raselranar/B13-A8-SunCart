export const getProductsData = async () => {
  try {
    const res = await fetch(`${baseUrl}/products.json`);
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};

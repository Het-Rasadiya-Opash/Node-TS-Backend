import axios from "axios";

export const getProducts = async ({
  page = 1,
  limit = 15,
  search = "",
  company = "",
  featured = "",
  sort = "",
}) => {
  const params = new URLSearchParams();

  params.append("page", page.toString());
  params.append("limit", limit.toString());
  if (search) params.append("name", search);
  if (company) params.append("company", company);
  if (featured) params.append("featured", featured);
  if (sort) params.append("sort", sort);

  const res = await axios.get(
    `http://localhost:3000/products/search?${params.toString()}`,
  );
  return res.data.data;
};

export const createProduct = async (productData: {
  name: string;
  company: string;
  price: string;
  featured?: boolean;
  rating?: string;
}) => {
  const res = await axios.post(
    "http://localhost:3000/products/create",
    productData,
  );
  return res.data;
};

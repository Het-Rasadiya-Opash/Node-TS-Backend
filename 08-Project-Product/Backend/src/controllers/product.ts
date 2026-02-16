import type { Request, Response } from "express";
import Product from "../models/product.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import type { SearchQuery } from "../types/type.js";

export const searchProduct = asyncHandler(
  async (req: Request<{}, {}, {}, SearchQuery>, res: Response) => {
    try {
      const { company, name, featured, sort, select } = req.query;

      const queryObject: any = {};

      if (company) queryObject.company = company;
      if (featured) queryObject.featured = featured;
      if (name) queryObject.name = { $regex: name, $options: "i" };

      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 15;
      const skip = (page - 1) * limit;

      let result = Product.find(queryObject);

      if (sort) {
        result = result.sort(sort.split(",").join(" "));
      }

      if (select) {
        result = result.select(select.split(",").join(" "));
      }

      const numOfProducts = await Product.countDocuments(queryObject);

      const products = await result.skip(skip).limit(limit);

      res.status(200).json(
        new ApiResponse(
          200,
          {
            products,
            numOfProducts,
            page,
          },
          "Seatch Product Fetched..",
        ),
      );
    } catch (error) {
      throw new ApiError(400, "Error in Search Product");
    }
  },
);

export const createProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, company, price, featured, rating } = req.body;

    if (!name || !price) {
      throw new ApiError(400, "Name and Price are required");
    }

    const product = await Product.create({
      name,
      company,
      price,
      featured,
      rating,
    });

    if (!product) {
      throw new ApiError(500, "Failed to create product in database");
    }

    return res
      .status(201)
      .json(new ApiResponse(201, product, "Product Created Successfully"));
  },
);

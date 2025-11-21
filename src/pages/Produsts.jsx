import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../componets/ProductCard";
import useProducts from "../hook/UseProoduct";
import Loading from "../componets/Loading";

const Produsts = () => {
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchedProducts = term
    ? products.filter((product) =>
        product.name.toLocaleLowerCase().includes(term)
      )
    : products;

  return (
    <div>
      <div className="flex justify-between py-5 items-center">
        <h2 className="text-3xl font-semibold">
          Featured Product{" "}
          <span className="text-sm text-gray-500">
            ({searchedProducts.length}) Products found
          </span>{" "}
        </h2>
        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="search product"
          />
        </label>
      </div>

      {loading ? (
        <Loading  count={16} ></Loading>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {searchedProducts.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Produsts;

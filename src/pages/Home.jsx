import React from "react";
import { Link } from "react-router";
import ProductCard from "../componets/ProductCard";
import useProducts from "../hook/UseProoduct";

const Home = () => {
  const { products, loading, error } = useProducts();
  const featureProducts = products.slice(0, 6);

  return (
    <div>
      <div className="flex justify-between py-5 items-center">
        <h2 className="text-3xl font-semibold">Featured Product</h2>
        <Link className="btn btn-outline " to="/products">
          See All Product
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featureProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Home;

"use client";

import React, { useEffect, useState } from "react";
import { Dumbbell, Plane, Headphones, House, Smartphone, Shirt, ShoppingCart } from "lucide-react";
import { client } from "../src/sanity/lib/client"; // putanja do sanity.js fajla
import { urlFor } from "../src/sanity/lib/image"; // putanja do sanity.js fajla

type Product = {
    _id: string;
    name: string;
    slug: { current: string };
    description: string;
    price: number;
    image: {asset: {url: string}}
    rating: number;
    category: string;
}



const ShopByCategory = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    client
    .fetch(`*[_type == 'product'] | order(_createdAt desc){name, slug, description, price, image, rating, category}`)
    .then((data) => setProducts(data))
    .catch(console.error);
  }, [])

  return (
    <div>
      <div className="mt-20 mb-10">
        {/* Header */}
        <div className="grid grid-cols-1 justify-items-center items-center mb-10">
          <h1 className="text-center font-bold text-5xl mb-5">Shop by Category</h1>
          <p className="text-lg font-semibold text-gray-400">
            Browse through our carefully curated categories to find exactly what you're looking for
          </p>
        </div>

        {/* Categories (hardcoded) */}
        <div className="grid grid-cols-3 justify-items-center items-center">
          <div className="mt-8 flex flex-col justify-center items-center w-[300px] p-2 hover:scale-120 duration-500 hover:shadow-2xl">
            <h1 className="p-6 bg-gradient-to-r from-blue-700 to-blue-400 rounded-xl text-white font-bold text-center">
              <Smartphone size={42} />
            </h1>
            <h1 className="font-bold mt-3 text-center">Electronics</h1>
            <p className="text-gray-500 text-center">120+ items</p>
          </div>

          <div className="mt-8 flex flex-col justify-center items-center w-[300px] p-2 hover:scale-120 duration-500 hover:shadow-2xl">
            <h1 className="p-6 bg-gradient-to-r from-purple-700 to-pink-400 rounded-xl text-white font-bold text-center">
              <Headphones size={42} />
            </h1>
            <h1 className="font-bold mt-3 text-center">Audio</h1>
            <p className="text-gray-500 text-center">85+ items</p>
          </div>

          <div className="mt-8 flex flex-col justify-center items-center w-[300px] p-2 hover:scale-120 duration-500 hover:shadow-2xl">
            <h1 className="p-6 bg-gradient-to-r from-green-600 to-green-400 rounded-xl text-white font-bold text-center">
              <House size={42} />
            </h1>
            <h1 className="font-bold mt-3 text-center">Home & Living</h1>
            <p className="text-gray-500 text-center">200+ items</p>
          </div>

          <div className="mt-20 flex flex-col justify-center items-center w-[300px] p-2 hover:scale-110 duration-500 hover:shadow-2xl">
            <h1 className="p-6 bg-gradient-to-l from-orange-400 to-orange-700 rounded-xl text-white font-bold text-center">
              <Dumbbell size={42} />
            </h1>
            <h1 className="font-bold mt-3 text-center">Sports & Fitness</h1>
            <p className="text-gray-500 text-center">150+ items</p>
          </div>

          <div className="mt-20 flex flex-col justify-center items-center w-[300px] p-2 hover:scale-110 duration-500 hover:shadow-2xl">
            <h1 className="p-6 bg-gradient-to-l from-purple-500 to-purple-700 rounded-xl text-white font-bold text-center">
              <Plane size={42} />
            </h1>
            <h1 className="font-bold mt-3 text-center">Travel</h1>
            <p className="text-gray-500 text-center">90+ items</p>
          </div>

          <div className="mt-20 flex flex-col justify-center items-center w-[300px] p-2 hover:scale-110 duration-500 hover:shadow-2xl">
            <h1 className="p-6 bg-gradient-to-l from-pink-500 to-pink-700 rounded-xl text-white font-bold text-center">
              <Shirt size={42} />
            </h1>
            <h1 className="font-bold mt-3 text-center">Fashion</h1>
            <p className="text-gray-500 text-center">300+ items</p>
          </div>
        </div>

        {/* Featured Products */}
        <div className="grid grid-cols-1 justify-items-center items-center mt-20">
          <div>
            <h1 className="text-4xl text-purple-800 font-bold text-center mb-3">
              Featured Products
            </h1>
            <p className="text-gray-400">
              Discover our handpicked selection of premium products designed to elevate your lifestyle
            </p>
          </div>
        </div>

        {/* Products from Sanity */}
        <div className="grid grid-cols-3 justify-items-center items-center mt-10 gap-10 p-5">
          {products.map((product) => (
            <div key={product.slug?.current} className="flex flex-col justify-items-center hover:scale-105 duration-500 hover:shadow-2xl p-5">
                {product.image && (
                    <img src={urlFor(product.image).url()} alt="product image" className="rounded-xl w-[300px] h-[300px]"/>
                )}
                <div>
                    <div className="flex flex-row justify-between mt-3">
                        <p className="text-purple-700 border border-purple-300 rounded-full font-bold p-1 text-sm">{product.category}</p>
                        <p className="font-semibold">⭐{product.rating}</p>
                    </div>
                    <h1 className="text-xl font-semibold mt-3">{product.name}</h1>
                    <p className="text-gray-500 mt-2">{product.description}</p>
                    <p className="font-bold text-3xl bg-gradient-to-r from-purple-700 via-purple-500 to-blue-700 text-transparent bg-clip-text mt-2 ">€{product.price}</p>
                    <button className="bg-gradient-to-r from-purple-700 to-blue-700 text-white font-bold w-full rounded-full p-2 mt-4 hover:bg-gradient-to-r hover:from-purple-800 hover:to-blue-800">🛒 Add to Cart</button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;

"use client"

import { useState } from 'react';
import Image from "next/image";
import "./Product.module.css"

const Product = () => {
  const [size, setSize] = useState(0); // State for size selection
  const [quantity, setQuantity] = useState(1); // State for quantity

  const noodles = {
    id: 1,
    img: "/1.jpg",
    name: "เตี๋ยว",
    price: [19.9, 23.9, 27.9],
    desc: " หรอยแรง"
  };

  const handleClick = () => {
    // Handle click
  };

  return (
    <div className="flex justify-center mt-18">
      
        <div className="mt-auto">
          <Image src={noodles.img} objectFit="contain" width={800} height={800} alt="" />
        </div>
      

      <div className="m-48 flex flex-col items-center">
        <h1 className="text-2xl font-bold">{noodles.name}</h1>
        <span className="text-xl">${noodles.price[size]}</span>
        <p className="text-lg">{noodles.desc}</p>
        <h3 className="text-lg font-semibold">Choose the size</h3>
        <div className="flex gap-4">
          <div className="flex flex-col items-center" onClick={() => setSize(0)}>
            <img src="/1.jpg" className="w-20 h-20" alt="" />
            <span className="text-sm">Small</span>
          </div>
          <div className="flex flex-col items-center" onClick={() => setSize(1)}>
            <img src="/2.jpg" className="w-20 h-20" alt="" />
            <span className="text-sm">Medium</span>
          </div>
          <div className="flex flex-col items-center" onClick={() => setSize(2)}>
            <img src="/3.jpg" className="w-20 h-20" alt="" />
            <span className="text-sm">Large</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold">Choose additional ingredients</h3>
        <div className="flex flex-col gap-2">
          {/* Add your checkbox inputs here */}
        </div>
        <div className="flex items-center gap-2">
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            className="w-20 px-2 py-1 border border-gray-300 rounded"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

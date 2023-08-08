import React, { useEffect, useState } from "react";
import DesignCard from "./DesignCard";


const AllProduct = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("card.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div>
      <section class="mb-32 text-center px-32 mt-40">
        <h2 class="mb-20 text-6xl text-center font-bold">Our Product</h2>
        <div class="grid lg:grid-cols-4 gap-20 gap-y-20 mx-auto mt-40">  
          {
            products.map(product=>
            <DesignCard
            key={product.id}
            product={product}
            ></DesignCard>
            )
          }
        </div>
      </section>
    </div>
  );
};

export default AllProduct;

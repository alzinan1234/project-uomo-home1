import React from "react";
import women1 from "../../assets/collection_grid_1.jpg";
import kids from "../../assets/collection_grid_3.jpg";
import men1 from "../../assets/collection_grid_2.jpg";

const ProductItem = () => {
  return (
    <div className="max-w-[1100px] mx-auto">
      {/* card start */}
      <div
        style={{
          backgroundImage: `url(${women1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="card border-2 w-[50%] h-[600px] relative"
      >
        <div className="absolute bottom-1 ">
          <p className="">HOT LIST</p>
          <h2 className="text-2xl">WOMEN COLLECTION</h2>
          <p className="">HOT LIST</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

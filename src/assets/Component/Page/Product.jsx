import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import Breadcrum from "../Breadcrum/Breadcrum";
import ProDisplay from "../ProductDispaly/ProDisplay";
import { ShopContext } from "../Context/ShopContext";
import Description from "../DescriptionBox/Description";
import Related from "../RelatedProduct/Related";

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id == Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <ProDisplay product={product}/>
      <Description/>
      <Related/>
    </div>
  );
}

export default Product;

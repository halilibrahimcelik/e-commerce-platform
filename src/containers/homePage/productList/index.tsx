import {
  getDefaultProducts,
  getProducts,
  resetProducts,
} from "@/store/global-slice";
import { Chip } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import { useAppDispatch } from "@/store/store";
type Props = {};

const ProductList = (props: Props) => {
  const productList = useSelector(getProducts);
  const defaultProductList = useSelector(getDefaultProducts);
  const dispatch = useAppDispatch();

  const handleReset = () => {
    dispatch(resetProducts({ products: defaultProductList }));
  };

  return (
    <main className="py-10">
      <div className="flex items-end justify-between">
        <h1 className="text-xl font-medium ">Searched Products</h1>
        <Chip
          onClick={handleReset}
          color="primary"
          icon={<ClearIcon />}
          label="Clear Filter"
          clickable
          variant="outlined"
        />
      </div>
      <ul>
        {productList.map((product) => {
          return <li key={product.id}>{product.name}</li>;
        })}
      </ul>
    </main>
  );
};

export default ProductList;

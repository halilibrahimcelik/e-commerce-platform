import {
  getDefaultProducts,
  getIsSearched,
  getProducts,
  resetProducts,
} from "@/store/global-slice";
import { Chip } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import { useAppDispatch } from "@/store/store";
import { motion, AnimatePresence } from "framer-motion";
type Props = {};

const ProductList = (props: Props) => {
  const productList = useSelector(getProducts);
  const isSearched = useSelector(getIsSearched);
  const defaultProductList = useSelector(getDefaultProducts);
  const dispatch = useAppDispatch();

  const handleReset = () => {
    dispatch(resetProducts({ products: defaultProductList }));
  };

  return (
    <main className="py-10 flex flex-col gap-5">
      <div className="h-10 relative">
        <AnimatePresence initial={isSearched}>
          {isSearched && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-end justify-between  absolute top-0 left-0 right-0 bottom-0 "
            >
              <h1 className="text-xl font-medium ">Searched Products</h1>
              <Chip
                onClick={handleReset}
                color="primary"
                icon={<ClearIcon />}
                label="Clear Filter"
                clickable
                variant="outlined"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence initial={!isSearched}>
          {!isSearched && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-xl font-medium  text-center">Products</h1>
            </motion.div>
          )}
        </AnimatePresence>
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

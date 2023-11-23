import {
  createSession,
  fetchProducts,
  getLoading,
  getProducts,
  getSession,
} from "@/store/global-slice";
import { useEffect, useMemo } from "react";
import { useAppDispatch } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";
import { KeyboardReturn } from "@mui/icons-material";
import { error } from "console";
import Wrapper from "@/components/wrapper";
type Props = {};

const HomePageContainer = (props: Props) => {
  const dispatch = useAppDispatch();
  const session = useSelector(getSession);
  const loading = useSelector(getLoading);
  const productList = useSelector(getProducts);
  const memoizedThunks = useMemo(() => {
    return () => {
      dispatch(createSession())
        .then(() => dispatch(fetchProducts()))
        .catch((error) => console.error("error chaining async thunks", error));
    };
  }, [dispatch]);

  useEffect(() => {
    memoizedThunks();
  }, [memoizedThunks]);
  return <Wrapper component="section">HomePageContainer</Wrapper>;
};

export default HomePageContainer;
